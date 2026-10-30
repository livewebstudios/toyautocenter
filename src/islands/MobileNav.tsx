// Full-screen mobile menu: grouped service accordion, primary links, phone + text pinned at the
// bottom. Focus is trapped while open; Esc and CLOSE return focus to the MENU button.
import { useEffect, useRef, useState } from 'react';

interface Item { n: string; name: string; href: string; symptom: string }
interface Props {
  groups: { group: string; items: Item[] }[];
  links: { label: string; href: string }[];
  phone: { display: string; tel: string };
  text: { display: string; sms: string };
  book: string;
}

export default function MobileNav({ groups, links, phone, text, book }: Props) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<number | null>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add('menu-open');
    const el = panel.current;
    el?.querySelector<HTMLElement>('button, a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !el) return;
      const f = [...el.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-open');
      btn.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={btn} type="button" className="mnav-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
        <span className="mnav-btn__bars" aria-hidden="true"><span /><span /></span>
        MENU
      </button>
      <div
        ref={panel}
        id="mobile-menu"
        className={`mnav${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <div className="mnav__top">
          <span className="mnav__title">MENU</span>
          <button type="button" className="mnav__close" onClick={() => setOpen(false)}>CLOSE</button>
        </div>
        <div className="mnav__scroll">
          <p className="mnav__eyebrow">SERVICES</p>
          <ul className="mnav__groups">
            {groups.map((g, i) => (
              <li key={g.group}>
                <button
                  type="button"
                  className="mnav__group"
                  aria-expanded={section === i}
                  aria-controls={`mnav-g${i}`}
                  onClick={() => setSection(section === i ? null : i)}
                >
                  {g.group.toUpperCase()}
                  <span className="mnav__plus" aria-hidden="true" />
                </button>
                <ul id={`mnav-g${i}`} className="mnav__items" hidden={section !== i}>
                  {g.items.map((s) => (
                    <li key={s.href}>
                      <a href={s.href}>
                        <span className="mnav__n">{s.n}</span>
                        <span>
                          <span className="mnav__name">{s.name.toUpperCase()}</span>
                          <span className="mnav__sym">{s.symptom}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ul className="mnav__links">
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <a className="btn btn--primary mnav__book" href={book}>BOOK AN APPOINTMENT</a>
        </div>
        <div className="mnav__pinned">
          <a href={`tel:${phone.tel}`}>CALL {phone.display}</a>
          <a href={text.sms}>TEXT US</a>
        </div>
      </div>
    </>
  );
}
