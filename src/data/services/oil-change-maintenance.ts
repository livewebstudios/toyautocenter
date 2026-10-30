import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'oil-change-maintenance',
  title: 'Oil Change & Maintenance in Blauvelt, NY | Toy Auto Center',
  description: "Oil change in Blauvelt, NY: full service for $44.99 conventional or $64.99 full synthetic (current special), plus scheduled maintenance on Route 303.",
  h1: 'Oil Change & Maintenance in Blauvelt, NY',
  promise: 'A full service oil change, plus the checks that ride along with it.',
  intro: [
    "An oil change here is full service, not a drain and go. Fresh oil and a new filter go in, and while the car is on the lift, we check fluids, belts, brakes and tires.",
    "The current special is **$44.99 conventional** or **$64.99 full synthetic**. Ask for it when you pay, since that's the only time we can apply it. The fine print is on our [monthly deals page](/deals/).",
  ],
  symptomsHeading: 'Overdue? Your car usually drops hints',
  symptoms: [
    { feel: 'The oil light or a wrench icon came on.', means: 'The wrench is a reminder. A red oil can means low oil pressure: pull over and shut the engine off.' },
    { feel: 'The dipstick reads low, or the oil is black and gritty.', means: "It's overdue, or the engine is burning or leaking oil." },
    { feel: 'You smell hot oil after a drive.', means: 'Oil is leaking onto the hot exhaust.' },
    { feel: 'There are spots on the driveway.', means: 'Brown is usually oil. Red, green or pink means another fluid is leaking.' },
    { feel: 'The reminder sticker passed its mileage weeks ago.', means: 'Oil breaks down with time too, so short-trip cars count.' },
  ],
  checkHeading: 'Every full service oil change includes',
  checkIntro: '$44.99 conventional, $64.99 full synthetic. Current special, ask at checkout.',
  checks: [
    'Up to 5 quarts conventional oil',
    'New oil filter',
    'Check and top off fluids',
    'Check wiper blades',
    'Adjust tire pressure',
    'Check steering, suspension and brakes',
    'Check belts',
    'Check for fluid leaks',
  ],
  fixHeading: 'Maintenance we handle past the oil',
  fixes: [
    {
      title: 'Fluids and filters',
      items: [
        { name: 'Transmission fluid service', note: 'Fresh fluid keeps shifts smooth.' },
        { name: 'Coolant and brake fluid', note: 'Both wear out with age, even when they still look fine.' },
        { name: 'Engine and cabin air filters', note: 'Clogged filters make the engine work harder and weaken airflow from the vents.' },
      ],
    },
    {
      title: 'Wear items',
      items: [
        { name: 'Wiper blades', note: 'Replaced when they streak, chatter or tear.' },
        { name: 'Belts and hoses', note: 'Cracked rubber gets flagged early. Our [belt, hose and filter work](/services/belts-hoses-filters/) covers the fix.' },
        { name: 'Battery and cables', note: 'Cleaned, tightened and tested before winter catches it.' },
      ],
    },
  ],
  toyota: {
    heading: 'Toyota and Lexus factory maintenance',
    body: [
      "Many newer Toyota and Lexus engines need a thin full synthetic oil, and the right grade matters. It's in the owner's manual. We follow the guide for your exact model, and our [Toyota and Lexus page](/toyota-lexus-repair/) covers the rest.",
    ],
  },
  faqs: [
    { q: 'How do I get the $44.99 price?', a: "Ask for it when you pay. The $44.99 conventional and $64.99 full synthetic prices are our current special. It covers up to 5 quarts, so if your engine takes more, we'll tell you before we start." },
    { q: 'What does the 3, 6, 9 and 12 month schedule mean?', a: "It's our checklist for each visit, by months or miles, whichever comes first. Quarterly visits cover fluids, lights, belts, hoses and tires. The yearly visit adds brakes, coolant, the cabin filter, steering, suspension and an alignment check." },
    { q: 'Will an oil change here affect my new car warranty?', a: "No. Federal law lets you have routine maintenance done at any shop, as long as it's on schedule with the correct oil and parts. Keep your receipts." },
  ],
  closing: "Due or past due? [Set up your oil change](/contact/), and remember to ask for the special at checkout.",
};

export default copy;
