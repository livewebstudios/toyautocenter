import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'new-city-ny',
  title: 'Auto Repair near New City | Toy Auto Center, Route 303',
  description: "New City auto repair from Toyota and Lexus specialists, hybrids included. Toy Auto Center is about 15 minutes away on Route 303 in Blauvelt, NY.",
  h1: 'Auto Repair & NYS Inspection for New City Drivers',
  intro: [
    "New City is the county seat, and there's no shortage of places there to get an oil change. So why drive 15 minutes to Blauvelt? Usually because the car is a Toyota or Lexus, the problem isn't a simple one, and you want a shop that knows the platform. Toy Auto Center does auto repair for New City drivers, with a specialty in exactly those cars.",
    "That includes hybrids. A Prius, RAV4 Hybrid, Camry Hybrid or Lexus RX hybrid still has an engine, brakes, a 12-volt battery and a cooling system, and each one needs regular attention. We're glad to see them.",
  ],
  route: {
    heading: 'The run down from New City',
    driveTime: 'About 15 minutes',
    steps: [
      'Take Route 304 south toward Nanuet',
      'Go east on Route 59 to West Nyack',
      'Turn south on Route 303',
      'Drive into Blauvelt to 628 Route 303, then find us one block off the road on Birchwood Drive',
    ],
    body: [
      "The Palisades Parkway is the other way to go: south to the Route 303 exit in Orangeburg, then a few minutes north on 303. Pick whichever is moving.",
      "Because it's a longer trip, we suggest booking ahead and leaving the car for the day if it needs more than an oil change. If you get on the Thruway at exit 12 for work, the shop is right on your way.",
    ],
  },
  sections: [
    {
      heading: 'Specialist work worth the trip',
      body: [
        "Often what brings New City drivers south is a diagnostic puzzle: an intermittent check engine light, a hesitation that only happens on a cold engine, a warning that comes and goes. Modern Toyota and Lexus models run several computers that talk over a CAN bus (a shared network wiring the modules together), so one fault can light up three warnings. We sort out which module is really reporting the problem.",
        "That's the core of [our diagnostic work](/services/check-engine-diagnostics/), and it's why we spend the time on the cause before anything gets replaced. For the full picture of the makes we focus on, see [Toyota, Lexus and Scion repair](/toyota-lexus-repair/).",
      ],
    },
    {
      heading: 'Hybrid owners in New City',
      body: [
        "Hybrids are easy on brake pads, because regenerative braking (the electric motor slowing the car and recharging the battery as it does) handles much of the stopping. The catch is that calipers that barely move can seize, and pads can wear unevenly. We check them anyway.",
        "The small 12-volt battery is the other surprise. On most Toyota hybrids it doesn't crank the engine, but it boots up the computers, and when it's weak the car won't go into Ready mode. We test it along with the rest of the [charging and electrical system](/services/battery-electrical/).",
      ],
    },
    {
      heading: 'How we handle your New City auto repair',
      body: [
        "We diagnose, show you what we found, and do only the work you approve. Straight answers, no upsell list. Coming from the east side of the county? [Congers and Valley Cottage drivers](/service-area/congers-valley-cottage-ny/) take 303 the whole way.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Combine your inspection with the trip',
    body: [
      "Your NYS inspection is due every 12 months, safety and emissions both. We're a certified inspection station on Route 303, so if you're coming down from New City for service, have us inspect the car while it's here. Or come just for the inspection and wait while it's done.",
      "Hybrids get the same OBD-II emissions check as other gas cars: the station reads the computer instead of sampling the tailpipe. A lit check engine light still fails it.",
    ],
  },
  serviceLinks: ['check-engine-diagnostics', 'engine-repair', 'battery-electrical'],
  faqs: [
    {
      q: 'Do you work on Toyota and Lexus hybrids?',
      a: "Yes. We maintain and repair them, including brakes, cooling, the 12-volt system and diagnostics. Tell us the model and the symptom when you book and we'll talk it through.",
    },
    {
      q: 'Is it worth coming from New City instead of going to the dealer?',
      a: "For many Toyota and Lexus owners, yes. You get specialist knowledge, the factory maintenance schedule, and someone who explains the repair in plain English. Call 845.365.3003 and ask us anything before you decide.",
    },
  ],
};
export default copy;
