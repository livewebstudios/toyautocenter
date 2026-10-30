// JSON-LD builders. Base.astro emits one @graph per page: the site-wide business, website and
// organization nodes plus whatever page nodes the page passes in.
import { site } from '../data/site';
import { services } from '../data/services';
import { towns } from '../data/towns';
import type { FAQItem } from '../data/types';
import { abs } from './paths';
import { plain } from './inline';

export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;
export type Node = Record<string, unknown>;

const postal = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.zip,
  addressCountry: site.address.country,
};

const hours = site.hours.schema.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
  opens: h.opens,
  closes: h.closes,
}));

const placeOf = (name: string, region: string) => ({
  '@type': 'Place',
  name: `${name}, ${region}`,
  address: { '@type': 'PostalAddress', addressLocality: name, addressRegion: region, addressCountry: 'US' },
});

export function areaServed() {
  return [placeOf('Blauvelt', 'NY'), ...towns.flatMap((t) => t.places.map((p) => placeOf(p.name, p.region)))];
}

export function businessNode(opts: { logo: string; image: string[]; aggregate?: { rating: string; count: number } }): Node {
  return {
    '@type': ['AutoRepair', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: site.name,
    url: `${site.url}/`,
    logo: opts.logo,
    image: opts.image,
    telephone: site.phone.schema,
    email: site.email,
    address: postal,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.links.googleMaps,
    openingHoursSpecification: hours,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    areaServed: areaServed(),
    sameAs: [site.links.facebook, site.links.yelp, site.links.carfax],
    foundingDate: String(site.founded),
    slogan: site.slogan,
    description:
      'Family-owned independent auto repair shop and NYS Certified Motor Vehicle Inspection Station on Route 303 in Blauvelt, NY. Toyota and Lexus specialists; all makes serviced.',
    knowsAbout: ['Toyota', 'Lexus', 'Scion', 'New York State vehicle inspection', 'Hybrid vehicles', 'Jasper remanufactured transmissions', 'OBD-II diagnostics'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto repair services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, serviceType: s.serviceType, url: abs(`/services/${s.slug}/`) },
      })),
    },
    ...(opts.aggregate
      ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: opts.aggregate.rating, reviewCount: opts.aggregate.count } }
      : {}),
  };
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    publisher: { '@id': BUSINESS_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${site.url}/blog/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function organizationNode(logo: string): Node {
  return { '@type': 'Organization', '@id': BUSINESS_ID, name: site.name, url: `${site.url}/`, logo, sameAs: [site.links.facebook] };
}

export function webPageNode(o: { path: string; title: string; description: string; type?: string; speakable?: boolean; image?: string }): Node {
  const url = abs(o.path);
  return {
    '@type': o.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: o.title,
    description: o.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
    ...(o.image ? { primaryImageOfPage: o.image } : {}),
    breadcrumb: { '@id': `${url}#breadcrumb` },
    ...(o.speakable ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] } } : {}),
  };
}

export function breadcrumbNode(path: string, items: { name: string; path: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export function faqNode(path: string, items: FAQItem[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: plain(f.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
    })),
  };
}

export function serviceNode(o: { path: string; name: string; serviceType: string; description: string; offer?: Node; area?: Node[] }): Node {
  return {
    '@type': 'Service',
    '@id': `${abs(o.path)}#service`,
    name: o.name,
    serviceType: o.serviceType,
    description: o.description,
    url: abs(o.path),
    provider: { '@id': BUSINESS_ID },
    areaServed: o.area ?? areaServed(),
    ...(o.offer ? { offers: o.offer } : {}),
  };
}

export function lastDayOfMonth(d = new Date()): string {
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  return `${last.getFullYear()}-${String(last.getMonth() + 1).padStart(2, '0')}-${String(last.getDate()).padStart(2, '0')}`;
}

export function oilOfferNode(path: string): Node {
  return {
    '@type': 'Offer',
    '@id': `${abs(path)}#offer`,
    name: `${site.deal.name} (conventional oil)`,
    description: `Up to 5 quarts of conventional oil, new filter and a multi-point check. Full synthetic $${site.deal.synthetic}. Request the discount at time of payment.`,
    price: site.deal.price,
    priceCurrency: 'USD',
    validThrough: lastDayOfMonth(),
    availability: 'https://schema.org/InStock',
    url: abs(path),
    seller: { '@id': BUSINESS_ID },
    itemOffered: { '@type': 'Service', name: site.deal.name, provider: { '@id': BUSINESS_ID } },
    priceSpecification: [
      { '@type': 'UnitPriceSpecification', price: site.deal.price, priceCurrency: 'USD', name: 'Conventional oil' },
      { '@type': 'UnitPriceSpecification', price: site.deal.synthetic, priceCurrency: 'USD', name: 'Full synthetic oil' },
    ],
  };
}
