import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'nys-inspection',
  title: 'NYS Inspection in Blauvelt, NY | Toy Auto Center',
  description: "NYS inspection in Blauvelt at a certified station on Route 303. Annual safety and OBD-II emissions check, and you can wait while we inspect your vehicle.",
  h1: 'NYS Inspection in Blauvelt, NY',
  promise: "Annual safety and emissions inspection at a certified station on Route 303, and you're welcome to wait while we do it.",
  intro: [
    "Toy Auto Center is a New York State Certified Motor Vehicle Inspection Station, NYS DMV facility no. {{DMV_FACILITY_NO}}. Almost every car, truck and SUV registered in New York needs a NYS inspection once a year. It covers safety (the parts that stop, steer and light the vehicle) plus emissions for most gasoline vehicles.",
    "Your windshield sticker shows the month and year it runs out. You can wait while we inspect it, so there's no need to arrange a ride or leave the car overnight.",
    "We've been family owned and operated since 1976, one block off 303 on Birchwood Drive, and we do inspections daily. If something is borderline, we tell you it's borderline.",
  ],
  symptomsHeading: 'Will it pass? Check these first',
  symptoms: [
    { feel: 'Your check engine light is on.', means: "On a 1996 or newer gas vehicle, a lit check engine light fails the emissions portion, even if the car drives fine." },
    { feel: 'The battery was just replaced, or someone cleared the codes.', means: "The car's self-tests may not have finished, so the emissions check can't complete yet. A few days of normal driving usually sets them." },
    { feel: 'The brake pedal sinks low, or you hear grinding.', means: 'Thin pads or a hydraulic problem. Brakes are one of the first things an inspector looks at.' },
    { feel: 'A headlight, brake light or plate light is out.', means: 'Every required lamp has to work. Walk around the car with the lights on before you come in.' },
    { feel: 'The tires look bald at the edges or in the middle.', means: "New York's minimum tread depth is 2/32 of an inch. Uneven wear can also mean the alignment is off." },
    { feel: 'The wipers streak, or there is a crack in front of the driver.', means: "Torn wiper blades and glass damage in the driver's line of sight can both fail." },
    { feel: 'The exhaust is louder than it used to be.', means: 'A leaking exhaust fails the safety portion, and it can let fumes into the cabin.' },
  ],
  checkHeading: 'What our NYS inspection includes',
  checkIntro: 'New York sets the pass and fail standards. Our inspection walks the whole vehicle, and these are the 15 points we cover:',
  checks: [
    'Body and paint condition',
    'Scratches, cracks, dents and rust',
    'Underbody: rust and damage',
    'Tires and wheels',
    'Glass: cracks and other flaws',
    'Prior accident or flood damage',
    'Lights, A/C, gauges, all electrical items',
    'Interior: upholstery, mats, headliner, seat belts',
    'Engine and transmission',
    'Driveline, including 4WD and AWD systems',
    'Steering, suspension, brakes, exhaust',
    'Everything else under the hood',
    'Fluid levels, oil leaks, missing parts',
    'Any concern you point out to us',
    'Road test of the drivetrain, where possible',
  ],
  fixHeading: 'Failed? What usually gets it to pass',
  fixes: [
    {
      title: 'Safety items',
      items: [
        { name: 'Brake pads and rotors', note: "Worn friction or a rotor below its minimum thickness fails, and we handle the whole job in our [brake repair bay](/services/brake-repair/)." },
        { name: 'Tires', note: 'Tread at or below 2/32 of an inch, cords showing or a sidewall bulge all mean a new tire.' },
        { name: 'Bulbs and lenses', note: 'Burned-out bulbs and cracked lenses are quick, inexpensive fixes.' },
        { name: 'Ball joints and tie rod ends', note: 'Play in the front end is a safety fail because it affects how the car steers.' },
      ],
    },
    {
      title: 'Emissions items',
      items: [
        { name: 'Check engine light', note: 'We find the fault that set the light, fix it, then let the readiness monitors finish.' },
        { name: 'Gas cap and EVAP leaks', note: 'A worn cap or a cracked vapor hose can light the dash on its own.' },
        { name: 'Oxygen sensors and catalytic converter', note: 'Tested with live data before anything gets replaced.' },
      ],
    },
    {
      title: 'Exhaust',
      items: [
        { name: 'Exhaust leaks', note: 'We replace rusted pipes, flex joints and gaskets so the system seals again.' },
      ],
    },
  ],
  extra: [
    {
      heading: 'If it fails: what happens next',
      body: [
        "When something doesn't meet the state standard, the vehicle fails, and you get a written rejection that lists exactly what failed. Nothing gets repaired without your OK. We show you the problem, give you a price, and you decide.",
        "You can have the repair done here or at any shop you like. Once it's fixed, the vehicle is re-inspected, and when it passes, the new sticker goes on the windshield. If a part is wearing but still passes, we'll say so, so next year holds no surprises.",
      ],
    },
  ],
  techie: {
    heading: 'How the OBD-II emissions check works',
    body: [
      "For most gasoline vehicles from model year 1996 and newer, the emissions part of a NYS inspection isn't a tailpipe sniff. We connect to the OBD-II port under the dash, and the inspection equipment reads the car's own engine computer. It confirms the check engine light works and isn't commanded on, looks for stored emissions faults, and checks that the readiness monitors have run.",
      "Readiness monitors are self-tests the computer runs on the catalytic converter, oxygen sensors, EVAP system and more during ordinary driving. Disconnect the battery or clear a code and they reset to not ready, which is why clearing a code that morning won't get you a sticker.",
    ],
  },
  faqs: [
    { q: 'How often does my car need a NYS inspection?', a: "Once every 12 months. The sticker on your windshield shows the month and year it expires. Come in before the end of that month so you're not driving on an expired sticker." },
    { q: 'Can I wait while you do the inspection?', a: "Yes. You're welcome to wait while we inspect it. If we find a problem, you'll hear it from the person who looked at the car, before any repair happens." },
    { q: 'How much does a NYS inspection cost?', a: "New York State sets the inspection fee, and it depends on the region and the type of vehicle, so we don't print a number here. Call us for the current fee for your vehicle. We quote any repair separately." },
    { q: 'Will my car fail if the check engine light is on?', a: "On a 1996 or newer gasoline vehicle that gets the OBD-II check, yes, even if it runs perfectly. Have it diagnosed first. [Our check engine light testing](/services/check-engine-diagnostics/) finds what set the light, so you fix the cause instead of clearing a code that comes right back." },
    { q: 'Do you inspect trucks and SUVs?', a: "We inspect everyday passenger cars, SUVs, minivans and light pickups, domestic and import. If you have a heavy truck, a commercial vehicle or a trailer, call first and we'll tell you whether it's something we can inspect." },
  ],
  closing: "Sticker due this month? [Book your inspection](/contact/) or call 845.365.3003, and plan to wait while we do it.",
};

export default copy;
