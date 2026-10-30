import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'fuel-system',
  title: 'Fuel System Repair in Blauvelt, NY | Toy Auto Center',
  description: "Fuel system repair in Blauvelt, NY: hard starts, fuel smell and falling mileage traced to injectors, the fuel pump, pressure or the EVAP system.",
  h1: 'Fuel System Repair in Blauvelt, NY',
  promise: 'The right amount of fuel, at the right pressure, at the right moment.',
  intro: [
    "Gas isn't getting any cheaper, so a fuel system that wastes it costs you every week. Fuel system repair covers everything from the pump in the tank to the injectors at the cylinders, plus the sensors and computer that decide how much fuel each one sprays.",
    "This is fuel metering and delivery. The pump pushes fuel forward at a set pressure. The engine computer reads airflow, oxygen sensors and temperature, then times each injector pulse to the thousandth of a second. When one link gets weak, you feel it as hard starts, hesitation or a fuel gauge that drops faster than it should.",
    "Often the first clue is a warning light, so many of these jobs start with our [engine computer diagnostics](/services/check-engine-diagnostics/). We read the codes and the live data, then test the part before we replace it.",
  ],
  symptomsHeading: 'When the fuel system is the problem',
  symptoms: [
    { feel: 'The engine cranks a long time before it catches, worse after sitting.', means: 'Fuel pressure is bleeding off overnight: a leaky injector, check valve or pump.' },
    { feel: 'It stumbles or bogs when you step on it to merge.', means: 'Not enough fuel under load: a weak pump, clogged filter or dirty injectors.' },
    { feel: 'Raw gas smell outside the car or in the cabin.', means: 'A fuel or vapor leak. Take this one seriously and have it checked soon.' },
    { feel: 'Your mileage dropped and nothing else changed.', means: 'Injectors spraying poorly, a sensor reading wrong, or the computer adding fuel to cover a leak.' },
    { feel: 'A whine from the back of the car that changes with load.', means: 'A fuel pump working harder than it should, often near the end of its life.' },
    { feel: 'The fuel gauge jumps around or reads empty on a full tank.', means: 'A failing level sender, which lives inside the fuel pump module.' },
    { feel: 'Check engine light right after you filled up.', means: 'Often an EVAP leak. Sometimes it really is just the gas cap.' },
  ],
  checkHeading: 'Fuel system tests we run',
  checks: [
    'Codes and freeze frame data',
    'Short-term and long-term fuel trims',
    'Fuel pressure: key on, idle and under load',
    'Pressure hold after shutdown',
    'Fuel pump current draw',
    'Injector balance and spray pattern',
    'Injector wiring and pulse signal',
    'Fuel lines and connections for leaks',
    'EVAP smoke test for vapor leaks',
    'Purge and vent valve operation',
    'Gas cap seal',
  ],
  fixHeading: 'Fuel system parts we repair and replace',
  fixes: [
    {
      title: 'Delivery',
      items: [
        { name: 'Modular fuel pump', note: 'The in-tank assembly with the pump, the fuel level sender and a strainer. Usually replaced as one unit.' },
        { name: 'Fuel filter', note: 'Inline on some cars, built into the pump module on many others.' },
        { name: 'Fuel pressure regulator', note: 'Holds pressure steady so the injectors get what the computer expects.' },
        { name: 'Fuel lines', note: 'Metal and flexible lines from tank to engine. Road salt is hard on the metal ones.' },
      ],
    },
    {
      title: 'Metering',
      items: [
        { name: 'Fuel injectors', note: 'Electric valves that spray a measured mist into the engine. Clogged ones cost power and mileage; leaking ones cause a gas smell and hard starts.' },
        { name: 'Injector cleaning', note: 'When testing shows deposits but healthy injectors, cleaning can restore the spray.' },
        { name: 'Engine sensors', note: 'Coolant temperature, oxygen and airflow sensors tell the computer how much fuel to send.' },
      ],
    },
    {
      title: 'Vapor control (EVAP)',
      items: [
        { name: 'Charcoal canister', note: 'Stores gas vapor from the tank instead of venting it to the air.' },
        { name: 'Purge and vent valves', note: 'Let the engine burn that stored vapor, and seal the system for its self-test.' },
        { name: 'Gas cap and filler neck', note: 'A worn seal or rusted neck is a common, cheap cause of EVAP codes.' },
      ],
    },
  ],
  techie: {
    heading: 'FUEL TRIMS, EXPLAINED',
    body: [
      'The engine computer has a base fuel map, then corrects it using oxygen sensor feedback. Short-term fuel trim is the quick correction, changing many times a second. Long-term fuel trim is the learned average the computer carries forward. Positive numbers mean it is adding fuel because it sees too much air; negative means it is pulling fuel back. A healthy engine usually stays in the single digits either way. When trims climb toward the limit, codes like P0171 (system too lean, bank 1) appear.',
      'Trims are a clue, not a verdict. High positive trims at idle that settle down at 2,500 rpm point to a vacuum leak. High trims everywhere point to a fuel delivery problem: a weak pump, a clogged filter or tired injectors.',
    ],
  },
  faqs: [
    { q: 'Do fuel injector cleaners from the gas station work?', a: 'A good cleaner used regularly can help keep deposits from building. It will not fix an injector that is stuck, leaking or electrically dead. If you already have a misfire or a rough idle, we test the injectors so you are not pouring bottles at the wrong problem.' },
    { q: 'How long does a fuel pump last?', a: 'Many go well past 100,000 miles. Running the tank near empty all the time makes them run hotter, since fuel helps cool the pump. A whine, a long crank or stalling under load are the usual warning signs.' },
    { q: 'Can a loose gas cap really turn on the check engine light?', a: 'Yes. The EVAP system seals itself and tests for leaks, and a cap that does not seal reads as a leak. Tighten it until it clicks and give it a few days of driving. If the light stays on, there is a leak somewhere else.' },
    { q: 'Will a fuel system problem fail my NYS inspection?', a: "It can. A lit check engine light or an EVAP monitor that hasn't finished its self-test can keep you from passing the OBD-II part of the test. Our [state inspection page](/services/nys-inspection/) explains what gets checked." },
    { q: 'Is a gas smell dangerous?', a: 'It can be. A smell around the car or inside it means fuel or vapor is escaping somewhere. Do not ignore it, avoid parking it in a closed garage, and have it looked at soon.' },
  ],
  closing: "Hard starts, a gas smell or mileage that keeps slipping? [Have the fuel system tested](/contact/) at our shop on Route 303 in Blauvelt.",
};

export default copy;
