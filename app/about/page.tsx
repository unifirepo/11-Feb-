'use client';

import { Section } from '@/src/components/Section';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { ButtonLink } from '@/src/components/ButtonLink';
import { m } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/components/motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section
        variant="dark"
        className="relative py-32 bg-gradient-to-br from-green-900/75 via-green-800/70 to-green-900/75"
        style={{
          backgroundImage: 'url(/unifi-assets/smart1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <m.div variants={fadeInUp}>
            <H1 className="mb-8">About Unifi.id</H1>
          </m.div>
          
          <m.div variants={fadeInUp} className="space-y-6">
            <Lead className="text-white/90">
              Every building tells a story.
            </Lead>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              How it's used. How it breathes. How it wastes or saves.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              At Unifi.id, we give buildings the ability to listen, learn, and act — turning static spaces into living, intelligent environments.
            </p>
            <p className="text-white font-bold text-lg leading-relaxed">
              Based at Level39 in Canary Wharf — the world-renowned hub for IoT innovation
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Unifi.id is a smart building intelligence company. We help organisations understand and optimise how people actually use their estates — delivering insights that cut costs, increase safety, strengthen compliance, and accelerate progress to net zero.
            </p>
          </m.div>
        </m.div>
      </Section>

      {/* Mission, Approach, Commitment */}
      <Section>
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <m.div variants={fadeInUp} className="p-8 border-l-4 border-unifi-blue bg-white rounded-lg shadow-sm">
            <H3 className="mb-4 text-unifi-blue">Our Mission</H3>
            <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
              To revolutionise building management by putting people at the heart of intelligent systems, creating environments that enhance wellbeing, safety, and sustainability whilst delivering measurable business outcomes.
            </p>
          </m.div>

          <m.div variants={fadeInUp} className="p-8 border-l-4 border-unifi-blue bg-white rounded-lg shadow-sm">
            <H3 className="mb-4 text-unifi-blue">Our Approach</H3>
            <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
              We combine cutting-edge technology with deep understanding of human needs, ensuring our solutions enhance rather than complicate the building experience. Every feature is designed with your occupants in mind.
            </p>
          </m.div>

          <m.div variants={fadeInUp} className="p-8 border-l-4 border-unifi-blue bg-white rounded-lg shadow-sm">
            <H3 className="mb-4 text-unifi-blue">Our Commitment</H3>
            <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
              We're committed to delivering outcomes that matter: improved operational efficiency, enhanced safety, reduced environmental impact, and better experiences for everyone who uses your buildings.
            </p>
          </m.div>
        </m.div>
      </Section>

      <div className="border-t border-gray-200 my-16" />

      {/* Who We Are */}
      <Section>
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <m.div variants={fadeInUp}>
            <H2 className="mb-6">Who We Are</H2>
            <p className="text-lg text-unifi-gray leading-relaxed">
              Unifi.id seamlessly identifies and tracks building occupants, zone by zone, using a range of detection solutions — from long-range RFID smart cards to facial recognition and device presence signals. Our primary technology, the proprietary Unifi.id RFID smart card, integrates with existing access systems while providing powerful real-time occupancy data.
            </p>
          </m.div>
        </m.div>
      </Section>

      {/* What We Do */}
      <Section variant="light">
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <m.div variants={fadeInUp}>
            <H2 className="mb-6">What We Do</H2>
            <p className="text-lg mb-8 text-unifi-gray leading-relaxed">
              Unifi.id transforms buildings into intelligent, responsive environments. By turning fragmented occupancy signals into actionable insight, we enable estates to operate smarter, safer, and greener.
            </p>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
                <strong>Occupancy & Safety Intelligence</strong> – real-time awareness of who is inside, enabling smarter fire safety, safeguarding, and compliance.
              </p>
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
                <strong>Operational Optimisation</strong> – integration with lighting, HVAC, security, and BMS systems so they respond dynamically to how spaces are actually used.
              </p>
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
                <strong>Hospitality & Experience</strong> – discreet VIP recognition, licence compliance, and high-touch service intelligence for premium venues.
              </p>
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">
                <strong>Decarbonisation & Energy Efficiency</strong> – cashflow-positive LED, heating, and controls upgrades that pay for themselves through savings.
              </p>
            </div>

            <p className="italic mt-8 text-gray-600 text-base md:text-lg leading-relaxed">
              At its core, Unifi.id doesn't replace existing systems — it makes them better, unlocking new value across energy, safety, compliance, and experience.
            </p>
          </m.div>
        </m.div>
      </Section>

      {/* Why Unifi.id */}
      <Section>
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <m.div variants={fadeInUp}>
            <H2 className="mb-6">Why Unifi.id</H2>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">• Rapid ROI on energy efficiency and net-zero initiatives</p>
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">• Increased safety through real-time occupancy and fire intelligence</p>
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">• Seamless integration with existing building systems</p>
              <p className="text-base md:text-lg text-unifi-gray leading-relaxed">• A scalable roadmap to support both immediate savings and long-term transformation</p>
            </div>
          </m.div>
        </m.div>
      </Section>

      <div className="border-t border-gray-200 my-16" />

      {/* Our Principle */}
      <Section variant="light">
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <m.div variants={fadeInUp}>
            <H2 className="mb-6">Our Principle</H2>
            <p className="text-lg mb-4 text-unifi-gray leading-relaxed">
              We've never believed the answer is "there's an app for everything." Not everyone can — or will — engage with apps. Instead, Unifi.id creates invisible intelligence: systems that work for everyone, in the background, automatically.
            </p>
            <p className="text-lg text-unifi-gray leading-relaxed">
              With our technology and partners, we deliver the digital-first foundation for the smart buildings of tomorrow.
            </p>
          </m.div>
        </m.div>
      </Section>

      <div className="border-t border-gray-200 my-16" />

      {/* CTA */}
      <Section>
        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <m.div variants={fadeInUp}>
            <H2 className="mb-6">Ready to discover how we can transform your building management?</H2>
            <ButtonLink href="/contact">Get in Touch</ButtonLink>
          </m.div>
        </m.div>
      </Section>
    </main>
  );
}
