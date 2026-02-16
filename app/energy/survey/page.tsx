'use client';

import React from 'react';
import Image from 'next/image';
import { SEO } from '@/src/components/SEO';
import { Section } from '@/src/components/Section';
import { H1, H2, Body } from '@/src/components/Typography';
import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function EnergySurveyPage() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-survey');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    postcode: '',
    buildings: '',
    message: '',
    company: '', // honeypot
  });

  return (
    <main className="min-h-screen">
      <SEO
        title="Book a Free Energy Survey | Unifi.id"
        description="Book a free, no-obligation energy survey with Unifi.id. Get an expert assessment, savings projections, and fully funded upgrade options."
      />

      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>
        <div className="relative z-10 w-full pt-24">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
                Book a Free Energy Survey
              </H1>
              <Body className="text-lg md:text-xl text-white/85">
                Tell us a little about your estate and we’ll arrange a free, no-obligation survey. You’ll get a clear view of savings potential and funded upgrade options.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <Card withImage={false} className="lg:col-span-2">
              <H2 className="text-2xl font-bold text-gray-900">Survey request form</H2>
              <Body className="text-gray-600">
                This goes to the Unifi.id energy team (separate from the general contact form).
              </Body>

              <form
                className="mt-6 grid md:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (form.company.trim()) return;

                  const subject = 'Energy Survey Request';
                  const body =
                    `Name: ${form.name}\n` +
                    `Email: ${form.email}\n` +
                    `Phone: ${form.phone}\n` +
                    `Organisation: ${form.organisation}\n` +
                    `Postcode: ${form.postcode}\n` +
                    `Number of buildings: ${form.buildings}\n\n` +
                    `Message:\n${form.message}`;

                  window.location.href =
                    'mailto:info@unifi.id?subject=' +
                    encodeURIComponent(subject) +
                    '&body=' +
                    encodeURIComponent(body);
                }}
              >
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
                  />
                </div>

                <Field label="Your name" value={form.name} onChange={(v) => setForm((p) => ({ ...p, name: v }))} />
                <Field label="Your email" type="email" value={form.email} onChange={(v) => setForm((p) => ({ ...p, email: v }))} />
                <Field label="Phone" value={form.phone} onChange={(v) => setForm((p) => ({ ...p, phone: v }))} />
                <Field label="Organisation" value={form.organisation} onChange={(v) => setForm((p) => ({ ...p, organisation: v }))} />
                <Field label="Postcode" value={form.postcode} onChange={(v) => setForm((p) => ({ ...p, postcode: v }))} />
                <Field label="Number of buildings" value={form.buildings} onChange={(v) => setForm((p) => ({ ...p, buildings: v }))} />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">What should we know?</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    rows={6}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
                    placeholder="e.g., building type, current issues, target savings, timelines…"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-unifi-dark text-white font-semibold hover:bg-black transition-colors"
                  >
                    Submit survey request
                  </button>
                  <ButtonLink href="/energy/contact" variant="secondary">
                    Back to Energy
                  </ButtonLink>
                </div>
              </form>
            </Card>

            <Card withImage={false} className="h-full">
              <H2 className="text-xl font-bold text-gray-900">What you’ll get</H2>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Assessment of energy efficiency opportunities</li>
                <li>Indicative savings projections</li>
                <li>Fully funded upgrade options (where applicable)</li>
                <li>Implementation timeline planning</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
      />
    </div>
  );
}
