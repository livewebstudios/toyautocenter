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
