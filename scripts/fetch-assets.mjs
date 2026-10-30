// Processes the Higgsfield originals in ../images/raw into src/assets/images,
// downloads the LWS badge and live-site reference images, and writes a manifest.
// Usage (from build/): node scripts/fetch-assets.mjs
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, stat, access } from 'node:fs/promises';

const RAW = '../images/raw';
const OUT = 'src/assets/images';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 Chrome/130 Safari/537.36';
const HF = 'https://d8j0ntlcm91z4.cloudfront.net/user_3BHmq0ZKzQMJfTK0sC2vyraXiln/';

// blur: regions in 900px-wide preview coordinates [x, y, w, h], scaled to the source.
// Used to soften the few legible marks (car badge, tool model number, lift brand).
const IMAGES = [
  { src: '01-hero-bay.png', out: 'hero-shop-bay-blauvelt.jpg', max: 2200, hf: 'hf_20261030_011314_0b781e04-9b2a-42b3-8c20-61714c6c0e8f.png', blur: [[255, 108, 48, 36]] },
  { src: '02-diagnostics.png', out: 'obd2-diagnostic-scan-tool.jpg', max: 1600, hf: 'hf_20261030_011313_3f466010-c434-44bb-a3f0-78a99b5180ec.png', blur: [[455, 432, 60, 30]] },
  { src: '03-brakes.png', out: 'brake-rotor-caliper-replacement.jpg', max: 1600, hf: 'hf_20261030_011313_fe214c69-4250-45ca-851a-221ab1a899e6.png', blur: [] },
  { src: '04-inspection.png', out: 'nys-inspection-underbody-check.jpg', max: 1600, hf: 'hf_20261030_011315_c2496cf6-1b4d-4f6a-80f3-62d703a5d97d.png', blur: [] },
  { src: '05-ac.png', out: 'ac-manifold-gauge-service.jpg', max: 1600, hf: 'hf_20261030_011314_80171e94-f9d4-4b9b-a92f-93b46749bd5c.png', blur: [[640, 160, 110, 90]] },
  { src: '06-belts.png', out: 'serpentine-belt-replacement.jpg', max: 1600, hf: 'hf_20261030_011312_fed50883-9168-4b5d-8038-3e1b50cdbbf9.png', blur: [] },
  { src: '07-alignment.png', out: 'wheel-alignment-rack-strut.jpg', max: 1600, hf: 'hf_20261030_011314_41806665-a715-4f1e-9583-eb0c721c2737.png', blur: [[225, 660, 125, 70], [730, 680, 90, 45], [195, 222, 60, 26], [330, 520, 160, 40]] },
  // 08-exterior: excluded by Jon (highway shop photo). Not processed.
  { src: '09-about-hands.png', out: 'mechanic-hands-wrench-workbench.jpg', max: 1600, hf: 'hf_20261030_011314_14bbaa9f-f242-4b20-a050-be4dcb318711.png', blur: [[455, 135, 80, 30]] },
  { src: '10-transmission.png', out: 'transmission-service-fluid-drain.jpg', max: 1600, hf: 'hf_20261030_011315_b961ca82-c780-40f8-9373-d0e4c8e171a4.png', blur: [[310, 720, 130, 60]] },
];

const sha = (buf) => createHash('sha256').update(buf).digest('hex');
const exists = (p) => access(p).then(() => true, () => false);

async function download(url, dest) {
  if (await exists(dest)) return 'cached';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return 'downloaded';
}

async function blurRegions(input, regions) {
  if (!regions.length) return input;
  // Feathered blur: a softly blurred copy is blended in through a mask whose
  // rectangles have soft edges, so the patch reads as depth of field, not a box.
  const { width: W, height: H } = await sharp(input).metadata();
  const k = W / 900;
  const rects = regions
    .map(([x, y, w, h]) => `<rect x="${x * k}" y="${y * k}" width="${w * k}" height="${h * k}" rx="${8 * k}" fill="#fff"/>`)
    .join('');
  const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="100%" height="100%" fill="#000"/>${rects}</svg>`;
  const mask = await sharp(Buffer.from(maskSvg)).blur(6 * k).extractChannel(0).toBuffer();
  // removeAlpha runs at output time in sharp, so flatten to RGB first.
  const rgb = await sharp(input).removeAlpha().png().toBuffer();
  const blurred = await sharp(rgb).blur(5 * k).joinChannel(mask).png().toBuffer();
  return sharp(rgb).composite([{ input: blurred }]).png().toBuffer();
}

await mkdir(OUT, { recursive: true });
await mkdir(`${RAW}/live`, { recursive: true });
await mkdir('src/assets/brand', { recursive: true });

const manifest = [];
let before = 0;
let after = 0;
for (const img of IMAGES) {
  const srcPath = `${RAW}/${img.src}`;
  if (!(await exists(srcPath))) {
    console.warn(`missing ${srcPath}, trying download`);
    await download(HF + img.hf, srcPath);
  }
  const raw = await readFile(srcPath);
  const cleaned = await blurRegions(raw, img.blur);
  const buf = await sharp(cleaned)
    .rotate()
    .resize({ width: img.max, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const meta = await sharp(buf).metadata();
  const dest = `${OUT}/${img.out}`;
  await writeFile(dest, buf);
  before += raw.length;
  after += buf.length;
  manifest.push({ source: HF + img.hf, raw: srcPath, local: dest, width: meta.width, height: meta.height, bytes: buf.length, sha256: sha(buf), blurredRegions: img.blur.length });
  console.log(`${img.out.padEnd(44)} ${(raw.length / 1024).toFixed(0).padStart(6)} KB -> ${(buf.length / 1024).toFixed(0).padStart(5)} KB  ${meta.width}x${meta.height}`);
}

// LWS badge (kept at native size; rendered 150px wide, height auto).
console.log('badge', await download('https://livewebstudios.com/images/verifiedsecured.png', 'src/assets/brand/verifiedsecured.png'));

// Live-site references (not shipped unless they pass review).
for (const u of [
  'https://toyautocenter.net/wp-content/uploads/2022/03/logodarkbg.png',
  'https://toyautocenter.net/wp-content/uploads/2022/06/loglsmall.png',
  'https://toyautocenter.net/wp-content/uploads/2022/01/mech-02.jpg',
]) {
  try {
    console.log(u.split('/').pop(), await download(u, `${RAW}/live/${u.split('/').pop()}`));
  } catch (e) {
    console.warn('live download failed', String(e));
  }
}

await writeFile('scripts/assets-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`total ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(2)} MB, ${manifest.length} images`);
const s = await stat('src/assets/brand/verifiedsecured.png');
console.log('badge bytes', s.size);
