import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'exhaust-air-intake',
  title: 'Exhaust & Air Intake Repair in Blauvelt, NY | Toy Auto Center',
  description: "Exhaust and air intake repair in Blauvelt, NY: mufflers, catalytic converters, oxygen sensors, EGR and mass airflow sensors, checked against NYS rules.",
  h1: 'Exhaust & Air Intake Repair in Blauvelt, NY',
  promise: 'Air in, exhaust out, and nothing leaking in between.',
  intro: [
    "An engine is an air pump that burns fuel along the way. Exhaust and air intake repair covers both ends of that pump: the filter, ducts and sensors that measure the air coming in, and the manifold, catalytic converter, pipes and muffler that carry the exhaust out, clean it up and quiet it down.",
    "Both ends affect how the engine runs. The computer meters fuel based on how much air it thinks is coming in, then double-checks with oxygen sensors in the exhaust. A leak on either side throws off that math, which shows up as rough running, lower mileage or a check engine light. Rockland County winters don't help. Road salt eats exhaust pipes, hangers and clamps from the outside in.",
  ],
  symptomsHeading: 'What a failing exhaust or intake sounds and feels like',
  symptoms: [
    { feel: 'The car is louder than it used to be, with a rumble that grows when you accelerate.', means: 'A hole in the muffler, resonator or a pipe, often rusted through.' },
    { feel: 'A ticking at cold start that fades as the engine warms up.', means: 'An exhaust manifold leak. The gap closes as the metal heats and expands.' },
    { feel: 'A metallic rattle from underneath at idle or over bumps.', means: 'A loose heat shield, a broken hanger, or the inside of a catalytic converter breaking up.' },
    { feel: 'A rotten egg smell from the tailpipe.', means: 'The converter is being overloaded, often because the engine is running rich.' },
    { feel: 'The engine feels choked and runs out of breath uphill.', means: 'A clogged catalytic converter backing up the exhaust.' },
    { feel: 'Exhaust smell inside the cabin.', means: 'A leak getting into the car. Exhaust contains carbon monoxide, so have this checked right away.' },
    { feel: 'Rough idle or stalling, with mileage slipping.', means: 'An EGR valve stuck open, a dirty mass airflow sensor or an intake leak.' },
  ],
  checkHeading: 'Exhaust and intake checks, front to back',
  checks: [
    'Codes and readiness monitor status',
    'Intake ducts and clamps after the airflow sensor',
    'Engine air filter',
    'Mass airflow sensor readings',
    'EGR valve operation and passages',
    'Exhaust manifold and gaskets',
    'Upstream and downstream oxygen sensor data',
    'Catalytic converter efficiency',
    'Exhaust backpressure',
    'Pipes, flex joints and welds for leaks',
    'Muffler, resonator and tailpipe',
    'Hangers, clamps and heat shields',
  ],
  fixHeading: 'Exhaust and air intake parts we replace',
  fixes: [
    {
      title: 'Exhaust',
      items: [
        { name: 'Muffler', note: 'Quiets the exhaust. A failing one gets loud, can smell, and can cost you mileage.' },
        { name: 'Resonator', note: 'Tunes out drone at highway speed so the exhaust sounds smoother.' },
        { name: 'Tailpipe and pipes', note: 'Rust and broken hangers are the usual failures. The louder it gets, the bigger the hole.' },
        { name: 'Exhaust manifold gaskets', note: 'Seal the manifold to the engine. A leak here can also throw off the oxygen sensors.' },
      ],
    },
    {
      title: 'Emissions',
      items: [
        { name: 'Catalytic converter', note: 'Uses a chemical reaction to turn harmful exhaust gases into less harmful ones. A failing one hurts acceleration and fuel economy and fails emissions.' },
        { name: 'Oxygen sensors', note: 'Measure oxygen in the exhaust so the computer can fine-tune fuel, and watch how well the converter is working.' },
        { name: 'EGR valve', note: 'Feeds a little exhaust back into the intake to lower combustion temperatures and emissions.' },
      ],
    },
    {
      title: 'Air intake',
      items: [
        { name: 'Mass airflow sensor', note: 'Measures the air entering the engine. Dirt or oil on its sensing element makes it read low.' },
        { name: 'Intake ducts and hoses', note: 'A crack after the airflow sensor lets in air the computer never counted.' },
        { name: 'Engine air filter', note: 'The first stop for incoming air. A clogged one makes the engine work harder for every breath.' },
      ],
    },
  ],
  techie: {
    heading: 'HOW TWO OXYGEN SENSORS GRADE YOUR CONVERTER',
    body: [
      'The upstream oxygen sensor sits before the catalytic converter and swings back and forth as the computer adjusts the fuel mixture. A healthy converter stores and releases oxygen, so the downstream sensor reads fairly steady. When the downstream signal starts copying the upstream one, the converter is not doing its job, and the computer sets a code like P0420. Before we condemn a converter, we rule out what fakes that result: an exhaust leak near a sensor, a lazy sensor, or a misfire that has been dumping fuel into the converter. Replacing a cat without fixing the cause just ruins the new one.',
    ],
  },
  faqs: [
    { q: 'Will an exhaust or intake problem fail my NYS inspection?', a: "It can. On most 1996 and newer gas vehicles, the emissions part of the inspection is an OBD-II check: we scan the computer for a lit check engine light and for readiness monitors that have not finished. A failing converter, oxygen sensor or EGR valve usually trips one or both. Here's how our [NYS inspection station](/services/nys-inspection/) handles it." },
    { q: 'Can I just clear the code before my inspection?', a: 'Clearing codes, or disconnecting the battery, also resets the readiness monitors. The car then needs normal driving to complete them, and it will not pass until enough are ready. Fixing the cause is the faster route.' },
    { q: 'Is a loud exhaust dangerous or just annoying?', a: 'Often just annoying, but not always. A leak near the front of the car or under the cabin can let exhaust inside, and that carries carbon monoxide. If you smell exhaust in the car, have it checked soon.' },
    { q: 'Should I clean my mass airflow sensor myself?', a: 'You can with a cleaner made only for MAF sensors, but go gently, since the sensing element is fragile. If the engine still runs rough or sets lean codes after a cleaning, the problem may be an intake leak or the [fuel delivery side](/services/fuel-system/) instead.' },
    { q: 'Why do catalytic converters fail?', a: 'Usually something upstream kills them: misfires, an engine burning oil, or coolant getting into the combustion chamber. Age and physical damage play a part too. We look for the root cause so the replacement lasts.' },
  ],
  closing: "Louder than it should be, or a light standing between you and a sticker? [Get the exhaust and intake checked](/contact/) at Toy Auto Center in Blauvelt.",
};

export default copy;
