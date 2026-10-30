// Service-area pages. Copy for each lives in src/data/towns/<slug>.ts.
export interface Town {
  slug: string;
  /** Display name, may cover two places. */
  name: string;
  /** Places for schema areaServed. */
  places: { name: string; region: 'NY' | 'NJ' }[];
  county: string;
  /** Map label position on the AreaMap viewBox (0..400 x 0..520). */
  map: { x: number; y: number; anchor?: 'start' | 'end' };
}

export const towns: Town[] = [
  { slug: 'orangeburg-ny', name: 'Orangeburg', places: [{ name: 'Orangeburg', region: 'NY' }], county: 'Rockland County', map: { x: 196, y: 352 } },
  { slug: 'tappan-ny', name: 'Tappan', places: [{ name: 'Tappan', region: 'NY' }], county: 'Rockland County', map: { x: 214, y: 430 } },
  { slug: 'nyack-ny', name: 'Nyack', places: [{ name: 'Nyack', region: 'NY' }], county: 'Rockland County', map: { x: 318, y: 186, anchor: 'end' } },
  { slug: 'west-nyack-ny', name: 'West Nyack', places: [{ name: 'West Nyack', region: 'NY' }], county: 'Rockland County', map: { x: 196, y: 196 } },
  { slug: 'nanuet-ny', name: 'Nanuet', places: [{ name: 'Nanuet', region: 'NY' }], county: 'Rockland County', map: { x: 104, y: 214 } },
  { slug: 'pearl-river-ny', name: 'Pearl River', places: [{ name: 'Pearl River', region: 'NY' }], county: 'Rockland County', map: { x: 98, y: 340 } },
  { slug: 'piermont-sparkill-ny', name: 'Piermont & Sparkill', places: [{ name: 'Piermont', region: 'NY' }, { name: 'Sparkill', region: 'NY' }], county: 'Rockland County', map: { x: 312, y: 378, anchor: 'end' } },
  { slug: 'congers-valley-cottage-ny', name: 'Congers & Valley Cottage', places: [{ name: 'Congers', region: 'NY' }, { name: 'Valley Cottage', region: 'NY' }], county: 'Rockland County', map: { x: 236, y: 76, anchor: 'end' } },
  { slug: 'new-city-ny', name: 'New City', places: [{ name: 'New City', region: 'NY' }], county: 'Rockland County', map: { x: 108, y: 124 } },
  { slug: 'northvale-norwood-nj', name: 'Northvale & Norwood', places: [{ name: 'Northvale', region: 'NJ' }, { name: 'Norwood', region: 'NJ' }], county: 'Bergen County', map: { x: 240, y: 492 } },
];

export const townBySlug = (slug: string) => {
  const t = towns.find((x) => x.slug === slug);
  if (!t) throw new Error(`Unknown town slug: ${slug}`);
  return t;
};
