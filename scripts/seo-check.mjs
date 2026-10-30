// SEO audit over dist/: one H1, unique title + description (140 to 158 chars, keyword + place),
// canonical, OG + Twitter tags, JSON-LD parses with expected types, alt on every img,
// sitemap coverage. Usage: node scripts/seo-check.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (f !== 'admin' && f !== '_astro') walk(p); } else if (f.endsWith('.html') && !/^google[0-9a-f]+\.html$/.test(f)) files.push(p); } }; // skip the GSC verification file
walk('dist');
const urlOf = (f) => 'https://toyautocenter.net/' + f.replace(/^dist\//, '').replace(/index\.html$/, '').replace(/404\.html$/, '404/');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const problems = [];
const titles = new Map();
const descs = new Map();
const report = [];

for (const f of files) {
  const h = readFileSync(f, 'utf8');
  const url = urlOf(f);
  const p = (m) => problems.push(`${url}: ${m}`);
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) p(`${h1} <h1> elements`);
  const title = decode((h.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = decode((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  if (!title) p('missing title');
  if (!desc) p('missing description');
  if (titles.has(title)) p(`duplicate title with ${titles.get(title)}`); else titles.set(title, url);
  if (descs.has(desc)) p(`duplicate description with ${descs.get(desc)}`); else descs.set(desc, url);
  if (desc && (desc.length < 140 || desc.length > 158)) p(`description ${desc.length} chars`);
  if (desc && !/Blauvelt|Rockland County/.test(desc)) p('description lacks Blauvelt / Rockland County');
  const canon = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canon) p('missing canonical'); else if (!url.endsWith('404/') && canon !== url) p(`canonical ${canon} != ${url}`);
  for (const t of ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']) if (!h.includes(`property="${t}"`)) p(`missing ${t}`);
  for (const t of ['twitter:card', 'twitter:image']) if (!h.includes(`name="${t}"`)) p(`missing ${t}`);
  const og = (h.match(/property="og:image" content="https:\/\/toyautocenter\.net\/(og\/[^"]+)"/) || [])[1];
  if (!og || !existsSync(join('dist', og))) p(`og image file missing: ${og}`);
  if (!h.includes('<!-- GA4 -->') || !h.includes('googletagmanager.com/gtag/js?id=G-KSH0KJ15GJ')) p('missing GA4 tag');
  const types = new Set();
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1]);
      const walkT = (n) => { if (Array.isArray(n)) return n.forEach(walkT); if (n && typeof n === 'object') { const t = n['@type']; if (t) [].concat(t).forEach((x) => types.add(x)); Object.values(n).forEach(walkT); } };
      walkT(j);
    } catch (e) { p(`JSON-LD parse error: ${e.message}`); }
  }
  for (const t of ['AutoRepair', 'WebSite', 'WebPage', 'BreadcrumbList'].filter((t) => !(t === 'WebPage' && types.size && [...types].some((x) => /Page$/.test(x))))) if (!types.has(t)) p(`schema missing ${t}`);
  if (url.includes('/services/') && !url.endsWith('/services/') && !(types.has('Service') && types.has('FAQPage'))) p('service page needs Service + FAQPage');
  if (url.includes('/blog/') && url.split('/').length === 6 && !url.includes('/category/') && !types.has('BlogPosting')) p('post needs BlogPosting');
  if (url.endsWith('/deals/') && !types.has('Offer')) p('deals needs Offer');
  for (const img of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt(="|[\s>])/.test(img[0])) p(`img without alt: ${img[0].slice(0, 80)}`);
  report.push({ url, h1, titleLen: title.length, descLen: desc.length, types: [...types].sort().join(',') });
}

const sm = existsSync('dist/sitemap-0.xml') ? readFileSync('dist/sitemap-0.xml', 'utf8') : '';
const smUrls = new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
for (const r of report) {
  if (r.url.endsWith('/404/')) { if (smUrls.has(r.url)) problems.push('404 in sitemap'); continue; }
  if (!smUrls.has(r.url)) problems.push(`not in sitemap: ${r.url}`);
}
for (const u of smUrls) if (/\/(admin|dev)\//.test(u)) problems.push(`sitemap includes ${u}`);

console.log(`pages: ${report.length}, sitemap urls: ${smUrls.size}, titles over 60: ${report.filter((r) => r.titleLen > 60).length}`);
if (process.argv.includes('-v')) console.table(report);
if (problems.length) { console.log(problems.join('\n')); console.log(`\nseo-check: ${problems.length} problem(s)`); process.exit(1); }
console.log('seo-check: 0 problems');
