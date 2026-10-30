import type { ServiceCopy } from '../types';

const C = 'Check';

const copy: ServiceCopy = {
  slug: 'oil-change-maintenance',
  title: 'Oil Change & Maintenance in Blauvelt, NY | Toy Auto Center',
  description: "Oil change in Blauvelt, NY: full service for $44.99 conventional or $64.99 full synthetic (current special), plus scheduled maintenance on Route 303.",
  h1: 'Oil Change & Maintenance in Blauvelt, NY',
  promise: 'A full service oil change, the checks that ride along with it, and maintenance timed to your mileage.',
  intro: [
    "An oil change at Toy Auto Center is a full service oil change, not a drain and go. Fresh oil and a new filter go in, and while the car is up on the lift, we look over the fluids, belts, brakes and tires, so small problems get caught while they're still small.",
    "The current special is **$44.99 conventional** or **$64.99 full synthetic**. Ask for the discount when you pay. That's the only time we can apply it. The fine print is on our [monthly deals page](/deals/).",
    "Past the oil, we work from a simple check schedule at 3, 6, 9 and 12 months. On newer cars, we follow the factory maintenance guide that came with your vehicle.",
  ],
  symptomsHeading: 'Overdue? Your car usually drops hints',
  symptoms: [
    { feel: 'The oil light or a wrench icon came on.', means: "The wrench is a maintenance reminder. A red oil can means low oil pressure: pull over and shut the engine off." },
    { feel: 'The dipstick reads low, or the oil is black and gritty.', means: 'Overdue, or the engine is burning or leaking oil. Either way, it needs a look.' },
    { feel: 'You smell hot oil after a drive.', means: 'Oil is dripping onto the exhaust, often from a valve cover gasket or a filter that worked loose.' },
    { feel: 'There are spots on the driveway.', means: 'Brown is usually oil. Red can be transmission or power steering fluid. Green, orange or pink is usually coolant.' },
    { feel: 'The engine ticks for a few seconds at a cold start.', means: "Low or worn-out oil isn't reaching the top of the engine fast enough." },
    { feel: 'The reminder sticker passed its mileage weeks ago.', means: 'Oil breaks down with time as well as miles, so short-trip cars count too.' },
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
      title: 'Fluids',
      items: [
        { name: 'Transmission fluid service', note: 'Fresh fluid keeps shifts smooth and protects clutches inside the transmission.' },
        { name: 'Coolant (antifreeze)', note: 'Old coolant loses its corrosion protection long before it loses its color.' },
        { name: 'Brake fluid', note: 'It absorbs moisture over time, which lowers its boiling point.' },
      ],
    },
    {
      title: 'Filters and wear items',
      items: [
        { name: 'Engine air filter', note: 'A clogged one makes the engine work harder for the same power.' },
        { name: 'Cabin air filter', note: 'This filters the air you breathe inside the car, and a dirty one weakens airflow from the vents.' },
        { name: 'Wiper blades', note: 'Replaced when they streak, chatter or tear.' },
        { name: 'Belts and hoses', note: "Cracked or glazed rubber gets flagged early, and our [belt, hose and filter work](/services/belts-hoses-filters/) covers the replacement." },
      ],
    },
    {
      title: 'Under the car',
      items: [
        { name: 'Chassis lubrication', note: 'Grease fittings on suspension and steering joints, where your vehicle has them.' },
        { name: 'Battery and cables', note: 'Terminals cleaned and tightened, battery tested before winter catches it.' },
        { name: 'Tire inflation and condition', note: 'Pressure set to the door placard, tread and sidewalls looked over.' },
      ],
    },
  ],
  table: {
    caption: 'Our check schedule: what we look at, by months or miles, whichever comes first',
    columns: ['Item', '3 mo / 3k', '6 mo / 6k', '9 mo / 9k', '12 mo / 12k'],
    rows: [
      ['Automatic transmission fluid', C, C, C, C],
      ['Battery and cables', C, C, C, C],
      ['Belts', C, C, C, C],
      ['Brakes', '', '', '', C],
      ['Cabin air filter', '', '', '', C],
      ['Chassis lubrication', '', C, '', C],
      ['Coolant (antifreeze)', '', '', '', C],
      ['Dashboard indicator lights', C, C, C, C],
      ['Engine air filter', C, C, C, C],
      ['Engine oil', C, C, C, C],
      ['Exhaust', C, C, C, C],
      ['Hoses', C, C, C, C],
      ['Lights', C, C, C, C],
      ['Power steering fluid', C, C, C, C],
      ['Steering and suspension', '', '', '', C],
      ['Tire inflation and condition', C, C, C, C],
      ['Wheel alignment', '', '', '', C],
      ['Windshield washer fluid', C, C, C, C],
      ['Wiper blades', '', C, '', C],
    ],
  },
  techie: {
    heading: 'Conventional vs. full synthetic',
    body: [
      "Conventional oil is refined from crude. Full synthetic is built from more uniform base stocks, so it flows faster at a cold start, resists breaking down under heat, and holds its viscosity longer between changes. The label describes viscosity: in 0W-20, the 0W is how it behaves cold (W for winter) and the 20 is how thick it stays at operating temperature. If your owner's manual calls for synthetic, use synthetic. If it calls for conventional, synthetic is an upgrade, not a requirement. A lot of engine wear happens in the first seconds after a cold start, and that is where a low cold rating earns its keep.",
    ],
  },
  toyota: {
    heading: 'Toyota and Lexus factory maintenance',
    body: [
      "Many late-model Toyota and Lexus engines are designed for 0W-20 or even 0W-16 full synthetic. Those thin oils are part of how the engine meets its fuel economy and emissions targets, so the right grade matters. It's listed in the owner's manual and often printed on the oil filler cap.",
      "Many current Toyotas call for an oil change every 10,000 miles or 12 months on synthetic, with tire rotations and inspections at 5,000-mile steps in between. Short trips, towing, dusty roads and long idling count as severe service and shorten that. We follow the maintenance guide for your exact model and year, and our [Toyota and Lexus specialist page](/toyota-lexus-repair/) covers the rest of what we do for those owners.",
    ],
  },
  faqs: [
    { q: 'How do I get the $44.99 price?', a: "Ask for it when you pay. The $44.99 conventional and $64.99 full synthetic prices are our current special, and the discount only applies if you mention it at the register. The special covers up to 5 quarts, so if your engine takes more, we'll tell you before we start." },
    { q: 'Will an oil change here affect my new car warranty?', a: "No. Federal law lets you have routine maintenance done at any shop, as long as it's done on schedule with the correct oil and parts. Keep receipts showing the date, mileage and oil used." },
    { q: 'How often should I change my oil?', a: "Go by your owner's manual, not an old rule of thumb. Older engines on conventional oil were often set up for 3,000 to 5,000 miles, while many newer engines on synthetic run 7,500 to 10,000. Short trips, towing and lots of idling pull that number back down." },
    { q: 'What does the 3, 6, 9 and 12 month schedule mean?', a: "It's our checklist for each visit, by months or miles, whichever comes first. The quarterly visits cover fluids, lights, belts, hoses and tires. The yearly visit adds brakes, coolant, the cabin air filter, steering and suspension, and an alignment check." },
    { q: 'Do you reset the maintenance reminder?', a: "Yes. When the service is done, we reset the oil life or maintenance reminder so it counts from the right mileage." },
  ],
  closing: "Due or past due? [Set up your oil change](/contact/), and remember to ask for the special at checkout.",
};

export default copy;
