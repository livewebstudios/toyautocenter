// Loads per-service and per-town copy modules by slug.
import type { ServiceCopy, TownCopy, FAQItem } from '../data/types';
import { services } from '../data/services';
import { towns } from '../data/towns';

const svcMods = import.meta.glob<{ default: ServiceCopy }>('../data/services/*.ts', { eager: true });
const townMods = import.meta.glob<{ default: TownCopy }>('../data/towns/*.ts', { eager: true });

const bySlug = <T extends { slug: string }>(mods: Record<string, { default: T }>) =>
  Object.fromEntries(Object.values(mods).map((m) => [m.default.slug, m.default])) as Record<string, T>;

const svcCopy = bySlug(svcMods);
const townCopy = bySlug(townMods);

export function serviceCopy(slug: string): ServiceCopy {
  const c = svcCopy[slug];
  if (!c) throw new Error(`Missing service copy: ${slug}`);
  return c;
}
export function townCopyOf(slug: string): TownCopy {
  const c = townCopy[slug];
  if (!c) throw new Error(`Missing town copy: ${slug}`);
  return c;
}

/** Every service FAQ, tagged with its source page, in service order. */
export function allServiceFaqs(): (FAQItem & { source: { name: string; path: string } })[] {
  return services.flatMap((s) =>
    serviceCopy(s.slug).faqs.map((f) => ({ ...f, source: { name: s.name, path: `/services/${s.slug}/` } })),
  );
}
export function allTownFaqs(): (FAQItem & { source: { name: string; path: string } })[] {
  return towns.flatMap((t) =>
    townCopyOf(t.slug).faqs.map((f) => ({ ...f, source: { name: `${t.name} service area`, path: `/service-area/${t.slug}/` } })),
  );
}
