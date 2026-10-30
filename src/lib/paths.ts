// Relative-path helpers (LWS path rule). Every internal link and asset goes through these.
// Pages are built as directories with trailing slashes, so depth = number of path segments.

export function depthOf(pathname: string): number {
  return pathname.split('/').filter(Boolean).length;
}

/** Prefix that walks from the current page back to the site root: "./", "../", "../../". */
export function base(url: URL | string): string {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const d = depthOf(pathname);
  return d === 0 ? './' : '../'.repeat(d);
}

/** Root-style path ("/services/") -> path relative to the current page. Leaves #, http, mailto, tel alone. */
export function rel(url: URL | string, path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const b = base(url);
  const clean = path.slice(1);
  if (!clean) return b;
  return (b === './' ? '' : b) + clean;
}

/** Absolute URL, only for canonical, OG, JSON-LD, sitemap and RSS. */
export function abs(path: string): string {
  return new URL(path, 'https://toyautocenter.net').href;
}
