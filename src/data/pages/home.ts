import type { PageCopy } from '../types';

export interface HomeCopy extends PageCopy {
  eyebrow: string;
  /** The H1 in three reveal groups. */
  h1Groups: [string, string, string];
  sub: string;
  readout: string[];
  trust: string[];
  tray: { heading: string; intro: string };
  pitch: { heading: string; body: string[]; link: string };
  language: { eyebrow: string; heading: string; intro: string; columns: { label: string; body: string }[] };
  deal: { heading: string; body: string };
  reviews: { heading: string; body: string };
  area: { heading: string; body: string };
  faq: { heading: string };
}

const copy: HomeCopy = {
  title: 'Auto Repair & NYS Inspection in Blauvelt, NY | Toy Auto Center',
  description:
    'Auto repair and NYS inspection in Blauvelt, NY since 1976. Toyota and Lexus specialists, all makes serviced, on Route 303. Book online or call 845.365.3003.',
  h1: 'Honest auto repair. Dealer-level Toyota & Lexus care.',
  eyebrow: 'BLAUVELT, NY · ROUTE 303 · SINCE 1976',
  h1Groups: ['Honest auto repair.', 'Dealer-level Toyota', '& Lexus care.'],
  sub:
    'A family-owned shop and NYS inspection station on Route 303 in Blauvelt. We find the real problem, explain it in plain English and fix only what needs fixing.',
  readout: ['NYS inspection station', 'All makes & models', 'Toyota / Lexus specialists', 'Jasper transmissions', 'Mon to Fri 8 to 5'],
  trust: ['Family owned since 1976', 'NYS certified inspection station', 'Toyota & Lexus specialists', 'No upsell. Ever.'],
  tray: {
    heading: 'Thirteen things we fix, and how to tell which one you need.',
    intro: 'Start with what the car is doing. Pick the symptom that sounds like yours.',
  },
  pitch: {
    heading: 'The honest dealer alternative, two doors down from the dealer.',
    body: [
      "Dealer-level know-how without dealer prices or the high-pressure part. You pay for the repair your car actually needs. If something can wait, we say so.",
      "When the dealer is the right call, like recalls or factory warranty work, we'll tell you that too. Everything else, we handle here.",
    ],
    link: 'See how we compare with the dealer',
  },
  language: {
    eyebrow: 'HOW WE WORK',
    heading: 'Find it. Explain it. Fix it.',
    intro: 'No guessing and no surprises on the bill.',
    columns: [
      {
        label: '01 / DIAGNOSE',
        body: 'We test before we replace anything, so you never pay for a guess.',
      },
      {
        label: '02 / EXPLAIN',
        body: "You get a written estimate in plain English. We tell you what's urgent and what can wait.",
      },
      {
        label: '03 / FIX',
        body: 'We use quality parts and road test the car before you pick it up. If anything changes, we call you first.',
      },
    ],
  },
  deal: {
    heading: 'Full Service Oil Change',
    body:
      'Conventional oil up to 5 quarts with a new filter and a once-over of the things that matter. Full synthetic is $64.99. Current special, ask at checkout: request the discount at time of payment.',
  },
  reviews: {
    heading: 'Word on the road travels fast.',
    body: "Drivers rate us on Carfax, Yelp, Facebook and Google. If we've worked on your car, we'd love a review of your own.",
  },
  area: {
    heading: 'Minutes from Orangeburg, Tappan, Nyack and New City.',
    body:
      'We sit on Route 303 in Blauvelt, close to Thruway exit 12 and the Palisades Parkway. An easy drop-off on the way to work from anywhere in Rockland.',
  },
  faq: { heading: 'Questions drivers ask us' },
};

export default copy;
