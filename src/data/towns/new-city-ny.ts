import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'new-city-ny',
  title: 'Auto Repair near New City | Toy Auto Center, Route 303',
  description: "New City auto repair from Toyota and Lexus specialists, hybrids included. Toy Auto Center is about 15 minutes away on Route 303 in Blauvelt, NY.",
  h1: 'Auto Repair & NYS Inspection for New City Drivers',
  intro: [
    "New City has plenty of oil change spots, so why drive 15 minutes to Blauvelt? Usually it's a Toyota or Lexus with a tricky problem. Toy Auto Center does auto repair for New City drivers, and those makes are our specialty.",
    "Hybrids too, like the Prius, RAV4 Hybrid and Lexus RX. We're glad to see them.",
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
      "The Palisades Parkway works too: south to the Route 303 exit in Orangeburg, then a few minutes north. For bigger jobs, book ahead and leave the car for the day.",
    ],
  },
  sections: [
    {
      heading: 'Specialist work worth the trip',
      body: [
        "A warning light that comes and goes, or a stumble only on cold mornings, is what brings a lot of New City drivers south. We pin down the cause before replacing anything. See [our diagnostic work](/services/check-engine-diagnostics/) and [Toyota, Lexus and Scion repair](/toyota-lexus-repair/).",
      ],
    },
    {
      heading: 'Hybrid owners in New City',
      body: [
        "Hybrid brake parts that barely move can stick, so we check them anyway. A weak 12-volt battery (the small one) can keep the car from turning on. We test it with the [electrical system](/services/battery-electrical/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Combine your inspection with the trip',
    body: [
      "Have us do your yearly NYS inspection while the car is here, or come just for that. Hybrids get the same computer check, and a lit check engine light still fails.",
    ],
  },
  serviceLinks: ['check-engine-diagnostics', 'engine-repair', 'battery-electrical'],
  faqs: [
    {
      q: 'Do you work on Toyota and Lexus hybrids?',
      a: "Yes. We maintain and repair them: brakes, cooling, the 12-volt battery and diagnostics. Tell us the model and what it's doing when you book.",
    },
    {
      q: 'Is it worth coming from New City instead of going to the dealer?',
      a: "For many Toyota and Lexus owners, yes. You get specialist know-how, the factory maintenance schedule, and answers in plain English. Call 845.365.3003 and ask us anything first.",
    },
  ],
};
export default copy;
