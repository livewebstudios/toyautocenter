// Blog posts live in one JSON file (Decap file collection). Helpers for routes, dates and markdown.
import { marked } from 'marked';
import posts from '../data/posts.json';
import { rel } from './paths';
import { splitLong } from './inline';

export interface Post {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
  image: string;
  imageAlt: string;
}

export const categories = ['Maintenance', 'Toyota & Lexus', 'Inspections', 'Diagnostics', 'Shop News'] as const;
export const catSlug = (c: string) => c.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const FALLBACK_IMAGE = '/images/uploads/hero-shop-bay-blauvelt.jpg';

export function allPosts(): Post[] {
  return [...((posts as { posts: Post[] }).posts ?? [])]
    .filter((p) => p.slug && p.title && p.body)
    .map((p) => ({
      ...p,
      date: String(p.date).slice(0, 10),
      image: p.image || FALLBACK_IMAGE,
      imageAlt: p.image ? p.imageAlt || '' : 'Service bay at Toy Auto Center with a car raised on a lift',
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const dateLabel = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

/** Markdown to HTML with internal links and images made relative to the current page. */
export function renderBody(md: string, url: URL): string {
  // Short paragraphs (Jon's voice rule): split long plain paragraphs before parsing.
  const blocks = md.split(/\n{2,}/).flatMap((b) => (/^\s*([#>*\-|]|\d+\.)/.test(b) ? [b] : splitLong(b.replace(/\n/g, ' '))));
  const html = marked.parse(blocks.join('\n\n'), { async: false, gfm: true }) as string;
  return html
    .replace(/(href|src)="(\/[^"]*)"/g, (_m, attr: string, path: string) => `${attr}="${rel(url, path)}"`)
    .replace(/<a href="(https?:[^"]+)"/g, '<a href="$1" rel="noopener"')
    .replace(/<img /g, '<img loading="lazy" decoding="async" ');
}

export const readingMinutes = (md: string) => Math.max(1, Math.round(md.split(/\s+/).length / 220));
