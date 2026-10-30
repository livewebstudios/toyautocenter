// /polish helper: scans every visible text node in dist/ for voice and grammar problems.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const files = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (!['admin', '_astro', 'og'].includes(f)) walk(p); } else if (f.endsWith('.html')) files.push(p); } };
walk('dist');
const RULES = [
  ['jonvoice never-list', /\b(utiliz\w*|leverag\w*|synerg\w*|moving forward|solutions?\b|comprehensive|cutting[- ]edge|best[- ]in[- ]class|excited to|world[- ]class|state[- ]of[- ]the[- ]art|top[- ]notch|premier|peace of mind|hassle[- ]free|one[- ]stop|second to none|look no further|rest assured|we pride ourselves|dedicated to|committed to|strive|ensure)\b/i],
  ['forbidden CTA', /\b(submit|click here|learn more|read more|sign up now|limited time)\b|don.t hesitate|free consultation/i],
  ['three dots', /\.\.\./],
  ['dash', /[–—]/],
  ['double space', /\S  +\S/],
  ['space before punct', /\s[,.;:!?](\s|$)/],
  ['doubled word', /\b(\w{2,})\s+\1\b/i],
  ['phone format', /845[-\s]365[-\s]3003|201[-\s]394[-\s]8673|\(845\)/],
  ['25+ years', /25\+|since the 90s|40 years/i],
];
const hits = {};
const longParas = [];
let exclaims = 0;
const seen = new Set();
for (const f of files) {
  const h = readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const attrs = [...h.matchAll(/\b(?:alt|aria-label|title|content|placeholder)="([^"]+)"/g)].map((m) => m[1]);
  const paras = [...h.matchAll(/<(p|li|dd|h[1-6]|td|th|summary|figcaption)[^>]*>([\s\S]*?)<\/\1>/g)].map((m) => m[2].replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').trim());
  for (const t of [...paras, ...attrs]) {
    if (!t || seen.has(t)) continue;
    seen.add(t);
    if (t.includes('!')) exclaims++;
    for (const [label, re] of RULES) if (re.test(t)) (hits[label] ??= []).push(`${f.replace('dist/', '').replace('/index.html', '') || '/'}: ${t.slice(0, 160)}`);
    const words = t.split(/\s+/).length;
    if (words > 75) longParas.push(`${words}w ${f.replace('dist/', '').replace('/index.html', '')}: ${t.slice(0, 90)}`);
  }
}
for (const [k, v] of Object.entries(hits)) { console.log(`\n## ${k} (${v.length})`); v.forEach((x) => console.log('  ' + x)); }
console.log(`\n## paragraphs over 75 words (${longParas.length})`); longParas.forEach((x) => console.log('  ' + x));
console.log(`\nunique text blocks: ${seen.size}, blocks with "!": ${exclaims}`);
