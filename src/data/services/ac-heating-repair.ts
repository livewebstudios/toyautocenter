import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'ac-heating-repair',
  title: 'A/C & Heating Repair in Blauvelt, NY | Toy Auto Center',
  description: "A/C and heating repair in Blauvelt, NY: warm vents, weak defrost and coolant smells diagnosed, from the compressor and condenser to the heater core.",
  h1: 'A/C & Heating Repair in Blauvelt, NY',
  promise: 'Cold air in July, real heat in January, and a windshield you can see through.',
  intro: [
    'A/C and heating repair is about more than comfort. The same system clears your windshield, and the heater shares coolant with the engine. A problem here can affect what you see and how hot the engine runs.',
    'Sometimes weak heat is fixed with a simple coolant flush. We also check the belt that drives the A/C, which is covered on our [belts and hoses page](/services/belts-hoses-filters/).',
  ],
  symptomsHeading: 'Climate control symptoms we hear about most',
  symptoms: [
    { feel: 'The A/C blows cool at first, then turns warm.', means: 'Usually low refrigerant from a leak.' },
    { feel: 'Warm air with the A/C on max.', means: "No refrigerant, or the compressor isn't kicking on." },
    { feel: 'A musty smell when the fan comes on.', means: 'Mold in the system, often with a dirty cabin filter.' },
    { feel: 'A sweet smell and a greasy film on the glass.', means: 'Usually a leaking heater core. Get this checked soon.' },
    { feel: 'The heat never gets hot.', means: 'Low coolant, a stuck thermostat or a clogged heater core.' },
  ],
  checkHeading: 'Our A/C and heating checklist',
  checks: [
    'A/C performance test',
    'Leak check: hoses, seals and belts',
    'System pressure check',
    'A/C recharge to spec',
    'Cabin air filter',
    'Cooling fan and condenser',
    'Thermostat and water pump',
    'Radiator and heater core',
  ],
  fixHeading: 'A/C and heating parts we fix',
  fixes: [
    {
      title: 'Air conditioning',
      items: [
        { name: 'Compressor', note: 'Pumps refrigerant. Noise or warm air often traces back to it.' },
        { name: 'Condenser', note: 'Sits in front of the radiator and gets rid of heat.' },
        { name: 'Evaporator', note: 'The part behind the dash that gets cold.' },
      ],
    },
    {
      title: 'Heating',
      items: [
        { name: 'Heater core', note: 'A small radiator behind the dash that warms the cabin air.' },
        { name: 'Blower motor', note: 'Pushes air through the vents for both heat and A/C.' },
        { name: 'Thermostat', note: 'A stuck one causes slow heat or erratic engine temperatures.' },
      ],
    },
  ],
  toyota: {
    heading: 'Electric A/C compressors on Toyota and Lexus hybrids',
    body: [
      'Toyota and Lexus hybrids use an electric A/C compressor that needs a special oil. The wrong oil can damage the system, so it matters who does the work. We use the correct oil and procedure. More on our [Toyota and Lexus page](/toyota-lexus-repair/).',
    ],
  },
  faqs: [
    { q: 'Can I just recharge my A/C with a can from the parts store?', a: "You can, but if it needed refrigerant, it has a leak, and the can won't fix that. Overfilling is easy too. We find the leak first so the recharge lasts." },
    { q: 'Why is my heat blowing cold?', a: 'Usually low coolant, a stuck thermostat, a clogged heater core or a stuck door inside the dash. Check the coolant soon, because low coolant can mean the engine is running low too.' },
    { q: 'Is a sweet smell inside the car a problem?', a: "Usually yes. It's often coolant from a leaking heater core, which you shouldn't breathe. It also means the engine is losing coolant." },
  ],
  closing: "If the air is warm or the windshield won't clear, [book an A/C or heating check](/contact/) and we'll find which part quit.",
};

export default copy;
