import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'battery-electrical',
  title: 'Battery & Electrical Repair in Blauvelt, NY | Toy Auto Center',
  description: "Battery and electrical repair in Blauvelt, NY: no-starts, dim lights and dead batteries traced to the battery, alternator, starter or a hidden drain.",
  h1: 'Battery & Electrical Repair in Blauvelt, NY',
  promise: 'We find where the power is going, not just sell you another battery.',
  intro: [
    "Battery and electrical repair on a modern car is detective work. The battery, alternator, fuses and wiring run on the same basic rules they always have, but today they feed a network of computers that control nearly everything, from the starter to the A/C. One weak link can look like five different problems.",
    "Sometimes it really is just a tired battery. Other times the battery is the victim: an alternator that isn't charging, a corroded ground, or a module that never goes to sleep and drains it overnight. We test, isolate and repair, so you don't buy a new battery to fix a problem the battery didn't cause.",
    "If a warning light came on with the electrical trouble, we read it with the same tools we use for [check engine light diagnostics](/services/check-engine-diagnostics/), because many electrical faults set codes too.",
  ],
  symptomsHeading: 'Signs of a battery or electrical problem',
  symptoms: [
    { feel: 'You turn the key and hear nothing. No click, no crank.', means: 'A dead battery, a bad connection, the ignition switch or the starter circuit.' },
    { feel: 'One click, or a rapid clicking, and the engine will not turn over.', means: 'Not enough current reaching the starter: a weak battery, a loose cable or a failing solenoid.' },
    { feel: 'The engine runs fine, but the headlights dim at idle or low speed.', means: 'The alternator is not keeping up, or its belt is slipping.' },
    { feel: 'Dash or interior lights are dim, or do not come on at all.', means: 'Low system voltage, a blown fuse or a bad ground.' },
    { feel: 'The engine cranks slowly, especially on cold mornings.', means: 'A battery near the end of its life. Cold cuts the power a battery can deliver.' },
    { feel: 'The battery is dead after the car sits a few days.', means: 'A parasitic draw: something keeps pulling current with the key off.' },
    { feel: 'A battery light on the dash, or a hot electrical smell.', means: 'A charging problem. The alternator may be failing or overheating.' },
  ],
  checkHeading: 'How we test the electrical system',
  checks: [
    'Battery state of charge and load test',
    'Battery terminals, cables and corrosion',
    'Charging voltage at idle and with loads on',
    'Alternator output and belt condition',
    'Starter current draw',
    'Voltage drop on main power and ground cables',
    'Fuses and relays',
    'Parasitic draw with the car asleep',
    'Module codes across the vehicle network',
  ],
  fixHeading: 'Battery and electrical repairs we do',
  fixes: [
    {
      title: 'Battery services',
      items: [
        { name: 'Battery, starter and alternator testing', note: 'Real measurements under load, not a guess from the age of the battery.' },
        { name: 'Battery recharging', note: 'A battery drained by a light left on can often be recharged and tested again.' },
        { name: 'Battery replacement', note: 'The right size, type and cold cranking amps for your car, installed with clean terminals.' },
        { name: 'Battery maintenance', note: 'Cleaning corrosion and tightening cables so current actually gets through.' },
        { name: 'Alternator and starter replacement', note: 'When testing confirms one of them has failed.' },
        { name: 'Alternator belt', note: 'A glazed or loose belt can keep a good alternator from charging.' },
        { name: 'Ignition switch', note: 'A worn switch can cut power to the starter or the dash, sometimes only now and then.' },
      ],
    },
    {
      title: 'Charging, starting and wiring',
      items: [
        { name: 'Alternator', note: 'Makes the electricity that runs the car and recharges the battery once the engine is running.' },
        { name: 'Starter and solenoid', note: 'The solenoid takes a small signal from the key and switches battery current to the starter motor.' },
        { name: 'Fuses and relays', note: 'A blown fuse is a symptom. We find out why it blew before we replace it.' },
        { name: 'Grounds and cables', note: 'A corroded ground causes flickering lights, odd gauges and slow cranking that look like bigger problems.' },
      ],
    },
  ],
  techie: {
    heading: 'PARASITIC DRAW AND VOLTAGE DROP',
    body: [
      'A parasitic draw test puts an ammeter in series with the battery, then waits for the computers to go to sleep, which can take a while on newer cars. Many cars settle to a few tens of milliamps. If the reading stays high, we find the circuit by measuring the tiny voltage across each fuse instead of pulling them, since pulling fuses can wake modules and reset the test.',
      'Voltage drop testing finds bad connections that a basic voltmeter misses. With the circuit under load, we measure across a cable or ground. A good connection loses only a few tenths of a volt. More than that means corrosion or a loose joint is turning current into heat.',
    ],
  },
  toyota: {
    heading: 'The 12V battery in Toyota and Lexus hybrids',
    body: [
      "Toyota and Lexus hybrids have two batteries: the large high-voltage hybrid battery and a small 12V auxiliary battery. The 12V battery powers the computers that start up the hybrid system. If it's weak, the car may not go into READY mode, or it may light up the dash with warnings, even though the hybrid battery is fine.",
      "On some models the 12V battery sits in the cargo area or under a rear seat, and the replacement has to match the type and venting setup the car was built with. Our [Toyota and Lexus hybrid service](/toyota-lexus-repair/) covers the high-voltage side.",
    ],
  },
  faqs: [
    { q: 'How long should a car battery last?', a: 'Often three to five years, though heat, short trips and cars that sit for weeks can shorten that. A load test tells you more than the date on the sticker, so we test before we recommend a new one.' },
    { q: 'Is it my battery or my alternator?', a: 'If the car starts after a jump and dies again soon, the alternator is a strong suspect. If it starts fine after a charge but goes dead after sitting, look at the battery or a parasitic draw. Testing both takes the guesswork out.' },
    { q: 'Why does my battery keep dying overnight?', a: 'Something is drawing current with the car off. Common culprits are a glovebox or trunk light, an aftermarket accessory, or a module that will not go to sleep. A parasitic draw test finds which circuit it is.' },
    { q: 'Can a bad battery cause other problems?', a: 'Yes. Low voltage can make modules act strangely, set random codes and confuse systems like the A/C and power windows. Some electrical gremlins clear up with a healthy battery and clean connections.' },
  ],
  closing: "Slow crank, dim lights or a battery that won't hold a charge? [Bring it in for an electrical test](/contact/) and we'll trace where the power goes.",
};

export default copy;
