import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'orangeburg-ny',
  title: 'Auto Repair near Orangeburg | Toy Auto Center, Route 303',
  description: "Need a mechanic in Orangeburg, NY? Toy Auto Center does auto repair and NYS inspections on Route 303 in Blauvelt, about 4 minutes north. Family owned.",
  h1: 'Auto Repair & NYS Inspection for Orangeburg Drivers',
  intro: [
    "Looking for a mechanic in Orangeburg? Toy Auto Center handles Orangeburg auto repair from Route 303 in Blauvelt, about 4 minutes north. We've been family owned since 1976, we're a certified NYS inspection station, and we work on all makes.",
    "You're our closest neighbor, so bring the overdue oil change or that new brake squeal. It's a short hop.",
  ],
  route: {
    heading: 'Getting here from Orangeburg',
    driveTime: 'About 4 minutes',
    steps: [
      'Get on Route 303 heading north',
      "Stay on 303 into Blauvelt; there's nothing to turn off for",
      "Watch for 628 Route 303. We're 1 block off 303 on Birchwood Drive",
    ],
    body: [
      "Point the car north and you'll be in our lot within a couple of songs. Coming home on the Palisades Parkway? Take the Route 303 exit and stop in before we close at 5.",
    ],
  },
  sections: [
    {
      heading: 'What Orangeburg auto repair usually looks like',
      body: [
        "Mostly everyday work: oil and [factory scheduled maintenance](/services/oil-change-maintenance/), brakes, tires and warning lights. A check engine code only tells us where to start looking, so we keep digging until we find the cause. That's [how we handle a check engine light](/services/check-engine-diagnostics/).",
      ],
    },
    {
      heading: 'A neighborhood shop that explains first',
      body: [
        "We look before we quote, then fix only what you approve. If your brakes still have half their pad left, we'll say so. Toyota and Lexus are our specialty. Live farther south? Here's our [page for Tappan drivers](/service-area/tappan-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'NYS inspection, 4 minutes from Orangeburg',
    body: [
      "When your sticker month comes around, hand over the keys and wait. A lit check engine light is an automatic fail, so let us track it down first. Here's [what the NYS inspection covers](/services/nys-inspection/).",
    ],
  },
  serviceLinks: ['oil-change-maintenance', 'check-engine-diagnostics', 'brake-repair'],
  faqs: [
    {
      q: 'How far is Toy Auto Center from Orangeburg?',
      a: "About 4 minutes. We're just north of Orangeburg on Route 303 in Blauvelt, at number 628. Turn onto Birchwood Drive and you're there.",
    },
    {
      q: 'Can I drop my car off before work in Orangeburg?',
      a: "Yes. We open at 8, Monday to Friday. Leave the car, tell us what it's doing, and we'll call or text with what we find before any work starts.",
    },
  ],
};
export default copy;
