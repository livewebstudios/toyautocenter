import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'nanuet-ny',
  title: 'Auto Repair near Nanuet | Toy Auto Center, Route 303',
  description: "Brake work and auto repair for Nanuet drivers stuck in Route 59 traffic, done at Toy Auto Center on Route 303 in Blauvelt, a 10-minute drive away.",
  h1: 'Auto Repair & NYS Inspection for Nanuet Drivers',
  intro: [
    "If you drive in Nanuet, you brake a lot. Route 59 is one traffic light and shopping-center entrance after another, and every one of them costs a little pad and rotor. Toy Auto Center does auto repair for Nanuet drivers from our family-owned shop on Route 303 in Blauvelt, about 10 minutes away, and brakes are near the top of the list.",
    "We also see the side effects of that kind of driving: tires that cupped, front ends that clunk over curb cuts, and alignment knocked out by potholes on the side streets. None of it is mysterious. It's the mileage Nanuet puts on a car, and we fix it without padding the bill.",
  ],
  route: {
    heading: 'Nanuet to Blauvelt',
    driveTime: 'About 10 minutes',
    steps: [
      'Head east on Route 59 toward West Nyack',
      'Turn south onto Route 303 near the Thruway',
      'Follow 303 south into Blauvelt',
      "You'll find us at number 628, one block off 303 along Birchwood Drive",
    ],
    body: [
      "If you're coming in around 8 on a weekday, give yourself a few extra minutes for Route 59. By midmorning it moves.",
      "Thruway commuters have it easy: exit 12 puts you on 303, then it's south to us. If you're on the Palisades Parkway instead, get off at the Route 303 exit in Orangeburg and come north.",
    ],
  },
  sections: [
    {
      heading: 'Nanuet auto repair starts with the brakes',
      body: [
        "A disc brake is simple in principle: the caliper squeezes pads against a spinning rotor, and friction turns speed into heat. The failures are just as plain. Pads wear thin, rotors wear or develop thickness variation, caliper slide pins seize, and brake fluid absorbs water until it boils at a lower temperature.",
        "Signs to watch for: a high squeal (often the built-in wear tab), grinding (metal on metal, so stop driving soon), a pulsing pedal, or a car that pulls to one side under braking. Our [brake repair page](/services/brake-repair/) walks through what we check and what we replace.",
        "If the ABS light is on, the anti-lock system has switched itself off. The ABS module stores its own fault codes, separate from the engine computer, and we read those directly instead of guessing.",
      ],
    },
    {
      heading: 'Tires, alignment, and deciding what to fix',
      body: [
        "Hard stops and curb strikes take a toll on tires and steering parts too. We inspect tie rods, ball joints and struts, then [check the alignment](/services/wheel-alignment-tires/) so new tires don't wear out early. Ball joints are the pivots that let the front wheels steer and move up and down; a worn one clunks and can let the wheel wander.",
        "Every job starts with a diagnosis and a conversation. We tell you what's worn, what's fine, and what can wait, and we replace only the parts you approve. We specialize in Toyota and Lexus and fix everything else, too. Our [Pearl River neighbors](/service-area/pearl-river-ny/) are about the same distance away.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Inspections for Nanuet cars',
    body: [
      "The state wants your car checked for safety and emissions every year. Brakes are a big part of the safety side, so if yours have been noisy, have us look at them before the sticker comes due.",
      "We're a certified NYS inspection station on Route 303. You're welcome to wait in the shop while the inspection happens, and if anything needs work, you'll hear about it before we touch it.",
    ],
  },
  serviceLinks: ['brake-repair', 'wheel-alignment-tires', 'steering-suspension'],
  faqs: [
    {
      q: 'Do I need new rotors every time I get brake pads?',
      a: "No. We measure rotor thickness against the minimum stamped on the rotor itself and check it for runout and scoring. If it's within spec and smooth, it stays. If it's thin or out of true, we show you the measurement before we recommend anything.",
    },
    {
      q: 'Is a grinding noise from my brakes an emergency?',
      a: "Treat it as a stop-soon. Grinding usually means the pad material is gone and the steel backing is touching the rotor, which chews up the rotor fast and makes stops longer. Call 845.365.3003 and we'll get you in.",
    },
  ],
};
export default copy;
