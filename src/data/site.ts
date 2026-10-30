// Single source of truth for NAP, hours and links. Every component imports from here.
export const site = {
  name: 'Toy Auto Center',
  url: 'https://toyautocenter.net',
  founded: 1976,
  slogan: 'When car trouble arrives, we hope you WIND UP with us.',
  phone: { display: '845.365.3003', tel: '+18453653003', schema: '+1-845-365-3003' },
  text: { display: '201.394.8673', tel: '+12013948673', sms: 'sms:+12013948673' },
  email: 'info@toyautocenter.net',
  address: {
    street: '628 NY-303',
    streetDisplay: '628 Route 303',
    city: 'Blauvelt',
    region: 'NY',
    zip: '10913',
    country: 'US',
    note: '1 block off 303 on Birchwood Drive',
  },
  // OpenStreetMap Nominatim, 2026-10-29 (OSM way 1175827968).
  geo: { lat: 41.0702675, lng: -73.9504663 },
  placeId: 'ChIJt5cZblvpwokRucHzfCQOoqA',
  hours: {
    weekdays: 'Mon to Fri 8:00 AM to 5:00 PM',
    short: 'Mon to Fri 8 to 5',
    saturday: 'Sat: by appointment',
    sunday: 'Sun: closed',
    schema: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' }],
  },
  links: {
    facebook: 'https://www.facebook.com/Toy-Auto-Center-120166391368959',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Toy+Auto+Center+Blauvelt+NY&query_place_id=ChIJt5cZblvpwokRucHzfCQOoqA',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=Toy+Auto+Center+Blauvelt+NY&destination_place_id=ChIJt5cZblvpwokRucHzfCQOoqA',
    waze: 'https://www.waze.com/en/live-map/directions/us/ny/blauvelt/toy-auto-center?place=ChIJt5cZblvpwokRucHzfCQOoqA',
    googleReview: 'https://search.google.com/local/writereview?placeid=ChIJt5cZblvpwokRucHzfCQOoqA',
    // Replace with exact listing URLs when confirmed (OPEN_QUESTIONS #13).
    yelp: 'https://www.yelp.com/search?find_desc=Toy+Auto+Center&find_loc=Blauvelt%2C+NY',
    carfax: 'https://www.carfax.com/Reviews-Toy-Auto-Center-Blauvelt-NY',
  },
  ratings: [
    { source: 'Carfax', rating: '5.0', count: 33, key: 'carfax' },
    { source: 'Yelp', rating: '4.3', count: 11, key: 'yelp' },
    { source: 'Facebook', rating: '5.0', count: 8, key: 'facebook' },
  ] as const,
  ratingsAsOf: 'Oct 2026',
  deal: {
    name: 'Full Service Oil Change',
    price: '44.99',
    synthetic: '64.99',
    note: 'Current special, ask at checkout. Must request discount at time of payment.',
    includes: [
      'Up to 5 quarts conventional oil',
      'New oil filter',
      'Check and top off fluids',
      'Check wiper blades',
      'Adjust tire pressure',
      'Check steering, suspension and brakes',
      'Check belts',
      'Check for fluid leaks',
    ],
  },
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID || 'FORMSPREE_ID',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
} as const;

export type Site = typeof site;
