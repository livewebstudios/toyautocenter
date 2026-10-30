// Builds the logo variants and favicon set from the client SVGs in ../images.
// - src/assets/brand/logo-full.svg          header logo on light (embedded PNGs recompressed)
// - src/assets/brand/logo-full-inverse.svg  footer / dark hero: wordmark and speed strips white, key keeps its color
// - public/favicon.svg, favicon-32.png, apple-touch-icon.png (180), icon-192.png, icon-512.png
// Usage (from build/): node scripts/build-logos.mjs
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const src = await readFile('../images/logo-full.svg', 'utf8');
await mkdir('src/assets/brand', { recursive: true });

// Recompress each embedded PNG losslessly at max effort.
let svg = src;
for (const m of src.matchAll(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g)) {
  const buf = Buffer.from(m[1], 'base64');
  const out = await sharp(buf).png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true }).toBuffer();
  if (out.length < buf.length) svg = svg.replace(m[1], out.toString('base64'));
}
svg = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/\s*data-name="[^"]*"/g, '');
await writeFile('src/assets/brand/logo-full.svg', svg);

// Inverse: the wordmark and speed strips are recolored to white pixel by pixel (alpha kept),
// so it does not depend on SVG filter support. The key badge keeps its purple.
const WHITEN = ['bottom_tri_xA0_Image', 'top_tri_xA0_Image', 'TOY_xA0_Image', 'Auto_xA0_Image', 'Center_xA0_Image', 'key_inside_xA0_Image'];
let inv = svg;
for (const id of WHITEN) {
  const re = new RegExp(`(<g id="${id}">\\s*<image[^>]*?base64,)([A-Za-z0-9+/=]+)`);
  const m = inv.match(re);
  if (!m) throw new Error(`logo group not found: ${id}`);
  const buf = Buffer.from(m[2], 'base64');
  const { width, height } = await sharp(buf).metadata();
  const alpha = await sharp(buf).ensureAlpha().extractChannel(3).toBuffer();
  const white = await sharp({ create: { width, height, channels: 3, background: '#ffffff' } })
    .joinChannel(alpha)
    .png({ compressionLevel: 9, effort: 10 })
    .toBuffer();
  inv = inv.replace(m[2], white.toString('base64'));
}
inv = inv.replace('id="light_BG"', 'id="dark_BG"');
await writeFile('src/assets/brand/logo-full-inverse.svg', inv);

// Favicons from the vector key.
const key = await readFile('../images/logo-key.svg', 'utf8');
await writeFile('public/favicon.svg', key.replace(/<!--[\s\S]*?-->/g, ''));
const render = (size, pad = 0, bg) =>
  sharp(Buffer.from(key), { density: 600 })
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: bg || { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 });
await render(32).toFile('public/favicon-32.png');
await render(180, 18, { r: 246, g: 245, b: 249, alpha: 1 }).toFile('public/apple-touch-icon.png');
await render(192, 16).toFile('public/icon-192.png');
await render(512, 40).toFile('public/icon-512.png');

console.log(`logo-full.svg ${(src.length / 1024).toFixed(0)} KB -> ${(svg.length / 1024).toFixed(0)} KB; inverse ${(inv.length / 1024).toFixed(0)} KB; favicons written`);
