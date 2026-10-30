// Flags any 12-word shingle that appears in more than one town page, or in more than one
// service page. Reads the copy data files directly. Usage: node scripts/dupe-check.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const N = 12;
const strings = (src) => {
  const out = [];
  const re = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
  let m;
  while ((m = re.exec(src))) {
    const s = m[2];
    if (s.split(/\s+/).length >= 4) out.push(s.replace(/\\'/g, "'").replace(/\\"/g, '"'));
  }
  return out;
};
const words = (s) =>
  s
    .toLowerCase()
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_]/g, '')
    .replace(/[^a-z0-9' ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

function check(dir, label) {
  if (!existsSync(dir)) return 0;
  const files = readdirSync(dir).filter((f) => f.endsWith('.ts'));
  const seen = new Map();
  for (const f of files) {
    const text = readFileSync(join(dir, f), 'utf8');
    const sh = new Set();
    for (const s of strings(text)) {
      const w = words(s);
      for (let i = 0; i + N <= w.length; i++) sh.add(w.slice(i, i + N).join(' '));
    }
    for (const s of sh) {
      if (!seen.has(s)) seen.set(s, new Set());
      seen.get(s).add(f);
    }
  }
  let dupes = 0;
  for (const [s, fs] of seen) {
    if (fs.size > 1) {
      dupes++;
      console.log(`[${label}] "${s}"  <- ${[...fs].join(', ')}`);
    }
  }
  console.log(`${label}: ${files.length} files, ${dupes} shared ${N}-word shingle(s)`);
  return dupes;
}

const total = check('src/data/towns', 'towns') + check('src/data/services', 'services');
process.exit(total ? 1 : 0);
