import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'transmission-repair',
  title: 'Transmission Repair in Blauvelt, NY | Toy Auto Center',
  description: "Transmission repair in Blauvelt, NY: slipping, harsh shifts and leaks diagnosed first, then fixed or replaced with a Jasper remanufactured unit.",
  h1: 'Transmission Repair in Blauvelt, NY',
  promise: "We find out why it's slipping before anyone talks about replacing it.",
  intro: [
    "Transmission repair starts with a question a lot of shops skip: is the transmission actually the problem? A misfire or a worn engine mount can feel a lot like a slipping gearbox. So we [scan the transmission computer](/services/check-engine-diagnostics/), read the fluid and drive the car first.",
    "We diagnose and repair, and if repairing your current transmission isn't cost-effective we install a Jasper remanufactured unit, backed by a **3 year / 100,000 mile parts and labor warranty**. You get the numbers for both paths and you pick.",
  ],
  symptomsHeading: 'Transmission trouble usually announces itself',
  symptoms: [
    { feel: 'The engine revs up but the car barely picks up speed.', means: 'Slipping: a clutch pack, or the fluid pressure that holds it, is losing grip.' },
    { feel: 'A long pause, then a thunk, going into Drive or Reverse.', means: 'Delayed engagement, often low fluid, worn seals or a valve body pressure problem.' },
    { feel: 'RPMs flare between gears, or shifts land hard.', means: 'Shift timing is off: a solenoid, worn clutches or broken-down fluid.' },
    { feel: 'A shudder at steady low speeds, like rolling over rumble strips.', means: 'Usually the torque converter clutch chattering as it engages and releases.' },
    { feel: 'Reddish spots on the driveway, or a burnt smell after a drive.', means: 'A leak at the pan, lines or seals, or fluid that has overheated.' },
    { feel: "It's stuck in one gear and the check engine light is on.", means: 'Limp mode. The computer saw a fault and locked in a safe gear.' },
  ],
  checkHeading: 'What we look at before quoting transmission work',
  checks: [
    'Fluid level, color and smell',
    'Debris or clutch material in the fluid',
    'Leaks: pan, cooler lines, axle and front seals',
    'Stored and pending transmission codes',
    'Input and output shaft speed data',
    'Torque converter clutch slip',
    'Fluid temperature',
    'Shift solenoid command vs. response',
    'Engine and transmission mounts',
    'Road test: engagement, shift feel, shudder',
  ],
  fixHeading: 'Transmission repairs and replacements we handle',
  fixes: [
    {
      title: 'Service and in-car repairs',
      items: [
        { name: 'Fluid service', note: 'Done with the exact fluid spec your transmission calls for, not a generic bottle.' },
        { name: 'Leak repair', note: 'Pan gaskets, cooler lines and seals, fixed before low fluid burns up the clutches.' },
        { name: 'Shift solenoids', note: 'Electric valves that route fluid to each gear. One sticky solenoid can make a healthy unit shift badly.' },
        { name: 'Transmission mounts', note: 'Worn mounts let the drivetrain lurch, which feels a lot like a harsh shift.' },
      ],
    },
    {
      title: 'When it has to come out',
      items: [
        { name: 'Torque converter', note: 'The fluid coupling between engine and transmission. A bad lockup clutch causes shudder and heat.' },
        { name: 'Jasper remanufactured transmission', note: 'Rebuilt to tight specs, tested on a dyno, and covered by the 3 year / 100,000 mile parts and labor warranty.' },
      ],
    },
  ],
  extra: [
    {
      heading: 'How Jasper holds exact tolerances',
      body: [
        'An automatic runs on hydraulic pressure, and pressure depends on surfaces that seal. Jasper resurfaces the case and valve body and checks shaft finish with a profilometer, a gauge that measures surface roughness. The front pump and gears are gauged and, if they miss spec, machined until they hit it. Some units get model-specific updates, like a machine-in-place pump bushing on the 5R110 so the pump housing lines up with the converter hub.',
      ],
    },
    {
      heading: 'Torque converters and valve bodies',
      body: [
        'Converters are cut open and cleaned. Washers, spacers, springs and rollers are replaced, the lock-up clutch piston is new or relined, turbine fins are retightened (and welded where needed), and hubs are inspected and replaced. Each converter is pressure tested and dynamically balanced so it does not vibrate.',
        'Valve bodies are torn down, cleaned, inspected for wear and resurfaced to seal flat against the case. Then each one runs on an Answermatic tester, which varies vehicle speed and driver demand hydraulically to find cracks and confirm shift points.',
      ],
    },
    {
      heading: 'New parts, dyno testing and quality control',
      body: [
        'Every unit is pre-inspected mid-assembly with pressurized fluid and fixtures that check for circuit leakage, and gets a standard set of new parts. Jasper domestic automatics are dynamometer tested with recorded shift patterns and pressures, plus stall, leak, park and lockup tests at varying RPM and throttle. Jasper also tears down a finished production unit every week to check clearances and wear.',
      ],
    },
  ],
  techie: {
    heading: 'HOW AN AUTOMATIC DECIDES TO SHIFT',
    body: [
      'The transmission control module watches input shaft speed, output shaft speed, throttle and fluid temperature. To shift, it commands solenoids that send fluid through the valve body to apply one clutch pack and release another. Knowing both shaft speeds, it calculates the real gear ratio. When that drifts from what it commanded, that is slip, and it logs a code. That data is how we tell a worn clutch from a lazy solenoid.',
    ],
  },
  toyota: {
    heading: 'Toyota CVTs and the hybrid e-CVT',
    body: [
      "Many newer Toyotas use a CVT, which changes ratio smoothly instead of stepping through gears. Toyota and Lexus hybrids use an e-CVT built around a planetary gear set called the power split device, working with two motor-generators. It has no belts or clutches like a conventional CVT, but it still has fluid.",
      "Toyota calls some of these fluids long-life. Heat, towing, short trips and miles still wear them out, so we check and tell you straight. More on hybrids at our [Toyota and Lexus repair page](/toyota-lexus-repair/).",
    ],
  },
  faqs: [
    { q: 'Should I repair my transmission or replace it?', a: 'It depends on what failed. A solenoid, a leak or a mount is usually a repair. Internal damage on a high-mileage unit often makes a Jasper remanufactured transmission the better value, and we show you both prices.' },
    { q: 'What does the Jasper warranty cover?', a: 'Jasper remanufactured transmissions carry a 3 year / 100,000 mile parts and labor warranty. Ask for the written terms when we quote the job and we will go through them with you.' },
    { q: 'Will changing old transmission fluid make it fail?', a: 'Fresh fluid does not hurt a healthy transmission. When a unit fails right after a fluid service, the wear was usually already there. We check the fluid first and tell you what it shows.' },
    { q: 'Can I keep driving a slipping transmission?', a: 'Not for long. Slipping makes heat, heat cooks the fluid, and cooked fluid makes more slipping. Pushing it can turn a repair into a replacement.' },
    { q: 'Could it be the engine and not the transmission?', a: 'Sometimes. Misfires and bad mounts both feel like shifting problems. If the scan points at the engine, our [engine repair work](/services/engine-repair/) picks it up from there.' },
  ],
  closing: "Slipping, shuddering or leaking? Bring it to Route 303 in Blauvelt, or [set up a transmission check](/contact/) and we'll start with the facts.",
};

export default copy;
