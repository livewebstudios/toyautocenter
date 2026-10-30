import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'piermont-sparkill-ny',
  title: 'Auto Repair near Piermont & Sparkill | Toy Auto Center',
  description: "Auto repair for Piermont and Sparkill drivers: brakes, transmissions and rust from steep hills and river air. Toy Auto Center, Route 303 in Blauvelt, NY.",
  h1: 'Auto Repair & NYS Inspection for Piermont & Sparkill Drivers',
  intro: [
    "Piermont sits on the Hudson at the bottom of a steep hill, and Sparkill sits up top. Driving between them, or anywhere around here, loads a car up more than the flat parts of Rockland do. Toy Auto Center handles auto repair for Piermont and Sparkill from Route 303 in Blauvelt, about 10 to 12 minutes away.",
    "Three things wear faster here: brakes, from riding them down to the river; transmissions, from pulling back up; and anything steel underneath the car, from road salt and damp air off the water.",
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
      "It's a short trip with most of the climbing in the first mile. Once you're up in Sparkill, it's an easy run west to 303.",
      "Headed to Westchester? The Cuomo Bridge starts a few minutes north in South Nyack, and the Palisades Parkway isn't far either, so a stop at the shop doesn't add much to the commute.",
    ],
  },
  sections: [
    {
      heading: 'Piermont and Sparkill auto repair on a grade',
      body: [
        "Coming down a long hill, your brakes turn the weight of the car into heat. Do that every day and pads wear faster, rotors run hot, and the fluid breaks down. If the pedal goes soft partway down to the river, the fluid may have absorbed water and started to boil. A fluid test and flush is cheap, and we check it along with your [pads and rotors](/services/brake-repair/).",
        "Climbing is the transmission's job. An automatic working hard uphill makes heat, and heat is what wears out transmission fluid. Dark or burnt-smelling fluid, a delay before the car engages, or a slip as you start up a grade all deserve a look. When a rebuild doesn't make sense, we install [Jasper remanufactured transmissions](/services/transmission-repair/), backed by a 3 year / 100,000 mile parts and labor warranty.",
      ],
    },
    {
      heading: 'Salt air, salt roads and the underside of your car',
      body: [
        "Winter road salt does most of the damage, and the damp air by the river keeps the underbody wet longer. Brake lines, fuel lines, exhaust hangers and subframes are where rust shows up first. We put the car on a lift and look, so you hear about a corroded brake line before it starts to leak.",
        "Whatever we find, the process is the same: diagnose, explain it in plain terms, then fix only what needs fixing. Toyota and Lexus are our specialty, and every other make is welcome. Neighbors up the river have a [Nyack page](/service-area/nyack-ny/) of their own.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'NYS inspection for river-town cars',
    body: [
      "Every New York car gets a yearly safety and emissions inspection. We do them at our certified station on Route 303, and you can wait while the car is checked over.",
      "Rust is where river-town cars run into trouble. Heavy corrosion on the frame, brake lines or fuel lines can fail the safety portion, so if you've noticed flaking underneath, have us check it a few weeks before your sticker runs out.",
    ],
  },
  serviceLinks: ['brake-repair', 'transmission-repair', 'exhaust-air-intake'],
  faqs: [
    {
      q: 'Why do my brakes wear out so fast living in Piermont?',
      a: "Hills. Every trip down to the river turns the car's momentum into heat at the brakes, and that adds up. Shifting to a lower gear on the way down lets the engine share the work. We'll measure pad thickness, test the fluid, and tell you how much life is left.",
    },
    {
      q: 'Should I worry about rust on a car parked near the Hudson?',
      a: "Keep an eye on it. Rinse the underside a few times over the winter, especially after the roads have been salted, and have the brake and fuel lines checked once a year. Light surface rust is normal. Scale that flakes off in layers is not.",
    },
  ],
};
export default copy;
