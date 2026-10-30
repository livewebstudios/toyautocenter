// "Parts Tray": the 13 services as a grid of cards that physically move on fine pointers.
// Pointer repulsion (140px, lean up to 14px / 3deg), drag with spring return (k 120, c 14),
// cards the dragged one passes over nudge aside. Click still navigates (6px / 180ms threshold).
// Keyboard: roving tabindex, arrow keys move focus across the grid.
import { useEffect, useRef, type KeyboardEvent } from 'react';

export interface TrayItem { n: string; name: string; symptom: string; href: string; icon: string }
interface Props { items: TrayItem[]; headingLevel?: 'h3' | 'h4' }

interface Body { x: number; y: number; r: number; vx: number; vy: number; vr: number; tx: number; ty: number; tr: number }

const K = 120;
const C = 14;
const REACH = 140;

export default function PartsTray({ items, headingLevel = 'h3' }: Props) {
  const root = useRef<HTMLUListElement>(null);
  const H = headingLevel;

  useEffect(() => {
    const ul = root.current;
    if (!ul) return;
    const cards = [...ul.querySelectorAll<HTMLAnchorElement>('.tray__card')];
    // Roving tabindex once hydrated (without JS every card stays in the tab order).
    cards.forEach((c, j) => (c.tabIndex = j === 0 ? 0 : -1));
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    ul.classList.add('tray--physics');

    const bodies: Body[] = cards.map(() => ({ x: 0, y: 0, r: 0, vx: 0, vy: 0, vr: 0, tx: 0, ty: 0, tr: 0 }));
    let rects: DOMRect[] = [];
    const measure = () => {
      rects = cards.map((c, i) => {
        const r = c.getBoundingClientRect();
        // rest rect: remove current offset
        return new DOMRect(r.left - bodies[i].x, r.top - bodies[i].y, r.width, r.height);
      });
    };
    let pointer: { x: number; y: number } | null = null;
    let drag: { i: number; sx: number; sy: number; t: number; moved: boolean; id: number } | null = null;
    let suppressClick = -1;
    let raf = 0;
    let inView = false;
    let last = 0;

    const wake = () => {
      if (!raf && inView) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const tick = (now: number) => {
      raf = 0;
      const dt = Math.min(0.033, last ? (now - last) / 1000 : 0.016);
      last = now;
      measure();
      let energy = 0;
      bodies.forEach((b, i) => {
        if (drag && drag.i === i) return;
        b.tx = 0; b.ty = 0; b.tr = 0;
        const rc = rects[i];
        const cx = rc.left + rc.width / 2;
        const cy = rc.top + rc.height / 2;
        if (pointer && !drag) {
          const dx = cx - pointer.x, dy = cy - pointer.y;
          const d = Math.hypot(dx, dy);
          const edge = Math.max(0, d - Math.min(rc.width, rc.height) / 2);
          if (edge < REACH && d > 0.01) {
            const f = 1 - edge / REACH;
            b.tx = (dx / d) * 14 * f;
            b.ty = (dy / d) * 14 * f;
            b.tr = Math.max(-3, Math.min(3, (dx / d) * 3 * f));
          }
        }
        if (drag) {
          const db = bodies[drag.i], dr = rects[drag.i];
          const dcx = dr.left + dr.width / 2 + db.x, dcy = dr.top + dr.height / 2 + db.y;
          const dx = cx - dcx, dy = cy - dcy;
          const ox = rc.width / 2 + dr.width / 2 - Math.abs(dx);
          const oy = rc.height / 2 + dr.height / 2 - Math.abs(dy);
          if (ox > 0 && oy > 0) {
            const d = Math.hypot(dx, dy) || 1;
            const push = Math.min(28, Math.min(ox, oy) * 0.35);
            b.tx = (dx / d) * push;
            b.ty = (dy / d) * push;
            b.tr = Math.max(-3, Math.min(3, (dx / d) * 2.5));
          }
        }
        b.vx += (K * (b.tx - b.x) - C * b.vx) * dt;
        b.vy += (K * (b.ty - b.y) - C * b.vy) * dt;
        b.vr += (K * (b.tr - b.r) - C * b.vr) * dt;
        b.x += b.vx * dt; b.y += b.vy * dt; b.r += b.vr * dt;
        energy += Math.abs(b.vx) + Math.abs(b.vy) + Math.abs(b.tx - b.x) + Math.abs(b.ty - b.y) + Math.abs(b.vr);
      });
      bodies.forEach((b, i) => {
        cards[i].style.transform = Math.abs(b.x) + Math.abs(b.y) + Math.abs(b.r) < 0.02 && !(drag && drag.i === i)
          ? ''
          : `translate3d(${b.x.toFixed(2)}px, ${b.y.toFixed(2)}px, 0) rotate(${b.r.toFixed(2)}deg)`;
      });
      if (energy > 0.05 || drag || pointer) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      pointer = { x: e.clientX, y: e.clientY };
      if (drag && e.pointerId === drag.id) {
        const b = bodies[drag.i];
        const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
        if (!drag.moved && Math.hypot(dx, dy) > 6) {
          drag.moved = true;
          cards[drag.i].classList.add('is-dragging');
        }
        if (drag.moved) {
          b.x = dx; b.y = dy;
          b.r = Math.max(-4, Math.min(4, dx * 0.02));
          b.vx = b.vy = b.vr = 0;
        }
      }
      wake();
    };
    const onLeave = () => {
      pointer = null;
      wake();
    };
    const onDown = (i: number) => (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      drag = { i, sx: e.clientX - bodies[i].x, sy: e.clientY - bodies[i].y, t: performance.now(), moved: false, id: e.pointerId };
      cards[i].setPointerCapture(e.pointerId);
    };
    const onUp = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const held = performance.now() - drag.t;
      if (drag.moved && (held > 180 || Math.hypot(bodies[drag.i].x, bodies[drag.i].y) > 6)) suppressClick = drag.i;
      cards[drag.i].classList.remove('is-dragging');
      drag = null;
      wake();
    };
    const onClick = (i: number) => (e: MouseEvent) => {
      if (suppressClick === i) {
        e.preventDefault();
        suppressClick = -1;
      }
    };

    const downs = cards.map((_, i) => onDown(i));
    const clicks = cards.map((_, i) => onClick(i));
    cards.forEach((c, i) => {
      c.addEventListener('pointerdown', downs[i]);
      c.addEventListener('click', clicks[i]);
      c.addEventListener('dragstart', (ev) => ev.preventDefault());
    });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    ul.addEventListener('pointerleave', onLeave);
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) wake();
      else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(ul);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      ul.removeEventListener('pointerleave', onLeave);
      cards.forEach((c, i) => {
        c.removeEventListener('pointerdown', downs[i]);
        c.removeEventListener('click', clicks[i]);
      });
    };
  }, []);

  const onKey = (e: KeyboardEvent<HTMLAnchorElement>) => {
    const ul = root.current;
    if (!ul) return;
    const cards = [...ul.querySelectorAll<HTMLAnchorElement>('.tray__card')];
    const i = cards.indexOf(e.currentTarget);
    const cols = Math.max(1, Math.round(ul.clientWidth / cards[0].getBoundingClientRect().width));
    const map: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols, Home: -i, End: cards.length - 1 - i };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = Math.max(0, Math.min(cards.length - 1, i + map[e.key]));
    cards.forEach((c, j) => (c.tabIndex = j === next ? 0 : -1));
    cards[next].focus();
  };

  return (
    <ul ref={root} className="tray" data-live-icons role="list">
      {items.map((s) => (
        <li key={s.href} className="tray__cell">
          <a className="tray__card" href={s.href} onKeyDown={onKey} draggable={false}>
            <span className="tray__top">
              <span className="tray__icon" dangerouslySetInnerHTML={{ __html: s.icon }} />
              <span className="tray__n">{s.n}</span>
            </span>
            <H className="tray__name">{s.name}</H>
            <span className="tray__sym">{s.symptom}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
