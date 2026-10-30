// Real reviews only. Drop a reviews.json (array of {author, rating, date, text, source, url})
// into src/data/ and the rail, the Review schema and (with a source) AggregateRating switch on.
import type { Review } from '../islands/ReviewsRail';

const files = import.meta.glob<{ default: unknown }>('../data/reviews.json', { eager: true });

export async function getReviews(): Promise<{ list: Review[]; aggregate: { rating: string; count: number } | null }> {
  const mod = Object.values(files)[0];
  const raw = mod?.default;
  const list = Array.isArray(raw)
    ? (raw as Review[]).filter((r) => r && r.author && r.text && r.url && r.source && typeof r.rating === 'number')
    : [];
  // AggregateRating only when the file itself declares a sourced aggregate: { aggregate: {rating, count, source} }.
  const agg = raw && !Array.isArray(raw) && typeof raw === 'object' ? (raw as { aggregate?: { rating: string; count: number; source: string } }).aggregate : undefined;
  return { list, aggregate: agg && agg.source ? { rating: agg.rating, count: agg.count } : null };
}
