'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Factory, AlertTriangle, Shield, TrendingUp } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function IndustrialSector() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Industrial Sector | Operational Intelligence for High-Risk Facilities"
        description="Cortex™ provides operational intelligence for industrial facilities. Protect workers, ensure HSE compliance, and drive efficiency in complex environments."
      />
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Factory className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Operational Intelligence for Industrial Facilities
          </H1>
          <p className="text-lg md:text-xl text-gray-600">
            Industrial sites face unique hazards: heavy machinery, hazardous materials, and complex safety protocols. Add regulatory scrutiny, insurance pressures, and operational efficiency demands — and the need for real-time intelligence becomes critical.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in Industrial Environments</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">High-Risk Operations</H3>
              <p className="text-gray-600">
                Industrial facilities handle dangerous processes, materials, and equipment. Safety failures can result in injuries, fatalities, environmental damage, and legal liability.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</H3>
              <p className="text-gray-600">
                HSE oversight, COMAH regulations, and fire safety mandates demand continuous evidence of control. Reactive inspections are no longer sufficient.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Factory className="h-10 w-10 text-purple-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Complex, Multi-Zone Sites</H3>
              <p className="text-gray-600">
                Large industrial estates require coordination across production areas, warehouses, offices, and hazardous zones. Without live data, visibility into real-time risk is fragmented.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <TrendingUp className="h-10 w-10 text-orange-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</H3>
              <p className="text-gray-600">
                Downtime, energy waste, and reactive maintenance erode margins. Industrial operators need predictive intelligence to maintain competitiveness.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cortex™ + Industrial Intelligence</H2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Safety & Emergency Response</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time occupancy monitoring enables rapid emergency response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated muster lists ensure complete accountability in hazardous zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">FireGuard provides continuous fire system monitoring with instant alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Risk Management</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Continuous compliance monitoring for HSE, COMAH, and fire safety regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Defensible audit trails for regulators and insurers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated incident reporting reduces administrative burden</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Occupancy-based energy management reduces utility costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Predictive maintenance prevents costly equipment failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Space utilisation analytics optimise facility layout and workflow</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Liability</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Demonstrated risk control reduces insurance premiums</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Live evidence of safety protocols strengthens legal position</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Continuous monitoring minimises exposure to regulatory penalties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wide mb-4 opacity-90">Result</p>
          <H2 className="text-3xl md:text-4xl font-bold mb-6">
            Industrial facilities gain comprehensive operational intelligence that protects workers, ensures compliance, and drives efficiency — while reducing risk and cost.
          </H2>
          <p className="text-lg mb-8 opacity-90">
            Discover how Cortex™ delivers critical intelligence for high-risk environments.
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
