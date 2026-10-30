// Map of processed photos in src/assets/images, keyed by file name without extension.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.jpg', { eager: true });

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.jpg$/, ''), mod.default]),
);

export function photo(key: string): ImageMetadata {
  const p = photos[key];
  if (!p) throw new Error(`Unknown photo: ${key}`);
  return p;
}

// Wide hero backgrounds built by scripts/hero-compose.mjs (subject on the right, room for text on the left).
const wideFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/images/wide/*.jpg', { eager: true });
export const widePhotos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(wideFiles).map(([path, mod]) => [path.split('/').pop()!.replace(/\.jpg$/, ''), mod.default]),
);
export function wide(key: string): ImageMetadata {
  const p = widePhotos[key];
  if (!p) throw new Error(`Unknown wide photo: ${key}`);
  return p;
}
export const HERO_WIDTHS = [640, 960, 1400, 1920, 2400];
export const HERO_SIZES = '100vw';

// <link rel=preload> data for a wide hero, passed to Base's `preload` prop so the LCP image starts early.
import { getImage } from 'astro:assets';
export async function heroPreload(key: string) {
  const src = wide(key);
  const img = await getImage({ src, widths: HERO_WIDTHS.filter((w) => w <= src.width), format: 'avif', quality: 42 });
  return { srcset: img.srcSet.attribute, sizes: HERO_SIZES, type: 'image/avif' };
}
