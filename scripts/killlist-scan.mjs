// Kill-list scan. Fails (exit 1) on any banned phrase or dash in src/ copy, code strings and
// the built HTML (alt, meta, aria, visible text). Usage: node scripts/killlist-scan.mjs [paths...]
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const BANNED = [
  ['em dash', /—/],
  ['en dash', /–/],
  ['learn more', /learn more/i],
  ['click here', /click here/i],
  ['submit', /\bsubmit\b/i],
  ["don't hesitate", /don['’]?t hesitate|do not hesitate/i],
  ['circle back', /circle back/i],
  ['free consultation', /schedule a free consultation/i],
  ['read more', /read more/i],
  ["we've got you covered", /we['’]?ve got you covered/i],
  ['look no further', /look no further/i],
  ['fast-paced world', /fast[- ]paced world/i],
  ['elevate', /\belevat(e|es|ed|ing)\b/i],
  ['seamless', /seamless/i],
  ['unlock', /\bunlock/i],
  ['game-changer', /game[- ]?changer/i],
  ['25+ years', /25\+?\s*years|since the 90s|over 40 years|40\+ years/i],
  ['joke reviews', /Hippie Jeff|Kreutzmann|McKracken/i],
  ['seo heading', /Local SEO/i],
];

// Code-only uses of "submit" that never reach a reader.
const CODE_OK = /type=["']submit["']|onSubmit|handleSubmit|requestSubmit|submitter|SubmitEvent|\bsubmit\(|'submit'|"submit"|\.submit\b|:submit/g;

const roots = process.argv.slice(2).length ? process.argv.slice(2) : ['src', 'dist', 'public/admin', 'public/llms.txt'];
const exts = new Set(['.astro', '.tsx', '.ts', '.json', '.md', '.html', '.txt', '.yml', '.xml', '.mjs', '.css']);
const files = [];
const walk = (p) => {
  if (!existsSync(p)) return;
  const s = statSync(p);
  if (s.isDirectory()) {
    if (/node_modules|_astro/.test(p)) return;
    for (const f of readdirSync(p)) walk(join(p, f));
  } else if (exts.has(extname(p))) files.push(p);
};
roots.forEach(walk);

let hits = 0;
for (const f of files) {
  if (f.endsWith('killlist-scan.mjs')) continue;
  // LWS branded Decap login template: by LWS rule only its <title> may change (logged in DECISIONS.md).
  if (/admin\/index\.html$/.test(f)) continue;
  let text = readFileSync(f, 'utf8');
  if (f.endsWith('.html')) {
    // drop inline scripts/styles in built HTML; scan text, alt, aria, meta and titles.
    text = text.replace(/<script(?![^>]*ld\+json)[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
  }
  text = text.replace(CODE_OK, ' ');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    for (const [label, re] of BANNED) {
      if (re.test(line)) {
        hits++;
        const at = line.search(re);
        console.log(`${f}:${i + 1}  [${label}]  ${line.slice(Math.max(0, at - 50), at + 60).trim()}`);
      }
    }
  });
}
console.log(`\nkill-list: scanned ${files.length} files, ${hits} hit(s)`);
process.exit(hits ? 1 : 0);
