'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Hotel, Users, Shield, Lock, CreditCard } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function RetailSector() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Hospitality & Retail Sector | Luxury Building Intelligence"
        description="Cortex™ delivers discreet intelligence for hospitality and members clubs. Maintain premium guest experiences while ensuring invisible safety and compliance."
      />
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Hotel className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Luxury Intelligence for Hospitality & Members Clubs
          </H1>
          <p className="text-lg md:text-xl text-gray-600">
            High-end hospitality and members clubs must deliver exceptional guest experiences while maintaining discreet safety, security, and compliance. Visible systems and intrusive protocols undermine the premium experience that defines these environments.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in Hospitality</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Guest Experience & Discretion</H3>
              <p className="text-gray-600">
                Safety and security systems must operate invisibly. Guests expect seamless luxury — not visible sensors, cameras, or evacuation drills that disrupt the ambience.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Fire Safety & Life Protection</H3>
              <p className="text-gray-600">
                Hotels, clubs, and venues face strict fire safety obligations. Guests must be accounted for during evacuations, but manual roll calls are impractical in luxury environments.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Lock className="h-10 w-10 text-blue-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Security & Privacy</H3>
              <p className="text-gray-600">
                Members and high-profile guests demand privacy and discretion. Security protocols must protect without intruding on the exclusive experience.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <CreditCard className="h-10 w-10 text-orange-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Insurance & Compliance</H3>
              <p className="text-gray-600">
                Insurers demand evidence of fire safety, occupancy monitoring, and risk management. Without live data, premiums remain high and claims are vulnerable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cortex™ + Hospitality Intelligence</H2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Invisible Safety Systems</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">FireGuard monitors fire systems discreetly with no visible intrusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated muster lists track guest locations without manual roll calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time evacuation verification ensures complete accountability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Discreet Security & Privacy</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Presence monitoring without cameras or visible sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Anomaly detection flags security risks without disrupting guest experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Integration with existing access control and concierge systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Guest Experience Optimisation</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Occupancy analytics inform staffing, service levels, and amenity provisioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Energy management adapts to real-time occupancy without guest inconvenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Space utilisation insights drive design and renovation decisions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Compliance</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Defensible evidence for insurers reduces premiums</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Continuous compliance monitoring for fire safety and occupancy regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated audit trails for regulators and licensing authorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wide mb-4 opacity-90">Result</p>
          <H2 className="text-3xl md:text-4xl font-bold mb-6">
            Hospitality and members clubs maintain their premium experience while delivering world-class safety, security, and compliance — all invisibly.
          </H2>
          <p className="text-lg mb-8 opacity-90">
            See how Cortex™ delivers discreet intelligence for luxury environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/contact" variant="secondary">
              Book Demo
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Take Our Survey
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
