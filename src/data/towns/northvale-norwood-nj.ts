import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'northvale-norwood-nj',
  title: 'Auto Repair near Northvale & Norwood | Toy Auto Center',
  description: "Auto repair for Northvale and Norwood, NJ drivers who work or shop in Rockland County. Toy Auto Center is 12 to 15 minutes north on Route 303, Blauvelt.",
  h1: 'Auto Repair for Northvale & Norwood Drivers',
  intro: [
    "Northvale and Norwood sit just below the state line, and plenty of people there spend their days in Rockland. Toy Auto Center does auto repair for both towns on Route 303 in Blauvelt, 12 to 15 minutes north.",
    "Family owned since 1976, we specialize in Toyota and Lexus and fix every make. We're the independent shop on the same stretch of 303 as the Toyota dealer.",
  ],
  route: {
    heading: 'Crossing the state line to Blauvelt',
    driveTime: 'About 12 to 15 minutes',
    steps: [
      'Head north out of Northvale or Norwood into New York',
      'Pick up Route 303 north in Tappan',
      'Continue up 303 through Orangeburg',
      'Stop at 628 Route 303 in Blauvelt, a block off 303 on Birchwood Drive',
    ],
    body: [
      "Once you're on 303, it's one road all the way. Work in Rockland? Drop the car on your way in and pick it up heading home.",
    ],
  },
  sections: [
    {
      heading: 'Northvale and Norwood auto repair across the line',
      body: [
        "The state on your plate doesn't change the repair. Brakes, check engine lights, oil service and [transmission work](/services/transmission-repair/), including Jasper remanufactured units, get the same care on a New Jersey car.",
      ],
    },
    {
      heading: 'A dealer alternative for Toyota and Lexus owners',
      body: [
        "Factory warranty ran out, or staring at a big dealer estimate? We follow the factory schedule and tell you what's urgent. Read [why owners choose an independent shop](/dealer-alternative/). On the way up, you'll pass through [Tappan](/service-area/tappan-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'A note on inspections for New Jersey drivers',
    body: [
      "NYS inspection covers New York-registered cars only, so Jersey plates follow New Jersey's process. Got a NY-plated car in the household? We can inspect it at our certified station on 303 while you wait.",
    ],
  },
  serviceLinks: ['oil-change-maintenance', 'check-engine-diagnostics', 'transmission-repair'],
  faqs: [
    {
      q: 'Will you work on a car with New Jersey plates?',
      a: 'Of course. Repairs and maintenance work the same no matter where the car is registered. Only the inspection is tied to the state.',
    },
    {
      q: 'Can you do my New Jersey inspection?',
      a: "No, New Jersey does its own. If your car failed there for something like a check engine light, we can find and fix the cause before the recheck.",
    },
  ],
};
export default copy;
