import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allPosts } from '../lib/posts';

export function GET(context: APIContext) {
  return rss({
    title: 'Toy Auto Center blog',
    description: 'Plain-English notes on auto repair, NYS inspection and Toyota and Lexus care from Toy Auto Center in Blauvelt, NY.',
    site: context.site!,
    trailingSlash: true,
    items: allPosts().map((p) => ({
      title: p.title,
      pubDate: new Date(`${p.date}T12:00:00`),
      description: p.excerpt,
      link: `/blog/${p.slug}/`,
      categories: [p.category],
    })),
    customData: '<language>en-us</language>',
  });
}
