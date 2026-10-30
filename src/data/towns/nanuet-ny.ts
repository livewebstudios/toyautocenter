import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'nanuet-ny',
  title: 'Auto Repair near Nanuet | Toy Auto Center, Route 303',
  description: "Brake work and auto repair for Nanuet drivers stuck in Route 59 traffic, done at Toy Auto Center on Route 303 in Blauvelt, a 10-minute drive away.",
  h1: 'Auto Repair & NYS Inspection for Nanuet Drivers',
  intro: [
    "If you drive in Nanuet, you brake a lot. Route 59 is one light and shopping-center entrance after another. Toy Auto Center does auto repair for Nanuet drivers from our family-owned shop on Route 303 in Blauvelt, about 10 minutes away.",
    "That driving also chews up tires and knocks the front end out of line. We fix it without padding the bill.",
  ],
  route: {
    heading: 'Nanuet to Blauvelt',
    driveTime: 'About 10 minutes',
    steps: [
      'Head east on Route 59 toward West Nyack',
      'Turn south onto Route 303 near the Thruway',
      'Follow 303 south into Blauvelt',
      "You'll find us at number 628, one block off 303 along Birchwood Drive",
    ],
    body: [
      "Coming in around 8 on a weekday? Give Route 59 a few extra minutes. Thruway drivers have it easy: exit 12 puts you on 303, then head south.",
    ],
  },
  sections: [
    {
      heading: 'Nanuet auto repair starts with the brakes',
      body: [
        "Listen for a high squeal, grinding, a pulsing pedal, or a car that pulls when you stop. Grinding means park it soon. Our [brake repair page](/services/brake-repair/) shows what we check and what we replace.",
      ],
    },
    {
      heading: 'Tires, alignment, and deciding what to fix',
      body: [
        "Potholes and curb cuts beat up steering parts, so we look over the front end and [check the alignment](/services/wheel-alignment-tires/) before new tires go on. You approve every part. [Pearl River neighbors](/service-area/pearl-river-ny/) are about as close.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Inspections for Nanuet cars',
    body: [
      "Brakes are a big part of the yearly state safety check, so have noisy ones looked at before the sticker comes due. We're a certified NYS inspection station, and you can wait.",
    ],
  },
  serviceLinks: ['brake-repair', 'wheel-alignment-tires', 'steering-suspension'],
  faqs: [
    {
      q: 'Do I need new rotors every time I get brake pads?',
      a: "No. We measure your rotors and look for grooves and wobble. If they're still good, they stay. If not, we show you why before we recommend anything.",
    },
    {
      q: 'Is a grinding noise from my brakes an emergency?',
      a: "Treat it as a stop-soon. Grinding usually means the pads are gone and metal is hitting the rotor, which ruins it fast. Call 845.365.3003 and we'll get you in.",
    },
  ],
};
export default copy;
