// Every page that gets a generated 1200x630 OG image: key (path with / -> --) and the title line.
import { services } from '../data/services';
import { towns } from '../data/towns';
import { allPosts, catSlug } from './posts';
import { serviceCopy, townCopyOf } from './content';

const key = (path: string) => path.replace(/^\/|\/$/g, '').replace(/\//g, '--') || 'home';

export function ogEntries(): { key: string; title: string; kicker: string }[] {
  const e: { path: string; title: string; kicker: string }[] = [
    { path: '/', title: 'Honest auto repair. Dealer-level Toyota & Lexus care.', kicker: 'FAMILY OWNED SINCE 1976' },
    { path: '/services/', title: 'Thirteen things we fix', kicker: 'SERVICES 01 TO 13' },
    { path: '/toyota-lexus-repair/', title: 'Toyota & Lexus Repair in Rockland County', kicker: 'TOYOTA · LEXUS · SCION · HYBRIDS' },
    { path: '/dealer-alternative/', title: 'The Dealer Alternative on Route 303', kicker: 'INDEPENDENT VS. DEALER' },
    { path: '/deals/', title: '$44.99 Full Service Oil Change', kicker: "THIS MONTH'S DEAL" },
    { path: '/about/', title: 'A Family-Owned Shop on Route 303 Since 1976', kicker: 'ABOUT THE SHOP' },
    { path: '/reviews/', title: 'Reviews from Rockland County Drivers', kicker: 'WORD ON THE ROAD' },
    { path: '/service-area/', title: 'Auto Repair Across Rockland County', kicker: 'SERVICE AREA' },
    { path: '/faq/', title: 'Auto Repair Questions, Answered', kicker: 'FAQ' },
    { path: '/blog/', title: 'Notes from the Shop', kicker: 'THE SHOP BLOG' },
    { path: '/contact/', title: 'Book an Appointment in Blauvelt', kicker: 'BOOK · CALL · TEXT' },
    { path: '/privacy/', title: 'Privacy', kicker: 'TOY AUTO CENTER' },
    { path: '/404/', title: 'Wrong turn.', kicker: 'ERROR 404' },
    ...services.map((s) => ({ path: `/services/${s.slug}/`, title: serviceCopy(s.slug).h1, kicker: `SERVICE ${String(s.n).padStart(2, '0')} / 13` })),
    ...towns.map((t) => ({ path: `/service-area/${t.slug}/`, title: townCopyOf(t.slug).h1, kicker: 'SERVICE AREA' })),
    ...allPosts().map((p) => ({ path: `/blog/${p.slug}/`, title: p.title, kicker: p.category.toUpperCase() })),
    ...[...new Set(allPosts().map((p) => p.category))].map((c) => ({ path: `/blog/category/${catSlug(c)}/`, title: `${c} posts`, kicker: 'THE SHOP BLOG' })),
  ];
  return e.map((x) => ({ key: key(x.path), title: x.title, kicker: x.kicker }));
}
