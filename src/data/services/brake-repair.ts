import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'brake-repair',
  title: 'Brake Repair in Blauvelt, NY | Toy Auto Center',
  description: "Brake repair in Blauvelt, NY: pads, rotors, calipers and brake fluid for all makes, including Toyota and Lexus hybrids. Straight quotes on Route 303.",
  h1: 'Brake Repair in Blauvelt, NY',
  promise: "We check the whole brake system and tell you what's worn and what isn't.",
  intro: [
    'Brake repair at Toy Auto Center starts with the whole system, not just the pads. We check pedal feel, fluid, hoses, calipers, rotors and the parking brake.',
    'How long pads last depends on how you drive. Hard stops, heavy loads and steep roads wear them faster, so the warning signs below tell you more than the date of your last brake job.',
  ],
  symptomsHeading: "Hear it? Feel it? Here's what it means",
  symptoms: [
    { feel: 'A high squeal when you brake.', means: 'Often the wear tab telling you the pads are getting thin.' },
    { feel: 'Grinding on every stop.', means: 'Metal on metal. The longer it goes, the more rotor it eats.' },
    { feel: 'The pedal feels soft or spongy.', means: 'Air or moisture in the fluid, or a leak. Get this checked now.' },
    { feel: 'The car pulls to one side when you brake.', means: 'One brake is working harder, often a sticking caliper.' },
    { feel: 'The pedal pulses or the steering wheel shakes.', means: 'Rotors worn unevenly, usually from heat.' },
  ],
  checkHeading: 'Our brake repair inspection, point by point',
  checks: [
    'Pad thickness at all four wheels',
    'Rotor wear and grooves',
    'Calipers',
    'Brake hoses and lines',
    'Brake fluid level and condition',
    'Parking brake',
    'ABS warning light',
    'Road test: pedal feel, pull and noise',
  ],
  fixHeading: 'Brake parts we replace',
  fixes: [
    {
      title: 'Pads and rotors',
      items: [
        { name: 'Brake pads', note: 'Matched to your car and the way you drive it.' },
        { name: 'Rotors', note: 'Replaced when they are too thin, warped or deeply grooved.' },
        { name: 'Shoes and drums', note: 'Many rear brakes and parking brakes still use them.' },
      ],
    },
    {
      title: 'Calipers, lines and fluid',
      items: [
        { name: 'Calipers', note: 'A sticking one pulls the car sideways. Still pulling? We check [alignment](/services/wheel-alignment-tires/).' },
        { name: 'Brake hoses and lines', note: 'We replace cracked hoses and rusted lines before they let go.' },
        { name: 'Brake fluid flush', note: 'Old, wet fluid out, fresh fluid in, air bled out.' },
      ],
    },
  ],
  toyota: {
    heading: 'Toyota and Lexus hybrids: why the pads last',
    body: [
      'In Toyota and Lexus hybrids, the electric motor does much of the slowing down, so pads often last a long time. The brake fluid still ages, and hybrid brakes need a special shutdown procedure before service. See our [Toyota and Lexus repair page](/toyota-lexus-repair/).',
    ],
  },
  faqs: [
    { q: 'Do I need new rotors every time I get pads?', a: "Not always. We measure them. If they're smooth and thick enough, they stay. If they're thin, grooved or making the pedal pulse, new pads alone won't fix it." },
    { q: 'Why does my brake pedal feel soft?', a: "Usually air or moisture in the fluid, or a leak somewhere in the system. Don't wait on this one. Call us at 845.365.3003." },
    { q: 'Is it safe to drive with the brake warning light on?', a: 'A red brake light can mean the parking brake is on, the fluid is low or there is a hydraulic problem. If it stays on with the parking brake off, get it checked before you drive far.' },
  ],
  closing: "If you hear a squeal or grind, [bring it in for a brake check](/contact/) and we'll show you what's left on the pads.",
};

export default copy;
