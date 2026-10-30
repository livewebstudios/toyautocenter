import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'belts-hoses-filters',
  title: 'Belts, Hoses & Filters in Blauvelt, NY | Toy Auto Center',
  description: "Belts, hoses and filters replaced in Blauvelt, NY: serpentine and timing belts, radiator and heater hoses, fuel, cabin and engine air filters.",
  h1: 'Belts, Hoses & Filters in Blauvelt, NY',
  promise: 'We catch worn belts and hoses before they leave you stranded.',
  intro: [
    'Belts, hoses and filters last a long time, but not forever, and they rarely warn you before they quit. A snapped belt or split hose is one of the most common reasons a good car ends up on a tow truck.',
    'Rubber wears out from use and from age. Filters fail quietly, making the engine and your lungs work harder. We check all three whenever your car is in for [oil and scheduled maintenance](/services/oil-change-maintenance/).',
  ],
  symptomsHeading: 'Signs a belt, hose or filter is on its way out',
  symptoms: [
    { feel: 'A squeal at startup or when you turn the wheel hard.', means: 'A worn or loose belt slipping on a pulley.' },
    { feel: 'Sweet smell, green or orange drips, or a rising temp gauge.', means: 'A coolant leak at a hose or clamp.' },
    { feel: 'The battery light comes on and the steering gets heavy.', means: 'The main engine belt may have broken. Pull over before the engine overheats.' },
    { feel: 'Musty air or weak airflow from the vents.', means: 'A cabin air filter packed with leaves and dust.' },
    { feel: 'Sluggish pickup going up a hill.', means: 'A clogged fuel filter or a dirty engine air filter.' },
  ],
  checkHeading: 'Belt and hose inspection points',
  checks: [
    'Belt wear, measured with a gauge',
    'Belt cracks and alignment',
    'Tensioner and pulleys',
    'Timing belt due date',
    'Radiator and heater hoses',
    'Soft, swollen or leaking hose spots',
    'Engine air filter',
    'Cabin air filter',
  ],
  fixHeading: 'What we replace, and why it matters',
  fixes: [
    {
      title: 'Belts and hoses',
      items: [
        { name: 'Serpentine belt', note: 'The belt up front that runs the alternator, A/C and more.' },
        { name: 'Timing belt', note: 'Keeps the engine in time. Replaced by mileage and age, not symptoms.' },
        { name: 'Radiator and heater hoses', note: 'One failure can overheat an engine in minutes.' },
      ],
    },
    {
      title: 'Filters',
      items: [
        { name: 'Engine air filter', note: 'Keeps dirt out so the engine breathes clean air.' },
        { name: 'Cabin air filter', note: 'Cleans the air you breathe inside the car.' },
        { name: 'Fuel filter', note: 'Traps dirt in the fuel. A clogged one strains the fuel pump.' },
      ],
    },
  ],
  toyota: {
    heading: 'Toyota and Lexus: belt or chain?',
    body: [
      'Most newer Toyota and Lexus engines use a timing chain, built to last the life of the engine with good oil changes. Some older V6 and V8 models use a timing belt. Not sure which? Ask us or see our [Toyota and Lexus page](/toyota-lexus-repair/).',
    ],
  },
  faqs: [
    { q: 'How often should a serpentine belt be replaced?', a: "There's no single number. Modern belts wear down rather than crack, so we measure them with a gauge instead of guessing by looks. Many last 60,000 miles or more." },
    { q: 'What happens if my timing belt breaks?', a: "The engine stops right away. On some engines the valves can then hit the pistons, which means major engine work. That's why we go by the interval in your manual." },
    { q: 'Does my car even have a fuel filter I can replace?', a: "Maybe. On many newer cars it's built into the fuel pump inside the tank. Others have one with a service interval in the manual. We'll tell you which, and our [fuel system service](/services/fuel-system/) covers the rest." },
  ],
  closing: "If you hear a squeal, smell coolant or can't remember your last belt change, [get your belts and hoses looked at](/contact/) next time you're near Route 303.",
};

export default copy;
