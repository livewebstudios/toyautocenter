// Slices a tall full-page screenshot into viewable chunks. Usage: node scripts/slice-shot.mjs file.png [chunkHeight] [outWidth]
import sharp from 'sharp';
const [file, ch = '1600', ow = '900'] = process.argv.slice(2);
const meta = await sharp(file).metadata();
const H = Number(ch);
const n = Math.ceil(meta.height / H);
for (let i = 0; i < n; i++) {
  const top = i * H;
  const height = Math.min(H, meta.height - top);
  const out = file.replace(/\.png$/, `.part${i + 1}.jpg`).replace('qa/screens/', 'qa/slices/');
  await sharp(file).extract({ left: 0, top, width: meta.width, height }).resize({ width: Math.min(Number(ow), meta.width) }).jpeg({ quality: 72 }).toFile(out);
  console.log(out);
}
