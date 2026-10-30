// The 13 service icons. Hand-drawn 64x64 line art, 2px stroke.
// .p = primary stroke (purple), .s = secondary stroke (violet). Idle loops are CSS keyframes in
// src/styles/icons.css and only run inside an element with the .icons-live class.
// Every loop's 0% and 100% frames are the resting pose, so reduced motion stops on a clean frame.
import type { IconName } from '../../data/services';

function gear(cx: number, cy: number, r: number, teeth: number, depth = 3.2): string {
  const pts: string[] = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const seg = [
      [r - depth, a - step * 0.5],
      [r - depth, a - step * 0.28],
      [r, a - step * 0.18],
      [r, a + step * 0.18],
      [r - depth, a + step * 0.28],
    ];
    for (const [rad, ang] of seg) pts.push(`${(cx + rad * Math.cos(ang)).toFixed(1)} ${(cy + rad * Math.sin(ang)).toFixed(1)}`);
  }
  return `M${pts.join('L')}Z`;
}

const tread = Array.from({ length: 12 }, (_, i) => {
  const a = (i * Math.PI) / 6;
  const x1 = 32 + 19 * Math.cos(a), y1 = 32 + 19 * Math.sin(a);
  const x2 = 32 + 24 * Math.cos(a + 0.12), y2 = 32 + 24 * Math.sin(a + 0.12);
  return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
}).join('');

const rotorHoles = Array.from({ length: 6 }, (_, i) => {
  const a = (i * Math.PI) / 3 + 0.3;
  return `<circle cx="${(32 + 14 * Math.cos(a)).toFixed(1)}" cy="${(32 + 14 * Math.sin(a)).toFixed(1)}" r="1.6"/>`;
}).join('');

const lugs = Array.from({ length: 5 }, (_, i) => {
  const a = (i * Math.PI * 2) / 5 - Math.PI / 2;
  return `<circle cx="${(32 + 4.2 * Math.cos(a)).toFixed(1)}" cy="${(32 + 4.2 * Math.sin(a)).toFixed(1)}" r="0.9"/>`;
}).join('');

const fanBlades = Array.from({ length: 4 }, (_, i) =>
  `<path transform="rotate(${i * 90} 32 32)" d="M32 28C30 20 33 13 40 11C44 17 41 24 35 29"/>`,
).join('');

export const ICONS: Record<IconName, string> = {
  inspection:
    `<rect class="p" x="14" y="12" width="36" height="44" rx="3"/><rect class="p" x="24" y="8" width="16" height="8" rx="2"/>` +
    `<path class="s" d="M21 25h14M21 32h9"/><path class="s ic-check" pathLength="24" d="M27 44l5 5 11-13"/>`,
  oil:
    `<path class="p" d="M10 34h26v16H12a2 2 0 0 1-2-2zM36 39l13-8 2 3-15 9M16 34v-5h10v5"/>` +
    `<path class="s ic-drop" d="M51 38c-2 3-3 5-3 6.5a3 3 0 0 0 6 0c0-1.5-1-3.5-3-6.5z"/>`,
  brake:
    `<g class="ic-spin12"><circle class="p" cx="32" cy="32" r="21"/><circle class="p" cx="32" cy="32" r="8"/><g class="s">${rotorHoles}${lugs}</g></g>` +
    `<path class="p" d="M43 10a23 23 0 0 1 12 13l-7 3a16 16 0 0 0-8-9z"/>`,
  steering:
    `<g class="ic-rock"><circle class="p" cx="32" cy="32" r="22"/><circle class="s" cx="32" cy="32" r="6"/>` +
    `<path class="p" d="M10.5 30h15.5M38 30h15.5M32 38v16"/></g>`,
  tire:
    `<g class="ic-spin8"><circle class="p" cx="32" cy="32" r="24"/><circle class="s" cx="32" cy="32" r="12"/>` +
    `<path class="p" d="${tread}"/><path class="s" d="M32 20v24M20 32h24"/></g>`,
  diagnostic:
    `<rect class="p" x="8" y="12" width="48" height="32" rx="3"/><path class="p" d="M24 52h16M32 44v8"/>` +
    `<path class="s ic-trace" pathLength="70" d="M12 30h8l4-9 6 17 5-12 3 4h14"/>`,
  engine:
    `<path class="p" d="M16 9h32M20 9v34M44 9v34"/><circle class="s" cx="32" cy="54" r="4"/>` +
    `<g class="ic-piston"><rect class="p" x="22" y="22" width="20" height="12" rx="1.5"/><path class="s" d="M22 26h20M32 34l-1 15"/></g>`,
  transmission:
    `<g class="ic-gear-a"><path class="p" d="${gear(25, 28, 14, 10)}"/><circle class="s" cx="25" cy="28" r="4"/></g>` +
    `<g class="ic-gear-b"><path class="s" d="${gear(45, 44, 10, 8, 3)}"/><circle class="p" cx="45" cy="44" r="3"/></g>`,
  belt:
    `<circle class="p" cx="20" cy="32" r="10"/><circle class="p" cx="46" cy="32" r="7"/><circle class="s" cx="20" cy="32" r="2.5"/><circle class="s" cx="46" cy="32" r="2"/>` +
    `<path class="s ic-belt" d="M20 20L46 23A9 9 0 0 1 46 41L20 44A12 12 0 0 1 20 20Z"/>`,
  fuel:
    `<path class="p" d="M10 46a22 22 0 0 1 44 0"/><path class="p" d="M14 36l3 2M32 24v4M50 36l-3 2M10 52h44"/>` +
    `<g class="ic-needle"><path class="s" d="M32 46V29"/></g><circle class="p" cx="32" cy="46" r="3"/>`,
  fan:
    `<circle class="s" cx="32" cy="32" r="24"/><g class="p ic-spin3">${fanBlades}<circle cx="32" cy="32" r="4"/></g>`,
  battery:
    `<rect class="p" x="10" y="20" width="44" height="30" rx="3"/><path class="p" d="M16 20v-5h8v5M40 20v-5h8v5"/>` +
    `<path class="s" d="M17 29h6M20 26v6M41 29h6"/><rect class="s ic-charge" x="16" y="38" width="32" height="6" rx="1"/>`,
  exhaust:
    `<path class="p" d="M6 31h22v18H6M28 37h10v6H28"/><path class="s" d="M10 36h14M10 44h14"/>` +
    `<circle class="s ic-puff ic-puff-a" cx="46" cy="40" r="3.5"/><circle class="s ic-puff ic-puff-b" cx="55" cy="34" r="4.5"/>`,
};

export function iconSvg(name: IconName, opts: { size?: number; title?: string; className?: string } = {}): string {
  const { size = 64, title, className = '' } = opts;
  const a11y = title ? `role="img" aria-label="${title}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="ic ic--${name} ${className}" viewBox="0 0 64 64" width="${size}" height="${size}" ${a11y}>${ICONS[name]}</svg>`;
}
