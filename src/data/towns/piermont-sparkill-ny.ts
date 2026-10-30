import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'piermont-sparkill-ny',
  title: 'Auto Repair near Piermont & Sparkill | Toy Auto Center',
  description: "Auto repair for Piermont and Sparkill drivers: brakes, transmissions and rust from steep hills and river air. Toy Auto Center, Route 303 in Blauvelt, NY.",
  h1: 'Auto Repair & NYS Inspection for Piermont & Sparkill Drivers',
  intro: [
    "Piermont sits on the Hudson at the bottom of a steep hill, and Sparkill sits up top. Toy Auto Center handles auto repair for Piermont and Sparkill from Route 303 in Blauvelt, about 10 to 12 minutes away.",
    "Cars wear faster here. Brakes take the trip down, transmissions the climb back up, and salt plus river air works on the underside.",
  ],
  route: {
    heading: 'Up the hill and over to 303',
    driveTime: 'About 10 to 12 minutes',
    steps: [
      'From Piermont, climb the hill into Sparkill',
      'Follow Route 340 out of Sparkill toward Orangeburg',
      'Pick up Route 303 north into Blauvelt',
      "Turn in at 628 Route 303; we're 1 block off 303 on Birchwood Drive",
    ],
    body: [
      "Most of the climbing is in the first mile, then it's an easy run west to 303.",
    ],
  },
  sections: [
    {
      heading: 'Piermont and Sparkill auto repair on a grade',
      body: [
        "A soft pedal on the way down to the river can mean worn-out brake fluid, so we test it with your [pads and rotors](/services/brake-repair/). For a slipping transmission, we install [Jasper remanufactured units](/services/transmission-repair/) with a 3 year / 100,000 mile warranty.",
      ],
    },
    {
      heading: 'Salt air, salt roads and the underside of your car',
      body: [
        "Salt and damp air go after brake and fuel lines first. We put the car on a lift and look, so you hear about rust before a line leaks. Up the river? See our [Nyack page](/service-area/nyack-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'NYS inspection for river-town cars',
    body: [
      "Heavy rust on the frame or brake lines can fail the yearly safety check. If you see flakes underneath, have our certified station on 303 look before your sticker runs out.",
    ],
  },
  serviceLinks: ['brake-repair', 'transmission-repair', 'exhaust-air-intake'],
  faqs: [
    {
      q: 'Why do my brakes wear out so fast living in Piermont?',
      a: "Hills. Every trip down to the river heats the brakes, and a lower gear helps. We'll measure the pads and tell you how much life is left.",
    },
    {
      q: 'Should I worry about rust on a car parked near the Hudson?',
      a: "Rinse the underside after salty roads and have the lines checked yearly. Light surface rust is normal. Rust that flakes off in layers is not.",
    },
  ],
};
export default copy;
