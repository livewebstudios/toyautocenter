// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const EXCLUDE = /\/(admin|dev)\/|\/404\/?$/;

export default defineConfig({
  site: 'https://toyautocenter.net',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: false,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !EXCLUDE.test(page),
      serialize(item) {
        const u = item.url;
        const hub = /toyautocenter\.net\/(services|service-area|blog)?\/?$/.test(u);
        item.priority = u === 'https://toyautocenter.net/' ? 1.0 : hub ? 0.9 : 0.8;
        item.changefreq = /\/blog\//.test(u) ? 'weekly' : 'monthly';
        return item;
      },
    }),
  ],
  vite: {
    build: { assetsInlineLimit: 2048 },
  },
});
