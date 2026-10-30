// /layout pass: every built page at 320/375/768/1024/1440.
// Checks horizontal overflow, clipped text, tap targets, img width/height, and that
// in-page anchors land below the sticky nav. Usage: BASE=http://localhost:4322 node scripts/layout-check.mjs
import { chromium } from 'playwright';
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { existsSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:4322';
const SHELL = `${homedir()}/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const pages = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (!['admin', '_astro', 'og', 'images', 'media'].includes(f)) walk(p); } else if (f === 'index.html') pages.push('/' + p.replace(/^dist\/?/, '').replace(/index\.html$/, '')); } };
walk('dist');
pages.push('/404-check/');
const WIDTHS = [320, 375, 768, 1024, 1440];
const b = await chromium.launch(existsSync(SHELL) ? { executablePath: SHELL } : {});
const out = { overflow: [], clipped: [], tap: [], imgdims: [], anchor: [] };

for (const w of WIDTHS) {
  const touch = w < 1024;
  const ctx = await b.newContext({ viewport: { width: w, height: w < 768 ? 740 : 900 }, hasTouch: touch, isMobile: w < 768 });
  for (const path of pages) {
    const p = await ctx.newPage();
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.addStyleTag({ content: '.below-fold{content-visibility:visible!important} [data-reveal]{opacity:1!important;transform:none!important}' });
    await p.waitForTimeout(150);
    const r = await p.evaluate(({ touch }) => {
      const res = { overflow: null, clipped: [], tap: [], imgdims: [] };
      const sw = document.documentElement.scrollWidth;
      if (sw > innerWidth) res.overflow = sw;
      // clipped text: block elements whose text is wider than their box (not scroll containers / marquee)
      for (const el of document.querySelectorAll('h1,h2,h3,h4,p,li,a,button,dt,dd,th,td,span.eyebrow,label')) {
        if (el.closest('.readout,.table-wrap,.rrail__list,.visually-hidden,[aria-hidden="true"],noscript,.mnav,.mega')) continue;
        const cs = getComputedStyle(el);
        if (cs.display === 'inline' || el.offsetParent === null) continue;
        if (el.scrollWidth > el.clientWidth + 1 && cs.overflowX !== 'visible') res.clipped.push(`${el.tagName}.${el.className} "${el.textContent.trim().slice(0, 40)}" ${el.scrollWidth}>${el.clientWidth}`);
        if (el.getBoundingClientRect().right > innerWidth + 1 && !el.closest('[class*="hero__key"],.cta-band__float,.tl-hero__key,.nf__key')) res.clipped.push(`OFFSCREEN ${el.tagName}.${el.className} "${el.textContent.trim().slice(0, 40)}" right=${Math.round(el.getBoundingClientRect().right)}`);
      }
      // tap targets: WCAG 2.5.8 AA = 24px; LWS standard 44px for buttons/nav on touch widths.
      for (const el of document.querySelectorAll('a[href],button,input,select,textarea,summary')) {
        if (el.offsetParent === null || el.closest('.visually-hidden,[aria-hidden="true"],.bf__hp,.mnav,.skip-link')) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        const inline = getComputedStyle(el).display === 'inline' && el.closest('p,li,dd,td,figcaption,address');
        if (inline) continue; // in-sentence links are exempt (2.5.8 inline exception)
        const min = touch && (el.matches('.btn,button,.nav-link,summary,input,select,textarea,.mobile-bar__btn') ) ? 44 : 24;
        if (r.height < min - 0.5 || r.width < 24) res.tap.push(`${Math.round(r.width)}x${Math.round(r.height)} <${min} ${el.tagName}.${el.className} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30)}"`);
      }
      for (const img of document.querySelectorAll('img')) {
        if (!img.getAttribute('width') || !img.getAttribute('height')) res.imgdims.push(img.getAttribute('src')?.slice(0, 60));
      }
      return res;
    }, { touch });
    if (r.overflow) out.overflow.push(`${w} ${path} scrollWidth=${r.overflow}`);
    r.clipped.forEach((x) => out.clipped.push(`${w} ${path} ${x}`));
    r.tap.forEach((x) => out.tap.push(`${w} ${path} ${x}`));
    if (w === 1440) r.imgdims.forEach((x) => out.imgdims.push(`${path} ${x}`));
    await p.close();
  }
  await ctx.close();
}

// Sticky nav vs in-page anchors (FAQ table of contents, skip link) at 375 and 1440.
for (const w of [375, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 800 } });
  for (const [path, hash] of [['/faq/', '#brake-repair'], ['/faq/', '#towns'], ['/contact/', '#book'], ['/services/', '#main']]) {
    await p.goto(BASE + path + hash, { waitUntil: 'load' });
    await p.waitForTimeout(500);
    // scroll up 1px then back to trigger the header's show-on-scroll-up state, worst case
    const res = await p.evaluate((hash) => {
      const t = document.querySelector(hash);
      const h = document.querySelector('[data-header]');
      const hr = h.getBoundingClientRect();
      const headerBottom = h.classList.contains('is-hidden') ? 0 : hr.bottom;
      return { top: Math.round(t.getBoundingClientRect().top), headerBottom: Math.round(headerBottom) };
    }, hash);
    if (res.top < res.headerBottom - 1) out.anchor.push(`${w} ${path}${hash} target top ${res.top} under header bottom ${res.headerBottom}`);
  }
  await p.close();
}
await b.close();
writeFileSync('qa/layout-results.json', JSON.stringify(out, null, 2));
for (const [k, v] of Object.entries(out)) {
  console.log(`\n## ${k}: ${v.length}`);
  const uniq = [...new Set(v.map((x) => x.replace(/^\d+ \S+ /, '')))];
  uniq.slice(0, 25).forEach((x) => console.log('  ' + x + '   [' + v.filter((y) => y.endsWith(x)).map((y) => y.split(' ').slice(0, 2).join(' ')).slice(0, 4).join(', ') + (v.filter((y) => y.endsWith(x)).length > 4 ? ', ...' : '') + ']'));
}
console.log(`\npages: ${pages.length} x widths: ${WIDTHS.length}`);
