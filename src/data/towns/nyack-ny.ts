import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'nyack-ny',
  title: 'Auto Repair near Nyack | Toy Auto Center, Route 303',
  description: "Nyack auto repair for Cuomo Bridge and Route 59 commuters: brakes, cooling and diagnostics at Toy Auto Center, 628 Route 303 in Blauvelt, Rockland County.",
  h1: 'Auto Repair & NYS Inspection for Nyack Drivers',
  intro: [
    "Nyack is tough on cars. You crawl down Main Street, sit in Route 59 traffic, then stop and go across the Governor Mario M. Cuomo Bridge into Westchester. That's hard on brakes and harder on cooling systems. Toy Auto Center handles auto repair for Nyack from our shop on Route 303 in Blauvelt, about 12 minutes away.",
    "Plenty of people in the village barely drive during the week. They walk to town and take the car out on weekends. Short trips and long sits mean batteries go flat, rotors pick up rust, and the oil never gets hot enough to cook off moisture. We see both kinds of Nyack car, and we treat them differently.",
  ],
  route: {
    heading: 'The drive in from Nyack',
    driveTime: 'About 12 minutes',
    steps: [
      'Take Route 59 west out of Nyack',
      'In West Nyack, pick up Route 303 heading south',
      'Continue south on 303 into Blauvelt',
      "Our sign is at 628 Route 303, and the shop is a block off 303 on Birchwood Drive",
    ],
    body: [
      "You can also hop on the Thruway at exit 11 and get off at exit 12 in West Nyack, which drops you onto 303 by the Palisades Center.",
      "If you commute over the Cuomo Bridge, we're an easy detour on the way home: off at exit 12, south on 303, and you're here. Leave the car at 8, and you'll get a call or a text once we know what's wrong.",
    ],
  },
  sections: [
    {
      heading: 'Bridge traffic and what it does to your brakes',
      body: [
        "Stop-and-go is the hardest duty a brake system sees. Every stop turns speed into heat, and when stops come every few hundred feet, the pads and rotors never cool off. That glazes pads, leaves uneven pad material on the rotors (the usual cause of a pulsing pedal), and wears everything out early.",
        "We measure pad thickness, check rotor runout, and look closely at the caliper slide pins, which seize on a lot of cars around here. Here's [how we approach brake work](/services/brake-repair/).",
      ],
    },
    {
      heading: 'Keeping a Nyack car cool in traffic',
      body: [
        "At highway speed, air rushing through the radiator does most of the cooling. In bridge traffic, the radiator fan does it all, and the water pump, thermostat, hoses and coolant have to hold up under heat soak.",
        "We pressure test the system to find slow leaks, check the coolant's condition, and inspect the hoses and the belt that drives the water pump (on some engines, that's the timing belt). New [belts and hoses](/services/belts-hoses-filters/) cost little next to an engine that overheated. Live on the other side of 303? See our [West Nyack page](/service-area/west-nyack-ny/).",
      ],
    },
    {
      heading: 'Nyack auto repair, diagnosis first',
      body: [
        "We find the cause, explain it in plain English, and fix only that. Toyota and Lexus are our specialty, and we work on every other make that crosses the bridge.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'NYS inspection without leaving Rockland',
    body: [
      "Your car needs a New York safety and emissions inspection once a year to keep its sticker current. We're a certified inspection station on Route 303, so come over from Nyack, wait in the shop, and drive home inspected.",
      "A village car that sits a lot can arrive with a weak battery, and a battery that was jumped, disconnected or replaced resets the computer's emissions self-tests. Give it a few days of normal driving first so those tests read ready.",
    ],
  },
  serviceLinks: ['brake-repair', 'belts-hoses-filters', 'battery-electrical'],
  faqs: [
    {
      q: 'Is it worth driving from Nyack to Blauvelt for a repair?',
      a: "It's about 12 minutes by Route 59 and 303. If you want a shop that diagnoses before it replaces anything and explains the bill line by line, we think the trip pays off.",
    },
    {
      q: 'My temperature gauge rises on the bridge but stays normal on the highway. Why?',
      a: "That pattern usually points at low-speed airflow: a radiator fan that isn't switching on, a failing fan relay or sensor, low coolant, or a radiator clogged on the outside with leaves. We test the fan circuit and the cooling system under load to find which one it is.",
    },
  ],
};
export default copy;
