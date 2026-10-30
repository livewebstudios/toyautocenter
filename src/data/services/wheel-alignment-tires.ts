import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'wheel-alignment-tires',
  title: 'Wheel Alignment & Tires in Blauvelt, NY | Toy Auto Center',
  description: "Wheel alignment and tires in Blauvelt, NY: alignment, rotation, balancing and new tires for cars, trucks and SUVs, all makes, at our Route 303 shop.",
  h1: 'Wheel Alignment & Tires in Blauvelt, NY',
  promise: 'Tires that wear evenly and a car that tracks straight, measured instead of guessed.',
  intro: [
    "Most people think the brakes stop the car. The brakes stop the wheels. The tires stop the car, using four contact patches each about the size of your hand. Wheel alignment and tire care decide how much grip those patches have when you need it.",
    "We handle wheel alignment, tire rotation, balancing and replacement for cars, trucks and SUVs, domestic and import. A pull to one side, a crooked steering wheel or a tire wearing on one edge are all things we can measure.",
    "Rockland County potholes and curbs knock alignment out a little at a time. A check after a hard hit costs far less than a new set of tires worn down on one shoulder.",
  ],
  symptomsHeading: 'Pulling, shaking or wearing funny?',
  symptoms: [
    { feel: 'The car drifts left or right on a straight road.', means: 'Alignment, a tire with a shifted internal belt, or uneven pressure. We rule out the cheap causes first.' },
    { feel: "The steering wheel is off center when you're going straight.", means: 'Toe is out of spec, usually after a pothole or a curb strike.' },
    { feel: 'The steering wheel shakes at highway speed.', means: 'A front wheel out of balance, or a wheel weight that fell off.' },
    { feel: 'The seat or floor vibrates instead.', means: 'Often a rear wheel out of balance, or a damaged tire.' },
    { feel: 'One edge of a tire is worn smooth.', means: 'Camber or toe is off, or a worn suspension part is letting the wheel move.' },
    { feel: 'Scalloped, cupped patches across the tread.', means: 'Worn shocks or struts are letting the tire bounce.' },
    { feel: 'The tire pressure light came on with the first cold morning.', means: 'Cold air drops pressure, roughly 1 psi for every 10 degrees. Top them off, and if it returns, look for a leak.' },
    { feel: 'Tires squeal on easy, slow turns.', means: 'Low pressure, or a toe setting that scrubs the tread sideways.' },
  ],
  checkHeading: 'Our wheel alignment and tire readout',
  checks: [
    'Camber, caster and toe: before and after',
    'Thrust angle (rear axle vs. centerline)',
    'Steering wheel centered',
    'Tread depth, inner and outer edge, every tire',
    'Tire age from the DOT date code',
    'Sidewall cuts, bulges and old plugs',
    'Pressure set to the door placard',
    'Wheel balance and weights',
    'Tire pressure warning light status',
    'Suspension play before aligning',
  ],
  fixHeading: 'Alignment, rotation, balance, replacement',
  fixes: [
    {
      title: 'Alignment',
      items: [
        { name: 'Wheel alignment', note: "We set camber, caster and toe back to the maker's spec so the car tracks straight and the tires wear flat." },
        { name: 'Alignment after repairs', note: 'New struts, tie rods or control arms move the geometry, so it has to be set again afterward.' },
        { name: 'Worn parts first', note: "Loose joints won't hold an alignment, so we fix them through our [steering and suspension repair](/services/steering-suspension/) before we set the angles." },
      ],
    },
    {
      title: 'Tire service',
      items: [
        { name: 'Rotation', note: "Moving tires between positions evens out wear, on the interval your owner's manual lists." },
        { name: 'Balancing', note: 'Small weights on the rim cancel heavy spots so the wheel spins smooth at speed.' },
      ],
    },
    {
      title: 'Replacement',
      items: [
        { name: 'New tires', note: 'Matched to the size, load and speed rating on your door placard, and to how you actually drive.' },
        { name: 'Pairs or full sets', note: 'All-wheel drive systems are sensitive to mismatched tread depth, so some makers call for all four at once.' },
      ],
    },
  ],
  techie: {
    heading: 'Camber, caster and toe in plain terms',
    body: [
      "Alignment is three angles. Camber is the tilt of the tire seen from the front: tipped in at the top is negative, tipped out is positive, and too much either way wears one edge. Caster is the tilt of the steering axis seen from the side. It's why the wheel returns to center after a turn, and uneven caster side to side makes a car pull. Toe is whether the fronts of the tires point toward each other or away, seen from above. Toe is the big tire killer: a small error drags the tread sideways every mile you drive. We also check thrust angle, the direction the rear axle points, so the steering wheel ends up centered.",
    ],
  },
  faqs: [
    { q: 'How often do I need a wheel alignment?', a: "There's no single interval for every car. Have it checked once a year, with new tires, after steering or suspension work, and after a hard pothole or curb hit. It's already part of the 12-month visit on our [maintenance schedule](/services/oil-change-maintenance/)." },
    { q: 'How do I know when my tires are worn out?', a: "New York's legal minimum is 2/32 of an inch of tread. Put a penny in the groove with Lincoln's head down: if you can see the top of his head, you're at or near that point. Wet-road grip drops off well before the legal limit, so plan ahead." },
    { q: 'How old is too old for a tire?', a: "Rubber ages even when the tread looks fine. The last four digits of the DOT code on the sidewall are the week and year it was made. Many tire and vehicle makers suggest replacing tires somewhere between six and ten years old, so check your owner's manual, and we'll point out any cracking we see." },
    { q: 'Why does my car still pull after an alignment?', a: "The pull can come from a tire, not the alignment. A tire with a shifted internal belt can drag the car sideways, and so can a sticking caliper. We swap tires side to side to test it, and if the pull only shows up when you stop, we check the [calipers and brake hoses](/services/brake-repair/)." },
    { q: 'Do I need to replace all four tires at once?', a: "Not always. On most front or rear wheel drive cars, a matched pair on one axle is fine, with the newer pair usually going on the rear. All-wheel drive vehicles are pickier, because big differences in tread depth can strain the drivetrain." },
  ],
  closing: "Pulling, shaking or wearing one edge? [Set up an alignment check](/contact/) and we'll measure it before we touch it.",
};

export default copy;
