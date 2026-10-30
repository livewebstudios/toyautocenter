import type { TownCopy } from '../types';

const copy: TownCopy = {
  slug: 'tappan-ny',
  title: 'Auto Repair near Tappan | Toy Auto Center, Route 303',
  description: "Auto repair for Tappan, NY drivers, about 6 minutes north on Route 303. Toy Auto Center in Blauvelt is a family-owned NYS inspection station since 1976.",
  h1: 'Auto Repair & NYS Inspection for Tappan Drivers',
  intro: [
    "Tappan doesn't give you many choices for auto repair. The shops nearby tend to be a sign and a phone number, with nothing online that tells you what they do or how they work. We'd rather show you. Toy Auto Center is a family-owned repair shop and NYS inspection station about 6 minutes up Route 303 in Blauvelt.",
    "Tappan is an old hamlet with narrow streets around its historic center, and plenty of people here split the week between Rockland and New Jersey. That means a lot of miles on the car and not much patience for a repair that drags on. We keep it simple: find the problem, tell you about it, fix it.",
  ],
  route: {
    heading: "From Tappan, it's straight up 303",
    driveTime: 'About 6 to 8 minutes',
    steps: [
      'Pick up Route 303 in Tappan and point it north',
      'Ride 303 through Orangeburg without turning off',
      'In Blauvelt, find number 628 on Route 303, one block off the highway on Birchwood Drive',
    ],
    body: [
      "North on 303, about 6 minutes. That's the whole trip, with one turn at the very end. On a weekday morning with school traffic through Orangeburg, give it closer to 8.",
      "Commuting to New Jersey or the city? If you use the Palisades Parkway, the Route 303 exit in Orangeburg puts you a few minutes south of us, so you can leave the car on the way out and collect it on the way back before 5. Running behind? Text 201.394.8673 so we know where things stand.",
    ],
  },
  sections: [
    {
      heading: 'Tappan auto repair without the guesswork',
      body: [
        "The work we see from Tappan leans toward maintenance and wear: oil service, brakes, tires and [wheel alignment](/services/wheel-alignment-tires/), plus the occasional warning light. Alignment matters more than most people think. Toe is whether the tires point straight ahead; camber is how much they lean in or out at the top. When either is off, the car drifts and the edge of a tire wears early, and you pay for it in rubber.",
        "Maintenance is the cheap part of owning a car. Skipping it is the expensive part. We follow the factory schedule for your make, not a generic checklist, and we tell you which items are actually due at your mileage.",
      ],
    },
    {
      heading: 'How we work on your car',
      body: [
        "Diagnose first. That's the rule. No part gets ordered until we know it's the cause, and you hear about the problem before anyone picks up a wrench. If something can wait a few months, we say so and write it down so you can budget for it.",
        "We're Toyota and Lexus specialists who also fix everything else on the road. If you're weighing us against the dealership, here's [why plenty of owners skip the dealer](/dealer-alternative/). Folks a few minutes north can check the [Orangeburg page](/service-area/orangeburg-ny/).",
      ],
    },
  ],
  inspectionNote: {
    heading: 'Your inspection sticker, handled on 303',
    body: [
      "Every car registered in New York needs a safety and emissions inspection every 12 months. We're a certified NYS inspection station, so Tappan drivers can come up 303, take a seat, and leave with a fresh sticker once the car passes.",
      "The safety side covers items like brakes, steering, tires, lights, horn, wipers and seat belts. The emissions side, on most newer cars, reads the engine computer through the OBD-II port. If anything fails, we show you exactly what and why.",
    ],
  },
  serviceLinks: ['wheel-alignment-tires', 'oil-change-maintenance', 'nys-inspection'],
  faqs: [
    {
      q: 'Is there an independent auto repair shop near Tappan?',
      a: "Yes. Toy Auto Center is an independent, family-owned shop about 6 minutes north on Route 303 in Blauvelt. Book online, call 845.365.3003, or text 201.394.8673.",
    },
    {
      q: 'My car pulls to the right on Route 303. Is that the alignment?',
      a: "Often, but not always. A pull can also come from a tire with a shifted belt inside it, uneven tire pressure, or a sticking brake caliper. We check the simple causes before the car goes on the alignment rack, so you don't pay for an alignment that won't fix it.",
    },
  ],
};
export default copy;
