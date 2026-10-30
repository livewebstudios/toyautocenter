import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'fuel-system',
  title: 'Fuel System Repair in Blauvelt, NY | Toy Auto Center',
  description: "Fuel system repair in Blauvelt, NY: hard starts, a gas smell or falling mileage traced to the fuel pump, injectors or a vapor leak. All makes, Route 303.",
  h1: 'Fuel System Repair in Blauvelt, NY',
  promise: 'The right amount of fuel, right when the engine needs it.',
  intro: [
    "Fuel system repair covers the pump in your gas tank, the injectors that feed the engine and everything in between. When one part gets weak, you feel it as hard starts, stumbling or a tank that empties too fast.",
    "Often the first clue is a warning light, so many of these jobs start with our [check engine light testing](/services/check-engine-diagnostics/). We test the part before we replace it.",
  ],
  symptomsHeading: 'When the fuel system is the problem',
  symptoms: [
    { feel: 'It cranks a long time before it starts, worse after sitting.', means: 'Fuel pressure is leaking away overnight, often from an injector or the pump.' },
    { feel: 'It stumbles when you step on it to merge.', means: 'Not enough fuel: a weak pump, a clogged filter or dirty injectors.' },
    { feel: 'Raw gas smell outside the car or in the cabin.', means: 'A fuel or vapor leak. Have it checked soon.' },
    { feel: 'Your mileage dropped and nothing else changed.', means: 'Injectors spraying poorly, or a sensor reading wrong.' },
    { feel: 'Check engine light right after you filled up.', means: 'Often a vapor leak. Sometimes it really is just the gas cap.' },
  ],
  checkHeading: 'Fuel system tests we run',
  checks: [
    'Trouble codes and live engine data',
    'Fuel pressure at idle and under load',
    'Pressure hold after shutdown',
    'Fuel pump health',
    'Injector spray and wiring',
    'Fuel lines for leaks',
    'Smoke test for vapor leaks',
    'Gas cap seal',
  ],
  fixHeading: 'Fuel system parts we repair and replace',
  fixes: [
    {
      title: 'Pump and lines',
      items: [
        { name: 'Fuel pump', note: 'The pump and the gas gauge sender usually come as one unit.' },
        { name: 'Fuel filter', note: 'Separate on some cars, built into the pump on many others.' },
        { name: 'Fuel lines', note: 'Road salt is hard on the metal lines under the car.' },
      ],
    },
    {
      title: 'Injectors and vapor',
      items: [
        { name: 'Fuel injectors', note: 'Clogged ones cost power and mileage. Leaky ones cause a gas smell.' },
        { name: 'Injector cleaning', note: 'When the injectors test healthy but dirty, a cleaning can bring them back.' },
        { name: 'Gas cap and filler neck', note: 'A worn cap seal or rusted neck is a common, cheap cause of the light.' },
      ],
    },
  ],
  faqs: [
    { q: 'Do fuel injector cleaners from the gas station work?', a: "A good cleaner used regularly can slow buildup. It won't fix an injector that is stuck or leaking. If the engine already runs rough, we test first so you're not pouring bottles at the wrong problem." },
    { q: 'Can a loose gas cap really turn on the check engine light?', a: "Yes. A cap that doesn't seal reads as a leak. Tighten it until it clicks and drive a few days. If the light stays on, the leak is somewhere else." },
    { q: 'Will a fuel system problem fail my NYS inspection?', a: "It can. A lit check engine light fails the emissions part of the test. Our [state inspection page](/services/nys-inspection/) explains what gets checked." },
  ],
  closing: "Hard starts, a gas smell or mileage that keeps slipping? [Have the fuel system tested](/contact/) at our shop on Route 303 in Blauvelt.",
};

export default copy;
