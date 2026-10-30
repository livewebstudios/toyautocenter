// Copy for the hubs and utility pages: services hub, deals, contact, reviews, service area,
// FAQ, blog and 404.
import type { PageCopy, Block } from '../types';

export const servicesHub: PageCopy & { intro: string[]; trayHeading: string; groupsHeading: string; groupIntros: Record<string, string> } = {
  title: 'Auto Repair Services in Blauvelt, NY | Toy Auto Center',
  description:
    'Auto repair services in Blauvelt, NY: inspections, brakes, diagnostics, A/C, transmissions and more for all makes, with Toyota and Lexus specialists on 303.',
  h1: 'Auto Repair Services in Blauvelt, NY',
  intro: [
    'Thirteen services, one approach: find the cause, explain it, fix what needs fixing. Every auto repair service below covers domestic and import cars, trucks and SUVs, and every one gets the same diagnose-first treatment whether it is a squeal or a slipping transmission.',
    "Not sure which one you need? Pick the symptom that sounds closest, or skip the guessing and [tell us what the car is doing](/contact/). That's what the diagnosis is for.",
  ],
  trayHeading: 'Pick the symptom that sounds like your car',
  groupsHeading: 'Every service, grouped by system',
  groupIntros: {
    'Keep It Legal': 'The annual sticker and the maintenance that keeps you from needing anything bigger.',
    'Stop & Steer': 'Everything between your foot, your hands and the road.',
    'Power & Drive': 'Engine, transmission and the parts that feed and time them.',
    'Climate & Current': 'Cabin comfort, the electrical system and what comes out the tailpipe.',
  },
};

export const deals: PageCopy & { intro: string; includesHeading: string; howHeading: string; how: string[]; coupon: { heading: string; fine: string; print: string }; update: string } = {
  title: 'Oil Change Deal in Blauvelt, NY | Toy Auto Center',
  description:
    "This month's oil change deal in Blauvelt, NY: $44.99 full service oil change, $64.99 full synthetic, with a multi-point check. Toy Auto Center on Route 303.",
  h1: "This Month's Deal: $44.99 Oil Change",
  intro:
    "We're always looking for ways to save our customers time and money without cutting corners on the work. This month that means a full service oil change at a price that covers the oil, the filter and a careful look at the rest of the car while it's in the air.",
  includesHeading: 'What the full service oil change includes',
  howHeading: 'How to get the price',
  how: [
    'Book online or call 845.365.3003 and mention the oil change special.',
    'Bring the car in. We change the oil and filter and run the checks listed here.',
    "Ask for the discount when you pay. That's the only time we can apply it.",
  ],
  coupon: {
    heading: 'Print this coupon',
    fine: 'Must request discount at time of payment. Up to 5 quarts of conventional oil; full synthetic $64.99. Most cars and light trucks. Current special, ask at checkout for details.',
    print: 'Print the coupon',
  },
  update: 'Prefer to show it on your phone? That works too.',
};

export const contact: PageCopy & { intro: string; formHeading: string; visitHeading: string; directions: string; next: { heading: string; steps: string[] } } = {
  title: 'Book an Appointment in Blauvelt, NY | Toy Auto Center',
  description:
    'Book an auto repair appointment in Blauvelt, NY. Request a time online, call 845.365.3003 or text 201.394.8673. 628 Route 303, Rockland County.',
  h1: 'Book an Appointment in Blauvelt',
  intro:
    "Tell us about the car and what it's doing, pick a day that works, and we'll call or text to confirm. Need it sooner? Call the shop. For a quick question, text is fine.",
  formHeading: 'Request an appointment',
  visitHeading: 'Find the shop',
  directions:
    "We're at 628 Route 303 in Blauvelt, 1 block off 303 on Birchwood Drive. Coming from the Thruway, take exit 12 and head south on 303. From the Palisades Parkway, take the Route 303 exit in Orangeburg and head north.",
  next: {
    heading: 'What happens after you send it',
    steps: [
      'We read every request during shop hours, Mon to Fri 8 to 5.',
      'We call or text to confirm a time, or to ask a quick question about the car.',
      'Bring the car in. We diagnose first and call you with a written estimate before any repair starts.',
    ],
  },
};

export const reviewsPage: PageCopy & { intro: string; ratingsHeading: string; leaveHeading: string; leave: string; never: string } = {
  title: 'Reviews from Rockland County Drivers | Toy Auto Center',
  description:
    'Toy Auto Center reviews from Rockland County drivers on Carfax, Yelp, Facebook and Google. See our ratings for auto repair in Blauvelt, NY and leave your own.',
  h1: 'Reviews from Rockland County Drivers',
  intro:
    "We'd rather you hear about us from the people whose cars we fix. Here's where our customers have rated the shop, with links straight to what they wrote.",
  ratingsHeading: 'Our ratings',
  leaveHeading: 'Had your car in recently? Leave a review.',
  leave:
    'A few honest sentences help your neighbors decide where to take their car, and they tell us what we are doing right and what to fix. Google reviews help the most. The link opens the review box for our shop directly.',
  never: 'We never write, buy or edit reviews. Every rating on this page links to its source.',
};

export const serviceArea: PageCopy & { intro: string[]; listHeading: string; mapHeading: string; mapNote: string } = {
  title: 'Auto Repair Service Area: Rockland County | Toy Auto Center',
  description:
    'Toy Auto Center serves Rockland County from Route 303 in Blauvelt: auto repair and NYS inspection for Orangeburg, Tappan, Nyack, Nanuet, New City and nearby.',
  h1: 'Auto Repair Across Rockland County',
  intro: [
    'Our shop is on Route 303 in Blauvelt, near the middle of Rockland County and a short run from the Thruway, the Palisades Parkway and the New Jersey line. Most of our customers drive less than fifteen minutes to reach us.',
    'Each town page below covers the route in, the services that town asks us for most, and how to drop the car off on a commute.',
  ],
  listHeading: 'Towns we serve',
  mapHeading: 'Where we are',
  mapNote: 'Diagram, not to scale. Select a town to open its page.',
};

export const faqPage: PageCopy & { intro: string; generalHeading: string } = {
  title: 'Auto Repair FAQ: Blauvelt, NY | Toy Auto Center',
  description:
    'Answers to common auto repair questions in Blauvelt, NY: NYS inspection, brakes, check engine lights, oil changes, hybrids and more from Toy Auto Center.',
  h1: 'Auto Repair Questions, Answered',
  intro:
    'Every question we answer anywhere on the site, in one place. Each answer links back to the service page it came from, where you will find the full story.',
  generalHeading: 'About the shop',
};

export const blog: PageCopy & { intro: string; categoryIntro: (c: string) => string } = {
  title: 'Auto Repair Blog | Toy Auto Center, Blauvelt NY',
  description:
    'The Toy Auto Center auto repair blog: plain-English posts on check engine codes, NYS inspection, brakes and Toyota hybrids from our shop in Blauvelt, NY.',
  h1: 'Notes from the Shop',
  intro: 'Plain-English explanations of what we see in the bays: codes, inspections, brakes, hybrids and the questions customers ask us at the counter.',
  categoryIntro: (c) => `Every post we have written in ${c}, newest first.`,
};

export const notFound: PageCopy & { line: string } = {
  title: 'Page Not Found | Toy Auto Center',
  description:
    'That page is not here. Toy Auto Center is, at 628 Route 303 in Blauvelt, NY: auto repair and NYS inspection weekdays 8 to 5. Call 845.365.3003 to book.',
  h1: 'Wrong turn.',
  line: "That page isn't here. The shop is, every weekday 8 to 5.",
};

export const homeFaqSources: { slug: string; index: number }[] = [
  { slug: 'nys-inspection', index: 0 },
  { slug: 'check-engine-diagnostics', index: 0 },
  { slug: 'brake-repair', index: 0 },
  { slug: 'oil-change-maintenance', index: 0 },
  { slug: 'transmission-repair', index: 0 },
];

export type { Block };
