import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'northvale-norwood-nj',
  title: 'Auto Repair near Northvale & Norwood | Toy Auto Center',
  description: "Auto repair for Northvale and Norwood, NJ drivers who work or shop in Rockland County. Toy Auto Center is 12 to 15 minutes north on Route 303, Blauvelt.",
  h1: 'Auto Repair for Northvale & Norwood Drivers',
  intro: [
    "Northvale and Norwood sit just below the state line, and a lot of people there spend their days in Rockland: working in Orangeburg, shopping in West Nyack, dropping kids off in Tappan. Toy Auto Center does auto repair for Northvale and Norwood drivers from Route 303 in Blauvelt, about 12 to 15 minutes north. A New Jersey plate is no problem.",
    "We're family owned, we've been at it since 1976, and we specialize in Toyota and Lexus while working on every make. If the dealer is where your car usually goes, we're worth a comparison. There's a Toyota dealer two doors down from us on 303; we're the independent option on the same stretch of road.",
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
      "Once you're on 303, it's the same road the whole way. Morning traffic through Tappan is the only real slowdown.",
      "If you work in Rockland, the easiest plan is to drop the car on your way in and grab it on your way home. Palisades Parkway drivers can use the Route 303 exit in Orangeburg and come north from there.",
    ],
  },
  sections: [
    {
      heading: 'Northvale and Norwood auto repair across the line',
      body: [
        "Repairs don't care which state the car is registered in. Brakes, suspension, check engine lights, oil service, and [transmission work](/services/transmission-repair/) including Jasper remanufactured units: we handle all of it on New Jersey cars exactly the way we do on New York ones.",
        "The one thing we can't do for an NJ-registered car is a New York inspection. More on that below.",
      ],
    },
    {
      heading: 'A dealer alternative for Toyota and Lexus owners',
      body: [
        "If you own a Toyota or Lexus, we're a good place for maintenance once the factory warranty ends, or for a second opinion on a big estimate. We follow the factory schedule, diagnose before we replace anything, and tell you what's urgent and what can wait.",
        "Here's [why owners choose an independent shop](/dealer-alternative/), and here's what we know about [Toyota and Lexus models](/toyota-lexus-repair/). On the way up, you'll pass through [Tappan](/service-area/tappan-ny/) first.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'A note on inspections for New Jersey drivers',
    body: [
      "NYS inspection applies to New York-registered vehicles only. New Jersey handles its own inspections, on its own schedule and at its own stations, so a Northvale or Norwood car with Jersey plates follows the New Jersey process, not ours.",
      "If you have a New York-registered car in the household, or you work in Rockland and keep a NY-plated vehicle, we can do that inspection. We're a certified NYS station on Route 303, and you're welcome to wait while it's done.",
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
      a: "No. New Jersey inspects its own vehicles in New Jersey. If your car failed there for something like a check engine light, though, we can diagnose and repair the cause, and you take it back for the recheck.",
    },
  ],
};
export default copy;
