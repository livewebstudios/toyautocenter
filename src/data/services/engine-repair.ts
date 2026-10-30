import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'engine-repair',
  title: 'Engine Repair in Blauvelt, NY | Toy Auto Center',
  description: "Engine repair in Blauvelt, NY: rough idle, misfires, oil burning, odd noises, CV joints, wheel bearings and clutches. All makes, Toyota and Lexus too.",
  h1: 'Engine Repair in Blauvelt, NY',
  promise: "From a rough idle to a growl under the car, we find what's wrong and fix that.",
  intro: [
    'Engine repair at Toy Auto Center covers the engine and the parts that carry its power to the wheels: axles, wheel bearings, the differential and the clutch.',
    'Most trouble shows up early, with a [check engine light](/services/check-engine-diagnostics/), lost power or a new noise. Fixing it then is almost always cheaper. We explain what we found in plain English before we start any work.',
  ],
  symptomsHeading: 'Running rough? Making new noises?',
  symptoms: [
    { feel: 'Rough idle, shaking at stoplights.', means: 'A misfire, often a spark plug or ignition coil.' },
    { feel: 'Blue smoke, or oil disappearing between changes.', means: 'The engine is burning oil. Sometimes a cheap valve, sometimes worn parts inside.' },
    { feel: 'Power fades and mileage drops.', means: 'Restricted airflow, a failing sensor or a clogged exhaust.' },
    { feel: 'Clicking from the front when you turn sharply.', means: 'A worn axle joint, often after its rubber boot split.' },
    { feel: 'A hum or growl that rises with road speed.', means: 'A wheel bearing on its way out.' },
  ],
  checkHeading: 'How we track down engine repair problems',
  checks: [
    'Codes and live sensor data',
    'Misfire counts by cylinder',
    'Spark plugs and ignition coils',
    'Compression test',
    'Vacuum leaks',
    'Oil and coolant leaks',
    'Axle boots and wheel bearings',
    'Road test: differential and clutch',
  ],
  fixHeading: 'Engine and powertrain repairs we do',
  fixes: [
    {
      title: 'Engine',
      items: [
        { name: 'Spark plugs and coils', note: 'Worn ones cause a rough idle and poor mileage.' },
        { name: 'Engine sensors', note: 'A failing one lights the dash and costs you mileage.' },
        { name: 'Engine repair', note: 'Gaskets, seals, timing parts and internal work, quoted after diagnosis.' },
      ],
    },
    {
      title: 'Axles, bearings and clutch',
      items: [
        { name: 'CV joint and boot', note: 'Clicking on turns means the joint is wearing.' },
        { name: 'Wheel bearing', note: 'Humming or knocking that rises with speed means it is worn.' },
        { name: 'Clutch and flywheel', note: 'Slipping, a burning smell or hard shifting are the signs.' },
      ],
    },
  ],
  toyota: {
    heading: 'Timing chain or timing belt on your Toyota?',
    body: [
      'Most current Toyota and Lexus engines use a timing chain that needs clean oil changed on time, not a scheduled replacement. Some older V6 models use a rubber timing belt that does. Check your manual or ask us. More on our [Toyota and Lexus page](/toyota-lexus-repair/).',
    ],
  },
  faqs: [
    { q: "What's the difference between the check engine light and the oil light?", a: 'The check engine light means the computer stored a fault. The red oil light means oil pressure is low right now. Pull over and shut it off, because minutes without oil can ruin an engine.' },
    { q: 'My engine is burning oil. What causes that?', a: 'We check a small, cheap valve first, because a stuck one pulls oil into the engine. Worn seals or rings are bigger jobs. Note how much oil you add between changes.' },
    { q: 'Do you work on transmissions too?', a: "Yes, they have [a page of their own](/services/transmission-repair/). Some symptoms overlap, so we sort out whether it's engine or transmission before we quote either." },
  ],
  closing: "If there's a new noise, lost power or a light that won't quit, [get it on our schedule](/contact/) and we'll tell you what we find before we fix anything.",
};

export default copy;
