import type { PageCopy, Block, FAQItem, Table } from '../types';

// Route: /toyota-lexus-repair/

export interface ModelNote {
  name: string;
  note: string;
}

export interface ToyotaLexusCopy extends PageCopy {
  /** 2 opening paragraphs. Primary keyword in the first 100 words. */
  intro: string[];
  /** Why an independent Toyota specialist. */
  why: Block;
  models: {
    heading: string;
    toyotaHeading: string;
    toyota: ModelNote[];
    lexusHeading: string;
    lexus: ModelNote[];
    scionHeading: string;
    /** One short paragraph. */
    scion: string;
  };
  /** Block plus the hybrid checklist. */
  hybrid: Block & { items: ModelNote[] };
  /** Rendered in mono. Columns: ["Miles", "What's typically due"]. */
  intervals: Table & { heading: string; note: string };
  /** The page lists all 13 services automatically under this heading and sentence. */
  serviceLinks: { heading: string; intro: string };
  faqs: FAQItem[];
}

const copy: ToyotaLexusCopy = {
  title: 'Toyota & Lexus Repair in Rockland County | Toy Auto Center',
  description:
    "Toyota and Lexus repair in Rockland County from an independent shop in Blauvelt. Hybrid service, factory maintenance and quality parts on Route 303.",
  h1: 'Toyota & Lexus Repair in Rockland County',

  intro: [
    "Toyota and Lexus repair in Rockland County is the core of what we do. We've been at 628 Route 303 in Blauvelt since 1976, and Toyotas and Lexus models fill our bays every week.",
    "You get dealer-level know-how without the dealer's service lane. Recalls and factory warranty work cost you nothing at the dealer, so we'll send you there for those.",
  ],

  why: {
    heading: 'Why an independent shop for your Toyota or Lexus',
    body: [
      "**We know these cars.** Toyota shares engines and parts across the Camry, Highlander, RAV4 and the Lexus models. Seeing them every week means fewer surprises.",
      "**Quality parts, your choice.** Genuine Toyota or a part built to the same standard. We tell you which one you're getting.",
      "**No sales quota.** Nobody here earns a bonus for selling you extras. If your car doesn't need it, we say so.",
      "**You talk to the tech.** The person explaining your estimate is the one who looked at your car.",
    ],
  },

  models: {
    heading: 'The Toyotas and Lexus models we see most',
    toyotaHeading: 'Toyota',
    toyota: [
      { name: 'Camry', note: 'Brakes, struts and scheduled maintenance.' },
      { name: 'Corolla', note: 'Oil changes, brakes and tires.' },
      { name: 'RAV4', note: 'Brakes, alignments and hybrid service.' },
      { name: 'Highlander', note: 'Belts, water pumps and brakes on a heavy SUV.' },
      { name: 'Tacoma', note: 'Rust checks after salty winters and 4WD fluids.' },
      { name: 'Tundra', note: 'Brakes and front-end parts on a big truck.' },
      { name: 'Sienna', note: 'Sliding doors, brakes and cooling system work.' },
      { name: 'Prius', note: 'Hybrid checks, the small 12V battery and brakes.' },
    ],
    lexusHeading: 'Lexus',
    lexus: [
      { name: 'ES', note: 'A Camry underneath. Brakes, suspension and maintenance.' },
      { name: 'RX', note: 'A Highlander cousin. Belts, brakes and hybrid service.' },
      { name: 'NX', note: 'Related to the RAV4. Brakes, alignments and hybrid service.' },
      { name: 'IS', note: 'Sport sedan brakes, suspension and maintenance.' },
      { name: 'GX', note: 'Rust checks, suspension and 4WD fluids.' },
    ],
    scionHeading: 'Scion',
    scion:
      "Scion was Toyota's younger brand, and plenty are still on the road around here. We service all of them, and parts are still easy to find.",
  },

  hybrid: {
    heading: 'Hybrid service for Prius, RAV4, Camry and Lexus hybrids',
    body: [
      "Toyota hybrids are reliable, but they have a few maintenance items a regular oil change skips. We check them every time your hybrid comes in.",
    ],
    items: [
      { name: 'Hybrid battery health check', note: 'We catch a weak battery before it lights up the dash.' },
      { name: 'Hybrid cooling', note: 'The hybrid system has its own coolant. We check it and change it on schedule.' },
      { name: 'Transmission fluid', note: 'It still wears out. We change it when it is due.' },
      { name: 'Brakes', note: 'Hybrid pads last a long time, but the parts around them can stick. We clean and test them.' },
      { name: 'The small 12V battery', note: "If it's weak, the car won't start, even with a healthy hybrid battery." },
      { name: 'Battery cooling fan', note: 'Dust and pet hair clog it. Cleaning it is a cheap fix.' },
    ],
  },

  intervals: {
    heading: 'Toyota maintenance, in plain numbers',
    caption: 'Typical Toyota and Lexus maintenance by mileage',
    columns: ['Miles', "What's typically due"],
    rows: [
      ['5,000', 'Tire rotation and a quick check of brakes and fluids.'],
      ['10,000', 'Oil and filter on most newer models, tire rotation.'],
      ['30,000', 'Engine and cabin air filters, plus a look at belts and hoses.'],
      ['60,000', 'Brake fluid, and differential fluid on trucks and AWD models.'],
      ['100,000', 'First coolant change on most models. Spark plugs come due soon after.'],
    ],
    note: "Your owner's manual has the exact schedule for your model. Towing and lots of short trips mean some of these come sooner.",
  },

  serviceLinks: {
    heading: 'Every service we offer works on your Toyota or Lexus',
    intro: 'Nothing on our service list is off limits for a Toyota, Lexus or Scion. Here are all 13.',
  },

  faqs: [
    {
      q: 'Will using an independent shop void my Toyota warranty?',
      a: "No. Federal law says a manufacturer can't void your warranty because someone other than the dealer did your maintenance. Stay on schedule and keep your receipts. See our [Toyota scheduled maintenance](/services/oil-change-maintenance/).",
    },
    {
      q: 'Do you handle recalls?',
      a: "No, and nobody should charge you for one. Recalls are free at the dealer. If we spot an open recall on your car, we'll tell you.",
    },
    {
      q: 'Do you work on Toyota and Lexus hybrids?',
      a: "Yes. Prius, Camry, RAV4, Highlander and the Lexus hybrids. If your hybrid won't start, begin with a [12V battery test](/services/battery-electrical/). Comparing us to the dealer? Here's [how we stack up](/dealer-alternative/).",
    },
  ],
};

export default copy;
