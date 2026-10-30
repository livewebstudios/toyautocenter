import { allPosts, catSlug, dateLabel, categories } from './posts';
import { rel } from './paths';
import type { PostCard } from '../islands/BlogFilter';

export function postCards(url: URL): PostCard[] {
  return allPosts().map((p) => ({
    title: p.title,
    href: rel(url, `/blog/${p.slug}/`),
    date: p.date,
    dateLabel: dateLabel(p.date),
    category: p.category,
    categorySlug: catSlug(p.category),
    excerpt: p.excerpt,
    image: rel(url, p.image.startsWith('/') ? p.image : `/${p.image}`),
    imageAlt: p.imageAlt,
    text: `${p.title} ${p.excerpt} ${p.category} ${p.body}`.toLowerCase(),
  }));
}

export function categoryLinks(url: URL) {
  const used = new Set(allPosts().map((p) => p.category));
  return categories.filter((c) => used.has(c)).map((c) => ({ name: c, slug: catSlug(c), href: rel(url, `/blog/category/${catSlug(c)}/`) }));
}
