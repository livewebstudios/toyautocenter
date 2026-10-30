import type { PageCopy, Block } from '../types';

// Route: /about/

export interface AboutCopy extends PageCopy {
  /** 5 sections: the shop, how an estimate works, Toyota/Lexus focus, Jasper, community. */
  sections: Block[];
  pledgeHeading: string;
  /** 4 items. */
  pledge: string[];
}

const copy: AboutCopy = {
  title: 'About Our Family-Owned Shop in Blauvelt, NY | Toy Auto Center',
  description:
    'Family-owned auto repair in Blauvelt since 1976. Toyota and Lexus focus, written estimates, Jasper transmissions and straight answers on Route 303.',
  h1: 'A Family-Owned Shop on Route 303 Since 1976',

  sections: [
    {
      heading: 'Family-owned auto repair in Blauvelt',
      body: [
        "Toy Auto Center of NY has been family owned and operated since 1976, fixing cars on Route 303 in Blauvelt. We're an independent auto repair shop and a New York State Certified Motor Vehicle Inspection Station at 628 Route 303, tucked one block off 303 on Birchwood Drive.",
        "We work on cars, trucks, SUVs and Jeeps, domestic and import. Our ASE-certified technicians handle everything from oil changes and [NYS inspections](/services/nys-inspection/) to engine diagnostics, brakes, steering and A/C. The goal is simple: find the real cause, fix it right and explain it in plain English.",
      ],
    },
    {
      heading: 'How an estimate works here',
      body: [
        "**We diagnose first.** Before we price a repair, we find out what's actually wrong. That can mean reading trouble codes and freeze frame data over OBD-II (a snapshot of what the engine was doing when the fault set), a road test, or a look at it on the lift. You don't pay for guesswork or parts thrown at a problem.",
        '**You get a written estimate.** It lists the parts, the labor and the total before any wrench turns. If you want photos of the worn parts, we can send them, so you see what we saw.',
        "**We sort urgent from can-wait.** Brakes at 2 millimeters are urgent. A slightly seeping valve cover gasket usually isn't. We tell you which is which, and you set the timing and the budget.",
        "**We call before going past the estimate.** If we open something up and find more, we stop and call you. Nothing gets added to your bill without a yes from you.",
      ],
    },
    {
      heading: 'Why so many Toyotas and Lexus models',
      body: [
        "Toyota and Lexus are our specialty, with Scion right alongside them. Many of these cars run well past 200,000 miles, and they get there with on-time maintenance and someone who knows their habits: the V6 water pumps, the AWD differential fluid, the hybrid battery cooling fan nobody remembers to clean.",
        "That includes hybrids. A Prius, Camry Hybrid, RAV4 Hybrid or Lexus hybrid gets a hybrid battery health check, inverter coolant service and a look at the 12V auxiliary battery, along with everything a gas-only car gets.",
        "We still take every make, so the rest of the family's cars can come here too. See what we do for these cars on our [Toyota and Lexus repair page](/toyota-lexus-repair/).",
      ],
    },
    {
      heading: 'Jasper remanufactured transmissions',
      body: [
        "When a transmission fails, we diagnose it and repair it if that makes sense. When repairing yours isn't cost-effective, we install a Jasper remanufactured unit instead. Jasper rebuilds transmissions to exacting tolerances, replaces the wear parts with new ones, and tests its units before they ship.",
        "Every Jasper remanufactured transmission we install carries a **3 year / 100,000 mile parts and labor warranty**. Details are on our [transmission repair page](/services/transmission-repair/).",
      ],
    },
    {
      heading: 'Part of Blauvelt, Orangetown and Rockland County',
      body: [
        "We're a neighborhood shop in the Town of Orangetown, and most of our customers live close by: Blauvelt, Orangeburg, Tappan, Pearl River, the Nyacks, and across the line in Northvale and Norwood, New Jersey. We're also minutes from the Palisades Parkway and the Thruway, which makes us an easy stop for commuters. When the inspection sticker comes due, we're right on 303.",
        "If you're new to the area, or just new to us, stop by, call 845.365.3003 or text 201.394.8673. See the full list of towns on our [service area page](/service-area/).",
      ],
    },
  ],

  pledgeHeading: 'Our service pledge',
  pledge: [
    'We recommend what your car needs, and nothing it does not.',
    'We explain your options in plain language, with a price on each.',
    'We respect your time: realistic scheduling, and a call or text when your car is ready.',
    "We stand behind our work. If something isn't right, bring it back and we'll make it right.",
  ],
};

export default copy;
