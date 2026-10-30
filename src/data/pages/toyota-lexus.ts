import type { PageCopy, Block, FAQItem, Table } from '../types';

// Route: /toyota-lexus-repair/

export interface ModelNote {
  name: string;
  note: string;
}

export interface ToyotaLexusCopy extends PageCopy {
  /** 2 opening paragraphs. Primary keyword in the first 100 words. */
  intro: string[];
  /** Why an independent Toyota specialist. */
  why: Block;
  models: {
    heading: string;
    toyotaHeading: string;
    toyota: ModelNote[];
    lexusHeading: string;
    lexus: ModelNote[];
    scionHeading: string;
    /** One short paragraph. */
    scion: string;
  };
  /** Block plus the hybrid checklist. */
  hybrid: Block & { items: ModelNote[] };
  /** Rendered in mono. Columns: ["Miles", "What's typically due"]. */
  intervals: Table & { heading: string; note: string };
  /** The page lists all 13 services automatically under this heading and sentence. */
  serviceLinks: { heading: string; intro: string };
  faqs: FAQItem[];
}

const copy: ToyotaLexusCopy = {
  title: 'Toyota & Lexus Repair in Rockland County | Toy Auto Center',
  description:
    "Toyota and Lexus repair in Rockland County from an independent shop in Blauvelt. Hybrid service, factory maintenance and OE-equivalent parts on Route 303.",
  h1: 'Toyota & Lexus Repair in Rockland County',

  intro: [
    "Toyota and Lexus repair in Rockland County is the core of what we do at Toy Auto Center. We've been fixing cars at 628 Route 303 in Blauvelt since 1976, and Toyotas, Lexus models and the occasional Scion come through our bays all the time. Camrys at 180,000 miles. Tacomas with salt on the frame. A Prius with a hybrid warning on the dash.",
    "You get dealer-level knowledge of these cars without the dealer's service lane. We pull the same OBD-II data, follow Toyota's maintenance schedules and fit OE or OE-equivalent parts. When the job is a recall or a factory warranty repair, we'll tell you to take it to the dealer, because that work costs you nothing there.",
  ],

  why: {
    heading: 'Why an independent shop for Toyota and Lexus repair',
    body: [
      "**Dealer-level knowledge.** Toyota builds cars in families. The same engines, the same hybrid system and the same maintenance logic show up across the Camry, Highlander, Sienna, ES and RX. Seeing them week after week means we know where a 3.5L V6 tends to weep coolant and which AWD models need rear differential fluid.",
      "**OE or OE-equivalent parts.** OE means original equipment: the part Toyota installs at the factory. OE-equivalent means a part built to the same spec, often by the same supplier. We tell you which one you're getting and why.",
      "**No service-advisor commission.** Nobody here earns a bonus for selling you a throttle body cleaning. If your car doesn't need something, we say so and move on.",
      "**You talk to the tech.** The person explaining your brake estimate is the one who measured the pads, or was standing next to them when they did. Ask anything you want.",
    ],
  },

  models: {
    heading: 'The Toyotas and Lexus models we see most',
    toyotaHeading: 'Toyota',
    toyota: [
      { name: 'Camry', note: 'Brakes, struts and motor mounts, plus scheduled maintenance on the 2.5L four-cylinder and the 3.5L V6.' },
      { name: 'Corolla', note: 'Mostly oil changes, brakes and tires; newer Corollas use a CVT, and its fluid condition is worth keeping an eye on.' },
      { name: 'RAV4', note: 'Brakes, wheel bearings and alignments, rear differential fluid on AWD models, and full hybrid service on the RAV4 Hybrid.' },
      { name: 'Highlander', note: 'Water pump and serpentine belt work on the V6, brakes on a heavy three-row SUV, and Highlander Hybrid service.' },
      { name: 'Tacoma', note: 'Frame and underbody rust checks after salty Rockland winters, leaf springs, and 4WD transfer case and differential fluids.' },
      { name: 'Tundra', note: 'Brakes and front-end parts on a big truck, differential fluid, and the secondary air injection system on some 5.7L V8 years.' },
      { name: 'Sienna', note: 'Power sliding door motors and cables, brakes for a loaded minivan, and the cooling system on the 3.5L V6.' },
      { name: 'Prius', note: 'Hybrid battery health checks, inverter coolant, the 12V auxiliary battery, and brakes that last a long time thanks to regen.' },
    ],
    lexusHeading: 'Lexus',
    lexus: [
      { name: 'ES', note: 'Built on the same bones as the Camry: brakes, suspension bushings, and V6 or hybrid maintenance.' },
      { name: 'RX', note: 'Close cousin of the Highlander: V6 water pump and belt work, AWD fluids, brakes and RX hybrid service.' },
      { name: 'NX', note: 'Related to the RAV4: brakes, alignments, the turbo four on the NX 200t and NX 300, and NX hybrid service.' },
      { name: 'IS', note: 'A rear or all-wheel-drive sport sedan: brakes, suspension, and intake valve carbon buildup on the direct-injected IS 250.' },
      { name: 'GX', note: 'A body-on-frame V8 SUV: rust checks, the rear height-control suspension on equipped models, and 4WD fluids.' },
    ],
    scionHeading: 'Scion',
    scion:
      "Scion was Toyota's younger brand from 2003 to 2016, and plenty are still on the road around here. The tC and xB run Toyota engines and Toyota parts, and the iM is a Toyota through and through. The FR-S was developed with Subaru and shares its engine with the BRZ, and the iA rides on a Mazda platform. We service every one of them, and parts for most are still easy to find.",
  },

  hybrid: {
    heading: 'Hybrid service for Prius, RAV4, Camry and Lexus hybrids',
    body: [
      "Toyota's hybrid system pairs a gas engine with two motor-generators, a high-voltage battery and an inverter, which converts the battery's DC power into the AC the motors run on. It's a reliable design, but it has its own maintenance list that an ordinary oil change skips right past.",
      "Hybrids also need a little extra care on routine jobs. On many models the electronically controlled brake system has to be put in service mode before anyone opens the hydraulics, or the pump can cycle with the system apart. We follow the procedure every time.",
    ],
    items: [
      { name: 'Hybrid battery health check', note: 'We read block voltages and battery temperatures from the hybrid control module to catch a weak section before it sets a warning light.' },
      { name: 'Inverter coolant', note: 'The inverter has its own cooling loop and its own electric pump. We check the level and the pump, and change the coolant on schedule.' },
      { name: 'e-CVT fluid', note: "The hybrid transaxle doesn't shift through gears like a regular automatic, but its fluid still ages. We check it and change it when it's due." },
      { name: 'Regen brake service', note: 'Regenerative braking does most of the stopping, so pads last, but calipers and slide pins can seize from light use. We clean, lube and test them.' },
      { name: '12V auxiliary battery', note: "A small 12V battery boots the hybrid computers. When it's weak, the car won't go into Ready mode, even with a healthy hybrid pack." },
      { name: 'Hybrid battery cooling fan and filter', note: 'A fan pulls cabin air across the hybrid battery. Dust and pet hair clog its intake, the pack runs hot and it ages faster. Cleaning it is a cheap fix.' },
    ],
  },

  intervals: {
    heading: 'Toyota maintenance intervals, in plain numbers',
    caption: 'Typical Toyota and Lexus maintenance by mileage',
    columns: ['Miles', "What's typically due"],
    rows: [
      ['5,000', 'Tire rotation and a visual check of brakes, fluids and leaks. Oil and filter on models and driving conditions that call for 5,000-mile changes.'],
      ['10,000', 'Oil and filter on most newer models running 0W-20 or 0W-16 synthetic, tire rotation, brake and wiper check.'],
      ['30,000', 'Engine air filter and cabin air filter, plus the 10,000-mile items. Inspect drive belt, hoses, brake lines and suspension.'],
      ['60,000', 'The 30,000-mile items again, brake fluid where the schedule calls for it, and differential and transfer case fluid on many trucks and AWD models.'],
      ['100,000', "First change of Toyota Super Long Life coolant on most models, plus the regular items. Iridium spark plugs on many models come due around 120,000."],
    ],
    note: "Follow your owner's manual and maintenance guide; intervals vary by model and year. Towing, short trips and dusty roads count as severe service and shorten some of these.",
  },

  serviceLinks: {
    heading: 'Every service we offer works on your Toyota or Lexus',
    intro: 'Nothing on our service list is off limits for a Toyota, Lexus or Scion. Here are all 13.',
  },

  faqs: [
    {
      q: 'Will using an independent shop void my Toyota warranty?',
      a: "No. The federal Magnuson-Moss Warranty Act says a manufacturer can't void your warranty just because someone other than the dealer did your maintenance. Use parts that meet Toyota's spec, stay on the schedule and keep your receipts. Our invoice lists the mileage, the work done and the parts used, which is the record you'd need. See how we handle [Toyota scheduled maintenance](/services/oil-change-maintenance/).",
    },
    {
      q: 'Do you handle recalls?',
      a: "No, and nobody should charge you for one. Recalls and factory software campaigns are done by the dealer, free. If we spot an open recall on your car, we'll tell you so you can book it there. You can also check any time by entering your VIN at nhtsa.gov/recalls.",
    },
    {
      q: 'Do you work on Toyota and Lexus hybrids?',
      a: "Yes. Prius, Camry Hybrid, RAV4 Hybrid, Highlander Hybrid and the Lexus hybrids all get the same care: hybrid battery health checks, inverter coolant, e-CVT fluid, brakes and the 12V battery. If your hybrid won't start or go into Ready mode, start with a [12V battery and charging test](/services/battery-electrical/).",
    },
    {
      q: 'Do you service Lexus models too?',
      a: "Yes. Under the leather, most Lexus models share engines, transmissions and hybrid systems with a Toyota sibling, so the ES, RX, NX, IS and GX are familiar ground. You get the same diagnosis and the same parts quality without the luxury-dealer service lane. For a side-by-side look, see [how we compare to a dealer](/dealer-alternative/).",
    },
    {
      q: 'What parts do you use on Toyotas?',
      a: "OE or OE-equivalent. For some parts, like certain sensors and hybrid components, genuine Toyota is the right call and we'll say so. When there's a real price difference between a genuine part and a quality equivalent, we show you both and let you choose. Brake work follows the same rule, covered on our [brake service page](/services/brake-repair/).",
    },
  ],
};

export default copy;
