'use client';
import { H1, H2, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Briefcase, DollarSign, Settings, Leaf, Wrench, AlertTriangle, Shield } from "lucide-react";
import { SEO } from '@/src/components/SEO';

const roles = [
  {
    icon: Briefcase,
    iconColor: "text-blue-600",
    title: "CEO / Managing Director",
    description: "Strategic oversight, risk management, and demonstrable duty of care across your entire estate.",
    keyQuestions: ["How do I prove we're meeting our duty of care?", "What are our biggest operational risks?", "How can we demonstrate ESG leadership?"],
    cortexDelivers: ["Executive dashboard with real-time risk visibility", "Audit-ready compliance reporting", "ESG metrics and progress tracking"],
    link: "/roles/ceo",
  },
  {
    icon: DollarSign,
    iconColor: "text-green-600",
    title: "CFO / Finance Director",
    description: "Cost control, capital planning, and ROI justification for building investments.",
    keyQuestions: ["Where are we wasting money?", "How do I justify capital expenditure?", "What's our energy spend vs. occupancy?"],
    cortexDelivers: ["Cost analytics and waste identification", "ROI modeling for upgrades", "Energy spend optimization"],
    link: "/roles/cfo",
  },
  {
    icon: Settings,
    iconColor: "text-purple-600",
    title: "COO / Operations Director",
    description: "Operational efficiency, system integration, and performance across sites.",
    keyQuestions: ["Are our systems actually working together?", "Where are the operational bottlenecks?", "How do we scale best practices?"],
    cortexDelivers: ["Unified operational dashboard", "Cross-site performance benchmarking", "Predictive maintenance alerts"],
    link: "/roles/coo",
  },
  {
    icon: Leaf,
    iconColor: "text-emerald-600",
    title: "ESG / Sustainability Lead",
    description: "Net Zero pathways, carbon reporting, and defensible sustainability claims.",
    keyQuestions: ["How do we hit Net Zero targets?", "Can we prove our carbon reduction claims?", "What funding is available?"],
    cortexDelivers: ["Carbon footprint tracking", "Energy optimization recommendations", "ESG reporting automation"],
    link: "/roles/esg-lead",
  },
  {
    icon: Wrench,
    iconColor: "text-orange-600",
    title: "Facilities Manager",
    description: "Day-to-day operations, maintenance scheduling, and occupant satisfaction.",
    keyQuestions: ["How do I prioritize maintenance?", "Are we using space efficiently?", "How can I reduce reactive work?"],
    cortexDelivers: ["Predictive maintenance scheduling", "Space utilization analytics", "Automated work order generation"],
    link: "/roles/facilities",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-red-600",
    title: "Fire Safety Lead",
    description: "Compliance assurance, evacuation readiness, and incident response.",
    keyQuestions: ["Can we prove our fire systems work?", "How fast can we evacuate?", "Are we audit-ready?"],
    cortexDelivers: ["FireGuard continuous monitoring", "Evacuation analytics", "Compliance audit trails"],
    link: "/roles/fire-safety-lead",
  },
  {
    icon: Shield,
    iconColor: "text-slate-700",
    title: "Security Head",
    description: "Access control, threat detection, and perimeter security.",
    keyQuestions: ["Who is actually on-site right now?", "Are there any security anomalies?", "How do we respond to incidents?"],
    cortexDelivers: ["Real-time presence intelligence", "Anomaly detection alerts", "Incident response coordination"],
    link: "/roles/security-head",
  },
];

export default function RolesHub() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Roles | Tailored Intelligence for Every Stakeholder"
        description="Cortex™ delivers the specific insights and tools each role needs to succeed — from boardroom strategy to day-to-day operations. Explore role-specific solutions."
      />
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Roles</H1>
          <p className="text-lg md:text-xl text-gray-600">
            Cortex™ delivers the specific insights and tools each role needs to succeed — from boardroom strategy to day-to-day operations.
          </p>
        </div>
      </Section>

      {/* Roles Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className={`h-10 w-10 ${role.iconColor} flex-shrink-0`} />
                    <div>
                      <H3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</H3>
                      <p className="text-gray-600">{role.description}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Questions:</h4>
                    <ul className="space-y-1">
                      {role.keyQuestions.map((question, index) => (
                        <li key={index} className="text-sm text-gray-700 pl-4 border-l-2 border-gray-300">
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Cortex™ Delivers:</h4>
                    <ul className="space-y-2">
                      {role.cortexDelivers.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-primary mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ButtonLink href={role.link} variant="outline" className="w-full">
                    Explore {role.title} Solutions
                  </ButtonLink>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Role-Specific */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Role-Specific Solutions Matter</H2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Relevant Insights</H3>
                <p className="text-gray-600">See only the data and metrics that matter to your specific responsibilities.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Intelligence</H3>
                <p className="text-gray-600">Get recommendations you can act on immediately within your authority.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Proven Outcomes</H3>
                <p className="text-gray-600">Case studies and results from others in your role.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">See How Cortex™ Works for Your Role</H2>
          <p className="text-gray-600 mb-6">
            Book a personalized demo tailored to your specific responsibilities and challenges.
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Book a Demo
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
