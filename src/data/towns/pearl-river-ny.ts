import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'pearl-river-ny',
  title: 'Auto Repair near Pearl River | Toy Auto Center, Route 303',
  description: "Pearl River auto repair and Toyota and Lexus service as a dealer alternative. Toy Auto Center is about 10 minutes away on Route 303 in Blauvelt, NY.",
  h1: 'Auto Repair & NYS Inspection for Pearl River Drivers',
  intro: [
    "Pearl River runs on commutes. Some of you drive to the train station and leave the car in the lot all day; others head south into New Jersey every morning. Either way the car has to start, stop and get you home. Toy Auto Center handles auto repair for Pearl River from Route 303 in Blauvelt, about 10 minutes east by Orangeburg Road.",
    "If you drive a Toyota or Lexus, there's one more reason to make the trip. We specialize in both, and for maintenance and repairs we're a real alternative to the dealer: the same factory maintenance schedule, and a person who explains the work instead of handing you a menu.",
  ],
  route: {
    heading: 'Pearl River to Route 303',
    driveTime: 'About 10 minutes',
    steps: [
      'Take Orangeburg Road east out of Pearl River',
      'Continue past the Palisades Parkway into Orangeburg',
      'At Route 303, turn left and head north',
      "Look for 628 Route 303 in Blauvelt, where we're a block off the highway at Birchwood Drive",
    ],
    body: [
      "Orangeburg Road does most of the work. It's a steady drive with a few lights, and 303 carries you the rest of the way.",
      "Already on the Palisades Parkway? Use the Orangeburg exits and you're minutes from the shop. Train commuters whose schedule allows can leave the car with us at 8 on a workday and have someone run them to the Pearl River station.",
    ],
  },
  sections: [
    {
      heading: 'Pearl River auto repair starts with the commute',
      body: [
        "A car that sits at the station all day and then makes a short drive home has a hard life. The battery never fully recharges on a few minutes of driving, so it slowly loses capacity until one cold morning it won't crank. We load test the battery and check the alternator's output and the starter's draw, so you replace the part that actually failed.",
        "Longer runs into New Jersey are easier on the battery but add up quickly on oil, tires and brakes. Staying on top of [scheduled maintenance](/services/oil-change-maintenance/) costs far less than the repairs it heads off.",
      ],
    },
    {
      heading: 'Toyota and Lexus auto repair, minus the dealer visit',
      body: [
        "Toyotas and Lexus models have their quirks, and we know them: which engines use a timing chain and which use a belt, the oil consumption some older 2.4-liter four-cylinders are known for, and how the hybrid systems behave. See our [Toyota and Lexus specialty](/toyota-lexus-repair/), or read [how we stack up against the dealer](/dealer-alternative/).",
        "How we work doesn't change by make. We diagnose first, explain what we found, and fix only what needs it. Driving in from a little farther north? [Nanuet drivers](/service-area/nanuet-ny/) come in by Route 59 instead.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Getting your NYS sticker near Pearl River',
    body: [
      "New York wants a safety and emissions inspection on your car every 12 months. We're a certified inspection station on 303, and you can sit in the shop while the inspection gets done.",
      "Pass, and you leave with a new sticker. Fail, and we explain the specific item, give you a price to fix it, and leave the call to you. You're never obligated to have the repair done here.",
    ],
  },
  serviceLinks: ['oil-change-maintenance', 'battery-electrical', 'check-engine-diagnostics'],
  faqs: [
    {
      q: 'Can an independent shop service my Toyota without voiding the warranty?',
      a: "Yes. The federal Magnuson-Moss Warranty Act says a manufacturer can't void your warranty just because maintenance was done somewhere other than the dealer. Follow the factory schedule, keep your receipts, and your warranty stays intact.",
    },
    {
      q: 'My car sits at the Pearl River train station all day. How often should the battery be checked?',
      a: "Once a year after it turns three is a good habit, and before winter if it has been slow to crank. Short trips and long sits are tough on a battery, and a load test only takes a few minutes.",
    },
  ],
};
export default copy;
