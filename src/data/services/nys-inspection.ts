import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'nys-inspection',
  title: 'NYS Inspection in Blauvelt, NY | Toy Auto Center',
  description: "NYS inspection in Blauvelt at a certified station on Route 303. Annual safety and emissions check for cars, SUVs and light trucks. You're welcome to wait.",
  h1: 'NYS Inspection in Blauvelt, NY',
  promise: "Your yearly safety and emissions inspection on Route 303, and you're welcome to wait.",
  intro: [
    "Toy Auto Center is a New York State Certified Motor Vehicle Inspection Station, NYS DMV facility no. {{DMV_FACILITY_NO}}. Almost every vehicle registered in New York needs a NYS inspection once a year, covering safety and, for most gas vehicles, emissions.",
    "We've been family owned since 1976 and we do inspections daily, so you can wait while we work. If something is borderline, we tell you it's borderline.",
  ],
  symptomsHeading: 'Will it pass? Check these first',
  symptoms: [
    { feel: 'Your check engine light is on.', means: 'On a 1996 or newer gas vehicle, that fails emissions even if the car drives fine.' },
    { feel: 'The battery was just replaced, or someone cleared the codes.', means: "The car's self-tests may not be done yet. A few days of normal driving usually sets them." },
    { feel: 'The brake pedal sinks low, or you hear grinding.', means: 'Thin pads or a brake problem. Brakes are one of the first things we look at.' },
    { feel: 'A headlight, brake light or plate light is out.', means: 'Every required light has to work. Walk around the car before you come in.' },
    { feel: 'The tires look bald at the edges or in the middle.', means: "Too little tread fails. New York's minimum is 2/32 of an inch." },
  ],
  checkHeading: 'What our NYS inspection includes',
  checkIntro: 'New York sets the pass and fail standards. Our 15-point inspection walks the whole vehicle, plus any concern you point out:',
  checks: [
    'Body, paint, rust and underbody damage',
    'Signs of past accident or flood damage',
    'Tires, wheels and glass',
    'Lights, A/C, gauges and all electrical items',
    'Interior and seat belts',
    'Engine, transmission, 4WD and AWD',
    'Steering, suspension, brakes and exhaust',
    'Fluids, leaks, and a road test where possible',
  ],
  fixHeading: 'Failed? What usually gets it to pass',
  fixes: [
    {
      title: 'Safety items',
      items: [
        { name: 'Brake pads and rotors', note: 'Worn pads or thin rotors fail. Our [brake repair bay](/services/brake-repair/) handles the whole job.' },
        { name: 'Tires', note: 'Too little tread, cords showing or a sidewall bulge means a new tire.' },
        { name: 'Bulbs and lenses', note: 'Burned-out bulbs and cracked lenses are quick, inexpensive fixes.' },
        { name: 'Ball joints and tie rod ends', note: 'Play in the front end fails because it affects how the car steers.' },
      ],
    },
    {
      title: 'Emissions and exhaust',
      items: [
        { name: 'Check engine light', note: 'We find what set the light, fix it, then let the self-tests finish.' },
        { name: 'Exhaust leaks', note: 'We replace rusted pipes and gaskets so the system seals again.' },
      ],
    },
  ],
  extra: [
    {
      heading: 'If it fails: what happens next',
      body: [
        "You get a written rejection that lists exactly what failed. Nothing gets repaired without your OK. We show you the problem, give you a price, and you decide.",
        "You can have the repair done here or at any shop you like. Once it passes re-inspection, the new sticker goes on the windshield.",
      ],
    },
  ],
  faqs: [
    { q: 'How often does my car need a NYS inspection?', a: "Once every 12 months. The sticker on your windshield shows the month and year it expires, so come in before that month ends." },
    { q: 'Will my car fail if the check engine light is on?', a: "On a 1996 or newer gas vehicle, yes, even if it runs perfectly. [Our check engine light testing](/services/check-engine-diagnostics/) finds what set the light, so you fix the cause instead of clearing a code that comes back." },
    { q: 'How much does a NYS inspection cost?', a: "New York State sets the fee, and it depends on the region and the type of vehicle. Call us for the current fee for yours. We quote any repair separately." },
  ],
  closing: "Sticker due this month? [Book your inspection](/contact/) or call 845.365.3003, and plan to wait while we do it.",
};

export default copy;
