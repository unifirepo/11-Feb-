'use client';
import { H1, H2, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import Image from 'next/image';
import { SEO } from '@/src/components/SEO';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function TheEnergyTrap() {
  const heroImage = pickUnifiPlaceholder('hero', 'energy-trap');

  return (
    <>
      <SEO
        title="The Energy Trap | Why Energy Prices Remain High"
        description="A research paper on why energy prices are set to remain high and what organisations can do to mitigate the impact."
      />
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="The Energy Trap hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-unifi-blue/10" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 w-full text-left">
            <div className="mb-6 animate-fade-in-up" />
            <H1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight animate-fade-in-up">
              The Energy Trap
            </H1>
            <Body className="text-lg md:text-xl text-white/85 max-w-3xl animate-fade-in-up">
              A research paper on why energy prices are set to remain high and what organisations can do to mitigate the impact.
            </Body>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Research Paper Coming Soon</H2>
          <Body className="mb-8 text-gray-600">
            Our analysis of the long-term energy market trends is being finalized. Please check back soon to download the full research paper.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/energy/contact">Contact Energy Team</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
