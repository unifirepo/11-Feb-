'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Heart, Shield, FileCheck, TrendingUp, Lock } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function HealthcareSector() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Healthcare Sector | Life-Critical Building Intelligence"
        description="Cortex™ delivers life-critical intelligence for healthcare estates. Protect patients and staff, ensure CQC compliance, and drive operational efficiency."
      />
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Life-Critical Intelligence for Healthcare Estates
          </H1>
          <p className="text-lg md:text-xl text-gray-600">
            Hospitals, care homes, and healthcare facilities face unique pressures: vulnerable patients, 24/7 operations, and intense regulatory scrutiny. Leaders must balance patient safety, clinical priorities, and operational efficiency — all while managing ageing infrastructure and rising costs.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in Healthcare</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Patient & Staff Safety</H3>
              <p className="text-gray-600">
                Healthcare environments must protect vulnerable patients and staff 24/7. Fire safety, evacuation protocols, and emergency response must be flawless and auditable.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</H3>
              <p className="text-gray-600">
                CQC inspections, HSE requirements, and fire safety regulations demand continuous evidence of control. Manual documentation is time-consuming and error-prone.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</H3>
              <p className="text-gray-600">
                Rising costs and resource constraints demand smarter space utilisation, energy management, and maintenance planning without compromising patient care.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Lock className="h-10 w-10 text-purple-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Data Security</H3>
              <p className="text-gray-600">
                Patient data privacy and GDPR compliance are non-negotiable. Building intelligence systems must meet healthcare-grade security standards.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cortex™ + Healthcare Solutions</H2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Patient & Staff Safety</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">FireGuard provides live monitoring of fire systems with automated mustering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">FireSafe offers real-time evacuation verification for vulnerable patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">SafeGuard ensures rapid response to unauthorised access or anomalous behaviour</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Governance</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Continuous compliance monitoring for CQC, HSE, and fire safety standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Defensible audit trails for regulators and insurers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated reporting reduces administrative burden on clinical teams</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Occupancy-based resource allocation optimises staffing and space usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Energy management driven by real-time data reduces utility costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Predictive maintenance prevents critical system failures</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Data Security & Integration</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">GDPR-compliant data handling with end-to-end encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Seamless integration with existing BMS, access control, and clinical systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Scalable architecture supports multi-site trusts and private healthcare groups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wide mb-4 opacity-90">Result</p>
          <H2 className="text-3xl md:text-4xl font-bold mb-6">
            Healthcare estates gain a unified intelligence platform that protects lives, ensures compliance, and drives operational efficiency — all while reducing risk and cost.
          </H2>
          <p className="text-lg mb-8 opacity-90">
            Discover how Cortex™ delivers life-critical intelligence for modern healthcare estates.
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
