'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { SEO } from '@/src/components/SEO';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';
import { CheckCircle, Building2, Factory, Users, School, Leaf, Shield } from 'lucide-react';

export default function EnergyClub() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-club');

  return (
    <>
      <SEO
        title="Unifi.id Energy Club | Smarter Procurement. Lower Risk."
        description="Launching 2025: Unifi.id Energy - our procurement club delivering aggregated buying power, supplier transparency, and real client savings."
      />
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Energy Club hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full text-center">
            <H1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
              Energy Procurement. Smarter. Lower Risk. Fully Aligned.
            </H1>
            <Body className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto animate-fade-in-up">
              Launching 2025: Unifi.id Energy - our procurement club delivering aggregated buying power, supplier transparency, and real client savings.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Unifi.id Energy Different</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Collective Buying Power", desc: "Collective corporate buying power without full aggregation lock-in." },
              { title: "Transparent Pricing", desc: "Fully transparent market pricing - no broker conflicts." },
              { title: "Direct Supplier Contracts", desc: "Suppliers contract directly with clients - no intermediary mark-ups." },
              { title: "Risk-Adjusted Structures", desc: "Risk-adjusted contract structures designed for long-term energy stability." },
              { title: "Exclusive Client Access", desc: "Access initially available for Unifi.id commercial clients." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex gap-4 animate-fade-in-up">
                <CheckCircle className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                <div>
                  <H3 className="font-bold text-gray-900 mb-2">{item.title}</H3>
                  <Body className="text-gray-600 text-sm">{item.desc}</Body>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <H2 className="text-2xl font-bold text-gray-900 mb-6">Immediate Corporate Focus</H2>
              <ul className="space-y-4">
                {[
                  { icon: Building2, label: "Multi-site commercial estates" },
                  { icon: Factory, label: "Manufacturing & Industrial clients" },
                  { icon: Users, label: "Facilities management groups" },
                  { icon: School, label: "Schools" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex gap-3 items-center animate-fade-in-up">
                      <Icon className="w-8 h-8 text-unifi-blue flex-shrink-0" />
                      <Body>{item.label}</Body>
                    </li>
                  );
                })}
              </ul>
              <Body className="mt-4 text-gray-600 italic">Expand into education and public sector phases following corporate rollout.</Body>
            </div>
            <div>
              <H2 className="text-2xl font-bold text-gray-900 mb-6">Next Phase</H2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Leaf className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                  <div>
                    <H3 className="font-bold text-gray-900 mb-1">ESG-aligned purchasing</H3>
                    <Body className="text-gray-600 text-sm">ESG-aligned purchasing options and flexible renewable content blocks.</Body>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Shield className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                  <div>
                    <H3 className="font-bold text-gray-900 mb-1">Contract portability</H3>
                    <Body className="text-gray-600 text-sm">Full contract portability for large occupiers.</Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Register Your Interest</H2>
          <Body className="mb-8 text-gray-600">
            Be the first to know when the Unifi.id Energy Club launches for corporate clients. Contact our energy team to learn more.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/energy/contact">Register Interest</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
