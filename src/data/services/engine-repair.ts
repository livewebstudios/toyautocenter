import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'engine-repair',
  title: 'Engine Repair in Blauvelt, NY | Toy Auto Center',
  description: "Engine repair in Blauvelt, NY: misfires, oil burning, EGR and PCV faults, CV joints, wheel bearings and clutches for all makes, Toyota and Lexus included.",
  h1: 'Engine Repair in Blauvelt, NY',
  promise: "From a rough idle to a growl under the car, we find what's wrong with the powertrain and fix that.",
  intro: [
    "Your engine is the heart of the vehicle. Engine repair at Toy Auto Center covers the engine itself and the powertrain that carries its power to the wheels: CV joints and boots, wheel bearings, the flywheel, the differential and the clutch.",
    "Most engine trouble announces itself early. The check engine light comes on (and we [read and test that light properly](/services/check-engine-diagnostics/)), power fades, mileage drops, or there's a noise you didn't hear last month. Dealing with it at that stage is almost always cheaper than waiting until a small leak or misfire has damaged something bigger.",
    "Our process is short. Diagnose, explain what we found in plain English, lay out the options, and only start work once you've picked one.",
  ],
  symptomsHeading: 'Running rough? Making new noises?',
  symptoms: [
    { feel: 'Rough idle, shaking at stoplights.', means: 'A misfire from a spark plug, ignition coil, injector or vacuum leak.' },
    { feel: 'Power fades and mileage drops.', means: 'Restricted airflow, a failing sensor, low compression or a clogged exhaust.' },
    { feel: 'Blue smoke, or oil disappearing between changes.', means: 'Oil is being burned, sometimes through a stuck PCV valve, sometimes past worn rings or valve seals.' },
    { feel: 'Stalling or stumbling once the engine is warm.', means: 'An EGR valve stuck open, letting exhaust in at the wrong time.' },
    { feel: 'Clicking from the front when you turn sharply.', means: 'A worn CV joint, often after its rubber boot split and let the grease out.' },
    { feel: 'A hum or growl that rises with road speed.', means: 'A wheel bearing on its way out.' },
    { feel: 'Whine, howl or clunk from the axle.', means: 'Differential wear or low gear oil.' },
    { feel: 'The clutch slips, smells hot or engages higher than before.', means: 'A worn clutch disc, or a flywheel that is glazed or cracked.' },
  ],
  checkHeading: 'How we track down engine repair problems',
  checks: [
    'Codes, freeze frame and live sensor data',
    'Misfire counts per cylinder',
    'Spark plugs and ignition coils',
    'Compression or cylinder leak-down test',
    'Vacuum leaks and PCV system',
    'EGR valve operation',
    'Oil and coolant leaks, inside and out',
    'CV boots and axle play',
    'Wheel bearing noise and play',
    'Differential and clutch on a road test',
  ],
  fixHeading: 'Engine and powertrain repairs we do',
  fixes: [
    {
      title: 'Ignition and engine management',
      items: [
        { name: 'Spark plugs', note: 'Worn plugs cause a rough idle and drag fuel mileage down.' },
        { name: 'Ignition coils', note: 'Each coil makes the high voltage for its plug, and a weak one misfires that cylinder.' },
        { name: 'Engine sensors', note: 'They watch emissions, fuel use, shifting and cruise control, and a failing one lights the dash and costs you mileage.' },
        { name: 'ECM (engine control module)', note: "It reads the sensors and runs the engine, and we confirm it's at fault before anyone replaces one." },
      ],
    },
    {
      title: 'Emissions parts',
      items: [
        { name: 'EGR valve', note: 'It feeds a little exhaust back into the intake to cut emissions, and a stuck one causes rough idle, stalling and higher fuel use.' },
        { name: 'PCV valve', note: 'It vents crankcase pressure back into the intake, and a bad one leads to oil burning, leaks and misfires.' },
      ],
    },
    {
      title: 'Powertrain and driveline',
      items: [
        { name: 'Engine repair', note: 'Gaskets, seals, timing components and internal work, quoted after diagnosis.' },
        { name: 'CV joint and boot', note: 'Loud clicking on turns or vibration under way means the joint is wearing.' },
        { name: 'Wheel bearing', note: 'It lets the wheel spin with almost no friction, and knocking, humming, clicking or popping says it is worn.' },
        { name: 'Flywheel', note: 'Slipping, a burnt smell or clutch chatter can trace back here.' },
        { name: 'Differential', note: 'It splits engine torque between the wheels, and vibration, clunking, howling or whining means wear.' },
        { name: 'Clutch', note: 'On a manual it connects the engine to the drivetrain, and hard shifting with a burning smell are the signs.' },
      ],
    },
  ],
  techie: {
    heading: 'What a misfire count tells us',
    body: [
      "Modern engines count their own misfires. The computer watches crankshaft speed, and every time a cylinder fires, the crank speeds up a tiny bit. When one cylinder doesn't pull its weight, the crank slows for an instant and the computer logs it, setting P0300 for a random misfire or P0301 through P0308 for a specific cylinder. That number points us at a cylinder. Then we move the coil or plug to a different cylinder and watch whether the misfire follows. If it follows, it's the part. If it stays put, we look at that cylinder's injector, compression or a vacuum leak nearby. A little method beats a box of guessed parts.",
    ],
  },
  toyota: {
    heading: 'Timing chain or timing belt on your Toyota?',
    body: [
      "Most current Toyota and Lexus engines use a timing chain. It runs in oil inside the engine and isn't on the regular replacement schedule, but it depends on clean oil changed on time to stay quiet and properly tensioned.",
      "Some older Toyota and Lexus V6 engines, including the 1MZ-FE and 3MZ-FE found in many older Camry, Sienna, Highlander and Lexus ES and RX models, use a rubber timing belt with a scheduled replacement interval. If you're not sure which your engine has, check your owner's manual or ask us. Our [Toyota and Lexus service page](/toyota-lexus-repair/) covers the rest of the maintenance picture.",
    ],
  },
  faqs: [
    { q: "What's the difference between the check engine light and the oil light?", a: "The check engine light means the engine computer stored a fault, usually emissions or performance related. The red oil light means oil pressure is low right now. That one is urgent: pull over and shut the engine off, because a few minutes without oil pressure can ruin an engine." },
    { q: 'My engine is burning oil. What causes that?', a: "A stuck or clogged PCV valve can pull oil into the intake, and that's an inexpensive fix, so we check it first. Worn valve stem seals or piston rings are the bigger jobs. Tracking how much you add between changes, and when it smokes, helps narrow it down." },
    { q: 'Why does my car click when I turn?', a: "That's almost always an outer CV joint. The rubber boot that holds the grease in has usually torn, dirt got in, and the joint is wearing. Caught early, it's a boot or axle job. Ignore the clicking long enough and the joint can fail." },
    { q: 'Do you work on transmissions too?', a: "Yes, and they have [a page of their own](/services/transmission-repair/). Some symptoms overlap, like a shudder or a lost-power feeling, so we sort out whether it's engine or transmission before quoting either." },
  ],
  closing: "New noise, lost power or a light that won't quit? [Get it on our schedule](/contact/), and we'll tell you what we find before we fix anything.",
};

export default copy;
