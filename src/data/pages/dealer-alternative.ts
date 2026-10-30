import type { PageCopy, Block, FAQItem, Table } from '../types';

// Route: /dealer-alternative/

export interface DealerAlternativeCopy extends PageCopy {
  /** 2 opening paragraphs. */
  intro: string[];
  /** What the dealer does well (and when we send people there). */
  dealerDoesWell: Block;
  independentDoesBetter: Block;
  /** Rendered in mono. Columns: ["", "Dealer service department", "Toy Auto Center"]; first cell of each row is the row label. */
  comparison: Table & { heading: string };
  /** The only price on the page: the oil change special. */
  pricingNote: string;
  /** Links to /toyota-lexus-repair/ and /reviews/. */
  closing: Block;
  faqs: FAQItem[];
}

const copy: DealerAlternativeCopy = {
  title: 'The Dealer Alternative on Route 303 | Toy Auto Center',
  description:
    'A dealer alternative in Blauvelt on Route 303. An honest look at what the dealer does best, what an independent shop does better, and when to use each one.',
  h1: 'The Dealer Alternative on Route 303',

  intro: [
    "There's a Toyota dealership a couple of doors down from us on Route 303. We're not going to trash it. Dealers do a few jobs better than anyone, and we'll send you there for those.",
    "For everything else, plenty of Blauvelt drivers prefer an independent shop. Here's a fair comparison. Yes, written by the independent shop.",
  ],

  dealerDoesWell: {
    heading: 'What the dealer does well',
    body: [
      "**Factory warranty repairs.** If a covered part fails, the dealer fixes it and Toyota pays. Don't pay anyone else for that.",
      '**Recalls.** Free at the dealer. If we find an open one, we tell you.',
      "**Software updates.** Some need the dealer's own equipment, and they're often free.",
    ],
  },

  independentDoesBetter: {
    heading: 'What an independent shop does better',
    body: [
      "**You talk to the person who did the work.** The tech who found the leak can show you the leak.",
      "**No menu to sell from.** We find the problem first, then quote only what the car needs.",
      "**Straight answers about what can wait.** Worn is not the same as unsafe. You decide the timing.",
      "**Every car in the driveway.** We work on all makes, with Toyota and Lexus as our specialty.",
    ],
  },

  comparison: {
    heading: 'The dealer alternative, side by side',
    caption: 'Dealer service department compared with Toy Auto Center',
    columns: ['', 'Dealer service department', 'Toy Auto Center'],
    rows: [
      ['Who you talk to', 'A service advisor', 'The tech who worked on your car'],
      ['Warranty and recalls', 'Their job, and free. Go there.', "We'll tell you if one is open."],
      ['Pricing', 'Menu services plus add-ons', 'Written estimate before any work'],
      ['Sales pressure', 'Advisors are often paid on sales', 'No sales quota'],
      ['Parts', 'Genuine Toyota', 'Genuine or equal quality, your choice'],
      ['Hours', 'Bigger service lane', 'Mon to Fri 8 to 5. Call, text or book online.'],
    ],
  },

  pricingNote:
    "The only price we post is our oil change special: **$44.99 conventional, $64.99 full synthetic.** Ask for it when you pay. Every other job gets a written estimate first. Details on our [deals page](/deals/).",

  closing: {
    heading: "Try us on the next one",
    body: [
      "Keep the dealer for recalls and warranty work. Bring us the brakes, the maintenance and the mystery noises. Driving a Toyota or Lexus? See our [Toyota and Lexus page](/toyota-lexus-repair/).",
      'Read [what Rockland County drivers say](/reviews/), then [book an appointment](/contact/) or call 845.365.3003.',
    ],
  },

  faqs: [
    {
      q: 'Is an independent shop cheaper than the dealer?',
      a: "Often. Get a written estimate from both on the same job and compare. We'd rather win on the details than on a slogan.",
    },
    {
      q: 'Can you do my factory maintenance without hurting the warranty?',
      a: "Yes. Federal law protects your warranty when an independent shop does the maintenance. Just keep your receipts.",
    },
    {
      q: 'Will you tell me when I should go to the dealer instead?',
      a: "Every time. Recalls, warranty repairs and dealer-only updates belong there. We'll tell you before we touch anything.",
    },
  ],
};

export default copy;
