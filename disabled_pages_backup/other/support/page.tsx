'use client';
import { H1, H2, H3, Body } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { SEO } from '@/src/components/SEO';
import { Mail, Phone, AlertCircle } from 'lucide-react';

export default function Support() {
  return (
    <>
      <SEO
        title="Support | Help with Cortex™ & Building Intelligence"
        description="Get assistance with Cortex™, FireGuard, and building intelligence. General support, product guidance, and escalation routes for Unifi.id clients."
      />
      {/* Hero Section */}
      <Section className="min-h-[40vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Support
          </H1>
          <Body className="text-lg md:text-xl text-gray-600">
            Need help with our platform or a project? Our team is here to assist with Cortex™, FireGuard, and building intelligence solutions.
          </Body>
        </div>
      </Section>

      {/* Support Options */}
      <Section>
        <div className="max-w-4xl mx-auto px-6">
          <H2 className="text-2xl font-semibold text-gray-900 mb-8">Support Channels</H2>
          <div className="space-y-8">
            {/* General Support */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <H3 className="text-xl font-semibold text-gray-900 mb-4">General Support</H3>
              <Body className="text-gray-700 mb-6">
                Need help with our platform or a project? Our support team is available to assist with technical questions, implementation guidance, and general enquiries.
              </Body>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <strong>Email:</strong> support@unifi.id
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <strong>Phone:</strong> Contact via email for callback arrangement
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">LiveChat: Coming soon</span>
                </li>
              </ul>
            </div>

            {/* Product Support */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <H3 className="text-xl font-semibold text-gray-900 mb-4">Product Support</H3>
              <Body className="text-gray-700">
                Client support guidance with product references. Our team can help you navigate Cortex™, FireGuard, LiveView, and integration documentation. We provide step-by-step assistance for common tasks and troubleshooting.
              </Body>
            </div>

            {/* Escalation Routes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <H3 className="text-xl font-semibold text-gray-900 mb-4">Escalation Routes</H3>
                  <Body className="text-gray-700 mb-4">
                    If your issue is unresolved within 48 hours:
                  </Body>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Reply to your support ticket requesting escalation</li>
                    <li>Your case will be prioritised by our technical lead</li>
                    <li>We will provide a timeline for resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-semibold text-gray-900 mb-4">Prefer to talk?</H2>
          <Body className="text-gray-700 mb-6">
            For urgent issues or to discuss a new project, contact us directly.
          </Body>
          <ButtonLink href="/contact">Contact Us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
