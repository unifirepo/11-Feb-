'use client';

import React from 'react';
import Image from 'next/image';
import { SEO } from '@/src/components/SEO';
import { Section } from '@/src/components/Section';
import { H1, H2, Body } from '@/src/components/Typography';
import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function EnergyTeamContactPage() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-team');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // honeypot
  });

  return (
    <main className="min-h-screen">
      <SEO
        title="Contact the Energy Team | Unifi.id"
        description="Contact the Unifi.id energy team for energy efficiency consultations, funding guidance, and implementation planning."
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
                Contact the Energy Team
              </H1>
              <Body className="text-lg md:text-xl text-white/85">
                Have questions about energy efficiency, funding options, or implementation planning? Send us a message here (separate from the general contact form).
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
              <H2 className="text-2xl font-bold text-gray-900">Energy team message</H2>
              <Body className="text-gray-600">We’ll route this directly to the energy specialists.</Body>

              <form
                className="mt-6 grid md:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (form.company.trim()) return;

                  const subject = form.subject || 'Energy team enquiry';
                  const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

                  window.location.href =
                    'mailto:info@unifi.id?subject=' +
                    encodeURIComponent('[Energy] ' + subject) +
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
                <Field label="Subject" value={form.subject} onChange={(v) => setForm((p) => ({ ...p, subject: v }))} />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    rows={6}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-unifi-dark text-white font-semibold hover:bg-black transition-colors"
                  >
                    Send message
                  </button>
                  <ButtonLink href="/energy/contact" variant="secondary">
                    Back to Energy
                  </ButtonLink>
                </div>
              </form>
            </Card>

            <Card withImage={false} className="h-full">
              <H2 className="text-xl font-bold text-gray-900">Common topics</H2>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Energy efficiency consultations</li>
                <li>Funding options guidance</li>
                <li>Implementation planning</li>
                <li>Custom solution development</li>
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
