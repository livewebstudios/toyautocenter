import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'orangeburg-ny',
  title: 'Auto Repair near Orangeburg | Toy Auto Center, Route 303',
  description: "Need a mechanic in Orangeburg, NY? Toy Auto Center does auto repair and NYS inspections on Route 303 in Blauvelt, about 4 minutes north. Family owned.",
  h1: 'Auto Repair & NYS Inspection for Orangeburg Drivers',
  intro: [
    "If you searched for a mechanic in Orangeburg, you probably found a couple of local shops with a phone number and not much else. We're Toy Auto Center, and we handle Orangeburg auto repair from our shop on Route 303 in Blauvelt, about 4 minutes north. Family owned since 1976, a certified NYS inspection station, and we work on all makes and models.",
    "Orangeburg is our closest neighbor, so a lot of our work comes from right here: the commuter car that's overdue for an oil change, the check engine light that came on at a red light on 303, the brake squeal that started last week. You don't have to plan a day around us. It's a short hop.",
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
      "Orangeburg sits just below Blauvelt on 303, so there isn't much of a route to describe. Point the car north and you'll be in our lot within a couple of songs.",
      "Coming home on the Palisades Interstate Parkway? Take the Route 303 exit in Orangeburg and head north. That makes the shop an easy stop on the way back from the George Washington Bridge or the city, as long as you get here before we close at 5.",
    ],
  },
  sections: [
    {
      heading: 'What Orangeburg auto repair usually looks like',
      body: [
        "Most of what rolls in from Orangeburg is the everyday work that keeps a car honest: oil service and [factory scheduled maintenance](/services/oil-change-maintenance/), brake pads and rotors, tires that wore unevenly, and warning lights. Nothing exotic, just done right.",
        "A check engine light gets a real diagnosis here. The code from the OBD-II port (the onboard diagnostics plug under your dash) only tells us which system flagged a fault. We also read the freeze frame, a snapshot of engine speed, temperature and load at the moment the light came on, which often points straight at the cause. That's the heart of [how we handle a check engine light](/services/check-engine-diagnostics/).",
      ],
    },
    {
      heading: 'A neighborhood shop that explains first',
      body: [
        "We look before we quote. You get a plain-English rundown of what failed, what can wait, and what can't. Then we fix what you approved and nothing more. If your brakes still have half their pad left, we'll say so and send you on your way.",
        "Every make is welcome, domestic or import, and Toyota and Lexus are our specialty. If there's a Camry, RAV4 or Highlander in your driveway, we know that car well. Live a little farther south? Here's our [page for Tappan drivers](/service-area/tappan-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'NYS inspection, 4 minutes from Orangeburg',
    body: [
      "New York requires every registered car to pass a safety and emissions inspection once a year. We're a certified NYS inspection station right on Route 303, so when your sticker month comes around, pull in, hand over the keys, and wait while we do it.",
      "On most cars built since 1996, the emissions part is an OBD-II check: we plug in and the state's system reads the car's computer. A lit check engine light means an automatic fail, so if yours is on, let us track it down first. Here's [what the NYS inspection covers](/services/nys-inspection/).",
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
      a: "Yes. We open at 8, Monday to Friday. Leave the car, tell us what it's doing, and we'll call or text with what we find before any work starts. Orangeburg is close enough that a neighbor can run you home.",
    },
    {
      q: 'Do you only fix Toyotas?',
      a: "No. Toyota and Lexus are our specialty, but we fix Fords, Chevys, Hondas, Subarus and everything in between.",
    },
  ],
};
export default copy;
