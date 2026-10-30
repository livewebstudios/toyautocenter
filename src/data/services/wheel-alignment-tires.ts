import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'wheel-alignment-tires',
  title: 'Wheel Alignment & Tires in Blauvelt, NY | Toy Auto Center',
  description: "Wheel alignment and tires in Blauvelt, NY: alignment, rotation, balancing and new tires for cars, trucks and SUVs, all makes, at our Route 303 shop.",
  h1: 'Wheel Alignment & Tires in Blauvelt, NY',
  promise: 'Tires that wear evenly and a car that tracks straight, measured instead of guessed.',
  intro: [
    "The brakes stop the wheels, but the tires stop the car, each with a patch of rubber about the size of your hand. Wheel alignment and tire care decide how much grip those patches have when you need it.",
    "We handle alignment, rotation, balancing and new tires for cars, trucks and SUVs, all makes. Rockland County potholes knock alignment out a little at a time, and a check costs far less than a new set of tires.",
  ],
  symptomsHeading: 'Pulling, shaking or wearing funny?',
  symptoms: [
    { feel: 'The car drifts left or right on a straight road.', means: 'Alignment, a bad tire or uneven pressure. We rule out the cheap causes first.' },
    { feel: "The steering wheel is off center when you're going straight.", means: 'The alignment got knocked out, usually by a pothole or a curb.' },
    { feel: 'The steering wheel shakes at highway speed.', means: 'A front wheel out of balance, or a wheel weight that fell off.' },
    { feel: 'One edge of a tire is worn smooth.', means: 'The alignment is off, or a worn part is letting the wheel move.' },
    { feel: 'The tire pressure light came on with the first cold morning.', means: 'Cold air drops pressure. Top them off, and if it comes back, look for a leak.' },
  ],
  checkHeading: 'Our wheel alignment and tire readout',
  checks: [
    'Alignment angles, before and after',
    'Steering wheel centered',
    'Tread depth across every tire',
    'Tire age from the sidewall date',
    'Cuts, bulges and old plugs',
    'Pressure set to the door sticker',
    'Wheel balance and weights',
    'Suspension play before aligning',
  ],
  fixHeading: 'Alignment, rotation, balance, replacement',
  fixes: [
    {
      title: 'Alignment',
      items: [
        { name: 'Wheel alignment', note: "Set to the maker's spec so the car tracks straight and tires wear evenly." },
        { name: 'Alignment after repairs', note: 'New struts or tie rods change the angles, so it gets set again.' },
        { name: 'Worn parts first', note: "Loose parts won't hold an alignment, so our [steering and suspension repair](/services/steering-suspension/) comes first." },
      ],
    },
    {
      title: 'Tires',
      items: [
        { name: 'Rotation', note: "Moving tires around evens out wear, on the schedule in your owner's manual." },
        { name: 'Balancing', note: 'Small weights on the rim so the wheel spins smooth at speed.' },
        { name: 'New tires', note: 'Matched to the size and rating on your door sticker, and to how you drive.' },
      ],
    },
  ],
  faqs: [
    { q: 'How often do I need a wheel alignment?', a: "There's no single interval. Have it checked once a year, with new tires, after suspension work, and after a hard pothole or curb hit. It's part of the 12-month visit on our [maintenance schedule](/services/oil-change-maintenance/)." },
    { q: 'How do I know when my tires are worn out?', a: "New York's legal minimum is 2/32 of an inch. Put a penny in the groove with Lincoln's head down. If you can see the top of his head, it's time. Grip in the rain drops off well before that." },
    { q: 'Why does my car still pull after an alignment?', a: "The pull can come from a tire or a sticking brake, not the alignment. We swap tires side to side to test it, and if it only pulls when you stop, we check the [brakes](/services/brake-repair/)." },
  ],
  closing: "Pulling, shaking or wearing one edge? [Set up an alignment check](/contact/) and we'll measure it before we touch it.",
};

export default copy;
