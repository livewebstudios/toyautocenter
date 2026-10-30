// One motion system. Everything that moves on scroll lives here, under gsap.matchMedia()
// with a reduced-motion branch. Islands (Harness, PartsTray) handle their own loops.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);

/* ---------- Timing comes from tokens.css, so CSS and GSAP share one set of numbers ---------- */
const rootStyle = getComputedStyle(document.documentElement);
const cssVar = (name: string) => rootStyle.getPropertyValue(name).trim();
/** Duration token ("460ms" or "8s") in seconds. */
const sec = (name: string, fallback: number) => {
  const v = cssVar(name);
  if (!v) return fallback;
  return v.endsWith('ms') ? parseFloat(v) / 1000 : parseFloat(v);
};
/** Easing token: the same cubic-bezier the CSS uses, built as a GSAP CustomEase. */
const easeOf = (name: string, fallback: string) => {
  const m = cssVar(name).match(/cubic-bezier\(([^)]+)\)/);
  if (!m) return fallback;
  const [x1, y1, x2, y2] = m[1].split(',').map((n) => parseFloat(n));
  return CustomEase.create(name.slice(2), `M0,0 C${x1},${y1} ${x2},${y2} 1,1`);
};
const T = {
  wind: sec('--dur-wind', 0.46),
  windStagger: sec('--stagger-wind', 0.12),
  click: sec('--dur-click', 0.18),
  badge: sec('--dur-badge', 0.7),
  keyTurn: sec('--dur-key-turn', 1.1),
  float: sec('--loop-float', 8),
  stagger: sec('--stagger', 0.06),
};
const E = {
  mech: easeOf('--ease-mech', 'back.out(1.4)'),
  out: easeOf('--ease-out', 'power3.out'),
  click: easeOf('--ease-click', 'power2.out'),
  inout: easeOf('--ease-inout', 'sine.inOut'),
};

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const reducedQuery = '(prefers-reduced-motion: reduce)';

/* ---------- Header: solid after 80px, hide on scroll down, return on scroll up ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const mobileBar = document.querySelector<HTMLElement>('[data-mobile-bar]');
let lastY = window.scrollY;
let ticking = false;
let bookingVisible = false;
const onScroll = () => {
  const y = window.scrollY;
  if (header) {
    header.classList.toggle('is-scrolled', y > 80);
    const menuOpen = document.documentElement.classList.contains('menu-open') || header.querySelector('.is-open');
    const down = y > lastY + 4 && y > 240;
    const up = y < lastY - 4;
    if (down && !menuOpen) header.classList.add('is-hidden');
    else if (up || y < 240) header.classList.remove('is-hidden');
  }
  mobileBar?.classList.toggle('is-hidden', bookingVisible);
  lastY = y;
  ticking = false;
};
window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(onScroll);
  }
}, { passive: true });
onScroll();
header?.addEventListener('focusin', () => header.classList.remove('is-hidden'));

/* ---------- Mobile CALL/BOOK bar hides while the booking form is on screen ---------- */
const booking = document.querySelector('[data-booking]');
if (booking && mobileBar) {
  new IntersectionObserver(([e]) => {
    bookingVisible = e.isIntersecting;
    mobileBar.classList.toggle('is-hidden', bookingVisible);
  }, { rootMargin: '0px 0px -20% 0px' }).observe(booking);
}

/* ---------- Service icon idle loops only while in view ---------- */
const iconIO = new IntersectionObserver((entries) => {
  for (const e of entries) e.target.classList.toggle('icons-live', e.isIntersecting);
}, { rootMargin: '80px' });

/* ---------- Hero video: after load, desktop only, never under reduced motion or Save-Data ---------- */
const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (video) {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  const ok = matchMedia('(min-width: 768px)').matches && !matchMedia(reducedQuery).matches && !nav.connection?.saveData;
  const loadVideo = () => {
    $$<HTMLSourceElement>('source[data-src]', video).forEach((s) => (s.src = s.dataset.src!));
    video.load();
    video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
    video.play().catch(() => {});
  };
  if (ok) {
    if (document.readyState === 'complete') setTimeout(loadVideo, 200);
    else window.addEventListener('load', () => setTimeout(loadVideo, 200), { once: true });
  }
}

/* ---------- Scroll-linked behaviors any element can opt into ---------- */
const isReduced = () => matchMedia(reducedQuery).matches;
const within = <T extends Element = HTMLElement>(root: ParentNode, sel: string) =>
  [...(root instanceof Element && root.matches(sel) ? [root as unknown as T] : []), ...$$<T>(sel, root)];

/**
 * LWS.observe(el): wire reveals, dividers, idle icons and the deal badge for content inserted
 * after load (the blog filter calls it). Safe to call repeatedly; handled elements are skipped.
 */
function observe(root: ParentNode = document) {
  within(root, '[data-live-icons]').forEach((el) => {
    if (el.dataset.lwsIcons) return;
    el.dataset.lwsIcons = '1';
    iconIO.observe(el);
  });
  const reveals = within(root, '[data-reveal]').filter((el) => !el.classList.contains('is-in') && !el.dataset.lwsReveal);
  const dividers = within(root, '[data-divider]').filter((el) => !el.classList.contains('is-drawn') && !el.dataset.lwsDivider);
  if (isReduced()) {
    reveals.forEach((el) => el.classList.add('is-in'));
    dividers.forEach((el) => el.classList.add('is-drawn'));
    return;
  }
  reveals.forEach((el) => (el.dataset.lwsReveal = '1'));
  dividers.forEach((el) => (el.dataset.lwsDivider = '1'));
  /* Reveals: fade up 16px over --dur-4, stagger --stagger, once (transition lives in CSS). */
  if (reveals.length) {
    ScrollTrigger.batch(reveals, {
      start: 'top 88%',
      once: true,
      onEnter: (els) => els.forEach((el, i) => {
        (el as HTMLElement).style.setProperty('--reveal-delay', `${Math.round(i * T.stagger * 1000)}ms`);
        el.classList.add('is-in');
      }),
    });
  }
  /* Section dividers draw left to right. */
  dividers.forEach((el) =>
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => el.classList.add('is-drawn') }),
  );
  /* Deal badge rotates in from -8deg. */
  within(root, '[data-deal-badge]').forEach((el) => {
    if (el.dataset.lwsBadge) return;
    el.dataset.lwsBadge = '1';
    gsap.from(el, { rotation: -8, scale: 0.92, opacity: 0, duration: T.badge, ease: E.mech, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });
}

declare global {
  interface Window { LWS?: { observe: (el?: ParentNode) => void } }
}
window.LWS = { observe };

/* ---------- GSAP ---------- */
const mm = gsap.matchMedia();

mm.add({ motion: '(prefers-reduced-motion: no-preference)', reduced: reducedQuery, wide: '(min-width: 768px)' }, (ctx) => {
  const { motion, wide } = ctx.conditions as { motion: boolean; reduced: boolean; wide: boolean };

  observe(document);

  if (!motion) {
    // Reduced motion: everything visible, nothing moves.
    gsap.set('[data-windup] > span', { opacity: 1, y: 0 });
    return;
  }

  /* Hero wind-up: three letter groups slide up 24px with a mechanical overshoot. */
  const groups = $$('[data-windup] > span');
  if (groups.length) {
    gsap.fromTo(groups, { y: 24, opacity: 0.01 }, { y: 0, opacity: 1, duration: T.wind, ease: E.mech, stagger: T.windStagger, delay: T.stagger });
  }

  /* Scroll progress key: 0 to 360deg, clicks (6deg overshoot) at the bottom. Progress is read
     live from the scroll position, so late-rendering sections never leave it stale. */
  const pk = document.querySelector<HTMLElement>('[data-progress-key] svg');
  if (pk) {
    gsap.set(pk, { transformOrigin: '50% 52%' });
    let clicked = false;
    let queued = false;
    const update = () => {
      queued = false;
      const max = document.documentElement.scrollHeight - innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      if (progress > 0.998) {
        if (!clicked) {
          clicked = true;
          gsap.fromTo(pk, { rotation: 366 }, { rotation: 360, duration: T.click, ease: E.click, overwrite: true });
        }
        return;
      }
      clicked = false;
      gsap.set(pk, { rotation: progress * 360, overwrite: true });
    };
    const onKeyScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
    addEventListener('scroll', onKeyScroll, { passive: true });
    addEventListener('resize', onKeyScroll);
    update();
    ctx.add(() => () => { removeEventListener('scroll', onKeyScroll); removeEventListener('resize', onKeyScroll); gsap.set(pk, { rotation: 0 }); });
  }

  /* Floating outline keys: slow drift, out of phase (period --loop-float plus 0 to 3s). */
  $$('[data-float]').forEach((el, i) => {
    const dur = T.float + ((i * 1.37) % 3);
    gsap.fromTo(el, { y: -10, rotation: -3 }, { y: 10, rotation: 3, duration: dur, ease: E.inout, yoyo: true, repeat: -1, delay: -i * 2.3 });
  });

  /* Closing band key winds once on reveal. */
  $$('[data-wind-key]').forEach((el) =>
    gsap.fromTo(el, { rotation: -270 }, { rotation: 0, duration: T.keyTurn, ease: E.mech, scrollTrigger: { trigger: el, start: 'top 85%', once: true } }),
  );

  if (!wide) return;

  /* Parallax (transform only, scrubbed to scroll so it has no easing of its own). */
  $$('[data-parallax]').forEach((el) => {
    const f = parseFloat(el.dataset.parallax || '1');
    const hero = el.closest('[data-hero]');
    if (hero) {
      gsap.to(el, { y: () => (1 - f) * hero.clientHeight, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    } else {
      const section = el.closest('section') || el;
      const range = (1 - f) * 220;
      gsap.fromTo(el, { y: -range / 2 }, { y: range / 2, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } });
    }
  });

  /* Image inside its frame at 0.85x. */
  $$('[data-parallax-inner]').forEach((el) => {
    gsap.fromTo(el, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
});

document.documentElement.classList.add('motion-ready');

// Fonts, images and content-visibility sections change the page height after first paint.
// Refresh trigger positions whenever it changes (debounced), and once on load.
let lastH = document.documentElement.scrollHeight;
let refreshTimer = 0;
new ResizeObserver(() => {
  const h = document.documentElement.scrollHeight;
  if (Math.abs(h - lastH) < 4) return;
  lastH = h;
  clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
}).observe(document.body);
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
