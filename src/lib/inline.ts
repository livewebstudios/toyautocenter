// Renders the two inline marks used in copy data: [anchor](/path/) and **bold**.
import { rel } from './paths';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text: string, url: URL | string): string {
  let out = esc(text);
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, anchor: string, href: string) => {
    const h = href.replace(/&amp;/g, '&');
    const external = /^https?:\/\//.test(h);
    const target = external ? ` rel="noopener"` : '';
    return `<a href="${esc(external ? h : rel(url, h))}"${target}>${anchor}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return out;
}

/** Plain text version (for schema, meta, FAQ JSON-LD). */
export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}

export function wordCount(parts: (string | undefined)[]): number {
  return parts.filter(Boolean).join(' ').split(/\s+/).filter(Boolean).length;
}

/**
 * Jon's voice rule: paragraphs stay short. Any copy paragraph over 70 words is split at the
 * sentence end closest to its middle (recursively). Inline marks are never cut.
 */
export function splitLong(text: string): string[] {
  const words = text.split(/\s+/).length;
  if (words <= 70) return [text];
  const ends = [...text.matchAll(/[.?!:](?=\s+[A-Z(*\[])/g)]
    .map((m) => m.index! + 1)
    .filter((i) => (text.slice(0, i).match(/\[/g) || []).length === (text.slice(0, i).match(/\]\(/g) || []).length);
  if (!ends.length) return [text];
  const mid = text.length / 2;
  const cut = ends.reduce((a, b) => (Math.abs(b - mid) < Math.abs(a - mid) ? b : a));
  const a = text.slice(0, cut).trim();
  const b = text.slice(cut).trim();
  if (a.endsWith(':')) return [text];
  return [...splitLong(a), ...splitLong(b)];
}
