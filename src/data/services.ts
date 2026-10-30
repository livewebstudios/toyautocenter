// The 13 services. Order = numbering. Copy for each lives in src/data/services/<slug>.ts.
export type ServiceGroup = 'Keep It Legal' | 'Stop & Steer' | 'Power & Drive' | 'Climate & Current';

export type IconName =
  | 'inspection' | 'oil' | 'brake' | 'steering' | 'tire' | 'diagnostic' | 'engine'
  | 'transmission' | 'belt' | 'fuel' | 'fan' | 'battery' | 'exhaust';

export type HeroImage =
  | 'hero-shop-bay-blauvelt' | 'obd2-diagnostic-scan-tool' | 'brake-rotor-caliper-replacement'
  | 'nys-inspection-underbody-check' | 'ac-manifold-gauge-service' | 'serpentine-belt-replacement'
  | 'wheel-alignment-rack-strut' | 'mechanic-hands-wrench-workbench' | 'transmission-service-fluid-drain';

export interface Service {
  n: number;
  slug: string;
  name: string;
  /** Short label for tight spots (menus, tray). */
  short: string;
  group: ServiceGroup;
  /** Six-ish words, what the driver notices. Used in the mega menu and Parts Tray. */
  symptom: string;
  icon: IconName;
  /** Photo for the hero frame, or null to use the large icon over the Harness. */
  image: HeroImage | null;
  /** object-position for the 4:5 crop. */
  focus?: string;
  imageAlt?: string;
  related: [string, string, string];
  toyotaNote: boolean;
  /** schema.org serviceType */
  serviceType: string;
}

export const groups: ServiceGroup[] = ['Keep It Legal', 'Stop & Steer', 'Power & Drive', 'Climate & Current'];

export const services: Service[] = [
  { n: 1, slug: 'nys-inspection', name: 'NYS Inspection', short: 'NYS Inspection', group: 'Keep It Legal', symptom: 'Sticker due, or about to be', icon: 'inspection', image: 'nys-inspection-underbody-check', imageAlt: 'Technician shining a flashlight on a rusted rear suspension arm during a NYS inspection', related: ['oil-change-maintenance', 'brake-repair', 'exhaust-air-intake'], toyotaNote: false, serviceType: 'New York State vehicle safety and emissions inspection' },
  { n: 2, slug: 'oil-change-maintenance', name: 'Oil Change & Scheduled Maintenance', short: 'Oil & Maintenance', group: 'Keep It Legal', symptom: 'Oil light on, or mileage due', icon: 'oil', image: null, related: ['belts-hoses-filters', 'nys-inspection', 'battery-electrical'], toyotaNote: true, serviceType: 'Oil change and factory scheduled maintenance' },
  { n: 3, slug: 'brake-repair', name: 'Brake Repair', short: 'Brakes', group: 'Stop & Steer', symptom: 'Grinding or squealing when you stop', icon: 'brake', image: 'brake-rotor-caliper-replacement', imageAlt: 'New brake rotor and caliper mounted on a sedan raised on a lift in the service bay', related: ['wheel-alignment-tires', 'steering-suspension', 'nys-inspection'], toyotaNote: true, serviceType: 'Brake inspection and repair' },
  { n: 4, slug: 'steering-suspension', name: 'Steering & Suspension', short: 'Steering & Suspension', group: 'Stop & Steer', symptom: 'Clunks over bumps, loose steering', icon: 'steering', image: 'wheel-alignment-rack-strut', focus: '78% 40%', imageAlt: 'Blue coilover strut and lower control arm behind the front wheel of a car on an alignment rack', related: ['wheel-alignment-tires', 'brake-repair', 'check-engine-diagnostics'], toyotaNote: false, serviceType: 'Steering and suspension repair' },
  { n: 5, slug: 'wheel-alignment-tires', name: 'Wheel Alignment & Tires', short: 'Alignment & Tires', group: 'Stop & Steer', symptom: 'Pulls to one side, uneven wear', icon: 'tire', image: 'wheel-alignment-rack-strut', focus: '40% 70%', imageAlt: 'Sedan on a scissor alignment rack with wheel targets clamped to the tires under purple shop light', related: ['steering-suspension', 'brake-repair', 'oil-change-maintenance'], toyotaNote: false, serviceType: 'Wheel alignment, tire rotation, balancing and replacement' },
  { n: 6, slug: 'check-engine-diagnostics', name: 'Check Engine & Diagnostics', short: 'Diagnostics', group: 'Power & Drive', symptom: 'Check engine light is on', icon: 'diagnostic', image: 'obd2-diagnostic-scan-tool', imageAlt: 'Gloved hands holding an OBD-II scan tool plugged into the diagnostic port under a dashboard', related: ['engine-repair', 'fuel-system', 'battery-electrical'], toyotaNote: true, serviceType: 'Check engine light and computer diagnostics' },
  { n: 7, slug: 'engine-repair', name: 'Engine Repair', short: 'Engine', group: 'Power & Drive', symptom: 'Rough idle, misfire, lost power', icon: 'engine', image: null, related: ['check-engine-diagnostics', 'belts-hoses-filters', 'transmission-repair'], toyotaNote: true, serviceType: 'Engine and powertrain repair' },
  { n: 8, slug: 'transmission-repair', name: 'Transmission Repair', short: 'Transmission', group: 'Power & Drive', symptom: 'Slipping, flaring or harsh shifts', icon: 'transmission', image: 'transmission-service-fluid-drain', imageAlt: 'Transmission on a jack with red fluid draining into a pan beneath a raised pickup', related: ['engine-repair', 'check-engine-diagnostics', 'oil-change-maintenance'], toyotaNote: true, serviceType: 'Transmission repair and Jasper remanufactured transmission installation' },
  { n: 9, slug: 'belts-hoses-filters', name: 'Belts, Hoses & Filters', short: 'Belts & Hoses', group: 'Power & Drive', symptom: 'Squeal at startup, coolant drips', icon: 'belt', image: 'serpentine-belt-replacement', imageAlt: 'Gloved hands routing a new serpentine belt around the alternator pulley, cracked old belt on the fender cover', related: ['oil-change-maintenance', 'engine-repair', 'ac-heating-repair'], toyotaNote: true, serviceType: 'Belt, hose and filter replacement' },
  { n: 10, slug: 'fuel-system', name: 'Fuel System', short: 'Fuel System', group: 'Power & Drive', symptom: 'Hard starts, fuel smell, bad mileage', icon: 'fuel', image: null, related: ['check-engine-diagnostics', 'engine-repair', 'exhaust-air-intake'], toyotaNote: false, serviceType: 'Fuel injection, fuel pump and fuel filter service' },
  { n: 11, slug: 'ac-heating-repair', name: 'A/C & Heating', short: 'A/C & Heat', group: 'Climate & Current', symptom: 'Warm air from the vents', icon: 'fan', image: 'ac-manifold-gauge-service', imageAlt: 'Red and blue A/C manifold gauges connected to the service ports of an open engine bay', related: ['belts-hoses-filters', 'battery-electrical', 'engine-repair'], toyotaNote: true, serviceType: 'Air conditioning and heating repair' },
  { n: 12, slug: 'battery-electrical', name: 'Batteries & Electrical', short: 'Battery & Electrical', group: 'Climate & Current', symptom: 'Slow crank, dim lights, no start', icon: 'battery', image: null, related: ['check-engine-diagnostics', 'ac-heating-repair', 'fuel-system'], toyotaNote: true, serviceType: 'Battery, charging and electrical system repair' },
  { n: 13, slug: 'exhaust-air-intake', name: 'Exhaust & Air Intake', short: 'Exhaust & Intake', group: 'Climate & Current', symptom: 'Louder than it used to be', icon: 'exhaust', image: null, related: ['nys-inspection', 'check-engine-diagnostics', 'fuel-system'], toyotaNote: false, serviceType: 'Exhaust, catalytic converter and air intake repair' },
];

export const serviceBySlug = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
};

export const pad = (n: number) => String(n).padStart(2, '0');
