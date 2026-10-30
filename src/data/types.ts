// Shared copy types. Copy strings support two inline marks, rendered by src/lib/inline.ts:
//   [anchor text](/services/brake-repair/)  internal link (root-style path, made relative at render)
//   **bold**
// No other markdown. No em or en dashes anywhere.

export interface FAQItem {
  q: string;
  a: string;
}

export interface Symptom {
  /** What the driver experiences, plain English. */
  feel: string;
  /** One line: what it usually means. */
  means: string;
}

export interface FixGroup {
  title: string;
  items: { name: string; note: string }[];
}

export interface Block {
  heading: string;
  body: string[];
}

export interface Table {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface ServiceCopy {
  slug: string;
  /** <title>, about 60 chars: "{Service} in Blauvelt, NY | Toy Auto Center" */
  title: string;
  /** 140 to 155 chars, unique, contains the primary keyword and Blauvelt or Rockland County. */
  description: string;
  /** "Brake Repair in Blauvelt, NY" */
  h1: string;
  /** One sentence under the H1. */
  promise: string;
  /** 2 or 3 opening paragraphs. Primary keyword in the first 100 words. */
  intro: string[];
  symptomsHeading: string;
  symptoms: Symptom[];
  checkHeading: string;
  checkIntro?: string;
  /** Short readout lines, rendered in mono. */
  checks: string[];
  fixHeading: string;
  fixes: FixGroup[];
  table?: Table;
  /** The mono-headed mist card for people who want to know how it works. */
  techie: Block;
  /** Toyota / Lexus specific note, where relevant. */
  toyota?: Block;
  /** Extra sections (e.g. the Jasper remanufacturing detail). */
  extra?: Block[];
  faqs: FAQItem[];
  /** Closing paragraph above the CTA band. */
  closing: string;
}

export interface TownCopy {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  route: {
    heading: string;
    /** e.g. "About 6 minutes" */
    driveTime: string;
    steps: string[];
    body: string[];
  };
  sections: Block[];
  inspectionNote: Block;
  /** Exactly 3 service slugs from src/data/services.ts. */
  serviceLinks: string[];
  faqs: FAQItem[];
}

export interface PageCopy {
  title: string;
  description: string;
  h1: string;
}
