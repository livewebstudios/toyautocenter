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
      a: "628 Route 303 in Blauvelt, NY 10913, 1 block off 303 on Birchwood Drive. If you're coming from Orangeburg or Tappan it's a short run north on 303. The map and directions are on our [contact page](/contact/).",
    },
    {
      q: 'Do you specialize in Toyotas?',
      a: "Yes. Toyota and Lexus are our specialty, and Scion too. We also work on every other make and model, domestic and import, so you can bring the whole family's cars to one place. Here's what that specialty looks like on our [Toyota and Lexus page](/toyota-lexus-repair/).",
    },
    {
      q: 'How often do I need a NYS inspection?',
      a: 'Once a year. New York requires an annual safety inspection, and most gas cars and light trucks get an OBD-II emissions check at the same visit. Your windshield sticker shows the month it runs out. We are a certified [NYS inspection station](/services/nys-inspection/) and do inspections every weekday.',
    },
    {
      q: 'Do I need an appointment for an inspection, and can I wait?',
      a: "Walk-ins are welcome during business hours, but call ahead and we'll tell you the wait. You're welcome to wait while we do it. For bigger repairs, plan on dropping the car off, and we'll call or text when it's ready.",
    },
    {
      q: 'What forms of payment do you accept?',
      a: 'We accept major credit cards, debit and cash. Call to confirm other methods before your visit.',
    },
    {
      q: 'Do you offer warranties on repairs?',
      a: "Yes. We stand behind our work, use quality parts, and if something we fixed isn't right, bring it back. Jasper remanufactured transmissions we install carry a 3 year / 100,000 mile parts and labor warranty. Ask about coverage on any specific repair when you get your estimate, or see the details on our [transmission service page](/services/transmission-repair/).",
    },
    {
      q: 'Can I text you?',
      a: "Yes. Text 201.394.8673 with your name, your car and what's going on, and we'll get back to you during business hours. It works for booking, quick questions and checking whether your car is ready.",
    },
  ],
};

export default copy;
