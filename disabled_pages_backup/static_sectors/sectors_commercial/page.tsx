'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Building, Users, Leaf, Shield, DollarSign } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function CommercialSector() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Commercial Sector | Smart Buildings for Corporate Estates"
        description="Cortex™ helps corporate offices balance employee wellbeing, operational efficiency, and ESG targets through real-time occupancy and building intelligence."
      />
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Building className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Buildings for Modern Corporate Estates
          </H1>
          <p className="text-lg md:text-xl text-gray-600">
            Corporate offices must balance employee wellbeing, operational efficiency, and environmental responsibility. As hybrid work reshapes space utilisation, organisations need real intelligence to optimise costly real estate while meeting ESG targets and maintaining security.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in Corporate Environments</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Work & Space Utilisation</H3>
              <p className="text-gray-600">
                With fluctuating occupancy, how do you know if you have too much (or too little) space? Assumptions about desk usage and meeting room demand are no longer acceptable when every square metre costs money.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">ESG Reporting & Net Zero</H3>
              <p className="text-gray-600">
                Investors, clients, and employees demand evidence of sustainability. Estimated energy consumption and carbon emissions are no longer credible — you need live data tied to actual building usage.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Duty of Care & Safety</H3>
              <p className="text-gray-600">
                Employers remain liable for staff safety, visitor management, and emergency preparedness. Manual roll calls, paper-based logs, and delayed fire alarms are not defensible in a modern workplace.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <DollarSign className="h-10 w-10 text-purple-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Cost Pressures & ROI</H3>
              <p className="text-gray-600">
                CFOs demand measurable returns from building investments. Energy waste, over-provisioning, and reactive maintenance erode margins and weaken competitiveness.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cortex™ + Corporate Building Intelligence</H2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Space & Occupancy Intelligence</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time occupancy analytics reveal true space utilisation patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Data-driven decisions on downsizing, hot-desking, or expansion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Meeting room and amenity usage insights optimise workplace design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">ESG & Sustainability</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Live energy and carbon reporting tied to actual occupancy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated ESG compliance dashboards for investors and regulators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Scope 1, 2, and 3 emissions tracking with defensible evidence</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Safety & Compliance</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time fire system monitoring with automated muster lists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Emergency evacuation verification — know who's out and who remains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Visitor management and access control integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <H3 className="text-2xl font-bold text-gray-900 mb-4">Cost Optimisation</H3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Occupancy-driven HVAC and lighting reduce energy waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Predictive maintenance prevents costly failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Lower insurance premiums through demonstrated risk management</span>
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
            Corporate estates gain measurable ROI through reduced costs, optimised space, and credible ESG reporting — while maintaining world-class safety and compliance.
          </H2>
          <p className="text-lg mb-8 opacity-90">
            Discover how Cortex™ delivers the intelligence that modern offices demand.
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
