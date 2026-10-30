import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'ac-heating-repair',
  title: 'A/C & Heating Repair in Blauvelt, NY | Toy Auto Center',
  description: "A/C and heating repair in Blauvelt, NY: warm vents, weak defrost and coolant smells diagnosed, from the compressor and condenser to the heater core.",
  h1: 'A/C & Heating Repair in Blauvelt, NY',
  promise: 'Cold air in July, real heat in January, and a windshield you can see through.',
  intro: [
    "A/C and heating repair is about more than comfort. The same system defrosts and defogs your windshield, and the heating side shares its coolant with the engine. When it misbehaves, visibility and engine temperature can both go with it.",
    "Air conditioning is a lot of parts working together: compressor, high-pressure lines, refrigerant, condenser, actuators and electronic controls. Heat is simpler. It mostly runs on hot engine coolant, which makes it more reliable, but a heater problem left alone usually costs more. A clogged heater core can help overheat the engine, and a leaking one drips coolant into the cabin.",
    "Weak heat is sometimes fixed by a coolant flush alone. We also check the belt that drives the compressor. Worn ones are covered on our [belts and hoses page](/services/belts-hoses-filters/).",
  ],
  symptomsHeading: 'Climate control symptoms we hear about most',
  symptoms: [
    { feel: 'The A/C blows cool at first, then slowly turns warm.', means: 'Low refrigerant from a leak, or a compressor clutch that cuts out when it gets hot.' },
    { feel: 'Warm air from the vents with the A/C on max.', means: 'No refrigerant, a compressor not engaging, or a blend door stuck on heat.' },
    { feel: 'A musty or moldy smell when the fan first comes on.', means: 'Moisture and growth on the evaporator core, often with a clogged cabin filter.' },
    { feel: 'A sweet smell and a greasy film on the inside of the glass.', means: 'Usually a leaking heater core. Get this checked soon.' },
    { feel: 'The heat takes forever to warm up, or never gets hot.', means: 'A thermostat stuck open, low coolant or a clogged heater core.' },
    { feel: 'The fan only works on some speeds, or not at all.', means: 'A failed blower motor resistor or the blower motor itself.' },
    { feel: 'Temperature gauge climbs in traffic but drops on the highway.', means: 'The radiator cooling fan is not doing its job at low speed.' },
  ],
  checkHeading: 'Our 14-point A/C and heating service checklist',
  checks: [
    'A/C performance test',
    'Radiator cooling fan and condenser check',
    'Leak and seal inspection: hoses, gaskets, belts',
    'High and low side pressure checks',
    'A/C recharge',
    'Refrigerant refill to spec',
    'Cabin air filter cleaning or replacement',
    'Condenser repair and replacement',
    'Compressor repair and replacement',
    'Evaporator repair and replacement',
    'Accumulator / receiver-drier replacement',
    'Radiator repair and replacement',
    'Thermostat replacement',
    'Water pump replacement',
  ],
  fixHeading: 'A/C and heating parts, and what each one does',
  fixes: [
    {
      title: 'Air conditioning',
      items: [
        { name: 'Compressor', note: 'Pumps refrigerant through the system. Noise or warm air from the vents often traces back to it.' },
        { name: 'Compressor clutch', note: 'Engages the compressor on belt-driven systems. If it will not engage, there is no cold air.' },
        { name: 'Condenser', note: 'The radiator-like core in front of the radiator that sheds heat from the refrigerant.' },
        { name: 'Evaporator core', note: 'Sits inside the dash and gets cold, pulling heat out of the air the fan blows across it.' },
        { name: 'Accumulator or receiver-drier', note: 'A canister with desiccant that soaks up moisture. Usually replaced when the system is opened for major work.' },
        { name: 'Expansion valve', note: 'Meters refrigerant into the evaporator. A bad one can frost the evaporator or starve it.' },
      ],
    },
    {
      title: 'Heating and engine cooling',
      items: [
        { name: 'Heater core', note: 'A small radiator behind the dash that heats cabin air with engine coolant.' },
        { name: 'Blower motor', note: 'Pushes air through the vents for both heat and A/C.' },
        { name: 'Radiator', note: 'Sheds engine heat. A leak or clog leads to overheating.' },
        { name: 'Thermostat', note: 'Holds coolant in the engine until it warms up. A stuck one causes erratic temperatures.' },
        { name: 'Water pump', note: 'Circulates coolant between engine and radiator. Leaks and bearing noise are the usual signs.' },
        { name: 'Cooling fan', note: 'Pulls air through the radiator and condenser when the car is not moving fast enough to do it.' },
      ],
    },
  ],
  techie: {
    heading: 'HOW THE REFRIGERANT LOOP MAKES COLD',
    body: [
      'A/C does not create cold. It moves heat. The compressor squeezes refrigerant gas into a hot, high-pressure vapor (the high side). In the condenser, outside air pulls that heat away and the refrigerant condenses into a liquid. It passes through the expansion valve or orifice tube, where pressure drops sharply (the low side), then boils back into a gas inside the evaporator core. Boiling takes heat, so the evaporator gets cold and so does the air blowing across it. Many newer cars use R-1234yf refrigerant, while most older ones use R-134a. The two are not interchangeable and need different service equipment.',
    ],
  },
  toyota: {
    heading: 'Electric A/C compressors on Toyota and Lexus hybrids',
    body: [
      "Toyota and Lexus hybrids use an electric A/C compressor powered by the high-voltage system, so the A/C can keep running when the gas engine shuts off. Because high voltage runs through the compressor motor, it needs a compatible non-conductive compressor oil. The wrong oil, or a recharge machine with traces of standard oil in its hoses, can contaminate the system and trigger insulation faults.",
      "So it matters who services a hybrid's A/C. We use the correct oil and procedure. The [hybrid section of our Toyota and Lexus page](/toyota-lexus-repair/) covers the rest.",
    ],
  },
  faqs: [
    { q: 'Can I just recharge my A/C with a can from the parts store?', a: 'You can, but if it needed refrigerant, it has a leak, and the can does not fix the leak. Overfilling is easy and hurts cooling. We find the leak first so a recharge actually lasts.' },
    { q: 'Why does my A/C smell like old socks?', a: 'Moisture collects on the evaporator core and mold grows on it. A fresh cabin air filter and an evaporator cleaning usually clear it up. Running the fan with the A/C off for a few minutes before you park helps dry things out.' },
    { q: 'Why is my heat blowing cold?', a: 'The most common causes are low coolant, a thermostat stuck open, a clogged heater core or a blend door that will not move. Low coolant is worth checking quickly because it can mean the engine is running low too.' },
    { q: 'Should I run the A/C in winter?', a: 'Many cars run the compressor automatically in defrost mode, because A/C dries the air and clears the glass faster. Running it now and then also keeps the seals lubricated.' },
    { q: 'Is a sweet smell inside the car a problem?', a: 'Usually yes. That is often coolant from a leaking heater core, and breathing it is not a good idea. It also means the engine is losing coolant.' },
  ],
  closing: "Warm air, cold heat or a windshield that won't clear? [Book an A/C or heating check](/contact/) and we'll find out which part has quit.",
};

export default copy;
