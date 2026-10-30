import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'exhaust-air-intake',
  title: 'Exhaust & Air Intake Repair in Blauvelt, NY | Toy Auto Center',
  description: "Exhaust and air intake repair in Blauvelt, NY: loud mufflers, rusted pipes, catalytic converters and air sensors, checked against NYS inspection rules.",
  h1: 'Exhaust & Air Intake Repair in Blauvelt, NY',
  promise: 'Air in, exhaust out, and nothing leaking in between.',
  intro: [
    'Exhaust and air intake repair covers both ends of the engine: the air coming in and the exhaust going out. A leak on either side can cause rough running, lower mileage or a check engine light.',
    "Rockland County winters don't help. Road salt eats exhaust pipes, hangers and clamps from the outside in.",
  ],
  symptomsHeading: 'What a failing exhaust or intake sounds and feels like',
  symptoms: [
    { feel: 'The car is louder than it used to be.', means: 'A hole in the muffler or a pipe, often rusted through.' },
    { feel: 'A rattle from underneath over bumps.', means: 'A loose heat shield, a broken hanger or a failing converter.' },
    { feel: 'A rotten egg smell from the tailpipe.', means: 'The catalytic converter is overloaded, often from too much fuel.' },
    { feel: 'Exhaust smell inside the car.', means: 'A leak getting in. That carries carbon monoxide, so get it checked now.' },
    { feel: 'Rough idle with mileage slipping.', means: 'A dirty air sensor or an air leak in the intake.' },
  ],
  checkHeading: 'Exhaust and intake checks, front to back',
  checks: [
    'Codes and emissions readiness',
    'Engine air filter and intake ducts',
    'Air sensor readings',
    'Exhaust manifold and gaskets',
    'Oxygen sensor readings',
    'Catalytic converter',
    'Pipes, muffler and tailpipe',
    'Hangers, clamps and heat shields',
  ],
  fixHeading: 'Exhaust and air intake parts we replace',
  fixes: [
    {
      title: 'Exhaust',
      items: [
        { name: 'Muffler and resonator', note: 'Keep it quiet. A failing one gets loud and can cost mileage.' },
        { name: 'Pipes and tailpipe', note: 'Rust and broken hangers are the usual failures.' },
        { name: 'Catalytic converter', note: 'Cleans the exhaust. A failing one hurts power and fails emissions.' },
      ],
    },
    {
      title: 'Air intake and sensors',
      items: [
        { name: 'Oxygen sensors', note: 'Help the computer set fuel and watch the converter.' },
        { name: 'Airflow sensor', note: 'Measures incoming air. Dirt on it makes it read low.' },
        { name: 'Intake ducts and air filter', note: 'A cracked duct or clogged filter makes the engine work harder.' },
      ],
    },
  ],
  faqs: [
    { q: 'Will an exhaust or intake problem fail my NYS inspection?', a: 'It can. On most 1996 and newer gas vehicles, the emissions test is a computer check for a lit check engine light and unfinished self-tests. A bad converter or oxygen sensor usually trips one. See our [NYS inspection station](/services/nys-inspection/).' },
    { q: 'Is a loud exhaust dangerous or just annoying?', a: 'Often just annoying, but not always. A leak near the front or under the cabin can let exhaust inside, and that carries carbon monoxide. If you smell exhaust in the car, get it checked soon.' },
    { q: 'Why do catalytic converters fail?', a: 'Usually something upstream kills them, like misfires or an engine burning oil. We find that cause first so the new one lasts.' },
  ],
  closing: "If it's louder than it should be or a light is keeping you from a sticker, [get the exhaust and intake checked](/contact/) at Toy Auto Center in Blauvelt.",
};

export default copy;
