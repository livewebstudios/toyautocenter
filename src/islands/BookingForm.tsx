// Appointment request. Server-rendered as a plain HTML form that posts to Formspree, so it works
// without JS. Once hydrated it validates inline, counts the message, and sends with fetch.
import { useEffect, useRef, useState, type FormEvent } from 'react';

interface Props {
  endpoint: string;
  next: string;
  services: string[];
  phone: string;
  text: string;
}

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'vehicle' | 'service', string>>;
const MAX = 600;

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

function validate(f: HTMLFormElement): Errors {
  const v = (n: string) => (f.elements.namedItem(n) as HTMLInputElement | null)?.value.trim() ?? '';
  const e: Errors = {};
  if (!v('name')) e.name = 'Add your name so we know who to ask for.';
  const digits = v('phone').replace(/\D/g, '');
  if (digits.length < 10) e.phone = 'Add a 10-digit phone number. We call or text to confirm.';
  if (v('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) e.email = 'That email looks incomplete.';
  if (!v('vehicle')) e.vehicle = 'Year, make and model helps us have the right parts ready.';
  if (!v('service')) e.service = 'Pick the closest match, or "Not sure".';
  return e;
}

export default function BookingForm({ endpoint, next, services, phone, text }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [min, setMin] = useState<string | undefined>(undefined);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => setMin(today()), []);

  const onSend = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const f = ev.currentTarget;
    const e = validate(f);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      (f.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      f.reset();
      setCount(0);
    } catch {
      setStatus('error');
    }
  };

  const err = (k: keyof Errors) =>
    errors[k] ? <span className="bf__err" id={`bf-${k}-err`}>{errors[k]}</span> : null;
  const aria = (k: keyof Errors) => ({ 'aria-invalid': errors[k] ? true : undefined, 'aria-describedby': errors[k] ? `bf-${k}-err` : undefined });

  return (
    <form ref={form} className="bf" action={endpoint} method="POST" onSubmit={onSend} noValidate data-booking>
      <input type="hidden" name="_subject" value="Appointment request from toyautocenter.net" />
      <input type="hidden" name="_next" value={next} />
      <div className="bf__hp" aria-hidden="true">
        <label>Leave this empty <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="bf__row">
        <div className="bf__field">
          <label htmlFor="bf-name">Name <span className="bf__req">required</span></label>
          <input id="bf-name" name="name" type="text" autoComplete="name" required {...aria('name')} />
          {err('name')}
        </div>
        <div className="bf__field">
          <label htmlFor="bf-phone">Phone <span className="bf__req">required</span></label>
          <input id="bf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required {...aria('phone')} />
          {err('phone')}
        </div>
      </div>

      <div className="bf__row">
        <div className="bf__field">
          <label htmlFor="bf-email">Email</label>
          <input id="bf-email" name="email" type="email" autoComplete="email" {...aria('email')} />
          {err('email')}
        </div>
        <div className="bf__field">
          <label htmlFor="bf-vehicle">Year / Make / Model <span className="bf__req">required</span></label>
          <input id="bf-vehicle" name="vehicle" type="text" placeholder="2019 Toyota RAV4" required {...aria('vehicle')} />
          {err('vehicle')}
        </div>
      </div>

      <div className="bf__field">
        <label htmlFor="bf-service">Service needed <span className="bf__req">required</span></label>
        <select id="bf-service" name="service" required defaultValue="" {...aria('service')}>
          <option value="" disabled>Choose one</option>
          <option>Not sure, it needs to be checked out</option>
          <option>NYS Inspection only</option>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
        {err('service')}
      </div>

      <div className="bf__row">
        <div className="bf__field">
          <label htmlFor="bf-day">Preferred day</label>
          <input id="bf-day" name="preferred_day" type="date" min={min} />
          <span className="bf__hint">Mon to Fri. Saturday by appointment.</span>
        </div>
        <div className="bf__field">
          <label htmlFor="bf-time">Preferred time</label>
          <select id="bf-time" name="preferred_time" defaultValue="Either">
            <option>AM</option>
            <option>PM</option>
            <option>Either</option>
          </select>
        </div>
      </div>

      <div className="bf__field">
        <label htmlFor="bf-msg">What's going on with the car?</label>
        <textarea id="bf-msg" name="message" rows={5} maxLength={MAX} aria-describedby="bf-count" onInput={(e) => setCount(e.currentTarget.value.length)} />
        <span className="bf__hint" id="bf-count">{count} / {MAX} characters</span>
      </div>

      <div className="bf__actions">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'SENDING' : 'SEND REQUEST'}
        </button>
        <p className="bf__fine">We call or text to confirm. Nothing is booked until you hear from us.</p>
      </div>

      <div className="bf__status" role="status" aria-live="polite">
        {status === 'sent' && <p className="bf__ok">Got it. We'll call or text to confirm your appointment.</p>}
        {status === 'error' && (
          <p className="bf__bad">That didn't go through. Call <a href={`tel:+1${phone.replace(/\D/g, '')}`}>{phone}</a> or text <a href={`sms:+1${text.replace(/\D/g, '')}`}>{text}</a>.</p>
        )}
      </div>
    </form>
  );
}
