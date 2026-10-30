import type { ServiceCopy } from '../types';

const copy: ServiceCopy = {
  slug: 'check-engine-diagnostics',
  title: 'Check Engine Diagnostics in Blauvelt, NY | Toy Auto Center',
  description: "Check engine light diagnostics in Blauvelt, NY. We read the codes, then test the sensors and wiring behind them, so you pay for the fix and not a guess.",
  h1: 'Check Engine Light Diagnostics in Blauvelt, NY',
  promise: 'We find the cause behind the light before anyone sells you a part.',
  intro: [
    'Your check engine light is one light for hundreds of possible problems. A code reader tells you which system raised its hand, not which part failed. Check engine light diagnostics is the work in between.',
    "We read the codes, then test the sensors, wiring and connections until the evidence points at one cause. Swapping parts until the light goes out gets expensive fast. We'd rather find it once.",
  ],
  symptomsHeading: "Light on? Here's what it's telling you",
  symptoms: [
    { feel: 'The check engine light is on and steady.', means: "A fault is stored. Not an emergency, but don't let it ride for months." },
    { feel: 'The check engine light is flashing.', means: 'A bad misfire that can overheat the catalytic converter. Ease off and get it in.' },
    { feel: 'The light came on a day or two after you got gas.', means: 'Often a gas cap that never clicked. Tighten it and give it a few days.' },
    { feel: 'Fuel mileage dropped for no clear reason.', means: 'Often a worn sensor or a thermostat stuck open.' },
    { feel: 'Inspection is due and the light is on.', means: "That's an emissions fail. Sort out the light before you go for the sticker." },
  ],
  checkHeading: 'What a real check engine diagnosis covers',
  checks: [
    'Stored and pending codes',
    'Snapshot data from when each code set',
    'Live sensor readings',
    'Emissions readiness status',
    'Wiring and connectors',
    'Vacuum and air leak testing',
    'Known issues for your model',
    'Road test to confirm the fix',
  ],
  fixHeading: 'Where the codes usually lead',
  fixes: [
    {
      title: 'Sensors',
      items: [
        { name: 'Oxygen sensors', note: 'Help the computer set fuel. A slow one hurts mileage and emissions.' },
        { name: 'Airflow sensor', note: 'Measures the air coming in. Dirt on it throws off fueling.' },
        { name: 'Crank and cam sensors', note: 'Report engine speed. A failing one can cause stalling or no start.' },
      ],
    },
    {
      title: 'Emissions and computer',
      items: [
        { name: 'Gas cap and vapor system', note: 'Traps fuel vapor. A leak can be as small as a cracked hose.' },
        { name: 'Catalytic converter', note: 'Replaced only after testing proves it, through our [exhaust work](/services/exhaust-air-intake/).' },
        { name: 'Engine computer', note: 'It rarely fails, so we prove everything around it first.' },
      ],
    },
  ],
  toyota: {
    heading: 'Toyota and Lexus warning lights',
    body: [
      'On a Toyota or Lexus, a light after a fill-up is often a loose gas cap or small vapor leak. Tighten the cap and bring it in if the light returns. Hybrid warnings need more than a basic code reader. See our [hybrid service page](/toyota-lexus-repair/).',
    ],
  },
  faqs: [
    { q: 'Why not just get the code read for free somewhere?', a: "You can, and it's a fair start. But the code names the system, not the part. One common code can come from a vacuum leak, a dirty sensor or a weak fuel pump. Testing picks the right one." },
    { q: 'Is it safe to drive with the check engine light on?', a: "If it's steady and the car drives normally, you can usually drive it to us. If it's flashing, drive gently and get it in soon. If the oil or temperature light comes on too, pull over." },
    { q: 'Will clearing the code get me through inspection?', a: "No. Clearing codes resets the self-tests the [NYS emissions inspection](/services/nys-inspection/) looks for, so the car can't pass until you've driven enough. If the fault is still there, the light comes back." },
  ],
  closing: "If the light is on and you're not sure how worried to be, [tell us what it's doing](/contact/) or call 845.365.3003.",
};

export default copy;
