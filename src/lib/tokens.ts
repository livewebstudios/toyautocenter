// Build-time mirror of src/styles/tokens.css for places CSS variables cannot reach
// (OG images rendered by satori, <meta name="theme-color">). Parsed, never duplicated.
import css from '../styles/tokens.css?raw';

export const tokens: Record<string, string> = Object.fromEntries(
  [...css.matchAll(/--(tac-[a-z0-9-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]),
);
export const tok = (name: string) => {
  const v = tokens[name];
  if (!v) throw new Error(`Unknown token --${name}`);
  return v;
};
/** "#d2d3d4" -> "210,211,212" for rgba() strings */
export const rgbOf = (name: string) => {
  const n = parseInt(tok(name).replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(',');
};
