'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Building2, Shield, Lock, FileCheck, TrendingDown } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function GovernmentSector() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Government Sector | Public Safety & Compliance Intelligence"
        description="Cortex™ provides public safety and compliance intelligence for government estates. Balance transparency with protection while managing budgets and infrastructure."
      />
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Public Safety & Compliance Intelligence for Government Estates
          </H1>
          <p className="text-lg md:text-xl text-gray-600">
            Government buildings face unique challenges: public access requirements, stringent security protocols, and intense scrutiny from auditors and the media. Leaders must balance transparency with protection while managing ageing infrastructure and tight budgets.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in Government Estates</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Public Safety & Duty of Care</H3>
              <p className="text-gray-600">
                Government buildings must protect staff, visitors, and the public while remaining accessible. Emergency preparedness and evacuation protocols must be flawless and auditable.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Lock className="h-10 w-10 text-blue-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Security & Access Control</H3>
              <p className="text-gray-600">
                Balancing public access with security is complex. High-risk areas require strict protocols while maintaining operational efficiency and transparency.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <FileCheck className="h-10 w-10 text-purple-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Accountability</H3>
              <p className="text-gray-600">
                Government estates face intense scrutiny from auditors, regulators, and the public. All safety and operational decisions must be documented and defensible.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <TrendingDown className="h-10 w-10 text-orange-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Budget Constraints & Efficiency</H3>
              <p className="text-gray-600">
                Rising operational costs and budget pressures demand smarter resource allocation and energy management without compromising service delivery.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cortex™ + Government Estate Solutions</H2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Public Safety & Emergency Response</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time occupancy monitoring enables rapid emergency response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated muster lists ensure complete accountability during evacuations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">FireGuard provides continuous fire system monitoring with instant alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Security & Access Management</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Integrated access control with real-time presence verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Anomaly detection flags unauthorised access or unusual behaviour patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Secure high-risk areas while maintaining public accessibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Governance</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated audit trails for all safety and security events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Defensible evidence for regulators, insurers, and public inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Continuous compliance monitoring reduces risk of penalties</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Operational Efficiency</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Occupancy-based HVAC and lighting control reduces energy costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Space utilisation analytics inform estate planning and downsizing decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Predictive maintenance prevents costly system failures</span>
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
            Government estates gain comprehensive building intelligence that protects the public, ensures compliance, and optimises taxpayer resources.
          </H2>
          <p className="text-lg mb-8 opacity-90">
            See how Cortex™ delivers the intelligence and accountability government buildings demand.
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
