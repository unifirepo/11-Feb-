'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import Card from '@/src/components/Card';
import { ButtonLink } from '@/src/components/ButtonLink';
import { SEO } from '@/src/components/SEO';
import { Search, Wrench, Headphones } from 'lucide-react';

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Building Intelligence & Estate Management"
        description="Consulting, implementation, and support for Cortex™ and building intelligence. Tailored services to transform your estate into smarter, safer, greener spaces."
      />
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Our Services
          </H1>
          <Body className="text-lg md:text-xl text-gray-600 max-w-3xl">
            From initial discovery through to ongoing optimisation — we support your journey to smarter buildings. Our services are designed around Cortex™ and your specific estate challenges.
          </Body>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Service Offerings
          </H2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Consulting</H3>
              <Body className="text-gray-700 mb-4">
                Estate audits, technology roadmaps, and ROI modelling. We help you prioritise fire safety, occupancy intelligence, energy, and compliance investments with clear evidence.
              </Body>
              <ButtonLink href="/contact" variant="outline" className="mt-auto">
                Book a Consultation
              </ButtonLink>
            </Card>
            <Card>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</H3>
              <Body className="text-gray-700 mb-4">
                End-to-end deployment of Cortex™, FireGuard, and energy solutions. We integrate with your existing systems — BMS, fire panels, access control — and deliver a unified operating model.
              </Body>
              <ButtonLink href="/contact" variant="outline" className="mt-auto">
                Discuss Implementation
              </ButtonLink>
            </Card>
            <Card>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Support</H3>
              <Body className="text-gray-700 mb-4">
                Ongoing technical support, training, and optimisation. Our team ensures you get maximum value from Cortex™ with proactive monitoring and escalation routes when you need them.
              </Body>
              <ButtonLink href="/support" variant="outline" className="mt-auto">
                View Support Options
              </ButtonLink>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to transform your estate?</H2>
          <Body className="text-gray-700 mb-6">
            Whether you need a discovery workshop, full implementation, or ongoing support — we tailor our services to your portfolio and goals.
          </Body>
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </div>
      </Section>
    </>
  );
}
