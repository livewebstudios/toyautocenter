// Browser-side reader for duration tokens. The CSS minifier rewrites "120ms" as ".12s",
// so a bare parseFloat reads seconds as milliseconds. This handles both units.
/** Duration token in milliseconds. */
export const msOf = (name: string, fallback: number) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!v) return fallback;
  const n = parseFloat(v);
  if (Number.isNaN(n)) return fallback;
  return v.endsWith('ms') ? n : n * 1000;
};
