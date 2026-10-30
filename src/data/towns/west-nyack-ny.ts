import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'west-nyack-ny',
  title: 'Auto Repair near West Nyack | Toy Auto Center, Route 303',
  description: "NYS inspection and auto repair for West Nyack drivers, about 5 minutes south on Route 303 at Toy Auto Center in Blauvelt. Certified station, wait on site.",
  h1: 'Auto Repair & NYS Inspection for West Nyack Drivers',
  intro: [
    "A lot of West Nyack drivers find us the same way: the inspection sticker is about to run out and they need a station close by. Toy Auto Center is a certified NYS inspection station and full auto repair shop on Route 303 in Blauvelt, about 5 minutes south of West Nyack. You can wait while we inspect, and if something fails, we can fix it under the same roof.",
    "West Nyack is where much of Rockland meets: Route 59, Route 303, the Thruway at exit 12, and the Palisades Center traffic that comes with all of it. Cars here pile up short, congested miles. At inspection time that shows up as worn brakes, tired tires, burned-out bulbs and warning lights.",
  ],
  route: {
    heading: 'West Nyack to the shop',
    driveTime: 'About 5 minutes',
    steps: [
      'Get on Route 303 near the Palisades Center',
      'Head south, away from the Thruway interchange',
      'Pull in at 628 Route 303 in Blauvelt; the shop sits 1 block off 303 on Birchwood Drive',
    ],
    body: [
      "It's a straight shot south. Once you clear the mall traffic around the Thruway, 303 opens up and you're here in a few minutes.",
      "Coming off the Thruway? Exit 12 lands you right on 303, so whether you commute over the Cuomo Bridge or west toward Suffern, we're about 5 minutes off your route. Drop the car before work and we'll reach out as soon as it's diagnosed.",
    ],
  },
  sections: [
    {
      heading: 'West Nyack auto repair after a failed inspection',
      body: [
        "When a car doesn't pass, the reasons are usually ordinary: brake pads worn past spec, tires down to 2/32 of an inch of tread, a crack in the windshield in front of the driver, a dead bulb, or a check engine light. We tell you exactly what failed and show it to you on the car. You decide what gets fixed.",
        "The check engine light is the one that surprises people. If it's lit, the emissions test fails, even when the car feels fine. We scan the codes, watch live PID data (the sensor readings the engine computer sees in real time), and chase down the cause. That's the core of our [check engine light diagnosis](/services/check-engine-diagnostics/). Exhaust leaks and tired catalytic converters can set codes too, and we take care of [exhaust and catalytic converter work](/services/exhaust-air-intake/) in our own bays.",
      ],
    },
    {
      heading: 'How the shop runs',
      body: [
        "We diagnose, we explain, and we only fix what's needed. No upsell list stapled to your inspection. If the car passes but the rear pads are getting close, we'll mention it once and let you plan around it.",
        "Toyota and Lexus are our specialty, and we service all makes. [Nanuet drivers](/service-area/nanuet-ny/) have a page of their own, too.",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Inspection day in West Nyack, done in Blauvelt',
    body: [
      "New York requires a yearly inspection that covers both safety and emissions. The state certifies us to do both, right on Route 303. Come in, grab a chair, and wait while we go through the car.",
      "Keep the registration in the glove box so we can match it to the vehicle. Curious what gets checked? Here's [everything our NYS inspection looks at](/services/nys-inspection/).",
    ],
  },
  serviceLinks: ['nys-inspection', 'check-engine-diagnostics', 'exhaust-air-intake'],
  faqs: [
    {
      q: 'Where can I get a NYS inspection near West Nyack?',
      a: "Toy Auto Center, 628 Route 303 in Blauvelt, about 5 minutes south of the Palisades Center. We're a certified station, open Monday to Friday 8 to 5, and you can wait while it's done.",
    },
    {
      q: 'My check engine light is on and my inspection is due. What should I do first?',
      a: "Get the light diagnosed before the inspection. With it on, the car won't pass emissions. Clearing the code alone doesn't help either, because that resets the readiness monitors and the car reads as not ready. We find the cause, fix it with your OK, and then inspect.",
    },
    {
      q: 'Do you inspect cars that are not Toyotas?',
      a: 'Yes. We inspect and repair all makes and models registered in New York, domestic and import.',
    },
  ],
};
export default copy;
