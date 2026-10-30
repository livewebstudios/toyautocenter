import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'check-engine-diagnostics',
  title: 'Check Engine Diagnostics in Blauvelt, NY | Toy Auto Center',
  description: "Check engine light diagnostics in Blauvelt, NY. We read the codes, then test the sensors and wiring behind them, so you pay for the fix and not a guess.",
  h1: 'Check Engine Light Diagnostics in Blauvelt, NY',
  promise: 'We find the cause behind the light before anyone sells you a part.',
  intro: [
    "Your check engine light is one light for hundreds of possible problems in the engine, transmission and emissions system. A code reader tells you which system raised its hand. It doesn't tell you which part failed. Check engine light diagnostics is the work between those two things.",
    "Your car, truck or SUV carries a network of computers and sensors that watch everything it does and flag anything out of range. We plug in, read what they flagged, and then test: live sensor data, wiring, connectors, vacuum and fuel pressure, until the evidence points at one cause.",
    "Failure to diagnose is failure to repair. Swapping parts until the light goes out is how people spend a lot of money and still end up with the light on. We'd rather find it once.",
  ],
  symptomsHeading: "Light on? Here's what it's telling you",
  symptoms: [
    { feel: 'The check engine light is on and steady.', means: "A fault has been stored. Not an emergency, but don't let it ride for months." },
    { feel: 'The check engine light is flashing.', means: 'An active misfire bad enough to overheat the catalytic converter. Ease off and get it in soon.' },
    { feel: 'The light came on a day or two after you got gas.', means: 'Often a gas cap that never clicked, which sets an EVAP leak code. Tighten it and give it a few days.' },
    { feel: 'Fuel mileage dropped for no clear reason.', means: 'A lazy oxygen sensor, a dirty mass airflow sensor or a thermostat stuck open.' },
    { feel: 'Rough idle or hesitation, with or without the light.', means: 'A misfire, a vacuum leak or a fuel delivery problem. Pending codes may already be stored.' },
    { feel: 'The light comes and goes.', means: 'An intermittent fault. The data captured when it first set is the best clue we have.' },
    { feel: 'Inspection is due and the light is on.', means: "That's an emissions fail on OBD-II vehicles. Sort out the light before you go for the sticker." },
  ],
  checkHeading: 'What a real check engine diagnosis covers',
  checks: [
    'Stored, pending and permanent codes',
    'Freeze frame data for each code',
    'Live PID data: fuel trims, O2 sensors, MAF, coolant temp',
    'Readiness monitor status',
    'Module scan across the CAN bus',
    'Wiring and connectors at the suspect circuit',
    'Vacuum and intake leak testing',
    'Known issues and service bulletins for your model',
    'Road test to confirm the fault, then the fix',
  ],
  fixHeading: 'Where the codes usually lead',
  fixes: [
    {
      title: 'Sensors',
      items: [
        { name: 'Oxygen sensors', note: 'They measure oxygen in the exhaust so the computer can adjust fuel, and a slow one hurts mileage and emissions.' },
        { name: 'Mass airflow sensor', note: 'It measures the air coming into the engine, and dirt on the element throws off fueling.' },
        { name: 'Crank and cam sensors', note: 'They report engine speed and timing, and when one drops out the engine can stall or refuse to start.' },
      ],
    },
    {
      title: 'Emissions',
      items: [
        { name: 'EVAP system', note: 'It traps fuel vapor from the tank, and a leak can be as small as a cracked hose or a worn cap seal.' },
        { name: 'Catalytic converter', note: "Replaced only after testing proves it's the converter, through our [exhaust and catalytic converter work](/services/exhaust-air-intake/)." },
      ],
    },
    {
      title: 'Computer',
      items: [
        { name: 'ECM (engine control module)', note: 'It reads every sensor and runs the engine, and since it rarely fails, we prove everything around it first.' },
      ],
    },
  ],
  techie: {
    heading: 'A P0420 is not a converter order',
    body: [
      "Code P0420 reads catalyst system efficiency below threshold, bank 1. It doesn't say the catalytic converter is bad. It says the downstream oxygen sensor is seeing a signal that looks too much like the upstream one. Bank 1 is the side of the engine with cylinder 1. Before we quote a converter, we check upstream and downstream O2 sensor data, look for exhaust leaks that pull in outside air, and review misfire history, because raw fuel from a misfire can ruin a converter, including a brand new one.",
      "Three terms do most of the work here. Freeze frame is a snapshot of engine conditions at the moment a code set. PID data is the live stream of sensor values the computer is seeing right now. CAN bus is the two-wire network the car's modules use to talk to each other and to our scan tool.",
    ],
  },
  toyota: {
    heading: 'Toyota and Lexus warning lights',
    body: [
      "On Toyota and Lexus vehicles, a check engine light after a fill-up is often an EVAP code such as P0455 or P0456, a large or very small leak. It might be a cap that didn't click, a cracked vapor hose or a fault at the charcoal canister. Tighten the cap, and if the light returns after a few days, bring it in.",
      "Hybrids add their own warnings. A Check Hybrid System message or a red master warning triangle points to the high-voltage side: the hybrid battery, the inverter, its cooling system or a related sensor. Those systems keep codes in their own modules, which a basic parts-counter code reader may not show. Our [Toyota and Lexus hybrid service](/toyota-lexus-repair/) page covers that side in more detail.",
    ],
  },
  faqs: [
    { q: 'Why not just get the code read for free somewhere?', a: "You can, and it's a fair starting point. The code tells you which system flagged a fault, not which part caused it. A P0171 lean code, for example, can come from a vacuum leak, a dirty airflow sensor, a weak fuel pump or a leaking intake gasket. Diagnosis is the testing that picks the right one." },
    { q: 'Is it safe to drive with the check engine light on?', a: "If it's steady and the car drives normally, you can usually drive it to us. If it's flashing, the engine is misfiring hard enough to overheat the catalytic converter, so drive gently and get it in soon. If the oil pressure or temperature warning comes on too, pull over." },
    { q: 'Why did the light go off by itself?', a: "Some faults clear once the condition goes away for several drive cycles, like a gas cap that's been tightened. The code usually stays in memory for a while, and on newer cars a permanent code stays until the car proves the fix." },
    { q: 'Will clearing the code get me through inspection?', a: "No. Clearing codes also resets the readiness monitors, and the [NYS emissions inspection](/services/nys-inspection/) checks that those monitors have run. Until you've driven enough for them to complete, the car can't pass, and the light comes back if the fault is still there." },
  ],
  closing: "Light on and not sure how worried to be? [Tell us what it's doing](/contact/) or call 845.365.3003.",
};

export default copy;
