'use client';

import { useState } from 'react';
import { H1, H2 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { SEO } from '@/src/components/SEO';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen">
      <SEO
        title="Book a Demo | Unifi.id"
        description="Request a personalised demo of Cortex™. We'll follow up to understand your estate, goals, and timelines."
      />

      <Section className="relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={pickUnifiPlaceholder('hero', 'book-demo-hero')}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/10 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left w-full pt-24">
          <H1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Demo</H1>
          <p className="text-lg md:text-xl text-white/85">
            Share a few details and we’ll get back to arrange a tailored walkthrough.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <H2 className="text-2xl font-bold text-gray-900 mb-6">Demo request form</H2>

            {submitted ? (
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <p className="font-semibold text-green-900 mb-1">Request received.</p>
                <p className="text-green-900/80">
                  Thanks — we’ll be in touch shortly to schedule your demo.
                </p>
                <div className="mt-4">
                  <ButtonLink href="/" variant="secondary">Back to home</ButtonLink>
                </div>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organisation</label>
                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Company / Council / Trust"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input
                    name="role"
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Estates Director / Facilities / Finance / ESG"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What do you want to see?</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="A quick overview of Cortex, FireGuard, occupancy intelligence, energy funding…"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:opacity-90 transition"
                  >
                    Submit request
                  </button>

                  <ButtonLink href="/contact" variant="secondary" className="justify-center">
                    Back to contact
                  </ButtonLink>
                </div>
</form>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
