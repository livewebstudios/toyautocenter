// Horizontal scroll-snap rail of real reviews. Only rendered when src/data/reviews.json has entries.
import { useRef } from 'react';

export interface Review { author: string; rating: number; date: string; text: string; source: string; url: string }

export default function ReviewsRail({ reviews }: { reviews: Review[] }) {
  const rail = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return (
    <div className="rrail">
      <ul ref={rail} className="rrail__list" tabIndex={0} aria-label="Customer reviews, scroll horizontally">
        {reviews.map((r) => (
          <li key={r.url + r.author} className="rrail__item">
            <figure>
              <p className="rrail__stars" aria-label={`${r.rating} out of 5 stars`}>{'★'.repeat(Math.round(r.rating))}</p>
              <blockquote><p>{r.text}</p></blockquote>
              <figcaption>
                <span className="rrail__author">{r.author}</span>
                <a href={r.url} rel="noopener">{r.source}, {new Date(r.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</a>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="rrail__nav">
        <button type="button" onClick={() => move(-1)} aria-label="Previous reviews">‹</button>
        <button type="button" onClick={() => move(1)} aria-label="Next reviews">›</button>
      </div>
    </div>
  );
}
