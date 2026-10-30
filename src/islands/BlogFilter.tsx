// Blog index: category pills (real links, so they work without JS), a search box that backs the
// WebSite SearchAction (?q=), and the post grid. With JS, pills and search filter in place.
import { useEffect, useMemo, useRef, useState } from 'react';

export interface PostCard {
  title: string;
  href: string;
  date: string;
  dateLabel: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  text: string;
}
interface Props {
  posts: PostCard[];
  categories: { name: string; slug: string; href: string }[];
  allHref: string;
  active?: string;
}

declare global {
  interface Window { LWS?: { observe: (el?: ParentNode) => void } }
}

export default function BlogFilter({ posts, categories, allHref, active = '' }: Props) {
  const [cat, setCat] = useState(active);
  const [q, setQ] = useState('');
  const grid = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(location.search).get('q');
    if (p) setQ(p);
  }, []);

  const shown = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((p) => (!cat || p.categorySlug === cat) && terms.every((t) => p.text.includes(t)));
  }, [posts, cat, q]);

  // Cards inserted by filtering or search get the same reveal as server-rendered ones.
  useEffect(() => {
    if (grid.current) window.LWS?.observe(grid.current);
  }, [shown]);

  const pick = (slug: string, href: string) => (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    setCat(slug);
    history.replaceState(null, '', href);
  };

  return (
    <div className="bfilter">
      <div className="bfilter__bar">
        <nav aria-label="Blog categories">
          <ul className="bfilter__pills">
            <li><a href={allHref} className={!cat ? 'is-active' : ''} aria-current={!cat ? 'page' : undefined} onClick={pick('', allHref)}>All</a></li>
            {categories.map((c) => (
              <li key={c.slug}>
                <a href={c.href} className={cat === c.slug ? 'is-active' : ''} aria-current={cat === c.slug ? 'page' : undefined} onClick={pick(c.slug, c.href)}>{c.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <form className="bfilter__search" role="search" action={allHref} method="get" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="blog-q" className="visually-hidden">Search the blog</label>
          <input id="blog-q" name="q" type="search" placeholder="Search posts: brakes, P0420, hybrid" value={q} onChange={(e) => setQ(e.target.value)} />
        </form>
      </div>
      <p className="bfilter__count" role="status" aria-live="polite">{shown.length} {shown.length === 1 ? 'post' : 'posts'}{q ? ` matching "${q}"` : ''}</p>
      <ul className="bfilter__grid" ref={grid}>
        {shown.map((p) => (
          <li key={p.href} className="pcard" data-reveal="">
            <a href={p.href} className="pcard__link">
              <span className="pcard__media"><img src={p.image} alt={p.imageAlt} width={1200} height={750} loading="lazy" decoding="async" /></span>
              <span className="pcard__meta"><span className="pcard__cat">{p.category}</span><time dateTime={p.date}>{p.dateLabel}</time></span>
              <h2 className="pcard__title">{p.title}</h2>
              <span className="pcard__excerpt">{p.excerpt}</span>
              <span className="pcard__cta">READ THE POST</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
