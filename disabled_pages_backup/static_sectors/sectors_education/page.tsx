'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { GraduationCap, Users, AlertTriangle, Leaf, TrendingUp, Shield } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function EducationSector() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Education Sector | Smart Campus Safety & Energy Efficiency"
        description="Cortex™ helps universities and schools create safer, more sustainable learning environments through real-time occupancy intelligence and fire safety compliance."
      />
      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Education Sector</H1>
          <p className="text-lg md:text-xl text-gray-600">
            Universities, schools, and campuses face unique challenges around student safety, energy efficiency, and regulatory compliance. Cortex™ delivers the intelligence you need to create safer, more sustainable learning environments.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in Education</H2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Student Safety</H3>
              <p className="text-gray-600">
                Ensuring the safety of thousands of students across multiple buildings, with clear evacuation procedures and real-time monitoring.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Energy Costs</H3>
              <p className="text-gray-600">
                Managing energy consumption across large estates while meeting Net Zero commitments and reducing operational costs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <H3 className="text-xl font-bold text-gray-900 mb-3">Space Utilization</H3>
              <p className="text-gray-600">
                Understanding how lecture halls, libraries, and facilities are actually used to optimize space and improve student experience.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Cortex™ Helps Education</H2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <H3 className="text-2xl font-bold text-gray-900 mb-3">Campus-Wide Safety</H3>
                  <p className="text-gray-700 mb-4">
                    FireGuard provides continuous fire safety monitoring across your entire campus. Know exactly who is in each building, verify evacuations in real-time, and maintain audit-ready compliance records.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Real-time occupancy tracking across all buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Automated evacuation verification and muster lists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Compliance reporting for fire safety audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow">
              <div className="flex items-start gap-4">
                <Leaf className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <H3 className="text-2xl font-bold text-gray-900 mb-3">Energy Optimization</H3>
                  <p className="text-gray-700 mb-4">
                    Link energy consumption directly to occupancy data. Identify waste, optimize HVAC and lighting based on actual usage, and demonstrate progress toward Net Zero targets.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Occupancy-linked energy analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Automated HVAC and lighting optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">ESG reporting and carbon footprint tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <H3 className="text-2xl font-bold text-gray-900 mb-3">Space Utilization Intelligence</H3>
                  <p className="text-gray-700 mb-4">
                    Understand how students and staff actually use your facilities. Identify underutilized spaces, optimize timetabling, and improve the campus experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Real-time space utilization analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Lecture hall and library occupancy tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">Data-driven timetabling and space planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Study */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 bg-blue-50 rounded-lg p-8 md:p-12">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Case Study: Major UK University</H2>
          <p className="text-gray-700 mb-6">
            A leading UK university implemented Cortex™ across 45 buildings, achieving:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-700">Faster evacuation verification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">28%</div>
              <div className="text-gray-700">Energy cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700">Fire safety compliance</div>
            </div>
          </div>
          <ButtonLink href="/contact" variant="primary">
            Read Full Case Study
          </ButtonLink>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Campus?</H2>
          <p className="text-gray-600 mb-6">
            See how Cortex™ can help your institution create safer, more sustainable learning environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/contact" variant="primary" size="lg">
              Book a Demo
            </ButtonLink>
            <ButtonLink href="/sectors/hub" variant="outline" size="lg">
              Explore Other Sectors
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
