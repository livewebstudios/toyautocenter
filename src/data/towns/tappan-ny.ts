import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'tappan-ny',
  title: 'Auto Repair near Tappan | Toy Auto Center, Route 303',
  description: "Auto repair for Tappan, NY drivers, about 6 minutes north on Route 303. Toy Auto Center in Blauvelt is a family-owned NYS inspection station since 1976.",
  h1: 'Auto Repair & NYS Inspection for Tappan Drivers',
  intro: [
    "Tappan doesn't give you many choices for auto repair. Toy Auto Center is a family-owned repair shop and NYS inspection station about 6 minutes up Route 303 in Blauvelt.",
    "Plenty of Tappan drivers split the week between Rockland and New Jersey. We keep it simple: find the problem, tell you, fix it.",
  ],
  route: {
    heading: "From Tappan, it's straight up 303",
    driveTime: 'About 6 to 8 minutes',
    steps: [
      'Pick up Route 303 in Tappan and point it north',
      'Ride 303 through Orangeburg without turning off',
      'In Blauvelt, find number 628 on Route 303, one block off the highway on Birchwood Drive',
    ],
    body: [
      "North on 303 with one turn at the very end. School traffic through Orangeburg can stretch it to 8 minutes. Running behind on pickup? Text 201.394.8673.",
    ],
  },
  sections: [
    {
      heading: 'Tappan auto repair without the guesswork',
      body: [
        "Most Tappan work is upkeep: oil service, brakes, tires and [wheel alignment](/services/wheel-alignment-tires/). When the alignment is off, the car drifts and tires wear on one edge. We follow your car's factory schedule and tell you what's actually due.",
      ],
    },
    {
      heading: 'How we work on your car',
      body: [
        "No part gets ordered until we know it's the cause. If something can wait, we write it down so you can budget. Weighing the dealer? Here's [why plenty of owners skip the dealer](/dealer-alternative/), or see the [Orangeburg page](/service-area/orangeburg-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Your inspection sticker, handled on 303',
    body: [
      "Every New York car needs a yearly inspection. We check brakes, steering, tires, lights and wipers, then read the engine computer for emissions. Take a seat, and if anything fails, we show you what and why.",
    ],
  },
  serviceLinks: ['wheel-alignment-tires', 'oil-change-maintenance', 'nys-inspection'],
  faqs: [
    {
      q: 'Is there an independent auto repair shop near Tappan?',
      a: "Yes. Toy Auto Center is an independent, family-owned shop about 6 minutes north on Route 303 in Blauvelt. Book online, call 845.365.3003, or text 201.394.8673.",
    },
    {
      q: 'My car pulls to the right on Route 303. Is that the alignment?',
      a: "Often, but not always. A bad tire, low tire pressure or a sticking brake can do it too. We check those first so you don't pay for an alignment that won't help.",
    },
  ],
};
export default copy;
