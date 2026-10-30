import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'nyack-ny',
  title: 'Auto Repair near Nyack | Toy Auto Center, Route 303',
  description: "Nyack auto repair for Cuomo Bridge and Route 59 commuters: brakes, cooling and diagnostics at Toy Auto Center, 628 Route 303 in Blauvelt, Rockland County.",
  h1: 'Auto Repair & NYS Inspection for Nyack Drivers',
  intro: [
    "Nyack is tough on cars. Main Street, Route 59 and the crawl across the Cuomo Bridge are all stop and go. Toy Auto Center handles auto repair for Nyack from our shop on Route 303 in Blauvelt, about 12 minutes away.",
    "Other village cars barely move all week, so batteries go flat and rotors rust. We treat each kind differently.",
  ],
  route: {
    heading: 'The drive in from Nyack',
    driveTime: 'About 12 minutes',
    steps: [
      'Take Route 59 west out of Nyack',
      'In West Nyack, pick up Route 303 heading south',
      'Continue south on 303 into Blauvelt',
      "Our sign is at 628 Route 303, and the shop is a block off 303 on Birchwood Drive",
    ],
    body: [
      "Bridge commuters can take Thruway exit 12 and head south on 303. Leave the car at 8, and we'll text once we know what's wrong.",
    ],
  },
  sections: [
    {
      heading: 'Bridge traffic and what it does to your brakes',
      body: [
        "Stopping every few hundred feet keeps brakes hot, so pads glaze and the pedal can start to pulse. We measure pads, check rotors and look for stuck parts. Here's [how we approach brake work](/services/brake-repair/).",
      ],
    },
    {
      heading: 'Keeping a Nyack car cool in traffic',
      body: [
        "Crawling over the bridge, only the radiator fan cools the engine. We pressure test for leaks and check the coolant and [belts and hoses](/services/belts-hoses-filters/), which cost little next to an overheated engine. Also see [West Nyack](/service-area/west-nyack-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'NYS inspection without leaving Rockland',
    body: [
      "We're a certified station on 303: wait in the shop and drive home with a fresh sticker. Battery just jumped or replaced? Drive a few normal days first so the car reads ready.",
    ],
  },
  serviceLinks: ['brake-repair', 'belts-hoses-filters', 'battery-electrical'],
  faqs: [
    {
      q: 'Is it worth driving from Nyack to Blauvelt for a repair?',
      a: "It's about 12 minutes by Route 59 and 303. If you want a shop that finds the cause first and explains the bill, we think so.",
    },
    {
      q: 'My temperature gauge rises on the bridge but stays normal on the highway. Why?',
      a: "Usually a radiator fan that isn't kicking on, low coolant, or leaves clogging the radiator. We test the fan and cooling system.",
    },
  ],
};
export default copy;
