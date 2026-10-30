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
    'Toy Auto Center is a family-owned shop and NYS inspection station on Route 303 in Blauvelt. We diagnose the root cause, explain it in plain English, and fix only what needs fixing.',
  readout: ['NYS inspection station', 'All makes & models', 'Toyota / Lexus specialists', 'Jasper transmissions', 'Mon to Fri 8 to 5'],
  trust: ['Family owned since 1976', 'NYS certified inspection station', 'Toyota & Lexus specialists', 'No upsell. Ever.'],
  tray: {
    heading: 'Thirteen things we fix, and how to tell which one you need.',
    intro:
      'Start with what the car is doing. Each card names the symptom drivers usually notice first, then takes you to what we check, what we fix and what it tends to cost you to wait.',
  },
  pitch: {
    heading: 'The honest dealer alternative, two doors down from the dealer.',
    body: [
      "Why pay dealership prices? We bring dealer-level knowledge to every car that rolls in, and Toyota and Lexus owners get a shop that knows their cars as well as anyone on Route 303. What you won't get is the high-pressure part.",
      'We put people ahead of cars. That means you pay for the repair the car actually needs, not the list a service menu was built to sell. If something can wait until next season, we say so, and we write it down so you can plan for it.',
      "When the dealer is the right call, for factory warranty work, recalls or a software update, we'll tell you that too. It's a short drive. Everything else, from the oil change to the transmission, we handle here.",
    ],
    link: 'See how we compare with the dealer',
  },
  language: {
    eyebrow: 'HOW WE WORK',
    heading: "We speak your car's language.",
    intro:
      'A modern car is a network of computers talking over a CAN bus. Before we touch a wrench, we listen to what those computers are saying.',
    columns: [
      {
        label: '01 / DIAGNOSE',
        body:
          'We connect to the OBD-II port and read the codes, then go further: live PID data from the sensors, and the freeze frame that shows exactly what the engine was doing when the light came on. We read the data before we buy a part, so you are not paying for guesses.',
      },
      {
        label: '02 / EXPLAIN',
        body:
          'You get a written estimate and a straight explanation of what failed and why. We can show you the worn part or a photo of it. We sort the list into what is urgent for safety, what is coming due, and what can safely wait, so the decision is yours.',
      },
      {
        label: '03 / FIX',
        body:
          'We install OE or OE-equivalent parts, torque fasteners to the factory spec and follow the service procedure for your make. Then we road test it and recheck for codes before you come back for the keys. If the repair changes on the lift, we call you first.',
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
    body:
      "Drivers rate us on Carfax, Yelp, Facebook and Google. Read what they wrote in their own words, and if we've worked on your car, we'd value a review of your own.",
  },
  area: {
    heading: 'Minutes from Orangeburg, Tappan, Nyack and New City.',
    body:
      'We sit on Route 303 in Blauvelt, one block off the highway on Birchwood Drive. Thruway exit 12 and the Palisades Parkway are both close, which makes us an easy drop-off on the way to work from anywhere in Rockland, and from Northvale and Norwood across the line.',
  },
  faq: { heading: 'Questions drivers ask us' },
};

export default copy;
