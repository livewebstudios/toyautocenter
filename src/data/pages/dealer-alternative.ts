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
    "There's a Toyota dealership a couple of doors down from us on Route 303. We're not going to pretend it isn't there, and we're not going to trash it. Dealers do a few jobs better than anyone, and we'll send you there for those.",
    "For everything else (brakes, the 60,000-mile service, a check engine light, your NYS inspection), an independent shop is the dealer alternative plenty of Blauvelt drivers end up preferring. Below is a fair comparison, written by the independent shop, so read it with that in mind.",
  ],

  dealerDoesWell: {
    heading: 'What the dealer does well',
    body: [
      "**Factory warranty repairs.** If a covered part fails while your car is under Toyota's warranty, the dealer fixes it and Toyota pays. Don't pay us, or anyone, for that.",
      '**Recalls.** Safety recalls are done by the dealer at no charge. If we find an open one on your car, we tell you and point you two doors down.',
      "**Software updates and service campaigns.** Some reflashes and factory campaigns need dealer-only access to Toyota's systems. That's their lane, and it's free when the campaign covers your car.",
    ],
  },

  independentDoesBetter: {
    heading: 'What an independent shop does better',
    body: [
      "**You talk to the person who did the work.** No relay through a service desk. The tech who found the leak can show you the leak.",
      "**No menu to sell from.** We diagnose first, then write an estimate for what the car needs. Nothing gets bundled in because it's printed on a package price.",
      "**Straight answers about what can wait.** Worn but legal is different from unsafe. We tell you which is which, and you decide the timing.",
      "**Every car in the driveway.** The dealer is built around one brand. We work on all makes, domestic and import, so the Toyota and the other car can come to the same place. Toyota and Lexus are still our specialty.",
    ],
  },

  comparison: {
    heading: 'The dealer alternative, side by side',
    caption: 'Dealer service department compared with Toy Auto Center',
    columns: ['', 'Dealer service department', 'Toy Auto Center'],
    rows: [
      ['Who you talk to', 'A service advisor who writes up the order and relays it to the shop', 'The tech who worked on your car, or someone standing next to them'],
      ['Who works on your car', 'Factory-trained technicians, assigned from a larger crew', 'Our technicians, who see the same Toyotas and Lexus models week after week'],
      ['Warranty and recalls', 'Their job, and free to you. Go there for these.', "Not our work. We'll tell you if a recall is open and send you there."],
      ['Pricing approach', 'Posted menu services plus whatever the inspection finds', 'Diagnosis first, then a written estimate before any work starts'],
      ['Upsell pressure', 'Varies by dealer; advisors at many dealerships are paid partly on sales', 'No sales quota. We separate urgent from can-wait.'],
      ['Parts', 'Genuine Toyota parts', 'OE or OE-equivalent, and we tell you which'],
      ['Scheduling', 'Online booking and a bigger service lane', 'Call, text or book online. Mon to Fri 8 to 5, Saturday by appointment.'],
      ['NYS inspection', 'Many dealers inspect', 'Certified NYS inspection station; call ahead and we will give you the wait'],
    ],
  },

  pricingNote:
    "The only price we post is our Full Service Oil Change special: **$44.99 conventional, $64.99 full synthetic.** It's a current special: ask for it at checkout, when you pay. Every other job gets a written estimate after we've looked at the car. The details are on our [oil change special page](/deals/).",

  closing: {
    heading: "Try us on the next one",
    body: [
      "You don't have to pick a side forever. Keep the dealer for recalls and warranty work, and bring us the brakes, the maintenance and the mystery noises. If you drive a Toyota or Lexus, see what we do on our [Toyota and Lexus specialist page](/toyota-lexus-repair/).",
      'Want to hear it from somebody other than us? Read [what Rockland County drivers say](/reviews/), then [book an appointment](/contact/) or call 845.365.3003.',
    ],
  },

  faqs: [
    {
      q: 'Is an independent shop cheaper than the dealer?',
      a: "Often, but don't take our word for it. Ask both shops for a written estimate on the same job and compare line by line: parts, labor hours and anything added on. We'd rather win on the details than on a slogan.",
    },
    {
      q: 'Can you do my factory scheduled maintenance without hurting the warranty?',
      a: "Yes. Federal law (the Magnuson-Moss Warranty Act) protects your warranty when an independent shop does the maintenance with parts that meet spec. Keep your invoices. Ours list the mileage and the parts, so your records stay complete.",
    },
    {
      q: 'Will you tell me when I should go to the dealer instead?',
      a: "Yes, every time. Open recalls, factory warranty repairs and dealer-only software campaigns belong there. If you bring us one of those by mistake, we'll tell you before we touch anything.",
    },
    {
      q: 'Can you update the software on my Toyota?',
      a: "Most factory software updates and campaigns go through the dealer, and when a campaign covers your car it's free there. We diagnose computer and sensor problems with an OBD-II scan tool and live data, and we'll tell you when a fix needs a dealer reflash.",
    },
  ],
};

export default copy;
