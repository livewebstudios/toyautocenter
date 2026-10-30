// Lighthouse mobile (default throttling) on the four budget pages. Needs `npm run preview` on 4322.
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';

const BASE = process.env.BASE || 'http://localhost:4322';
const CFT = `${homedir()}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const pages = (process.argv[2] ? process.argv[2].split(',') : ['/', '/services/nys-inspection/', '/service-area/tappan-ny/', '/blog/check-engine-light-common-codes/']);
mkdirSync('qa/lighthouse', { recursive: true });
const chrome = await chromeLauncher.launch({ chromePath: existsSync(CFT) ? CFT : undefined, chromeFlags: ['--headless=new', '--no-first-run'] });
const rows = [];
const RUNS = Number(process.env.RUNS || 3);
for (const p of pages) {
  const runs = [];
  for (let i = 0; i < RUNS; i++) runs.push(await lighthouse(BASE + p, { port: chrome.port, output: 'json', logLevel: 'error', formFactor: 'mobile', throttlingMethod: process.env.THROTTLE || 'simulate', screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false } }));
  // median run by performance score
  runs.sort((a, b) => a.lhr.categories.performance.score - b.lhr.categories.performance.score);
  const lhr = runs[Math.floor(runs.length / 2)].lhr;
  const s = (k) => Math.round((lhr.categories[k].score || 0) * 100);
  const a = (k) => lhr.audits[k]?.displayValue ?? '';
  const row = { page: p, perf: s('performance'), a11y: s('accessibility'), bp: s('best-practices'), seo: s('seo'), LCP: a('largest-contentful-paint'), CLS: a('cumulative-layout-shift'), TBT: a('total-blocking-time'), FCP: a('first-contentful-paint'), runs: runs.map((x) => Math.round(x.lhr.categories.performance.score * 100)).join('/'), LCPel: lhr.audits['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node?.snippet?.slice(0, 90) ?? '' };
  rows.push(row);
  writeFileSync(`qa/lighthouse/${p.replace(/\//g, '_') || 'home'}.json`, JSON.stringify(lhr));
  const fails = Object.values(lhr.audits).filter((x) => x.score !== null && x.score < 0.9 && x.scoreDisplayMode === 'binary').map((x) => x.id);
  if (fails.length) console.log(p, 'failing binary audits:', fails.join(', '));
}
await chrome.kill();
console.table(rows);
writeFileSync('qa/lighthouse/summary.json', JSON.stringify(rows, null, 2));
