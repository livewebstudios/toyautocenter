// WCAG 2.2 AA contrast for every text/background pair the site uses. Reads tokens.css.
import { readFileSync } from 'node:fs';
const css = readFileSync('src/styles/tokens.css', 'utf8');
const tok = Object.fromEntries([...css.matchAll(/--(tac-[a-z0-9-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [m[1], m[2]]));
// Composite helpers for alpha, opacity and filters, so states are checked as rendered.
const hx = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const toHex = (c) => '#' + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
const over = (fg, a, bg) => toHex(hx(fg).map((v, i) => v * a + hx(bg)[i] * (1 - a)));
const bright = (c, k) => toHex(hx(c).map((v) => v * k));
const T = (n) => tok[n] ?? n;
const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio0 = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
// [fg, bg, minimum, where]
const PAIRS = [
  ['tac-ink', 'tac-paper', 4.5, 'body text'],
  ['tac-ink', 'tac-mist', 4.5, 'body on tinted sections'],
  ['tac-ink', 'tac-white', 4.5, 'cards'],
  ['tac-ink-soft', 'tac-paper', 4.5, 'secondary text'],
  ['tac-ink-soft', 'tac-mist', 4.5, 'secondary text on mist'],
  ['tac-ink-soft', 'tac-white', 4.5, 'secondary text on cards'],
  ['tac-purple', 'tac-paper', 4.5, 'headings, links, ghost buttons'],
  ['tac-purple', 'tac-mist', 4.5, 'headings on mist'],
  ['tac-purple', 'tac-white', 4.5, 'card headings'],
  ['tac-violet-deep', 'tac-paper', 4.5, 'eyebrows, small links'],
  ['tac-violet-deep', 'tac-mist', 4.5, 'eyebrows on mist'],
  ['tac-violet-deep', 'tac-white', 4.5, 'mono numbers on cards'],
  ['tac-white', 'tac-purple', 4.5, 'primary buttons'],
  ['tac-white', 'tac-grape', 4.5, 'text on grape bands'],
  ['tac-on-dark', 'tac-grape', 4.5, 'body on grape'],
  ['tac-on-dark-soft', 'tac-grape', 4.5, 'secondary on grape'],
  ['tac-on-dark', 'tac-graphite', 4.5, 'footer body'],
  ['tac-on-dark-soft', 'tac-graphite', 4.5, 'footer secondary'],
  ['tac-violet-light', 'tac-grape', 4.5, 'links / eyebrows on grape'],
  ['tac-violet-light', 'tac-graphite', 4.5, 'footer labels'],
  ['tac-amber', 'tac-grape', 4.5, 'amber accents on grape'],
  ['tac-amber', 'tac-graphite', 4.5, 'amber hover on footer'],
  ['tac-grape', 'tac-white', 4.5, 'inverted buttons on dark'],
  ['tac-violet', 'tac-paper', 3, 'large text / icon strokes only (non-text 3:1)'],
  ['tac-purple', 'tac-paper', 3, 'inner focus ring on light grounds (amber outer ring is decorative there)'],
  ['tac-amber', 'tac-grape', 3, 'focus ring on dark grounds'],
];
const ratio = (a, b) => ratio0(T(a), T(b));
const disabledBg = over(tok['tac-purple'], 0.7, tok['tac-paper']);
const disabledFg = over(tok['tac-white'], 0.7, tok['tac-paper']);
PAIRS.push(
  // states
  ['tac-white', bright(tok['tac-purple'], 1.12), 4.5, 'mobile bar BOOK hover (brightness 1.12)'],
  ['tac-white', bright(tok['tac-grape'], 1.12), 4.5, 'mobile bar CALL hover'],
  [disabledFg, disabledBg, 4.5, 'SEND REQUEST while sending (opacity 0.7 on paper)'],
  ['tac-white', 'tac-violet', 4.5, 'text selection (white on violet)'],
  ['tac-ink', 'tac-mist', 4.5, 'mega menu / related link hover background'],
  ['tac-purple', 'tac-mist', 4.5, 'town pill hover, serving chips'],
  ['tac-white', 'tac-purple', 4.5, 'serving chip hover, blog pill active, ghost button hover'],
  ['tac-grape', 'tac-white', 4.5, 'ghost button hover on dark (white fill)'],
  ['tac-ink', over(tok['tac-violet'], 0.07, tok['tac-white']), 4.5, 'dealer table "Toy Auto Center" column'],
  ['tac-white', over(tok['tac-graphite'], 0.78, tok['tac-white']), 4.5, 'photo tag, worst case white pixel under graphite 78%'],
  ['tac-on-dark', over(tok['tac-graphite'], 0.55, over(tok['tac-grape'], 0.7, tok['tac-white'])), 4.5, 'hero readout band, worst case'],
  ['tac-amber', over(tok['tac-graphite'], 0.78, tok['tac-white']), 4.5, 'hero eyebrow chip, worst case white pixel under graphite 78%'],
  // forms and status
  ['tac-field-border', 'tac-white', 3, 'form field boundary (non-text)'],
  ['tac-error-border', 'tac-white', 3, 'invalid field boundary (non-text)'],
  ['tac-error', 'tac-paper', 4.5, 'inline field errors'],
  ['tac-error', 'tac-mist', 4.5, 'inline field errors on mist'],
  ['tac-error-ink', 'tac-error-bg', 4.5, 'form failure message'],
  ['tac-success-ink', 'tac-success-bg', 4.5, 'form success message'],
  ['tac-ink-soft', 'tac-white', 4.5, 'placeholder text (set to ink-soft)'],
  // map
  ['tac-ink', 'tac-mist', 4.5, 'map town labels (mist halo)'],
  ['tac-ink-soft', 'tac-map-water', 4.5, 'HUDSON RIVER label on water'],
  ['tac-purple', 'tac-mist', 3, 'Route 303 line on map (non-text)'],
);
let fail = 0;
for (const [fg, bg, min, where] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) fail++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${fg} on ${bg}  ${where}`);
}
console.log(`\ncontrast: ${PAIRS.length} pairs, ${fail} failing`);
process.exit(fail ? 1 : 0);
