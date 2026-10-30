import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'steering-suspension',
  title: 'Steering & Suspension in Blauvelt, NY | Toy Auto Center',
  description: "Steering and suspension repair in Blauvelt, NY: struts, shocks, ball joints, tie rods, control arms and power steering for all makes, on Route 303.",
  h1: 'Steering & Suspension in Blauvelt, NY',
  promise: "Clunks, wander and bounce, traced to the part that's actually worn.",
  intro: [
    "Your suspension keeps the tires pressed to the road. Your steering points them where you want to go. When either one wears, the car still drives, which is exactly why people put it off. Steering and suspension repair is about catching that wear before it eats tires, overworks [the brakes that stop you](/services/brake-repair/) and makes the car harder to control.",
    "Well-kept steering and suspension parts take stress off your tires, brakes and everything bolted to them. That means fewer repairs down the line, and a car that behaves the way you expect when you swerve around a pothole or stop short.",
    "We put the car on the lift, load and unload each joint by hand, and show you anything that moves when it shouldn't. Then you choose what gets fixed and when.",
  ],
  symptomsHeading: 'Clunk, wander or bounce?',
  symptoms: [
    { feel: 'A clunk over bumps or potholes.', means: 'Worn ball joints, sway bar links, control arm bushings or a strut mount.' },
    { feel: 'The car keeps bouncing after a dip in the road.', means: 'Shocks or struts that have lost their damping.' },
    { feel: "You're always correcting the wheel to stay in your lane.", means: 'Loose tie rod ends, a worn idler or pitman arm, or play in the steering gear.' },
    { feel: 'Steering feels heavy or groans when you turn.', means: 'Low power steering fluid, a tired pump or a slipping belt.' },
    { feel: 'A knock you can feel through the steering wheel.', means: 'Wear inside the rack and pinion, or in the bushings that hold it.' },
    { feel: 'One corner sits lower than the others.', means: 'A sagging or broken coil spring.' },
    { feel: 'The tire edges wear faster than the middle.', means: 'Worn parts are letting the alignment shift. Fix them first, then align.' },
    { feel: 'Shake or vibration over rough pavement.', means: 'Tired struts or a worn control arm.' },
  ],
  checkHeading: 'What we load-test on the lift',
  checks: [
    'Ball joints: vertical and horizontal play',
    'Tie rod ends, inner and outer',
    'Idler arm and pitman arm (steering box vehicles)',
    'Rack and pinion: boots, mounts, leaks',
    'Control arms and bushings',
    'Strut mounts and bearing plates',
    'Shocks and struts: leaks, bounce test',
    'Coil springs: sag and breaks',
    'Sway bar links and bushings',
    'Power steering: fluid, hoses, pump noise',
  ],
  fixHeading: 'Steering and suspension parts we replace',
  fixes: [
    {
      title: 'Suspension',
      items: [
        { name: 'Struts', note: 'Struts absorb the bumps and carry part of the load, and worn ones show up as shake or vibration over rough roads.' },
        { name: 'Shocks', note: 'Shocks stop the car from bouncing, and a corner that keeps rebounding after you push it down means they are done.' },
        { name: 'Strut mounts', note: 'The mount isolates the body from vibration, so oil on the strut or a noise from one corner points here.' },
        { name: 'Coil springs', note: "Springs don't exactly wear out, but they sag with age and can crack, which drops ride height." },
      ],
    },
    {
      title: 'Joints and arms',
      items: [
        { name: 'Ball joints', note: 'The ball joint links the control arm to the steering knuckle, and a worn one clunks and vibrates.' },
        { name: 'Control arms', note: 'They tie the wheel hub and steering to the chassis, and a bad one brings vibration, wander and clunks.' },
        { name: 'Bushings', note: 'Rubber bushings cushion every pivot, and when they go, handling turns sloppy and you hear rattles or squeaks underneath.' },
      ],
    },
    {
      title: 'Steering',
      items: [
        { name: 'Idler arm', note: 'A worn idler arm lets the car float and wander on the highway.' },
        { name: 'Pitman arm', note: 'It connects the steering box to the linkage, and wear here means vague steering and the same wandering feel.' },
        { name: 'Tie rod ends', note: 'Worn tie rods knock the front alignment out and leave the steering loose.' },
        { name: 'Rack and pinion', note: 'Loose steering and a persistent knock are the classic signs of a worn rack.' },
        { name: 'Power steering', note: 'A squeal, a groan or a wheel that feels off usually traces to the pump, the fluid or the belt.' },
      ],
    },
  ],
  techie: {
    heading: 'Hydraulic vs. electric power steering',
    body: [
      "Older and many larger vehicles use hydraulic power steering: a belt-driven pump pushes fluid to the rack or steering box to help you turn. Many newer cars use electric power steering instead, where a motor on the column or the rack does the work and a module decides how much help to give based on speed and steering angle. Electric systems have no fluid to check, but they set warning lights and store fault codes, so diagnosis starts with a scan. Idler and pitman arms only exist on steering box designs, common on older trucks and SUVs. Rack and pinion cars run tie rods straight off the rack.",
    ],
  },
  faqs: [
    { q: 'How do I know if my shocks or struts are worn?', a: "Try the bounce test: push down hard on one corner and let go. A healthy shock settles after one rebound. If the corner keeps bouncing, or you see oil on the shock body, it's worn. Nose-diving under hard braking is another tell." },
    { q: 'Do I need an alignment after suspension work?', a: "Usually, yes. Replacing struts, tie rods, control arms or ball joints changes the geometry, so the wheels have to be set back to spec. Skipping it can wear out a new set of tires in a hurry, so we'll [align the wheels](/services/wheel-alignment-tires/) right after the repair." },
    { q: 'Should struts and shocks be replaced in pairs?', a: "Yes, on the same axle. A new strut on one side and a worn one on the other makes the car handle unevenly, especially in a hard stop. Both fronts, both rears, or all four." },
    { q: 'Is a clunking noise dangerous?', a: "It depends on what's clunking. A worn sway bar link is mostly noise. A worn ball joint or tie rod end can separate if it's ignored long enough, and then you lose control of that wheel. That's why we find the source instead of guessing." },
    { q: 'Why is my steering wheel crooked when I drive straight?', a: "Either the alignment is off, or something in the steering has worn or bent, often after a pothole or a curb. We check the parts first, because aligning a car with a loose tie rod doesn't hold." },
  ],
  closing: "Hear a clunk you can't place? [Book a steering and suspension check](/contact/) and we'll find it on the lift.",
};

export default copy;
