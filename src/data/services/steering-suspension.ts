import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'steering-suspension',
  title: 'Steering & Suspension in Blauvelt, NY | Toy Auto Center',
  description: "Steering and suspension repair in Blauvelt, NY: struts, shocks, ball joints, tie rods, control arms and power steering for all makes, on Route 303.",
  h1: 'Steering & Suspension in Blauvelt, NY',
  promise: "Clunks, wander and bounce, traced to the part that's actually worn.",
  intro: [
    "Your suspension keeps the tires on the road, and your steering points them where you want to go. Steering and suspension repair catches wear before it eats tires, overworks [your brakes](/services/brake-repair/) and makes the car harder to control.",
    "We put the car on the lift, check each joint by hand, and show you anything that moves when it shouldn't. Then you choose what gets fixed and when.",
  ],
  symptomsHeading: 'Clunk, wander or bounce?',
  symptoms: [
    { feel: 'A clunk over bumps or potholes.', means: 'Worn ball joints, sway bar links or bushings.' },
    { feel: 'The car keeps bouncing after a dip in the road.', means: 'Worn shocks or struts.' },
    { feel: "You're always correcting the wheel to stay in your lane.", means: 'Loose tie rods or wear in the steering.' },
    { feel: 'Steering feels heavy or groans when you turn.', means: 'Low power steering fluid, a tired pump or a slipping belt.' },
    { feel: 'The tire edges wear faster than the middle.', means: 'Worn parts are letting the alignment shift. Fix them first, then align.' },
  ],
  checkHeading: 'What we check on the lift',
  checks: [
    'Ball joints',
    'Tie rod ends, inner and outer',
    'Steering rack: boots, mounts, leaks',
    'Control arms, bushings and sway bar links',
    'Shocks and struts: leaks, bounce test',
    'Strut mounts',
    'Coil springs: sag and breaks',
    'Power steering: fluid, hoses, pump noise',
  ],
  fixHeading: 'Steering and suspension parts we replace',
  fixes: [
    {
      title: 'Suspension',
      items: [
        { name: 'Struts and shocks', note: 'Worn ones let the car bounce, shake over rough roads or dip when you brake.' },
        { name: 'Coil springs', note: 'They sag with age and can crack, which drops one corner.' },
        { name: 'Control arms and bushings', note: 'Worn ones bring clunks, wander and sloppy handling.' },
      ],
    },
    {
      title: 'Steering',
      items: [
        { name: 'Ball joints', note: 'The joint your wheel pivots on. A worn one clunks and vibrates.' },
        { name: 'Tie rod ends', note: 'Worn ones leave the steering loose and knock the alignment out.' },
        { name: 'Steering rack and power steering', note: 'A steady knock, a groan or heavy steering usually points here.' },
      ],
    },
  ],
  faqs: [
    { q: 'How do I know if my shocks or struts are worn?', a: "Push down hard on one corner and let go. A healthy one settles after a single rebound. If it keeps bouncing, or you see oil on the shock, it's worn." },
    { q: 'Do I need an alignment after suspension work?', a: "Usually, yes. New struts, tie rods or ball joints change the angles, and skipping the alignment can wear out tires fast. We'll [align the wheels](/services/wheel-alignment-tires/) right after the repair." },
    { q: 'Is a clunking noise dangerous?', a: "It depends what's clunking. A worn sway bar link is mostly noise. A worn ball joint or tie rod can separate if ignored, and then you lose control of that wheel. So we find the source." },
  ],
  closing: "Hear a clunk you can't place? [Book a steering and suspension check](/contact/) and we'll find it on the lift.",
};

export default copy;
