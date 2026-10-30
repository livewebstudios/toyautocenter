// Build-time OG images (1200x630): grape ground, Harness traces, the key mark, the page title in
// Big Shoulders and "Blauvelt, NY · Route 303" in mono. satori -> SVG -> sharp -> PNG.
import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { ogEntries } from '../../lib/og-registry';
import { KEY_VIEWBOX, KEY_BADGE, KEY_RING, KEY_KEY } from '../../components/keyPaths';
import { tok, rgbOf } from '../../lib/tokens';

const STEEL = rgbOf('tac-steel');
const AMBER = rgbOf('tac-amber');

const require = createRequire(import.meta.url);
const font = (p: string) => readFileSync(require.resolve(p));
const fonts = [
  { name: 'Big Shoulders Display', data: font('@fontsource/big-shoulders-display/files/big-shoulders-display-latin-800-normal.woff'), weight: 800 as const, style: 'normal' as const },
  { name: 'JetBrains Mono', data: font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
];

export function getStaticPaths() {
  return ogEntries().map((e) => ({ params: { key: e.key }, props: e }));
}

function traces(seed: number) {
  let a = seed >>> 0;
  const r = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  let out = '';
  for (let i = 0; i < 16; i++) {
    let x = -20 + r() * 900;
    let y = 30 + r() * 570;
    let d = `M${x.toFixed(0)} ${y.toFixed(0)}`;
    for (let s = 0; s < 5; s++) {
      if (s % 2 === 0) x += 120 + r() * 300;
      else {
        const j = (24 + r() * 36) * (r() < 0.5 ? -1 : 1);
        x += Math.abs(j);
        y += j;
      }
      d += `L${x.toFixed(0)} ${y.toFixed(0)}`;
    }
    out += `<path d="${d}" fill="none" stroke="rgba(${STEEL},${(0.1 + r() * 0.1).toFixed(2)})" stroke-width="1.5"/><circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="4" fill="none" stroke="rgba(${STEEL},0.3)" stroke-width="1.5"/>`;
    if (i % 4 === 0) out += `<path d="${d}" fill="none" stroke="rgba(${AMBER},0.5)" stroke-width="2" stroke-dasharray="40 900"/>`;
  }
  return out;
}

export const GET: APIRoute = async ({ props }) => {
  const { key, title, kicker } = props as { key: string; title: string; kicker: string };
  const seed = [...key].reduce((s, c) => (s * 31 + c.charCodeAt(0)) >>> 0, 7);
  const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${tok('tac-grape')}"/>${traces(seed)}</svg>`;
  const key2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${KEY_VIEWBOX}"><path d="${KEY_BADGE}" fill="${tok('tac-purple')}"/><path d="${KEY_RING}" fill="${tok('tac-steel')}" fill-rule="evenodd"/><path d="${KEY_KEY}" fill="${tok('tac-key-light')}" fill-rule="evenodd"/></svg>`;
  const uri = (s: string) => `data:image/svg+xml;base64,${Buffer.from(s).toString('base64')}`;
  const size = title.length > 60 ? 76 : title.length > 36 ? 92 : 112;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { width: 1200, height: 630, display: 'flex', position: 'relative', backgroundImage: `url(${uri(bg)})`, backgroundSize: '1200px 630px', padding: '64px 72px', flexDirection: 'column', justifyContent: 'space-between' },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 20 },
              children: [
                { type: 'img', props: { src: uri(key2), width: 84, height: 90 } },
                { type: 'div', props: { style: { fontFamily: 'Big Shoulders Display', fontSize: 44, color: tok('tac-white'), letterSpacing: 4 }, children: 'TOY AUTO CENTER' } },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: 18 },
              children: [
                { type: 'div', props: { style: { fontFamily: 'JetBrains Mono', fontSize: 24, color: tok('tac-amber'), letterSpacing: 3 }, children: kicker } },
                { type: 'div', props: { style: { fontFamily: 'Big Shoulders Display', fontSize: size, lineHeight: 0.95, color: tok('tac-white'), textTransform: 'uppercase', maxWidth: 1000 }, children: title } },
              ],
            },
          },
          { type: 'div', props: { style: { fontFamily: 'JetBrains Mono', fontSize: 24, color: tok('tac-on-dark-soft'), letterSpacing: 2 }, children: 'BLAUVELT, NY · ROUTE 303 · 845.365.3003' } },
        ],
      },
    },
    { width: 1200, height: 630, fonts },
  );
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
