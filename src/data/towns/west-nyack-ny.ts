import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'west-nyack-ny',
  title: 'Auto Repair near West Nyack | Toy Auto Center, Route 303',
  description: "NYS inspection and auto repair for West Nyack drivers, about 5 minutes south on Route 303 at Toy Auto Center in Blauvelt. Certified station, wait on site.",
  h1: 'Auto Repair & NYS Inspection for West Nyack Drivers',
  intro: [
    "Many West Nyack drivers find us when the inspection sticker is about to run out. Toy Auto Center is a certified NYS inspection station and auto repair shop on Route 303 in Blauvelt, 5 minutes south.",
    "Route 59, Route 303, the Thruway and Palisades Center traffic all meet here. Those crowded miles wear a car down.",
  ],
  route: {
    heading: 'West Nyack to the shop',
    driveTime: 'About 5 minutes',
    steps: [
      'Get on Route 303 near the Palisades Center',
      'Head south, away from the Thruway interchange',
      'Pull in at 628 Route 303 in Blauvelt; the shop sits 1 block off 303 on Birchwood Drive',
    ],
    body: [
      "Clear the mall traffic and 303 opens up. Drop the car before work and we'll reach out once it's diagnosed.",
    ],
  },
  sections: [
    {
      heading: 'West Nyack auto repair after a failed inspection',
      body: [
        "Fails are usually ordinary: worn pads, bald tires, a cracked windshield or a dead bulb. We show you the problem on the car, and you decide what gets fixed.",
      ],
    },
    {
      heading: 'When the check engine light is on',
      body: [
        "A lit check engine light fails emissions even when the car feels fine. We track down the cause with [check engine light diagnosis](/services/check-engine-diagnostics/) and handle [exhaust and catalytic converter work](/services/exhaust-air-intake/) in our own bays.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Inspection day in West Nyack, done in Blauvelt',
    body: [
      "Grab a chair while we do your yearly safety and emissions inspection. Keep the registration in the glove box so we can match it to the car. Here's [everything our NYS inspection looks at](/services/nys-inspection/).",
    ],
  },
  serviceLinks: ['nys-inspection', 'check-engine-diagnostics', 'exhaust-air-intake'],
  faqs: [
    {
      q: 'Where can I get a NYS inspection near West Nyack?',
      a: "Toy Auto Center, 628 Route 303 in Blauvelt, about 5 minutes south of the Palisades Center. We're a certified station, open Monday to Friday 8 to 5, and you can wait.",
    },
    {
      q: 'My check engine light is on and my inspection is due. What should I do first?',
      a: "Get the light diagnosed first. The car won't pass with it on, and clearing the code just makes it read not ready. We find the cause, fix it with your OK, then inspect.",
    },
  ],
};
export default copy;
