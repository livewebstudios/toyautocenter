import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'belts-hoses-filters',
  title: 'Belts, Hoses & Filters in Blauvelt, NY | Toy Auto Center',
  description: "Belts, hoses and filters replaced in Blauvelt, NY: serpentine and timing belts, radiator and heater hoses, fuel, cabin and engine air filters.",
  h1: 'Belts, Hoses & Filters in Blauvelt, NY',
  promise: 'Cheap parts that strand you when they go. We catch them before they do.',
  intro: [
    "Belts, hoses and filters don't get much attention. They last a long time, but not forever, and they rarely give much warning before they quit. A snapped belt or a split hose is one of the most common reasons a perfectly good car ends up on a tow truck.",
    "Rubber wears two ways: from use and from age. Pulleys and heat cycles grind a belt down every time the engine runs, and years of weather dry out rubber that hardly moves. Hoses hold pressure, so a pinhole can turn into a gusher fast.",
    "Filters are the quiet side of the job. A clogged one doesn't fail loudly. It just makes the engine, the fuel pump or your lungs work harder. We check all three groups whenever your car is up on the lift for [oil and scheduled maintenance](/services/oil-change-maintenance/).",
  ],
  symptomsHeading: 'Signs a belt, hose or filter is on its way out',
  symptoms: [
    { feel: 'A squeal at cold startup, or when you turn the wheel hard.', means: 'A glazed or loose serpentine belt, or a weak tensioner, slipping on a pulley.' },
    { feel: 'A chirp that ticks in rhythm with the engine.', means: 'Usually a pulley out of line or a bearing in an idler or tensioner going dry.' },
    { feel: 'Sweet smell, green or orange drips, or a temp gauge creeping up.', means: 'A coolant leak at a radiator or heater hose, clamp or connection.' },
    { feel: 'The battery light comes on and the steering gets heavy at once.', means: 'The serpentine belt may be off or broken. Pull over before the engine overheats.' },
    { feel: 'Musty air from the vents, or weak airflow on high.', means: 'A cabin air filter packed with leaves, dust and pollen.' },
    { feel: 'Sluggish pickup or hesitation going up a hill.', means: 'A restricted fuel filter or a dirty engine air filter starving the engine.' },
  ],
  checkHeading: 'Belt and hose inspection points',
  checks: [
    'Serpentine belt rib wear (gauged, not eyeballed)',
    'Belt cracks, glazing, fraying and alignment',
    'Tensioner movement and idler pulley bearings',
    'Timing belt interval vs. your mileage and age',
    'Upper and lower radiator hoses',
    'Heater hoses and bypass hoses',
    'Soft, swollen or seeping hose spots',
    'A/C hoses and fittings for oily residue',
    'Vacuum lines for cracks and leaks',
    'Engine air filter restriction',
    'Cabin air filter condition',
    'Fuel filter location and service interval',
  ],
  fixHeading: 'What we replace, and why it matters',
  fixes: [
    {
      title: 'Belts',
      items: [
        { name: 'Serpentine belt', note: 'The ribbed belt on the front of the engine that turns the alternator, A/C compressor and, on many cars, the water pump and power steering pump.' },
        { name: 'Tensioner and idler pulleys', note: 'They keep the belt tight and tracking straight. A worn one eats new belts.' },
        { name: 'Timing belt', note: 'The toothed belt inside the engine that keeps the crankshaft and camshafts in step. On many engines the water pump is replaced with it.' },
      ],
    },
    {
      title: 'Hoses',
      items: [
        { name: 'Radiator hoses', note: 'Carry coolant between the engine and radiator. One failure can overheat an engine in minutes.' },
        { name: 'Heater hoses', note: 'Feed hot coolant to the heater core behind the dash, so a leak costs you both coolant and cabin heat.' },
        { name: 'A/C hoses', note: 'Carry refrigerant under pressure. A leak here is a common reason the vents blow warm.' },
      ],
    },
    {
      title: 'Filters',
      items: [
        { name: 'Engine air filter', note: 'Keeps dirt out of the intake so the engine breathes clean air.' },
        { name: 'Cabin air filter', note: 'Cleans the air you breathe inside the car and protects the blower and evaporator.' },
        { name: 'Fuel filter', note: 'Traps debris before it reaches the injectors. A clogged one strains the fuel pump.' },
      ],
    },
  ],
  techie: {
    heading: 'TIMING BELT VS. SERPENTINE BELT',
    body: [
      "They're both rubber belts, but they do very different jobs. The serpentine belt lives outside the engine and drives the accessories. If it breaks you're stuck, but the engine itself is fine. The timing belt lives behind a cover and keeps the valves opening in step with the pistons. On an interference engine, where valves and pistons share space, a broken timing belt lets them collide. That usually means bent valves and a very large bill, which is why timing belts get replaced by mileage and age, not by symptoms.",
    ],
  },
  toyota: {
    heading: 'Toyota and Lexus: belt or chain?',
    body: [
      "Most Toyota and Lexus gas engines built in roughly the last fifteen years use a timing chain, which is designed to last the life of the engine with good oil changes. Several older engines use a timing belt, including the 3.0 and 3.3 liter V6 found in many mid-2000s Camry, Highlander, Sienna and RX models, and the 4.7 liter V8 in older Tundra and Sequoia trucks.",
      "Every engine still has a serpentine belt, chain or not. Your owner's manual lists whether yours has a timing belt and when it's due, or just ask us. Our [Toyota and Lexus service page](/toyota-lexus-repair/) has more model-by-model detail.",
    ],
  },
  faqs: [
    { q: 'How often should a serpentine belt be replaced?', a: "There's no single number. Modern belts wear by losing rib material rather than cracking, so we measure rib depth with a gauge instead of guessing by looks. Many last 60,000 miles or more, though tensioners and pulleys often wear out around the same time." },
    { q: 'What happens if my timing belt breaks?', a: "The engine stops right away. On an interference engine the valves can hit the pistons, which often means major engine work. That's why we go by the replacement interval in your manual instead of waiting for a symptom." },
    { q: 'Does my car even have a fuel filter I can replace?', a: "Maybe. On many newer cars the fuel filter is built into the pump module inside the tank and isn't a routine service item. Others have an inline filter with an interval in the owner's manual. We'll tell you which one you have, and our [fuel system service](/services/fuel-system/) covers the rest of that circuit." },
    { q: 'How often should I change my cabin air filter?', a: "Many owner's manuals call for one every 15,000 to 30,000 miles, but tree-lined roads and dusty commutes clog them faster. If your vents smell musty or airflow feels weak, check it first. It's a quick swap." },
    { q: 'Should I replace hoses before they leak?', a: 'If they are cracked, swollen, soft or hard as a stick, yes. A hose that fails on the road means overheating and a tow. Replacing a worn hose on your schedule is far cheaper than an overheated engine.' },
  ],
  closing: "Hearing a squeal, smelling coolant or just can't remember the last belt change? [Get your belts and hoses looked at](/contact/) next time you're near Route 303.",
};

export default copy;
