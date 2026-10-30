import type { FAQItem } from '../types';

// General shop questions for /faq/ (the page also aggregates every FAQ from the service, town and page files).

export interface GeneralFaqCopy {
  general: FAQItem[];
}

const copy: GeneralFaqCopy = {
  general: [
    {
      q: 'What are your hours?',
      a: "Monday to Friday, 8:00 AM to 5:00 PM. Saturday is by appointment, so call 845.365.3003 or text 201.394.8673 to set one up. We're closed Sunday.",
    },
    {
      q: 'Where exactly is the shop?',
      a: "628 Route 303 in Blauvelt, NY 10913, one block off 303 on Birchwood Drive. Map and directions are on our [contact page](/contact/).",
    },
    {
      q: 'Do you specialize in Toyotas?',
      a: "Yes. Toyota, Lexus and Scion are our specialty, and we work on every other make too. More on our [Toyota and Lexus page](/toyota-lexus-repair/).",
    },
    {
      q: 'How often do I need a NYS inspection?',
      a: "Once a year. Safety and emissions are checked in the same visit, and your windshield sticker shows the month it runs out. We're a certified [NYS inspection station](/services/nys-inspection/).",
    },
    {
      q: 'Do I need an appointment for an inspection, and can I wait?',
      a: "Walk-ins are welcome. Call ahead and we'll tell you the wait. For bigger repairs, drop the car off and we'll text you when it's ready.",
    },
    {
      q: 'What forms of payment do you accept?',
      a: 'We accept major credit cards, debit and cash. Call to confirm other methods before your visit.',
    },
    {
      q: 'Do you offer warranties on repairs?',
      a: "Yes. We stand behind our work. If something we fixed isn't right, bring it back. Jasper transmissions carry a 3 year / 100,000 mile warranty. See our [transmission page](/services/transmission-repair/).",
    },
    {
      q: 'Can I text you?',
      a: "Yes. Text 201.394.8673 with your name, your car and what's going on. We'll get back to you during business hours.",
    },
  ],
};

export default copy;
