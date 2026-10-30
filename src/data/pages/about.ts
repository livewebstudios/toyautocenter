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
        "Toy Auto Center has been family owned and operated since 1976, fixing cars at 628 Route 303 in Blauvelt. We're an independent shop and a New York State certified inspection station.",
        "Cars, trucks, SUVs and Jeeps, domestic and import. Our ASE-certified technicians handle everything from oil changes and [NYS inspections](/services/nys-inspection/) to brakes, engines and A/C.",
      ],
    },
    {
      heading: 'How an estimate works here',
      body: [
        "**We find the problem first.** You don't pay for guesswork or parts thrown at a problem.",
        '**You get it in writing.** Parts, labor and the total, before any work starts. Want photos of the worn parts? Just ask.',
        '**We sort urgent from can-wait.** You set the timing and the budget.',
        '**We call before going past the estimate.** Nothing gets added to your bill without a yes from you.',
      ],
    },
    {
      heading: 'Why so many Toyotas and Lexus models',
      body: [
        'Toyota and Lexus are our specialty, Scion too. These cars run well past 200,000 miles with on-time maintenance and someone who knows them, hybrids included.',
        "We still take every make, so the whole family's cars can come here. More on our [Toyota and Lexus page](/toyota-lexus-repair/).",
      ],
    },
    {
      heading: 'Jasper remanufactured transmissions',
      body: [
        "When repairing your transmission doesn't make sense, we install a Jasper remanufactured one instead. Each carries a **3 year / 100,000 mile parts and labor warranty**. Details on our [transmission repair page](/services/transmission-repair/).",
      ],
    },
    {
      heading: 'Part of Blauvelt and Rockland County',
      body: [
        'Most of our customers live close by: Blauvelt, Orangeburg, Tappan, Pearl River, the Nyacks, and Northvale and Norwood across the line. See every town on our [service area page](/service-area/).',
        'New to us? Stop by, call 845.365.3003 or text 201.394.8673.',
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
