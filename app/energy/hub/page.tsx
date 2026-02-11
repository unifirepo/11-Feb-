
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building, TrendingUp, Shield, DollarSign, AlertTriangle, CheckCircle, Target, GraduationCap, School, Award, Users, ArrowRight, Lightbulb, Thermometer, Sun } from 'lucide-react';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { SEO } from '@/src/components/SEO';
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

export default function EnergyHubPage() {
  const [activeMainTab, setActiveMainTab] = useState('technology');
  const [activeTechTab, setActiveTechTab] = useState('led');
  const [activeSectorTab, setActiveSectorTab] = useState('education');
  const [activeEduTab, setActiveEduTab] = useState('higher-ed');
  const [activeCorporateTab, setActiveCorporateTab] = useState('office');
  const [activePublicTab, setActivePublicTab] = useState('local');
  const heroImage = pickUnifiPlaceholder('hero', 'energy-hub');

  return (
    <main className="pt-0">
      <SEO 
        title="Energy Hub | Decarbonisation & Energy Efficiency Solutions"
        description="Stop paying for wasted energy. Unifi.id helps you redirect wasted spend into fully funded upgrades in LED, heating, HVAC, and solar with zero capital outlay."
      />

      {/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Decarbonisation hero image" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/15 via-transparent to-unifi-blue/20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <div className="h-20" aria-hidden="true" />
            <motion.div variants={fadeInUp}>
              <H1 className="text-white mb-6">Stop Paying for Wasted Energy. Start Investing in Your Future.</H1>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <Body className="text-white/90 text-xl leading-relaxed">
                Every month, organisations of every size - from schools to global corporates - pour money into the pockets of energy companies by running outdated lighting, heating, and HVAC systems. It feels like you don't have the budget for upgrades. In reality, you do. You're just spending it in the wrong place.
              </Body>
              <Body className="text-white/80 text-lg leading-relaxed">
                Unifi.id helps you redirect that wasted spend into fully funded upgrades in LED, heating, HVAC, solar and renewables. No capital outlay. No hidden costs. Just lower bills, lower carbon, and verifiable compliance. The savings stay with you, not your supplier.
              </Body>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Main Tabs Navigation */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-8">
            {[
              { id: 'technology', label: 'Explore by Technology', icon: Zap },
              { id: 'sector', label: 'Explore by Sector', icon: Building }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`flex items-center gap-2 py-6 border-b-2 transition-all font-bold ${
                  activeMainTab === tab.id 
                    ? 'border-unifi-blue text-unifi-blue' 
                    : 'border-transparent text-unifi-gray-dark hover:text-unifi-blue'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeMainTab === 'technology' ? (
          <motion.div
            key="tech-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Tech Hero */}
            <Section backgroundColor="white">
              <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl mx-auto">
                <H2 className="mb-6">Choose Your Decarbonisation Technology</H2>
                <Body className="text-lg">
                  Start with the technology that delivers the biggest impact for your estate. Each solution can be implemented independently or as part of a comprehensive upgrade program.
                </Body>
              </div>
            </Section>

            {/* Tech Tabs */}
            <div className="bg-unifi-gray/50 py-4">
              <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4">
                {[
                  { id: 'led', label: 'LED Lighting', icon: Lightbulb },
                  { id: 'heating', label: 'Heating & HVAC', icon: Thermometer },
                  { id: 'solar', label: 'Solar & Renewables', icon: Sun }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTechTab(tab.id)}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                      activeTechTab === tab.id
                        ? 'bg-unifi-blue text-white shadow-lg'
                        : 'bg-white text-unifi-gray-dark hover:bg-unifi-blue/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTechTab === 'led' && (
              <div className="animate-in fade-in duration-500">
                {/* LED Hero Stats */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                      <H2 className="mb-4">LED Lighting Upgrades: Smarter Investment, Lifetime Returns</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        In today's climate of rising energy bills, stretched budgets, and ESG targets, LED upgrades remain one of the most powerful, proven investments available.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '60%', label: 'Average Energy Reduction' },
                        { val: '3-5 Years', label: 'Typical Payback Period' },
                        { val: '25+ Years', label: 'LED Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-center border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Modern LED systems are far more than simple replacements for old fixtures. They represent a complete transformation of your lighting infrastructure - combining energy efficiency, improved comfort, and dramatically reduced maintenance demands.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        While the upfront cost can feel significant, LED projects consistently deliver some of the best returns on investment of any sustainability measure. In many cases, the energy savings alone can fully finance the installation, allowing upgrades to proceed with no upfront capital outlay.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* LED Benefits */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With energy savings typically exceeding 60%, institutions can often finance the installation through third-party funding at competitive rates.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance your LED upgrade without touching your capital budget",
                              "Third-party funding covers all installation costs",
                              "Immediate positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own infrastructure instead of energy companies",
                              "Improving your estate while reducing costs",
                              "Most upgrades pay for themselves in less than five years",
                              "Savings continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Warning Section */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                      <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The LED market can be confusing. Some installers promote dramatic savings figures, paired with ultra-low installation costs and budget products. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Fixtures that fail long before their rated life</li>
                            <li>• Poor compliance with recognised lighting standards</li>
                            <li>• Higher energy use as fittings degrade over time</li>
                            <li>• Replacements and disruptions that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the 'cheap' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically 'legal' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding standards for education, workplaces, and public estates",
                              "Premium fixtures with certified performance ratings",
                              "20+ year LED lifespan with consistent performance",
                              "Fittings that maintain efficiency and light quality for their full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
            )}

            {activeTechTab === 'heating' && (
              <div className="animate-in fade-in duration-500">
                {/* Heating & HVAC Hero Stats */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                      <H2 className="mb-4">Heating & HVAC: Cut Waste, Improve Comfort, Zero Capex</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        Outdated heating and HVAC systems are among the largest sources of energy waste in commercial buildings. Modern, efficient systems reduce operating costs while improving occupant comfort and compliance.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '30-50%', label: 'Typical Heating Energy Reduction' },
                        { val: '5-10 Years', label: 'Typical Payback Period' },
                        { val: '15-20 Years', label: 'Modern System Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-center border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Intelligent heating and HVAC upgrades optimise your building's climate control - reducing energy waste, improving comfort, and supporting sustainability targets. Boiler replacements, heat pumps, and building management system upgrades can all be delivered without upfront capital.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        Third-party funding structures allow energy and cost savings to finance the installation. Organisations redirect spend from wasted heating and cooling into fully funded upgrades, with positive cash flow from day one.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* Heating & HVAC Benefits */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With heating and HVAC representing a major share of building energy use, savings from upgrades can often finance the entire project through third-party funding.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance heating and HVAC upgrades without touching your capital budget",
                              "Third-party funding covers equipment and installation costs",
                              "Positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own infrastructure instead of energy companies",
                              "Improved occupant comfort and building performance",
                              "Most upgrades pay for themselves over the system lifespan",
                              "Savings continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Heating & HVAC Warning Section */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                        <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The heating and HVAC market can be confusing. Some installers promote dramatic savings figures with low installation costs and budget equipment. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Equipment that fails before its rated life</li>
                            <li>• Poor compliance with building regulations</li>
                            <li>• Rising energy use as systems degrade</li>
                            <li>• Replacements and disruptions that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the 'cheap' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically 'legal' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard - Heating */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver heating and HVAC solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding building regulations and standards",
                              "Premium equipment with certified performance ratings",
                              "Systems designed for longevity and reliability",
                              "Equipment that maintains efficiency for its full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6 text-center py-12">
                    <ButtonLink href="/energy/contact" variant="primary">Discuss Heating & HVAC Upgrades</ButtonLink>
                  </div>
                </Section>
              </div>
            )}

            {activeTechTab === 'solar' && (
              <div className="animate-in fade-in duration-500">
                {/* Solar & Renewables Hero Stats */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                      <H2 className="mb-4">Solar & Renewables: Generate Clean Energy, Reduce Reliance on the Grid</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        Solar PV and renewable energy systems allow organisations to generate their own clean power, cut energy costs, and build long-term energy security. Fully funded solutions remove the capital barrier to adoption.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '20-40%', label: 'Typical Electricity Cost Reduction' },
                        { val: '5-10 Years', label: 'Typical Payback Period' },
                        { val: '25+ Years', label: 'Solar Panel Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-center border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Solar PV and renewable energy systems reduce reliance on the grid, lower electricity costs, and support decarbonisation targets. With third-party funding, organisations can install solar and other renewables with no upfront capital.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        Energy savings and export revenue can fully finance the installation. The savings stay with you, not your supplier - delivering immediate cost reduction and long-term energy security.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* Solar & Renewables Benefits */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With electricity cost savings and export revenue, solar and renewable projects can often be fully financed through third-party funding.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance solar and renewable installations without touching your capital budget",
                              "Third-party funding covers equipment and installation costs",
                              "Positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own energy generation instead of the grid",
                              "Reduced exposure to volatile energy prices",
                              "Most systems pay for themselves over their operational life",
                              "Savings and generation continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Solar & Renewables Warning Section */}
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                        <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The solar and renewables market can be confusing. Some installers promote dramatic savings figures with low installation costs and budget panels. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Panels that underperform or fail before their rated life</li>
                            <li>• Poor compliance with grid connection and safety standards</li>
                            <li>• Declining output as systems degrade faster than expected</li>
                            <li>• Replacements and downtime that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the 'cheap' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically 'legal' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard - Solar */}
                <Section backgroundColor="gray">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver solar and renewable solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding grid connection and safety standards",
                              "Premium panels with certified performance ratings",
                              "Systems designed for longevity and reliability",
                              "Equipment that maintains output for its full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6 text-center py-12">
                    <ButtonLink href="/energy/contact" variant="primary">Explore Solar & Renewables</ButtonLink>
                  </div>
                </Section>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="sector-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Sector Tabs */}
            <div className="bg-unifi-gray/50 py-4">
              <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4">
                {[
                  { id: 'education', label: 'Education', icon: GraduationCap },
                  { id: 'corporate', label: 'Corporate', icon: Building },
                  { id: 'public', label: 'Public Sector', icon: Users }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSectorTab(tab.id)}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                      activeSectorTab === tab.id
                        ? 'bg-unifi-blue text-white shadow-lg'
                        : 'bg-white text-unifi-gray-dark hover:bg-unifi-blue/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeSectorTab === 'education' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">LED Lighting Solutions for Education</H2>
                      <Body className="text-lg">
                        From primary schools to sprawling university campuses, the education sector is facing unprecedented energy and infrastructure pressure. Our LED lighting solutions deliver immediate savings while modernizing learning environments across all education sectors.
                      </Body>
                    </div>

                    {/* Education Nested Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'higher-ed', label: 'Higher Ed' },
                        { id: 'state-schools', label: 'State Schools' },
                        { id: 'mats', label: 'MATs' },
                        { id: 'independent', label: 'Independent' },
                        { id: 'groups', label: 'Groups' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveEduTab(tab.id)}
                          className={`px-6 py-2 rounded-lg font-bold transition-all ${
                            activeEduTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-2 border-unifi-blue'
                              : 'bg-unifi-gray text-unifi-gray-dark border-2 border-transparent hover:border-unifi-blue/30'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {activeEduTab === 'higher-ed' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <GraduationCap className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Sustainable Estates. Without Capex Sacrifice.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Universities are global brands - and their estates shape the student experience, academic output, and institutional reputation.</Body>
                              <Body>But with capital tightly rationed between research, teaching, and student services, lighting infrastructure upgrades are often delayed - despite clear energy waste and rising compliance pressure.</Body>
                              <Body>Managing complex estates - with some buildings decades or even centuries old - outdated lighting fixtures drain budgets and compromise learning environments.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps universities deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades across entire estates",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Phased LED modernisation that avoids academic disruption",
                                  "Verifiable energy and carbon reductions for ESG",
                                  "VAT recovery on qualifying works to boost net ROI"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-12">University-Specific Challenges We Address</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Shield className="w-6 h-6 text-red-500" />
                              <H3 className="text-xl">Student Safety & Duty of Care</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Beyond fire drills, schools and universities must guarantee real-time oversight of students and staff across large, complex estates. Safeguarding requires visibility into who is on-site, where they are, and how quickly they can be accounted for in emergencies.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Building className="w-6 h-6 text-blue-500" />
                              <H3 className="text-xl">Security in Open Environments</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Education must remain welcoming - but also protected. Managing visitor access, monitoring anomalies, and securing high-risk zones without disrupting the learning environment is a constant balancing act.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Energy Costs & ESG Targets</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Rising utility bills and tightening sustainability mandates demand smarter building controls. Without live occupancy data, energy and carbon reporting remain guesswork - and budgets suffer.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Complex Estates & Compliance</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Multi-building campuses face scrutiny from auditors, insurers, and regulators. Paper-based evacuation lists, static access logs, and estimated energy reports are no longer defensible.
                            </Body>
                          </div>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                          {[
                            {
                              title: "Historic Buildings",
                              icon: Building,
                              desc: "Heritage-sensitive LED retrofits that preserve architectural character while modernizing lighting infrastructure.",
                              features: ["Heritage-compatible solutions", "Planning permission support", "Conservation-compliant"],
                            },
                            {
                              title: "Complex Estates",
                              icon: TrendingUp,
                              desc: "Coordinated LED upgrades across multi-building campuses with diverse lighting needs.",
                              features: ["Phased implementation", "Minimal academic disruption", "Campus-wide coordination"],
                            },
                            {
                              title: "ESG & Compliance",
                              icon: Shield,
                              desc: "LED-specific energy efficiency improvements that support sustainability commitments.",
                              features: ["LED-specific carbon reporting", "Energy efficiency compliance", "Sustainability rankings support"],
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center h-full flex flex-col items-center"
                            >
                              <div className="w-14 h-14 rounded-2xl bg-unifi-blue/10 flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-unifi-blue" />
                              </div>

                              <H3 className="text-xl mb-3">{item.title}</H3>
                              <Body className="text-unifi-gray-dark">{item.desc}</Body>

                              <ul className="mt-6 space-y-2">
                                {item.features.map((f, j) => (
                                  <li key={j} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'primary-secondary' && (
                      <div className="animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <School className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Safer Schools. Brighter Futures.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Primary and secondary schools are vital community hubs, but often operate with tight budgets and aging infrastructure. Our LED lighting solutions provide immediate energy savings while creating improved learning environments for students and staff.</Body>
                              <Body>Upgrading to LED lighting can significantly reduce operational costs, enhance safety through better visibility, and contribute to a school's sustainability goals without requiring upfront capital investment.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps primary & secondary schools deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades across school estates",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Improved learning environments with better light quality",
                                  "Reduced energy bills and carbon footprint",
                                  "Enhanced safety and security through improved visibility"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-12">Key Challenges for Primary & Secondary Education</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <DollarSign className="w-6 h-6 text-green-500" />
                              <H3 className="text-xl">Budget Constraints</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Schools often face severe budget limitations, making it difficult to fund essential infrastructure upgrades like modern lighting systems.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Outdated Infrastructure</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Many school buildings have old, inefficient lighting that consumes excessive energy and provides poor illumination, impacting learning and staff well-being.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Shield className="w-6 h-6 text-red-500" />
                              <H3 className="text-xl">Safety & Security</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Ensuring a safe and secure environment for students and staff is paramount. Improved lighting can deter unauthorized access and enhance visibility in and around school premises.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Environmental Targets</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Schools are increasingly under pressure to meet sustainability goals and reduce their carbon footprint, with energy consumption being a major factor.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'further-education' && (
                      <div className="animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Optimised Learning Environments for Further Education.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Further education colleges and vocational training centers play a crucial role in skill development, but often face unique challenges related to diverse learning spaces and student demographics. Our LED lighting solutions offer flexible, energy-efficient upgrades that support various educational needs.</Body>
                              <Body>Modern LED lighting can improve focus and productivity in classrooms and workshops, reduce operating costs, and enhance the overall appeal of facilities, attracting and retaining students.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps further education institutions deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades for diverse learning spaces",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Improved lighting quality for enhanced learning and practical training",
                                  "Significant reductions in energy consumption and maintenance costs",
                                  "Modernized facilities to attract and retain students"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-12">Key Challenges for Further Education</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Target className="w-6 h-6 text-blue-500" />
                              <H3 className="text-xl">Diverse Learning Environments</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Further education institutions encompass a wide range of spaces, from traditional classrooms to specialized workshops and vocational training areas, each with unique lighting requirements.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <DollarSign className="w-6 h-6 text-green-500" />
                              <H3 className="text-xl">Funding & Investment</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Securing funding for infrastructure improvements can be challenging, often requiring institutions to seek solutions that offer immediate financial benefits.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <TrendingUp className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Attracting & Retaining Students</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Modern, well-lit facilities are crucial for creating an attractive learning environment that can help institutions draw in new students and keep existing ones engaged.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Energy Efficiency & Sustainability</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Reducing energy consumption and operating costs while demonstrating a commitment to environmental responsibility are key priorities for further education providers.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'state-schools' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <School className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Brighter Schools. Without Capex Sacrifice.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>State schools are under relentless pressure to stretch every pound - with estate budgets often fixed or ringfenced, upgrades are pushed back year after year.</Body>
                              <Body>But delaying improvements doesn't just defer costs. It locks schools into higher energy bills, growing maintenance burdens, and environments that fall short of supporting pupils and staff. And waiting for government grants that may never arrive only prolongs the problem, leaving schools paying more each month for outdated, inefficient systems.</Body>
                              <Body>Lighting is often one of the largest energy drains in a school, with outdated fluorescent or halogen systems consuming far more power than modern LEDs. The result: wasted funds, poorer light quality, and missed opportunities to meet sustainability goals.</Body>
                              <Body>Yet replacing legacy lighting doesn't need to be prohibitively expensive. By structuring costs differently, schools can modernise without pulling money away from teaching and learning.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps state schools deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across classrooms and campuses',
                                'Cashflow-positive projects paid from operational savings, not school budgets',
                                'Phased installations timed around school hours and holidays to avoid disruption',
                                'Verifiable carbon reductions to meet regulatory and Ofsted-linked sustainability standards',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="text-center mb-8">
                          <H3 className="text-center mb-2">School-Specific Challenges We Address</H3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Aging Buildings',
                              desc: 'Decades-old classrooms and facilities require careful, non-disruptive upgrades.',
                              features: [
                                'Heritage-sensitive retrofits where required',
                                'Planning and compliance support',
                                'Minimal disruption to school operations',
                              ],
                            },
                            {
                              title: 'Tight Budgets',
                              desc: 'Fixed or ringfenced funding leaves little room for capital projects.',
                              features: [
                                'Fully funded models with no upfront cost',
                                'Immediate operational savings after installation',
                                'Long-term reduction in maintenance spend',
                              ],
                            },
                            {
                              title: 'Compliance & Safeguarding',
                              desc: 'Schools must meet energy efficiency, safety, and duty-of-care requirements.',
                              features: [
                                'Automated carbon reporting aligned with regulatory standards',
                                'Safer, brighter classrooms that support wellbeing',
                                'Evidence for sustainability and compliance audits',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            With LED retrofits, schools aren't finding new money - they're redirecting wasted energy spend into brighter classrooms and safer estates that pay for themselves, often in less than five years.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'mats' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Portfolio Consistency. Local Delivery. Central Oversight.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>MAT estates teams have to balance central standards with site-level realities - across buildings of different age, condition, and usage.</Body>
                              <Body>LED programmes succeed when they are repeatable, measurable, and easy to roll out - with consistent reporting for CFOs, trustees, and compliance leads.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps MATs deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Standardised upgrade spec across the trust',
                                'Site-by-site phasing to minimise disruption',
                                'Simple governance reporting across all schools',
                                'Evidence of savings and carbon reduction over time'
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Multi-site governance',
                              desc: 'A clear, comparable view of upgrades and outcomes across the trust.',
                            },
                            {
                              title: 'Procurement control',
                              desc: 'A repeatable approach that reduces variation and avoids one-off site decisions.',
                            },
                            {
                              title: 'Low disruption delivery',
                              desc: 'Rollouts planned around term-time constraints and local operational needs.',
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                                        {activeEduTab === 'independent' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Award className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Premium Environments. Measurable Savings. Stronger ESG Proof.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Independent schools are expected to deliver a high-quality campus experience while controlling operating costs across often diverse estates.</Body>
                              <Body>LED upgrades reduce energy waste and maintenance burden, while supporting sustainability reporting and investor-grade evidence where required.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps independent schools deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Improved learning and boarding environments with better light quality',
                                'Reduced maintenance callouts and lamp failures',
                                'Phased upgrades across classrooms, sports, and public areas',
                                'Clear reporting that supports ESG and stakeholder expectations'
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Campus standards',
                              desc: 'Upgrades aligned to quality expectations across teaching, boarding, and shared spaces.',
                            },
                            {
                              title: 'Operational resilience',
                              desc: 'Fewer failures and less reactive maintenance, with planned delivery.',
                            },
                            {
                              title: 'Evidence-led ESG',
                              desc: 'Measurement and reporting to support sustainability and stakeholder communications.',
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'groups' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">School Groups & Federations</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>School groups and federations face the challenge of managing multiple sites with shared resources and budgets. LED lighting offers a unified approach to reducing energy costs, improving facilities, and meeting environmental targets across all schools.</Body>
                              <Body>Our funded solutions enable groups to upgrade all sites simultaneously, with centralised monitoring and control providing transparency and consistency across the entire estate.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for school groups:</H3>
                            <ul className="space-y-4">
                              {[
                                'Upgrade multiple sites simultaneously',
                                'Centralised monitoring and reporting',
                                'Consistent quality across all schools',
                                'Significant cost savings group-wide',
                                'Meet shared ESG targets',
                                'No upfront capital required',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Multiple Sites',
                              desc: 'Managing different buildings across multiple locations is complex.',
                              features: [
                                'Rollout across all sites simultaneously',
                                'Centralised control and monitoring',
                                'Consistent standards and quality',
                                'Simplified management',
                              ],
                            },
                            {
                              title: 'Shared Budgets',
                              desc: 'Limited budgets must be stretched across multiple schools.',
                              features: [
                                'Funded solutions with no upfront cost',
                                'Group-wide energy savings',
                                'Reduced maintenance costs',
                                'Better value through scale',
                              ],
                            },
                            {
                              title: 'Reporting & Accountability',
                              desc: 'Demonstrating value and impact to governors and communities.',
                              features: [
                                'Real-time energy monitoring',
                                'Clear ROI and savings reporting',
                                'Carbon reduction tracking',
                                'ESG credentials enhancement',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            Our LED solutions are designed for school groups. We understand the need for consistency, transparency, and value across multiple sites - and we deliver all three.
                          </Body>
                        </div>
                      </div>
                    )}
                  </div>
                </Section>
              </div>
            )}
          

            
            {activeSectorTab === 'corporate' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">LED Lighting for Corporate Real Estate</H2>
                      <Body className="text-lg">
                        Corporate real estate demands high performance, reliability, and cost efficiency. LED lighting delivers all three - reducing energy costs by up to 80%, enhancing workspace quality, and supporting ESG commitments across your entire portfolio.
                      </Body>
                      <Body className="text-lg mt-4">
                        Our funded solutions mean you can upgrade without capital outlay, while smart controls and integration with building systems ensure optimal performance and long-term value.
                      </Body>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'office', label: 'Office Buildings' },
                        { id: 'retail', label: 'Retail' },
                        { id: 'mixed', label: 'Mixed-Use' },
                        { id: 'hospitality', label: 'Hospitality' },
                        { id: 'industrial', label: 'Industrial' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveCorporateTab(tab.id)}
                          className={
                            'px-6 py-2 rounded-lg font-bold transition-all border-2 ' +
                            (activeCorporateTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-unifi-blue'
                              : 'bg-unifi-gray text-unifi-gray-dark border-transparent hover:border-unifi-blue/30')
                          }
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {activeCorporateTab === 'office' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Office Buildings</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Modern office spaces demand lighting that enhances productivity, wellbeing, and energy efficiency. LED lighting transforms commercial offices - reducing operational costs by up to 80% while creating comfortable, productive environments that attract and retain tenants.</Body>
                              <Body>Our funded solutions mean landlords and occupiers can upgrade without capital expenditure, while smart controls adapt lighting to occupancy patterns and natural daylight, maximizing efficiency and comfort.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for office buildings:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Enhance tenant satisfaction and retention',
                                'Improve workplace productivity and wellbeing',
                                'Meet ESG and MEES compliance requirements',
                                'Increase asset value and marketability',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Challenges Office Buildings Face - And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Rising Energy Costs',
                              desc: 'Energy bills are a significant operational expense for office buildings.',
                              features: [
                                'Up to 80% reduction in lighting energy use',
                                'Lower service charge costs for tenants',
                                'Improved NOI and building performance',
                                'Protection against future energy price rises',
                              ],
                            },
                            {
                              title: 'Tenant Expectations',
                              desc: 'Modern tenants expect high-quality, efficient, and sustainable workspaces.',
                              features: [
                                'Enhanced lighting quality and control',
                                'Improved workplace comfort and productivity',
                                'Smart controls for flexible working',
                                'Demonstrate ESG leadership',
                              ],
                            },
                            {
                              title: 'Compliance & Regulations',
                              desc: 'MEES, EPC ratings, and ESG reporting requirements are increasingly stringent.',
                              features: [
                                'Improve EPC ratings cost-effectively',
                                'Meet MEES compliance requirements',
                                'Support ESG and net-zero commitments',
                                'Comprehensive audit trail and reporting',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            From single-occupier headquarters to multi-tenanted office blocks, our LED solutions deliver immediate cost savings, enhanced environments, and long-term value.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeCorporateTab === 'retail' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Retail</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Retail environments rely on lighting to create atmosphere, showcase products, and drive sales. LED lighting transforms retail spaces - reducing energy costs by up to 80% while delivering superior color rendering, flexibility, and ambiance that enhances the customer experience.</Body>
                              <Body>Our funded solutions mean retailers and landlords can upgrade without capital expenditure, while smart controls enable dynamic lighting schemes that adapt to time of day, seasons, and promotional campaigns.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for retail:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Enhance product presentation and sales',
                                'Create engaging customer experiences',
                                'Improve staff comfort and productivity',
                                'Meet ESG and MEES requirements',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Challenges Retail Faces - And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Product Presentation',
                              desc: 'Lighting quality directly impacts how products look and how customers perceive value.',
                              features: [
                                'Excellent color rendering (CRI 90+)',
                                'Flexible control for different displays',
                                'Consistent quality across store',
                                'Dynamic schemes for campaigns',
                              ],
                            },
                            {
                              title: 'Operating Costs',
                              desc: 'Energy and maintenance costs eat into tight margins.',
                              features: [
                                'Up to 80% reduction in lighting energy',
                                'Minimal maintenance requirements',
                                'Lower HVAC costs (less heat output)',
                                'Predictable long-term costs',
                              ],
                            },
                            {
                              title: 'Operating Hours',
                              desc: 'Extended trading hours mean lighting is on for long periods.',
                              features: [
                                'Exceptional lifespan (50,000+ hours)',
                                'Reduced lamp replacement frequency',
                                'Lower maintenance disruption',
                                'Smart controls for automated scheduling',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            From high-street stores to shopping centres, our LED solutions help retailers create compelling environments while dramatically reducing operational costs.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeCorporateTab === 'mixed' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Mixed-Use Developments</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Mixed-use developments combine residential, commercial, and retail spaces - each with different lighting needs and usage patterns. LED lighting provides the flexibility, efficiency, and control to optimize performance across all areas while reducing operational costs by up to 80%.</Body>
                              <Body>Our funded solutions mean developers and property managers can upgrade without capital expenditure, while integrated smart controls enable different lighting strategies for different zones, maximizing efficiency and comfort throughout the development.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for mixed-use:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80% across all areas',
                                'Flexible solutions for different space types',
                                'Integrated control and monitoring',
                                'Enhanced resident and tenant satisfaction',
                                'Meet diverse compliance requirements',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-10">
                          <H3 className="text-center mb-10">Challenges Mixed-Use Faces — And How LED Helps</H3>
                          <div className="grid md:grid-cols-3 gap-6">
                            {[
                              {
                                title: 'Diverse Requirements',
                                desc: 'Different spaces have different lighting needs, usage patterns, and aesthetic requirements.',
                                features: [
                                  'Tailored solutions for each space type',
                                  'Consistent quality across development',
                                  'Integrated control systems',
                                  'Flexible scheduling by zone',
                                ],
                              },
                              {
                                title: 'Service Charge Pressures',
                                desc: 'Residents and tenants are sensitive to service charge costs.',
                                features: [
                                  'Significant reduction in communal lighting costs',
                                  'Lower maintenance costs',
                                  'Transparent energy reporting',
                                  'Improved cost predictability',
                                ],
                              },
                              {
                                title: 'Safety & Security',
                                desc: 'Communal areas, car parks, and entrances must be well-lit for safety and security.',
                                features: [
                                  'Excellent light quality and coverage',
                                  'Reliable operation 24/7',
                                  'Integrated with security systems',
                                  'Emergency lighting compliance',
                                ],
                              },
                            ].map((c) => (
                              <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                                <H3 className="text-lg mb-3">{c.title}</H3>
                                <Body className="text-unifi-gray-dark">{c.desc}</Body>
                                <ul className="mt-5 space-y-2">
                                  {c.features.map((f) => (
                                    <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                      <ArrowRight className="w-3 h-3" /> {f}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8">
                            <Body className="text-unifi-gray-dark text-center">
                              Whether you're developing a new mixed-use scheme or managing an existing one, our LED solutions deliver the flexibility and performance you need across all areas.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeCorporateTab === 'hospitality' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Hospitality</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Hospitality venues depend on lighting to create ambiance, enhance guest experiences, and operate efficiently. LED lighting transforms hotels, restaurants, and leisure facilities - reducing energy costs by up to 80% while delivering the quality, flexibility, and control that creates memorable guest experiences.</Body>
                              <Body>Our funded solutions mean hoteliers can upgrade without capital expenditure, while smart controls enable dynamic lighting schemes that adapt throughout the day and for different events, creating the perfect atmosphere while minimizing energy waste.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for hospitality:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Create engaging guest experiences',
                                'Flexible lighting for different occasions',
                                'Improve staff working environments',
                                'Meet sustainability expectations',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Challenges Hospitality Faces — And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Guest Experience',
                              desc: 'Lighting is critical to creating the right ambiance and guest satisfaction.',
                              features: [
                                'Excellent color rendering and quality',
                                'Dimmable and controllable',
                                'Dynamic scenes for different times/events',
                                'Consistent performance',
                              ],
                            },
                            {
                              title: '24/7 Operation',
                              desc: 'Lighting is in use continuously in many areas.',
                              features: [
                                'Exceptional lifespan reduces disruption',
                                'Reliable operation 24/7/365',
                                'Minimal maintenance requirements',
                                'Smart controls optimize usage',
                              ],
                            },
                            {
                              title: 'Sustainability Credentials',
                              desc: 'Guests increasingly choose venues based on environmental practices.',
                              features: [
                                'Significant carbon reduction',
                                'Enhanced ESG credentials',
                                'Demonstrate environmental commitment',
                                'Support green certifications',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            Our LED solutions are designed for hospitality — delivering the ambiance and flexibility that creates memorable experiences while dramatically reducing the costs of lighting your venue.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activeCorporateTab === 'industrial' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Industrial</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Industrial and warehouse facilities demand robust, high-output lighting that operates reliably in challenging environments. LED lighting transforms industrial spaces — reducing energy costs by up to 80% while delivering superior light quality, instant start-up, and minimal maintenance that keeps operations running smoothly.</Body>
                              <Body>Our funded solutions mean facility managers can upgrade without capital expenditure, while smart controls and monitoring ensure optimal performance and enable predictive maintenance.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Key benefits for industrial:</H3>
                            <ul className="space-y-4">
                              {[
                                'Reduce energy costs by up to 80%',
                                'Improve workplace safety and productivity',
                                'Minimal maintenance and downtime',
                                'Instant start-up in all conditions',
                                'Robust and reliable in harsh environments',
                                'Funded solutions with no upfront capital',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Challenges Industrial Faces — And How LED Helps</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Safety & Visibility',
                              desc: 'Good lighting is essential for safety, quality control, and productivity.',
                              features: [
                                'High light output and uniformity',
                                'Excellent color rendering for inspection',
                                'Instant start-up (no warm-up time)',
                                'Reliable operation in all conditions',
                              ],
                            },
                            {
                              title: 'Maintenance Access',
                              desc: 'High-bay lighting is difficult and expensive to maintain.',
                              features: [
                                'Exceptional lifespan (50,000+ hours)',
                                'Reduced replacement frequency',
                                'Lower maintenance costs',
                                'Minimal operational disruption',
                              ],
                            },
                            {
                              title: 'Harsh Environments',
                              desc: 'Industrial environments can be dusty, dirty, hot, or cold.',
                              features: [
                                'Robust construction (IP65+ available)',
                                'Wide operating temperature range',
                                'Resistant to vibration and impact',
                                'Reliable performance in harsh conditions',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            Our LED solutions are engineered for industrial environments — delivering the robustness, reliability, and performance your operations demand.
                          </Body>
                        </div>
                      </div>
                    )}

                    <div className="text-center mt-12">
                      <ButtonLink href="/energy/contact" variant="primary">Book a Free Energy Survey</ButtonLink>
                    </div>
                  </div>
                </Section>
              </div>
            )}

            {activeSectorTab === 'public' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">LED Lighting Solutions for Public Sector Buildings</H2>
                      <Body className="text-lg">
                        Public sector organizations face unique pressures to deliver value while meeting sustainability targets. Our LED solutions enable comprehensive upgrades without capital expenditure, funded through operational savings.
                      </Body>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'local', label: 'Local Authorities' },
                        { id: 'nhs', label: 'NHS & Health' },
                        { id: 'gov', label: 'Government' },
                        { id: 'emergency', label: 'Emergency Services' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActivePublicTab(tab.id)}
                          className={
                            'px-6 py-2 rounded-lg font-bold transition-all border-2 ' +
                            (activePublicTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-unifi-blue'
                              : 'bg-unifi-gray text-unifi-gray-dark border-transparent hover:border-unifi-blue/30')
                          }
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {activePublicTab === 'local' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Modernize Public Buildings. Protect Budgets. Deliver Sustainability.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Local authorities manage diverse building portfolios - from council offices to community centers, libraries to leisure facilities. Energy costs continue to rise while budgets remain constrained, creating impossible choices between service delivery and infrastructure investment.</Body>
                              <Body>Outdated lighting systems waste public money every day. But with capital budgets under intense pressure, comprehensive LED upgrades often get deferred year after year, despite clear payback periods and carbon reduction benefits.</Body>
                              <Body>Public accountability demands value for money and demonstrable progress toward net zero commitments. LED retrofits deliver both - but only if funding barriers can be removed.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps local authorities deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED retrofits across public buildings',
                                'Immediate reductions in energy spend and maintenance burden',
                                'Phased delivery planned around public access and service continuity',
                                'Verifiable carbon reporting aligned with local authority targets',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePublicTab === 'nhs' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Shield className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Better Lighting. Better Care. Lower Energy Costs.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>NHS facilities operate 24/7 with extensive lighting demands across clinical, administrative, and support areas. Energy costs represent a substantial portion of operational budgets - money that could otherwise support frontline care.</Body>
                              <Body>Healthcare environments require specific lighting quality for patient safety, staff wellbeing, and clinical effectiveness. LED technology delivers superior light quality while dramatically reducing energy consumption and maintenance requirements.</Body>
                              <Body>With NHS trusts under constant financial pressure and capital investment scrutinized intensely, comprehensive LED upgrades face significant barriers despite clear benefits. Our funding model removes these obstacles.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps NHS & health estates deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across clinical and non-clinical areas',
                                'Cashflow-positive projects paid from operational savings, protecting patient care budgets',
                                'Superior lighting quality supporting patient recovery and staff wellbeing',
                                'Reduced maintenance burden freeing estates teams for critical tasks',
                                'Significant carbon reduction supporting NHS net zero commitments',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Healthcare Sector Challenges We Address</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: '24/7 Operations',
                              desc: 'Continuous operation with high lighting demands across diverse clinical areas.',
                              features: [
                                'Massive energy savings from LED efficiency',
                                'Lower cooling costs from reduced heat output',
                                'Reliable operation critical for patient safety',
                              ],
                            },
                            {
                              title: 'Lighting Quality Critical',
                              desc: 'Clinical requirements demand specific lighting characteristics for safety and effectiveness.',
                              features: [
                                'Superior color rendering for clinical accuracy',
                                'Flicker-free operation reducing eye strain',
                                'Appropriate light levels for different clinical areas',
                              ],
                            },
                            {
                              title: 'Maintenance Complexity',
                              desc: 'Accessing and maintaining lighting in clinical areas requires careful coordination.',
                              features: [
                                '10x longer LED lifespan reduces access requirements',
                                'Minimal disruption to clinical operations',
                                'Reduced infection control concerns',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            With LED retrofits, NHS organizations redirect wasted energy spend into modern infrastructure that supports better patient outcomes and staff wellbeing while reducing operational costs.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activePublicTab === 'gov' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Building className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Modern Government Buildings. Fiscal Responsibility. Climate Leadership.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Government departments and agencies manage substantial building portfolios with diverse requirements - from ministerial offices to operational facilities. Energy efficiency improvements are policy priorities, but capital constraints often delay implementation.</Body>
                              <Body>Public sector organizations face intense scrutiny over spending decisions while being expected to demonstrate climate leadership. LED retrofits deliver both fiscal responsibility and environmental progress - if funding barriers can be overcome.</Body>
                              <Body>Traditional procurement processes and capital approval cycles make rapid LED deployment challenging. Our funding model enables departments to move quickly while maintaining full transparency and value for money.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps government estates deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across government estate - no capital approval delays',
                                'Cashflow-positive projects with transparent, auditable funding structures',
                                'Rapid deployment supporting ministerial commitments and policy objectives',
                                'Significant carbon reduction demonstrating climate leadership',
                                'Comprehensive energy reporting for transparency and accountability',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Government Sector Challenges We Address</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Procurement Complexity',
                              desc: 'Traditional capital procurement creates delays and limits deployment pace.',
                              features: [
                                'Streamlined funded approach',
                                'Faster deployment without capital delays',
                                'Full transparency and auditability',
                              ],
                            },
                            {
                              title: 'Value for Money Scrutiny',
                              desc: 'Every spending decision must demonstrate clear public value and return.',
                              features: [
                                'Verifiable energy and cost savings',
                                'Transparent financial structures',
                                'Clear ROI for public investment',
                              ],
                            },
                            {
                              title: 'Policy Leadership Requirements',
                              desc: 'Government departments expected to lead on climate action and sustainability.',
                              features: [
                                'Significant carbon reduction from LED upgrades',
                                'Demonstrable progress toward net zero',
                                'Setting example for wider public sector',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            With LED retrofits, government departments demonstrate fiscal responsibility and climate leadership simultaneously — modernizing infrastructure while protecting public funds.
                          </Body>
                        </div>
                      </div>
                    )}

                    {activePublicTab === 'emergency' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Shield className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Reliable Lighting for Critical Operations. Zero Compromise on Safety.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Emergency service facilities - fire stations, police stations, ambulance stations - require reliable, high-quality lighting for operational readiness around the clock. Energy costs are significant, but upgrading infrastructure competes with frontline equipment and staffing needs.</Body>
                              <Body>These mission-critical facilities cannot tolerate lighting failures or quality compromises. LED technology delivers superior reliability and instant-on performance while dramatically reducing energy consumption and maintenance requirements.</Body>
                              <Body>For emergency service managers, protecting operational budgets is paramount. Our funding model enables comprehensive LED modernization without impacting frontline resources.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps emergency services deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                'Fully funded LED lighting upgrades across operational and administrative facilities',
                                'Cashflow-positive projects paid from energy savings, protecting frontline budgets',
                                'Superior lighting reliability critical for 24/7 emergency operations',
                                'Instant-on LED technology ensuring immediate full light output when needed',
                                'Reduced maintenance burden freeing estates teams for critical tasks',
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-10">Emergency Services Challenges We Address</H3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: 'Operational Reliability',
                              desc: 'Lighting must support 24/7 emergency response without failure.',
                              features: [
                                'Superior LED reliability vs traditional',
                                'Instant-on, no warm-up delays',
                                'Consistent performance in all conditions',
                              ],
                            },
                            {
                              title: 'Budget Protection',
                              desc: 'Infrastructure investment must not compromise frontline service capability.',
                              features: [
                                'Zero impact on operational budgets',
                                'Immediate energy cost savings',
                                'Resources stay focused on frontline delivery',
                              ],
                            },
                            {
                              title: 'Maintenance Efficiency',
                              desc: 'Estates teams need to focus on operational readiness, not lighting maintenance.',
                              features: [
                                '10x longer LED lifespan',
                                'Minimal maintenance intervention required',
                                'Reduced disruption to operational areas',
                              ],
                            },
                          ].map((c) => (
                            <div key={c.title} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray animate-fade-in-up text-center">
                              <H3 className="text-lg mb-3">{c.title}</H3>
                              <Body className="text-unifi-gray-dark">{c.desc}</Body>
                              <ul className="mt-5 space-y-2">
                                {c.features.map((f) => (
                                  <li key={f} className="text-sm font-bold text-unifi-blue flex items-center justify-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Body className="text-unifi-gray-dark text-center">
                            With LED retrofits, emergency services gain modern, reliable lighting infrastructure that supports operational readiness while delivering significant energy savings that protect frontline budgets.
                          </Body>
                        </div>
                      </div>
                    )}

                    <div className="text-center mt-12">
                      <ButtonLink href="/energy/contact" variant="primary">Book a Free Energy Survey</ButtonLink>
                    </div>
                  </div>
                </Section>
              </div>
            )}
</motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-unifi-blue rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
            <H2 className="text-white mb-6">Ready to Start Your Decarbonisation Journey?</H2>
            <Body className="text-white/80 text-lg mb-8">
              Join hundreds of organisations already saving millions in energy costs while protecting the planet.
            </Body>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="bg-white border-white text-unifi-blue hover:bg-white/90"
              >
                Book an Energy Audit
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Talk to a Specialist
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
