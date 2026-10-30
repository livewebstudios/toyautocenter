// Primary navigation (ALL CAPS labels, LWS nav rule). Paths are root-style; rendered relative.
export const primaryNav = [
  { label: 'NYS INSPECTION', path: '/services/nys-inspection/' },
  { label: 'TOYOTA & LEXUS', path: '/toyota-lexus-repair/' },
  { label: 'DEALS', path: '/deals/' },
  { label: 'ABOUT', path: '/about/' },
  { label: 'REVIEWS', path: '/reviews/' },
  { label: 'BLOG', path: '/blog/' },
  { label: 'CONTACT', path: '/contact/' },
] as const;

export const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'All services', path: '/services/' },
  { label: 'Toyota & Lexus repair', path: '/toyota-lexus-repair/' },
  { label: 'The dealer alternative', path: '/dealer-alternative/' },
  { label: 'Deals', path: '/deals/' },
  { label: 'About the shop', path: '/about/' },
  { label: 'Reviews', path: '/reviews/' },
  { label: 'Service area', path: '/service-area/' },
  { label: 'FAQ', path: '/faq/' },
  { label: 'Blog', path: '/blog/' },
  { label: 'Book an appointment', path: '/contact/' },
  { label: 'Privacy', path: '/privacy/' },
] as const;
