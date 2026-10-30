import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'pearl-river-ny',
  title: 'Auto Repair near Pearl River | Toy Auto Center, Route 303',
  description: "Pearl River auto repair and Toyota and Lexus service as a dealer alternative. Toy Auto Center is about 10 minutes away on Route 303 in Blauvelt, NY.",
  h1: 'Auto Repair & NYS Inspection for Pearl River Drivers',
  intro: [
    "Pearl River runs on commutes, to the train station or into New Jersey. Toy Auto Center handles auto repair for Pearl River from Route 303 in Blauvelt, about 10 minutes east by Orangeburg Road.",
    "Drive a Toyota or Lexus? We specialize in both and follow the dealer's factory schedule, with a person who explains the work.",
  ],
  route: {
    heading: 'Pearl River to Route 303',
    driveTime: 'About 10 minutes',
    steps: [
      'Take Orangeburg Road east out of Pearl River',
      'Continue past the Palisades Parkway into Orangeburg',
      'At Route 303, turn left and head north',
      "Look for 628 Route 303 in Blauvelt, where we're a block off the highway at Birchwood Drive",
    ],
    body: [
      "Orangeburg Road does most of the work. Train commuter? Leave the car at 8 and have someone run you to the station.",
    ],
  },
  sections: [
    {
      heading: 'Pearl River auto repair starts with the commute',
      body: [
        "A few minutes of driving home never fully charges the battery, and one cold morning it won't crank. We test the battery, alternator and starter so you replace only what failed. Longer Jersey runs call for steady [scheduled maintenance](/services/oil-change-maintenance/).",
      ],
    },
    {
      heading: 'Toyota and Lexus auto repair, minus the dealer visit',
      body: [
        "We know these cars, hybrids included. See our [Toyota and Lexus specialty](/toyota-lexus-repair/) or [how we stack up against the dealer](/dealer-alternative/). [Nanuet drivers](/service-area/nanuet-ny/) come in by Route 59.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Getting your NYS sticker near Pearl River',
    body: [
      "Sit in our shop on 303 for your yearly inspection. Pass, and you leave with a sticker. Fail, and we explain why and give you a price, but you never have to fix it here.",
    ],
  },
  serviceLinks: ['oil-change-maintenance', 'battery-electrical', 'check-engine-diagnostics'],
  faqs: [
    {
      q: 'Can an independent shop service my Toyota without voiding the warranty?',
      a: "Yes. Federal law says a carmaker can't void your warranty just because someone other than the dealer did the maintenance. Follow the factory schedule and keep your receipts.",
    },
    {
      q: 'My car sits at the Pearl River train station all day. How often should the battery be checked?',
      a: "Once a year after it turns three, and before winter if it's been slow to crank. The test only takes a few minutes.",
    },
  ],
};
export default copy;
