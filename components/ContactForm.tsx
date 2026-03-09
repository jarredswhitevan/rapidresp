'use client';

import { FormEvent, useState } from 'react';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  companySize: '',
  message: '',
};

export function ContactForm() {
  const [data, setData] = useState(initialForm);
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    company: false,
    email: false,
    phone: false,
    companySize: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const errors: Partial<Record<keyof FormData, string>> = {
    name: data.name ? '' : 'Name is required.',
    company: data.company ? '' : 'Company is required.',
    email: /\S+@\S+\.\S+/.test(data.email) ? '' : 'Valid email is required.',
    phone: data.phone.length >= 10 ? '' : 'Valid phone is required.',
    companySize: data.companySize ? '' : 'Select company size.',
    message: data.message ? '' : 'Please share your goals.',
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, company: true, email: true, phone: true, companySize: true, message: true });
    if (!hasErrors) {
      setSubmitted(true);
      setData(initialForm);
    }
  };

  const fieldClass = (name: keyof FormData) =>
    `w-full rounded-lg border bg-black/30 px-4 py-3 text-sm outline-none transition ${
      touched[name] && errors[name] ? 'border-accent ring-1 ring-accent/50' : 'border-white/15 focus:border-white/40'
    }`;

  return (
    <section id="demo" className="py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Be the First Restoration Company to Respond</h2>
          <p className="mt-4 text-muted">
            If your team misses even one emergency call, that could be a lost job. Restoration Rapid Response helps
            you stay available 24/7.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#demo" className="rounded-full bg-accent px-5 py-2.5 font-semibold hover:brightness-110">Book a Demo</a>
            <a href="#demo" className="rounded-full border border-white/20 px-5 py-2.5 font-semibold hover:border-white/50">Talk to Sales</a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="card space-y-4" noValidate>
          <h3 className="text-xl font-semibold">Book Your Demo</h3>
          {submitted && <p className="rounded-lg border border-green-500/40 bg-green-500/10 p-3 text-sm">Thanks! Demo request captured (frontend demo only).</p>}
          {(
            [
              ['name', 'Name'],
              ['company', 'Company'],
              ['email', 'Email'],
              ['phone', 'Phone'],
            ] as [keyof FormData, string][]
          ).map(([name, label]) => (
            <label key={name} className="block">
              <span className="mb-1 block text-sm text-muted">{label}</span>
              <input
                type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
                value={data[name]}
                onChange={(e) => setData((d) => ({ ...d, [name]: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, [name]: true }))}
                className={fieldClass(name)}
                aria-invalid={Boolean(touched[name] && errors[name])}
              />
              {touched[name] && errors[name] && <span className="mt-1 block text-xs text-accent">{errors[name]}</span>}
            </label>
          ))}
          <label className="block">
            <span className="mb-1 block text-sm text-muted">Company Size</span>
            <select
              value={data.companySize}
              onChange={(e) => setData((d) => ({ ...d, companySize: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, companySize: true }))}
              className={fieldClass('companySize')}
            >
              <option value="">Select size</option>
              <option>1-5 employees</option>
              <option>6-20 employees</option>
              <option>21-50 employees</option>
              <option>50+ employees</option>
            </select>
            {touched.companySize && errors.companySize && <span className="mt-1 block text-xs text-accent">{errors.companySize}</span>}
          </label>
          <label className="block">
            <span className="mb-1 block text-sm text-muted">Message</span>
            <textarea
              rows={4}
              value={data.message}
              onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, message: true }))}
              className={fieldClass('message')}
            />
            {touched.message && errors.message && <span className="mt-1 block text-xs text-accent">{errors.message}</span>}
          </label>
          <button type="submit" className="w-full rounded-lg bg-accent px-4 py-3 font-semibold transition hover:brightness-110">
            Book a Demo
          </button>
        </form>
      </div>
    </section>
  );
}
