'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { SEO } from '@/src/components/SEO';
import { Shield, Zap, Building2 } from 'lucide-react';

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions | Smart Building & Fire Safety"
        description="Unifi.id brings together a suite of modular technologies designed to make your building safer, smarter, and more efficient. Explore FireGuard, InsureLink, and Cortex™."
      />
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Solutions
          </H1>
          <Body className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Unifi.id Solutions Hub brings together a suite of modular technologies designed to make your building safer, smarter, and more efficient. Each solution delivers immediate value — and when combined, forms a powerful ecosystem managed through LiveView and powered by Cortex™, our central intelligence layer.
          </Body>
          <ButtonLink href="/solutions/hub">Explore Solutions Hub</ButtonLink>
        </div>
      </Section>

      {/* Three-Track Cards */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
            Choose Your Path
          </H2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-primary">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Smart Building Solutions</H3>
              <Body className="text-gray-700 mb-4">
                Occupancy intelligence, access & security, and insights powered by Cortex™ and LiveView.
              </Body>
              <ButtonLink href="/solutions/hub" variant="outline" className="w-full">
                View Smart Building Solutions
              </ButtonLink>
            </Card>
            <Card className="border-t-4 border-red-600">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <H3 className="text-xl font-semibold text-gray-900 mb-2">FireGuard Platform</H3>
              <Body className="text-gray-700 mb-4">
                Real-time fire panel monitoring, evacuation intelligence, and audit-ready compliance.
              </Body>
              <ButtonLink href="/solutions/fireguard" variant="outline" className="w-full">
                Explore FireGuard
              </ButtonLink>
            </Card>
            <Card className="border-t-4 border-green-600">
              <Zap className="h-12 w-12 text-green-600 mb-4" />
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Energy Solutions</H3>
              <Body className="text-gray-700 mb-4">
                LED, HVAC, and solar upgrades with funding options and zero upfront capital.
              </Body>
              <ButtonLink href="/energy/hub" variant="outline" className="w-full">
                Explore Energy
              </ButtonLink>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
