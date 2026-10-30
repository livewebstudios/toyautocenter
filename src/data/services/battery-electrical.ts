import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'battery-electrical',
  title: 'Battery & Electrical Repair in Blauvelt, NY | Toy Auto Center',
  description: "Battery and electrical repair in Blauvelt, NY: no-starts, dim lights and dead batteries traced to the battery, alternator, starter or a hidden drain.",
  h1: 'Battery & Electrical Repair in Blauvelt, NY',
  promise: 'We find where the power is going, not just sell you another battery.',
  intro: [
    'Battery and electrical repair on a modern car is detective work. Sometimes it really is a tired battery. Other times the battery is the victim of a bad alternator, a corroded cable or something draining it overnight.',
    "We test first, so you don't buy a new battery for a problem it didn't cause. Warning light on too? We read it the same way we do for [check engine light diagnostics](/services/check-engine-diagnostics/).",
  ],
  symptomsHeading: 'Signs of a battery or electrical problem',
  symptoms: [
    { feel: 'You turn the key and hear nothing.', means: 'A dead battery, a bad connection or the starter.' },
    { feel: 'A click or rapid clicking, but no crank.', means: 'Not enough power reaching the starter, often a weak battery or loose cable.' },
    { feel: 'Slow cranking on cold mornings.', means: 'A battery near the end of its life.' },
    { feel: 'Headlights dim at idle.', means: "The alternator isn't keeping up, or its belt is slipping." },
    { feel: 'A dead battery after the car sits a few days.', means: 'Something keeps drawing power with the car off.' },
  ],
  checkHeading: 'How we test the electrical system',
  checks: [
    'Battery load test',
    'Terminals, cables and corrosion',
    'Charging voltage',
    'Alternator and belt',
    'Starter',
    'Main power and ground cables',
    'Fuses and relays',
    'Battery drain with the car off',
  ],
  fixHeading: 'Battery and electrical repairs we do',
  fixes: [
    {
      title: 'Battery',
      items: [
        { name: 'Battery testing', note: 'Real measurements, not a guess from the date on the sticker.' },
        { name: 'Battery replacement', note: 'The right size and type for your car, with clean terminals.' },
        { name: 'Recharging', note: 'A battery drained by a light left on can often be recharged.' },
      ],
    },
    {
      title: 'Charging and starting',
      items: [
        { name: 'Alternator', note: 'Charges the battery and powers the car while the engine runs.' },
        { name: 'Starter', note: 'Replaced when testing confirms it has failed.' },
        { name: 'Fuses, grounds and wiring', note: 'A blown fuse is a symptom. We find out why it blew.' },
      ],
    },
  ],
  toyota: {
    heading: 'The 12-volt battery in Toyota and Lexus hybrids',
    body: [
      'Toyota and Lexus hybrids carry a small 12-volt battery besides the big hybrid one. If the small one is weak, the car may not start or may throw warnings, even with a healthy hybrid battery. More on our [hybrid service page](/toyota-lexus-repair/).',
    ],
  },
  faqs: [
    { q: 'How long should a car battery last?', a: 'Often three to five years. Heat, short trips and cars that sit can shorten that. A load test tells you more than the date on the sticker, so we test before we recommend a new one.' },
    { q: 'Is it my battery or my alternator?', a: 'If it starts after a jump and dies again soon, suspect the alternator. If it starts after a charge but dies after sitting, look at the battery or a drain. Testing both ends the guessing.' },
    { q: 'Why does my battery keep dying overnight?', a: "Something is drawing power with the car off. A trunk light, an add-on accessory or a computer that won't go to sleep are common. A drain test finds which one." },
  ],
  closing: "If you've got a slow crank or a battery that won't hold a charge, [bring it in for an electrical test](/contact/) and we'll trace where the power goes.",
};

export default copy;
