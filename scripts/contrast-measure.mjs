// Measured contrast for text over images (home hero, photo tags, dark nav over the hero).
// Hides text, screenshots, samples the background under each text box and compares the text
// color against the 98th-percentile brightest background pixel (worst case, not average).
import { chromium } from 'playwright';
import sharp from 'sharp';
import { homedir } from 'node:os';
import { existsSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:4322';
const SHELL = `${homedir()}/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const b = await chromium.launch(existsSync(SHELL) ? { executablePath: SHELL } : {});
const L = (r, g, bl) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(bl); };
const SEL = [
  ['hero eyebrow', '.hero__eyebrow', 4.5],
  ['hero H1 (large)', '.hero__title span', 3],
  ['hero sub', '.hero__sub', 4.5],
  ['hero ghost button text', '.hero .btn--ghost', 4.5],
  ['nav links over hero', '.site-header--over-dark .nav-link', 4.5],
  ['MENU button over hero', '.mnav-btn', 4.5],
  ['hero readout', '.hero__readout .readout__item', 4.5],
];
let fails = 0;
for (const w of [1440, 375]) {
  const p = await b.newPage({ viewport: { width: w, height: w < 768 ? 812 : 900 } });
  await p.goto(BASE + '/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1800);
  for (const [name, sel, min] of SEL) {
    const boxes = await p.$$eval(sel, (els) => els.filter((e) => e.offsetParent !== null).slice(0, 4).map((e) => {
      const r = e.getBoundingClientRect();
      return { x: r.x, y: r.y, w: r.width, h: r.height, color: getComputedStyle(e).color };
    }));
    if (!boxes.length) continue;
    await p.addStyleTag({ content: `${sel}, ${sel} * { color: transparent !important; border-color: transparent !important; text-shadow: none !important; transition: none !important; } ${sel} svg { opacity: 0 }` });
    const shot = await p.screenshot();
    const img = sharp(shot);
    const { width, height } = await img.metadata();
    const raw = await img.raw().toBuffer();
    let worst = Infinity;
    let worstBg = '';
    for (const bx of boxes) {
      const lums = [];
      for (let y = Math.max(0, Math.floor(bx.y)); y < Math.min(height, bx.y + bx.h); y += 2)
        for (let x = Math.max(0, Math.floor(bx.x)); x < Math.min(width, bx.x + bx.w); x += 2) {
          const i = (y * width + x) * 3;
          lums.push(L(raw[i], raw[i + 1], raw[i + 2]));
        }
      lums.sort((a, c) => a - c);
      const bg = lums[Math.floor(lums.length * 0.98)] ?? 0;
      const [r, g, bl] = bx.color.match(/\d+/g).map(Number);
      const fg = L(r, g, bl);
      const ratio = (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05);
      if (ratio < worst) { worst = ratio; worstBg = bg.toFixed(3); }
    }
    const ok = worst >= min;
    if (!ok) fails++;
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${worst.toFixed(2).padStart(5)}:1 (min ${min})  @${w}  ${name}  [bg L98=${worstBg}]`);
    await p.reload({ waitUntil: 'networkidle' });
    await p.waitForTimeout(1500);
  }
  await p.close();
}
await b.close();
console.log(`measured contrast: ${fails} failing`);
process.exit(fails ? 1 : 0);
