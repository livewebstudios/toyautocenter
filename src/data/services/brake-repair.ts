import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'brake-repair',
  title: 'Brake Repair in Blauvelt, NY | Toy Auto Center',
  description: "Brake repair in Blauvelt, NY: pads, rotors, calipers and brake fluid for all makes, including Toyota and Lexus hybrids. Straight quotes on Route 303.",
  h1: 'Brake Repair in Blauvelt, NY',
  promise: "We check the whole brake system, tell you what's worn and what isn't, and fix what needs it.",
  intro: [
    "Your brakes turn a few thousand pounds of moving vehicle into a stopped one, every time you ask. Brake repair at Toy Auto Center starts with the whole system, not just the pads: pedal feel, fluid, hoses and lines, calipers, rotors and the parking brake.",
    "How long brakes last depends a lot on you. Hard, late stops and riding the pedal wear pads faster than gentle, early braking. The pad material matters too. So does what you carry: towing a trailer, hauling heavy loads or driving steep roads takes more braking force, and more pad. Put it all together and pads typically last anywhere from 35,000 to 60,000 miles.",
    "So the date of your last brake job doesn't tell the whole story. The warning signs below do.",
  ],
  symptomsHeading: "Hear it? Feel it? Here's what it means",
  symptoms: [
    { feel: 'A high squeal when you brake that stops when you let off.', means: 'Often the wear indicator, a small metal tab built to squeal once the pad gets thin.' },
    { feel: 'Grinding or groaning on every stop.', means: "That's metal on metal. The longer it goes, the more rotor it chews up." },
    { feel: 'The pedal feels soft or spongy.', means: 'Air or moisture in the fluid, or a leak. This one needs attention now.' },
    { feel: 'The pedal travels closer to the floor than it used to.', means: 'Low fluid from worn pads or a leak, or a master cylinder losing pressure.' },
    { feel: 'The car pulls to one side when you brake.', means: 'One side is working harder: a sticking caliper, a collapsed hose or uneven pad wear.' },
    { feel: 'The pedal pulses or the steering wheel shakes while stopping.', means: 'Rotors with uneven thickness, usually from heat.' },
    { feel: 'It takes longer to stop than it used to.', means: 'Worn pads, glazed rotors or tired fluid. Trust that feeling.' },
    { feel: 'One wheel locks up and skids.', means: "That brake is grabbing harder than the rest. Brakes don't always wear at the same pace." },
  ],
  checkHeading: 'Our brake repair inspection, point by point',
  checks: [
    'Pad thickness at all four wheels',
    'Rotor thickness, scoring and runout',
    'Caliper slides and pistons',
    'Rubber brake hoses and steel lines',
    'Fluid level, color and moisture',
    'Master cylinder and power booster',
    'Drum brakes and shoes, where fitted',
    'Parking brake adjustment',
    'ABS warning light and wheel speed sensors',
    'Road test: pedal feel, pull and noise',
  ],
  fixHeading: 'Brake parts we replace',
  fixes: [
    {
      title: 'Friction parts',
      items: [
        { name: 'Brake pads', note: 'Matched to the vehicle and the way you drive it, not just whatever fits the caliper.' },
        { name: 'Rotors', note: "Replaced when they're below minimum thickness, warped or deeply scored." },
        { name: 'Shoes and drums', note: 'Many rear axles and parking brakes still use them, and they wear too.' },
      ],
    },
    {
      title: 'Hydraulics',
      items: [
        { name: 'Calipers', note: 'A seized piston or slide drags the pad, overheats the rotor and pulls the car sideways, and if the pull remains after brake work, we check [alignment and tires](/services/wheel-alignment-tires/) next.' },
        { name: 'Brake hoses and lines', note: 'We replace cracked rubber hoses and rusted steel lines before they let go.' },
        { name: 'Master cylinder', note: 'A worn one lets the pedal slowly sink while you hold it at a light.' },
        { name: 'Brake fluid flush', note: 'We push out the old, wet fluid, fill it fresh and bleed out the air.' },
      ],
    },
    {
      title: 'Anti-lock system',
      items: [
        { name: 'Wheel speed sensors', note: 'A failed sensor lights the ABS warning and can switch off traction or stability control.' },
        { name: 'ABS diagnosis', note: 'The ABS module pulses the brakes in a hard stop so the wheels keep turning and you can still steer.' },
      ],
    },
  ],
  techie: {
    heading: 'Organic, semi-metallic or ceramic?',
    body: [
      "Pad compound changes how a brake feels, sounds and wears. Organic pads are quiet and easy on rotors, but they wear fastest and fade under heavy heat. Semi-metallic pads mix steel fibers into the compound: they shrug off heat and heavy loads, but they're noisier and dustier. Ceramic pads run quiet and clean and last a long time on daily drivers, though they cost more up front. The same compound also varies from one manufacturer to the next, which is why two cars at the same mileage can need brakes at very different times.",
    ],
  },
  toyota: {
    heading: 'Toyota and Lexus hybrids: why the pads last',
    body: [
      "In a Prius, Camry Hybrid, RAV4 Hybrid or Lexus hybrid, the electric motor does much of the slowing down. Lift off the gas or press lightly on the pedal and the motor acts as a generator, turning motion back into battery charge. That's regenerative braking. The friction pads mostly handle harder stops and the last few miles per hour, so they often outlast the pads on a gas-only car by a wide margin.",
      "Brake fluid doesn't get the same break. It absorbs moisture from the air over time no matter how little the pads work, and wet fluid boils sooner and corrodes parts from the inside. Hybrid brake systems are electronically controlled and can build pressure on their own, so they have to be disabled by Toyota's procedure before anyone opens them up. There's more on hybrid service on our [Toyota and Lexus repair page](/toyota-lexus-repair/).",
    ],
  },
  faqs: [
    { q: 'Do I need new rotors every time I get pads?', a: "Not always. We measure rotor thickness and check for warping and deep grooves. If the rotors are within spec and smooth, they can stay. If they're thin, scored or causing a pulse in the pedal, new pads on old rotors won't fix the problem." },
    { q: 'Why does my brake pedal feel soft?', a: "Usually air or moisture in the brake fluid, or a leak in a line, hose, caliper or the master cylinder. A soft pedal means the system is losing some of the force you put into it. Don't wait on this one. Call us at 845.365.3003." },
    { q: 'How often should brake fluid be changed?', a: "Follow your owner's manual, since some makers go by years and others by miles. Brake fluid pulls in moisture over time, which lowers its boiling point and corrodes parts from the inside, so age matters as much as distance." },
    { q: 'Is it safe to drive with the brake warning light on?', a: "A red brake light can mean the parking brake is on, the fluid is low or there's a hydraulic problem. If the parking brake is off and the light stays on, get it checked before you drive far. An amber ABS light means the anti-lock system is off: normal braking should still work, but have it looked at soon." },
  ],
  closing: "Squeal, grind or soft pedal? [Bring it in for a brake check](/contact/) and we'll show you what's left on the pads.",
};

export default copy;
