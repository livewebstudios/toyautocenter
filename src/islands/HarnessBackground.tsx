// "Harness": a sparse field of orthogonal wiring traces with light pulses travelling along them.
// Canvas 2D, seeded so each page is stable but different. Pauses offscreen and on hidden tabs,
// drops to 30fps on low-core devices, draws one static frame under reduced motion.
import { useEffect, useRef } from 'react';

interface Props {
  variant?: 'light' | 'dark';
  density?: 'low' | 'med' | 'high';
  seed?: number;
  className?: string;
}

type Pt = { x: number; y: number };
interface Trace { pts: Pt[]; cum: number[]; len: number; alpha: number; glow: number; blink: number }
interface Pulse { t: number; pos: number; speed: number; size: number; wait: number }

function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COUNTS = { low: [18, 9], med: [22, 10], high: [26, 12] } as const;
const PULSES = { low: [6, 3], med: [8, 4], high: [10, 5] } as const;

function rgbOf(varName: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || fallback;
  const m = v.replace('#', '');
  const n = parseInt(m.length === 3 ? m.split('').map((c) => c + c).join('') : m, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(',');
}

function pointAt(tr: Trace, d: number): Pt {
  const { pts, cum } = tr;
  let i = 1;
  while (i < cum.length - 1 && cum[i] < d) i++;
  const seg = cum[i] - cum[i - 1] || 1;
  const k = Math.min(1, Math.max(0, (d - cum[i - 1]) / seg));
  return { x: pts[i - 1].x + (pts[i].x - pts[i - 1].x) * k, y: pts[i - 1].y + (pts[i].y - pts[i - 1].y) * k };
}

function distToTrace(tr: Trace, p: Pt) {
  let best = Infinity;
  for (let i = 1; i < tr.pts.length; i++) {
    const a = tr.pts[i - 1], b = tr.pts[i];
    const dx = b.x - a.x, dy = b.y - a.y;
    const l2 = dx * dx + dy * dy || 1;
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / l2));
    const ex = a.x + dx * t - p.x, ey = a.y + dy * t - p.y;
    best = Math.min(best, ex * ex + ey * ey);
  }
  return Math.sqrt(best);
}

function buildTraces(w: number, h: number, count: number, rand: () => number, dark: boolean): Trace[] {
  const out: Trace[] = [];
  for (let n = 0; n < count; n++) {
    const dir = rand() < 0.5 ? 1 : -1;
    let x = dir === 1 ? -40 + rand() * w * 0.7 : w * 0.3 + rand() * (w + 40) * 0.7;
    let y = 16 + rand() * (h - 32);
    const pts: Pt[] = [{ x, y }];
    const segs = 3 + Math.floor(rand() * 5);
    for (let s = 0; s < segs; s++) {
      if (s % 2 === 0) {
        x += dir * (120 + rand() * 360);
      } else {
        const jog = (24 + rand() * 36) * (rand() < 0.5 ? -1 : 1);
        const diagonal = rand() < 0.65;
        if (diagonal) x += dir * Math.abs(jog);
        y = Math.max(8, Math.min(h - 8, y + jog));
      }
      pts.push({ x, y });
    }
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    const alpha = dark ? 0.08 + rand() * 0.06 : 0.1 + rand() * 0.08;
    out.push({ pts, cum, len: cum[cum.length - 1], alpha, glow: 0, blink: 0 });
  }
  return out;
}

export default function HarnessBackground({ variant = 'light', density = 'med', seed = 1, className = '' }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return;

    const dark = variant === 'dark';
    const traceRGB = dark ? rgbOf('--tac-steel', '#d2d3d4') : rgbOf('--tac-violet', '#7e4edc');
    const pulseRGB = dark ? rgbOf('--tac-amber', '#f2a93b') : rgbOf('--tac-violet', '#7e4edc');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || !!nav.connection?.saveData;
    const frameMs = lowPower ? 1000 / 30 : 0;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);

    let w = 0, h = 0;
    let traces: Trace[] = [];
    let pulses: Pulse[] = [];
    let rand = prng(seed);
    let raf = 0, last = 0, lastDraw = 0;
    let visible = true;
    let speedMul = 1;
    let lastScrollY = window.scrollY, lastScrollT = performance.now();
    const pointer = { x: -9999, y: -9999 };

    const spawn = (p: Pulse, initial = false) => {
      p.t = Math.floor(rand() * traces.length);
      p.pos = initial ? rand() * traces[p.t].len : 0;
      p.speed = 90 + rand() * 70;
      p.size = 28 + rand() * 20;
      p.wait = initial ? 0 : 0.8 + rand() * 1.7;
    };

    const layout = () => {
      const r = host.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rand = prng(seed);
      const mobile = w < 768;
      traces = buildTraces(w, h, COUNTS[density][mobile ? 1 : 0], rand, dark);
      pulses = Array.from({ length: PULSES[density][mobile ? 1 : 0] }, () => {
        const p = { t: 0, pos: 0, speed: 0, size: 0, wait: 0 };
        spawn(p, true);
        return p;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.lineJoin = 'round';
      for (const tr of traces) {
        const a = Math.min(0.4, tr.alpha + tr.glow);
        ctx.strokeStyle = `rgba(${traceRGB},${a})`;
        ctx.beginPath();
        ctx.moveTo(tr.pts[0].x, tr.pts[0].y);
        for (let i = 1; i < tr.pts.length; i++) ctx.lineTo(tr.pts[i].x, tr.pts[i].y);
        ctx.stroke();
        const end = tr.pts[tr.pts.length - 1];
        ctx.beginPath();
        ctx.arc(end.x, end.y, 3, 0, Math.PI * 2);
        if (tr.blink > 0) {
          ctx.fillStyle = `rgba(${pulseRGB},0.75)`;
          ctx.fill();
        }
        ctx.stroke();
      }
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      for (const p of pulses) {
        if (p.wait > 0) continue;
        const tr = traces[p.t];
        const head = Math.min(p.pos, tr.len);
        const tail = Math.max(0, head - p.size);
        if (head - tail < 1) continue;
        const a = pointAt(tr, tail), b = pointAt(tr, head);
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        g.addColorStop(0, `rgba(${pulseRGB},0)`);
        g.addColorStop(1, `rgba(${pulseRGB},0.55)`);
        ctx.strokeStyle = g;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        for (let i = 1; i < tr.cum.length; i++) if (tr.cum[i] > tail && tr.cum[i] < head) ctx.lineTo(tr.pts[i].x, tr.pts[i].y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    };

    const step = (now: number) => {
      raf = requestAnimationFrame(step);
      if (frameMs && now - lastDraw < frameMs) return;
      lastDraw = now;
      const dt = Math.min(0.05, (now - (last || now)) / 1000);
      last = now;
      speedMul += (1 - speedMul) * Math.min(1, dt / 0.5);
      for (const tr of traces) {
        tr.blink = Math.max(0, tr.blink - dt);
        const target = finePointer && distToTrace(tr, pointer) < 160 ? 0.08 : 0;
        tr.glow += (target - tr.glow) * Math.min(1, dt * 8);
      }
      for (const p of pulses) {
        if (p.wait > 0) {
          p.wait -= dt;
          continue;
        }
        p.pos += p.speed * speedMul * dt;
        const tr = traces[p.t];
        if (p.pos - p.size > tr.len) spawn(p);
        else if (p.pos >= tr.len && tr.blink <= 0 && p.pos - p.speed * speedMul * dt < tr.len) tr.blink = 0.12;
      }
      draw();
    };

    const start = () => {
      if (raf || reduced || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    layout();
    draw();

    const ro = new ResizeObserver(() => {
      const r = host.getBoundingClientRect();
      if (Math.abs(r.width - w) < 2 && Math.abs(r.height - h) < 40) return;
      layout();
      draw();
    });
    ro.observe(host);

    if (reduced) {
      // One composed frame with the pulses frozen mid-trace.
      for (const p of pulses) p.pos = Math.max(p.size, p.pos);
      draw();
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(host);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    const onScroll = () => {
      const now = performance.now();
      const v = Math.abs(window.scrollY - lastScrollY) / Math.max(1, now - lastScrollT);
      lastScrollY = window.scrollY;
      lastScrollT = now;
      speedMul = Math.max(speedMul, Math.min(2, 1 + v * 0.6));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    if (finePointer) window.addEventListener('pointermove', onMove, { passive: true });
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
    };
  }, [variant, density, seed]);

  return <canvas ref={ref} className={`harness harness--${variant} ${className}`} aria-hidden="true" />;
}
