// Builds wide hero backgrounds (2400x1100) from the processed photos in src/assets/images.
// The photo's subject sits in the right ~40% of the frame; the left side is a blurred, darkened
// extension of the same photo, so headline text never covers the subject. Run from build/:
//   node scripts/hero-compose.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';

const SRC = 'src/assets/images';
const OUT = 'src/assets/images/wide';
const W = 2400, H = 1100, FEATHER = 340;

for (const f of (await readdir(SRC)).filter((n) => n.endsWith('.jpg'))) {
  const src = `${SRC}/${f}`;
  const meta = await sharp(src).metadata();
  const base = await sharp(src).resize(W, H, { fit: 'cover', position: 'centre' }).blur(42).modulate({ brightness: 0.42, saturation: 0.8 }).toBuffer();
  let layers;
  if (meta.width / meta.height > 1.5) {
    // Already wide (the shop bay): just cover, anchored right.
    layers = [{ input: await sharp(src).resize(W, H, { fit: 'cover', position: 'right' }).toBuffer(), left: 0, top: 0 }];
  } else {
    const sw = Math.round(meta.width * (H / meta.height));
    const sh = H;
    const subject = await sharp(src).resize(sw, sh).toBuffer();
    // Alpha mask: transparent at the subject's left edge, opaque after FEATHER px.
    const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${sw}" height="${sh}"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="${FEATHER / sw}" stop-color="#fff" stop-opacity="1"/></linearGradient></defs><rect width="${sw}" height="${sh}" fill="url(#g)"/></svg>`);
    const feathered = await sharp(subject).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
    layers = [{ input: feathered, left: W - sw, top: Math.round((H - sh) / 2) }];
  }
  await sharp(base).composite(layers).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/${f}`);
  console.log('wide', f);
}
