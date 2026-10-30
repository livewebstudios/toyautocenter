import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'transmission-repair',
  title: 'Transmission Repair in Blauvelt, NY | Toy Auto Center',
  description: "Transmission repair in Blauvelt, NY: slipping, harsh shifts and leaks diagnosed first, then fixed or replaced with a Jasper remanufactured unit.",
  h1: 'Transmission Repair in Blauvelt, NY',
  promise: "We find out why it's slipping before anyone talks about replacing it.",
  intro: [
    "Transmission repair starts with a question a lot of shops skip: is it really the transmission? An engine misfire or a worn mount can feel like slipping, so we [scan the computer](/services/check-engine-diagnostics/), check the fluid and drive the car first.",
    "If repairing yours doesn't make sense on cost, we install a Jasper remanufactured transmission with a **3 year / 100,000 mile parts and labor warranty**. You get prices for both and you pick.",
  ],
  symptomsHeading: 'Transmission trouble usually announces itself',
  symptoms: [
    { feel: 'The engine revs up but the car barely picks up speed.', means: 'Slipping. Something inside is losing its grip.' },
    { feel: 'A long pause, then a thunk, going into Drive or Reverse.', means: 'Often low fluid or worn seals.' },
    { feel: 'Shifts land hard, or the revs flare between gears.', means: 'A sticky shift valve, worn parts inside or worn-out fluid.' },
    { feel: 'A shudder at steady low speeds, like rolling over rumble strips.', means: 'Usually the torque converter, the link between engine and transmission.' },
    { feel: 'Red spots on the driveway, or a burnt smell after a drive.', means: 'A fluid leak, or fluid that has overheated.' },
  ],
  checkHeading: 'What we look at before quoting transmission work',
  checks: [
    'Fluid level, color and smell',
    'Debris in the fluid',
    'Leaks at the pan, lines and seals',
    'Transmission trouble codes',
    'Live shift data from the computer',
    'Fluid temperature',
    'Engine and transmission mounts',
    'Road test: engagement, shift feel, shudder',
  ],
  fixHeading: 'Transmission repairs and replacements we handle',
  fixes: [
    {
      title: 'Repairs in the car',
      items: [
        { name: 'Fluid service', note: 'Done with the exact fluid your transmission calls for.' },
        { name: 'Leak repair', note: 'Gaskets, lines and seals, fixed before low fluid burns it up.' },
        { name: 'Shift valves', note: 'One sticky electric valve can make a healthy transmission shift badly.' },
        { name: 'Transmission mounts', note: 'Worn mounts let the car lurch, which feels like a harsh shift.' },
      ],
    },
    {
      title: 'When it has to come out',
      items: [
        { name: 'Torque converter', note: 'The link between engine and transmission. A bad one causes shudder and heat.' },
        { name: 'Jasper remanufactured transmission', note: 'Rebuilt to tight specs, tested, and covered by a 3 year / 100,000 mile warranty.' },
      ],
    },
  ],
  extra: [
    {
      heading: 'About Jasper remanufactured transmissions',
      body: [
        'Jasper rebuilds each transmission to tight specs. Worn surfaces are machined flat, the torque converter is rebuilt and balanced, and every unit gets a standard set of new parts.',
        'Each unit is pressure checked during assembly, and Jasper domestic automatics are run on a test stand before they ship. Every one we install carries a **3 year / 100,000 mile parts and labor warranty**.',
      ],
    },
  ],
  toyota: {
    heading: 'Toyota CVTs and hybrids',
    body: [
      "Many newer Toyotas use a CVT, which changes speed smoothly instead of shifting gears, and hybrids use their own version. Both still need fluid checks, even fluid Toyota calls long-life. More on our [Toyota and Lexus repair page](/toyota-lexus-repair/).",
    ],
  },
  faqs: [
    { q: 'Should I repair my transmission or replace it?', a: 'It depends on what failed. A leak, a mount or a shift valve is usually a repair. Damage inside a high-mileage unit often makes a Jasper remanufactured transmission the better value, and we show you both prices.' },
    { q: 'What does the Jasper warranty cover?', a: "Jasper remanufactured transmissions carry a 3 year / 100,000 mile parts and labor warranty. Ask for the written terms when we quote the job and we'll go through them with you." },
    { q: 'Can I keep driving a slipping transmission?', a: 'Not for long. Slipping makes heat, heat cooks the fluid, and cooked fluid makes more slipping. Pushing it can turn a repair into a replacement.' },
  ],
  closing: "Slipping, shuddering or leaking? Bring it to Route 303 in Blauvelt, or [set up a transmission check](/contact/) and we'll start with the facts.",
};

export default copy;
