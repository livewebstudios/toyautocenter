import type { PageCopy, Block } from '../types';

// Route: /privacy/

export interface PrivacyCopy extends PageCopy {
  /** e.g. "Last updated October 29, 2026" */
  lastUpdated: string;
  intro: string;
  sections: Block[];
}

const copy: PrivacyCopy = {
  title: 'Privacy | Toy Auto Center',
  description:
    'How Toy Auto Center in Blauvelt, NY handles what you send through our booking form, plus the analytics and hosting logs that keep this website running.',
  h1: 'Privacy',
  lastUpdated: 'Last updated October 29, 2026',
  intro:
    "This is the short, plain version of what this website collects, why, and what we do with it. We're a repair shop, not a data company, so there isn't much to tell.",

  sections: [
    {
      heading: 'What the booking form collects',
      body: [
        'When you send a request through our [appointment form](/contact/), it asks for your name, phone number, email, vehicle (year, make and model), the service you need, your preferred day and time, and an optional message.',
        'The form is processed by Formspree, an outside form service that turns your request into an email to the shop. Formspree stores and delivers it under its own privacy policy.',
      ],
    },
    {
      heading: 'How we use it',
      body: [
        'We use what you send for one thing: to schedule your appointment and to call, text or email you about your car. We do not sell it, rent it or share it with anyone for marketing.',
      ],
    },
    {
      heading: 'Analytics',
      body: [
        'This site uses Google Analytics 4 to count visits and see which pages people use. It collects anonymous usage stats (pages viewed, rough location, device and browser type) and sets cookies in your browser to tell new visits from return visits. We use it to see what is working on the site, not to identify you.',
        "You can block or delete these cookies in your browser settings, or install Google's opt-out add-on, available at tools.google.com/dlpage/gaoptout, which stops Google Analytics on every site you visit.",
      ],
    },
    {
      heading: 'Hosting logs',
      body: [
        'The site is hosted on Netlify. Like any web host, Netlify keeps standard server logs, such as IP address, browser type, the page requested and the time, for security and troubleshooting. We do not use those logs to track individual visitors.',
      ],
    },
    {
      heading: 'Questions or deletion requests',
      body: [
        'Want to know what we have from you, or want it deleted? Email info@toyautocenter.net or call the shop at 845.365.3003. We will take care of it.',
        'Toy Auto Center, 628 Route 303, Blauvelt, NY 10913.',
      ],
    },
  ],
};

export default copy;
