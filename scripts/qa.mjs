// Phase 8 QA: screenshots, horizontal overflow, console errors, axe, interactions,
// reduced motion and JS-off checks. Needs the built site served (npm run preview, port 4322).
// Usage: BASE=http://localhost:4322 node scripts/qa.mjs [screens|axe|interact|reduced|nojs|all]
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:4322';
const mode = process.argv[2] || 'all';
const OUT = 'qa';
mkdirSync(`${OUT}/screens`, { recursive: true });

const SHOT_PAGES = [
  ['home', '/'],
  ['services', '/services/'],
  ['service-brakes', '/services/brake-repair/'],
  ['toyota', '/toyota-lexus-repair/'],
  ['town-tappan', '/service-area/tappan-ny/'],
  ['contact', '/contact/'],
  ['post', '/blog/check-engine-light-common-codes/'],
  ['404', '/this-page-does-not-exist/'],
];
const AXE_PAGES = [
  ...SHOT_PAGES,
  ['service-oil', '/services/oil-change-maintenance/'],
  ['dealer', '/dealer-alternative/'],
  ['deals', '/deals/'],
  ['about', '/about/'],
  ['reviews', '/reviews/'],
  ['faq', '/faq/'],
  ['privacy', '/privacy/'],
  ['area', '/service-area/'],
  ['blog', '/blog/'],
  ['category', '/blog/category/toyota-and-lexus/'],
];
const WIDTHS = [320, 375, 768, 1024, 1440];
const results = { overflow: [], console: [], axe: [], interact: [], reduced: [], nojs: [], motion: [] };

async function scrollThrough(page) {
  // content-visibility:auto skips offscreen paint, which blanks full-page captures.
  await page.addStyleTag({ content: '.below-fold{content-visibility:visible!important}' });
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += Math.round(innerHeight * 0.6)) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
}

// Use the browsers already installed on this machine (handoff: no new downloads).
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
const SHELL = `${homedir()}/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const browser = await chromium.launch(existsSync(SHELL) ? { executablePath: SHELL } : {});

if (mode === 'screens' || mode === 'all') {
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w < 768 ? 812 : 900 }, deviceScaleFactor: 1 });
    for (const [name, path] of SHOT_PAGES) {
      const page = await ctx.newPage();
      page.on('console', (m) => m.type() === 'error' && results.console.push({ w, path, text: m.text() }));
      page.on('pageerror', (e) => results.console.push({ w, path, text: String(e) }));
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
      await scrollThrough(page);
      const ov = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth }));
      if (ov.sw > ov.iw) {
        const culprits = await page.evaluate(() =>
          [...document.querySelectorAll('body *')]
            .filter((el) => el.getBoundingClientRect().right > innerWidth + 1)
            .slice(0, 5)
            .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} r=${Math.round(el.getBoundingClientRect().right)}`),
        );
        results.overflow.push({ w, path, ...ov, culprits });
      }
      await page.screenshot({ path: `${OUT}/screens/${name}-${w}.png`, fullPage: true });
      await page.close();
    }
    await ctx.close();
  }
  console.log('screens done', results.overflow.length, 'overflow', results.console.length, 'console errors');
}

if (mode === 'axe' || mode === 'all') {
  for (const w of [1440, 375]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
    for (const [name, path] of AXE_PAGES) {
      const page = await ctx.newPage();
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
      await scrollThrough(page);
      const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      for (const v of r.violations) {
        results.axe.push({ w, name, id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 4).map((n) => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\n')[1]) });
      }
      await page.close();
    }
    await ctx.close();
  }
  const serious = results.axe.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  console.log('axe done', results.axe.length, 'violations,', serious.length, 'serious/critical');
}

if (mode === 'interact' || mode === 'all') {
  const log = (ok, what, detail = '') => results.interact.push({ ok, what, detail });
  // Desktop: mega panel by keyboard
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    await page.focus('[data-mega-toggle]');
    await page.keyboard.press('Enter');
    log(await page.isVisible('#mega-services'), 'mega panel opens with Enter on toggle');
    await page.keyboard.press('Escape');
    log(!(await page.isVisible('#mega-services')), 'mega panel closes with Escape');
    // tab order starts with skip link
    await page.goto(BASE + '/services/', { waitUntil: 'networkidle' });
    await page.keyboard.press('Tab');
    const first = await page.evaluate(() => document.activeElement?.textContent?.trim());
    log(first === 'SKIP TO CONTENT', 'first Tab lands on skip link', first);
    // Parts tray: arrow keys move focus (island hydrates when visible)
    await page.locator('.tray').scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const card = page.locator('.tray__card').first();
    await card.focus();
    await page.keyboard.press('ArrowRight');
    const idx = await page.evaluate(() => [...document.querySelectorAll('.tray__card')].indexOf(document.activeElement));
    log(idx === 1, 'Parts Tray ArrowRight moves focus to card 2', String(idx));
    await page.keyboard.press('ArrowDown');
    const idx2 = await page.evaluate(() => [...document.querySelectorAll('.tray__card')].indexOf(document.activeElement));
    log(idx2 === 5, 'Parts Tray ArrowDown moves one row (4 cols)', String(idx2));
    // Parts tray: drag moves the card, release springs back, click suppressed
    await page.locator('.tray').scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const box = await page.locator('.tray__card').nth(2).boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 120, box.y + box.height / 2 + 40, { steps: 8 });
    const mid = await page.locator('.tray__card').nth(2).evaluate((el) => getComputedStyle(el).transform);
    await page.mouse.up();
    await page.mouse.move(5, 5, { steps: 4 });
    await page.waitForTimeout(1500);
    const after = await page.locator('.tray__card').nth(2).evaluate((el) => el.style.transform);
    log(mid !== 'none' && page.url().endsWith('/services/'), 'Parts Tray drag moves card and does not navigate', mid);
    log(after === '' || /translate3d\(0\.0\d?px, 0\.0\d?px/.test(after) || after.includes('-0.0'), 'Parts Tray card springs back to rest', after);
    // click still navigates
    await page.locator('.tray__card').nth(0).click();
    await page.waitForLoadState('networkidle');
    log(page.url().includes('/services/nys-inspection/'), 'Parts Tray click navigates', page.url());
    await ctx.close();
  }
  // Mobile menu with focus trap
  {
    const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true });
    const page = await ctx.newPage();
    await page.goto(BASE + '/about/', { waitUntil: 'networkidle' });
    await page.waitForSelector('.mnav-btn');
    await page.waitForTimeout(500);
    await page.click('.mnav-btn');
    log(await page.isVisible('#mobile-menu'), 'mobile menu opens');
    const before = await page.evaluate(() => document.activeElement?.textContent?.trim());
    for (let i = 0; i < 40; i++) await page.keyboard.press('Tab');
    const inside = await page.evaluate(() => !!document.activeElement?.closest('#mobile-menu'));
    log(inside, 'focus stays trapped in mobile menu', before);
    await page.keyboard.press('Escape');
    log(!(await page.isVisible('#mobile-menu')), 'mobile menu closes with Escape');
    // booking form validates and counts
    await page.goto(BASE + '/contact/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await page.locator('.bf button[type=submit]').click();
    const errs = await page.locator('.bf__err').count();
    log(errs >= 3, 'booking form shows inline errors when empty', String(errs));
    await page.fill('#bf-msg', 'Grinding noise from the front left when braking.');
    const count = await page.textContent('#bf-count');
    log(count?.startsWith('48 /') ?? false, 'message counter counts', count ?? '');
    const min = await page.getAttribute('#bf-day', 'min');
    log(!!min, 'date field has min = today', min ?? '');
    await ctx.close();
  }
  console.log('interact:', results.interact.filter((r) => !r.ok).length, 'failed of', results.interact.length);
}

if (mode === 'reduced' || mode === 'all') {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const r = await page.evaluate(() => ({
    hiddenReveals: [...document.querySelectorAll('[data-reveal]')].filter((el) => getComputedStyle(el).opacity !== '1').length,
    videoSrc: [...document.querySelectorAll('[data-hero-video] source')].some((s) => s.getAttribute('src')),
    parallax: [...document.querySelectorAll('[data-parallax]')].some((el) => el.style.transform && el.style.transform !== 'none' && !/translate\(0px, 0px\)|translate3d\(0px, 0px/.test(el.style.transform)),
    physics: !!document.querySelector('.tray--physics'),
  }));
  await page.screenshot({ path: `${OUT}/screens/home-reduced-1440.png` });
  results.reduced.push(r);
  console.log('reduced motion:', JSON.stringify(r));
  await ctx.close();
  // Mobile: video must not load
  const m = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mp = await m.newPage();
  const vids = [];
  mp.on('request', (req) => req.url().includes('/media/') && vids.push(req.url()));
  await mp.goto(BASE + '/', { waitUntil: 'networkidle' });
  await mp.waitForTimeout(1500);
  results.reduced.push({ mobileVideoRequests: vids.length });
  console.log('mobile video requests:', vids.length);
  await m.close();
  // Desktop: video loads after load
  const d = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dp = await d.newPage();
  const dv = [];
  dp.on('request', (req) => req.url().includes('/media/') && dv.push(req.url()));
  await dp.goto(BASE + '/', { waitUntil: 'networkidle' });
  await dp.waitForTimeout(2500);
  const playing = await dp.evaluate(() => {
    const v = document.querySelector('[data-hero-video]');
    return v ? { paused: v.paused, muted: v.muted, inline: v.playsInline, cls: v.className } : null;
  });
  results.reduced.push({ desktopVideoRequests: dv.length, playing });
  console.log('desktop video:', dv.length, JSON.stringify(playing));
  await d.close();
}

if (mode === 'nojs' || mode === 'all') {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, javaScriptEnabled: false });
  for (const [name, path] of [['home', '/'], ['contact', '/contact/'], ['blog', '/blog/'], ['service', '/services/brake-repair/']]) {
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: 'load' });
    const r = await page.evaluate(() => ({
      hidden: [...document.querySelectorAll('[data-reveal]')].filter((el) => getComputedStyle(el).opacity !== '1').length,
      formAction: document.querySelector('form.bf')?.getAttribute('action') || null,
      formMethod: document.querySelector('form.bf')?.getAttribute('method') || null,
      pillLinks: [...document.querySelectorAll('.bfilter__pills a')].map((a) => a.getAttribute('href')).length,
      noscriptNav: !!document.querySelector('noscript'),
      textLen: document.body.innerText.length,
    }));
    results.nojs.push({ name, ...r });
    await page.screenshot({ path: `${OUT}/screens/nojs-${name}-375.png`, fullPage: false });
    await page.close();
  }
  console.log('no-js:', JSON.stringify(results.nojs));
  await ctx.close();
}

if (mode === 'motion' || mode === 'all') {
  const ok = (pass, what, detail = '') => results.motion.push({ ok: !!pass, what, detail: String(detail) });
  const rot = (p, sel) => p.evaluate((sel) => { const t = getComputedStyle(document.querySelector(sel)).transform; if (!t || t === 'none') return 0; const [a, b] = t.match(/matrix\(([^)]+)\)/)[1].split(',').map(Number); return Math.round(Math.atan2(b, a) * 180 / Math.PI); }, sel);
  // Full motion, desktop
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(BASE + '/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1600);
  ok(await p.evaluate(() => !!window.LWS && typeof window.LWS.observe === 'function'), 'window.LWS.observe exposed');
  const h1 = await p.$$eval('[data-windup] > span', (els) => els.map((e) => getComputedStyle(e).opacity));
  ok(h1.every((o) => o === '1'), 'hero wind-up finishes (3 groups at opacity 1)', h1.join(','));
  const hiddenBefore = await p.$$eval('[data-reveal]', (els) => els.filter((e) => !e.classList.contains('is-in')).length);
  ok(hiddenBefore > 0, 'below-fold reveals wait for scroll', hiddenBefore);
  // frame timing while scrolling the whole page
  const frames = await p.evaluate(async () => {
    const deltas = []; let last = performance.now(); let long = 0;
    try { new PerformanceObserver((l) => { long += l.getEntries().length; }).observe({ type: 'longtask', buffered: false }); } catch {}
    const H = document.documentElement.scrollHeight - innerHeight;
    await new Promise((res) => { const t0 = performance.now(); const step = (now) => { deltas.push(now - last); last = now; const k = Math.min(1, (now - t0) / 4000); scrollTo(0, H * k); if (k < 1) requestAnimationFrame(step); else res(); }; requestAnimationFrame(step); });
    deltas.sort((a, b) => a - b);
    return { p50: deltas[Math.floor(deltas.length * 0.5)].toFixed(1), p95: deltas[Math.floor(deltas.length * 0.95)].toFixed(1), max: deltas[deltas.length - 1].toFixed(1), n: deltas.length, long };
  });
  ok(Number(frames.p95) < 34, 'scroll smoothness: p95 frame under 34ms (30fps floor) with Harness + parallax running', JSON.stringify(frames));
  await p.waitForTimeout(800);
  const hiddenAfter = await p.$$eval('[data-reveal]', (els) => els.filter((e) => !e.classList.contains('is-in')).length);
  ok(hiddenAfter === 0, 'every reveal fired after scrolling through', hiddenAfter);
  const undrawn = await p.$$eval('[data-divider]', (els) => els.filter((e) => !e.classList.contains('is-drawn')).length);
  ok(undrawn === 0, 'every divider drew', undrawn);
  await p.waitForTimeout(400);
  ok(Math.abs(await rot(p, '[data-progress-key] svg')) < 2, 'progress key at 360deg at the bottom (click settles)', await rot(p, '[data-progress-key] svg'));
  ok(Math.abs(await rot(p, '[data-deal-badge]')) < 1, 'deal badge settled at 0deg', await rot(p, '[data-deal-badge]'));
  ok(Math.abs(await rot(p, '[data-wind-key]')) < 1, 'closing band key wound to rest', await rot(p, '[data-wind-key]'));
  ok(!(await p.$eval('.tray', (e) => e.classList.contains('icons-live'))), 'tray icon loops stop when offscreen');
  await p.evaluate(() => scrollTo(0, (document.documentElement.scrollHeight - innerHeight) / 2));
  await p.waitForTimeout(500);
  const mid = await rot(p, '[data-progress-key] svg');
  ok(Math.abs(Math.abs(mid) - 180) < 25, 'progress key near 180deg at half scroll', mid);
  await p.evaluate(() => scrollBy(0, 400)); await p.waitForTimeout(500);
  ok(await p.$eval('[data-header]', (e) => e.classList.contains('is-hidden')), 'nav hides on scroll down');
  await p.evaluate(() => scrollBy(0, -200)); await p.waitForTimeout(500);
  ok(!(await p.$eval('[data-header]', (e) => e.classList.contains('is-hidden'))), 'nav returns on scroll up');
  await p.locator('.tray').scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
  ok(await p.$eval('.tray', (e) => e.classList.contains('icons-live')), 'tray icon loops run in view');
  const floatA = await p.$eval('.hero__key--a', (e) => e.style.transform);
  ok(/rotate|matrix|translate/.test(floatA), 'floating keys drifting', floatA);
  const btnDur = await p.$eval('.btn', (e) => getComputedStyle(e).transitionDuration.split(',')[0].trim());
  ok(btnDur === '0.2s', 'button transitions use --dur-2', btnDur);
  // LWS.observe on dynamically inserted cards
  await p.goto(BASE + '/blog/', { waitUntil: 'networkidle' });
  await p.locator('.bfilter__grid').scrollIntoViewIfNeeded(); await p.waitForTimeout(900);
  await p.locator('.bfilter__pills a', { hasText: 'Diagnostics' }).click(); await p.waitForTimeout(300);
  await p.locator('.bfilter__pills a', { hasText: 'All' }).click(); await p.waitForTimeout(400);
  for (const c of await p.$$('.pcard')) { await c.scrollIntoViewIfNeeded(); await p.waitForTimeout(150); }
  await p.waitForTimeout(800);
  const cards = await p.$$eval('.pcard', (els) => ({ n: els.length, hidden: els.filter((e) => getComputedStyle(e).opacity !== '1').length }));
  ok(cards.n === 6 && cards.hidden === 0, 'cards re-inserted by the filter are revealed via LWS.observe', JSON.stringify(cards));
  await ctx.close();

  // Reduced motion
  const rc = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const r = await rc.newPage();
  await r.goto(BASE + '/', { waitUntil: 'networkidle' });
  await r.waitForTimeout(1500);
  const c1 = await r.$eval('.hero .harness', (c) => c.toDataURL().length + ':' + c.toDataURL().slice(-80));
  await r.waitForTimeout(900);
  const c2 = await r.$eval('.hero .harness', (c) => c.toDataURL().length + ':' + c.toDataURL().slice(-80));
  ok(c1 === c2, 'reduced: Harness draws one static frame', c1 === c2 ? 'frozen' : 'changed');
  ok(await r.$eval('.readout__track', (e) => getComputedStyle(e).animationName === 'none'), 'reduced: readout marquee static');
  await r.locator('.tray').scrollIntoViewIfNeeded(); await r.waitForTimeout(400);
  const icDur = await r.$eval('.ic-spin12', (e) => getComputedStyle(e).animationDuration);
  ok(parseFloat(icDur) < 0.001, 'reduced: icon loops run once to their rest frame', icDur);
  ok(!(await r.$('.tray--physics')), 'reduced: no Parts Tray physics');
  const fl1 = await r.$eval('.hero__key--a', (e) => e.style.transform); await r.waitForTimeout(700);
  ok(fl1 === (await r.$eval('.hero__key--a', (e) => e.style.transform)), 'reduced: floating keys still');
  await r.evaluate(() => scrollTo(0, document.documentElement.scrollHeight)); await r.waitForTimeout(600);
  ok(Math.abs(await rot(r, '[data-progress-key] svg')) < 1, 'reduced: progress key static');
  ok((await r.$$eval('[data-reveal]', (els) => els.filter((e) => getComputedStyle(e).opacity !== '1').length)) === 0, 'reduced: all content visible without scrolling');
  await rc.close();
  console.log('motion:', results.motion.filter((x) => !x.ok).length, 'failed of', results.motion.length);
  results.motion.forEach((x) => console.log(`  ${x.ok ? 'PASS' : 'FAIL'}  ${x.what}${x.detail ? '  [' + x.detail + ']' : ''}`));
}

await browser.close();
writeFileSync(`${OUT}/results-${mode}.json`, JSON.stringify(results, null, 2));
if (results.overflow.length) console.log('OVERFLOW', JSON.stringify(results.overflow, null, 1));
if (results.console.length) console.log('CONSOLE', JSON.stringify(results.console.slice(0, 10), null, 1));
if (results.interact.some((r) => !r.ok)) console.log('INTERACT FAILS', JSON.stringify(results.interact.filter((r) => !r.ok), null, 1));
