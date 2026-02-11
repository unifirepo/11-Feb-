'use client';
import HeroSection from '@/src/components/HeroSection';
import ChallengeSection from '@/src/components/ChallengeSection';
import CortexSection from '@/src/components/CortexSection';
import SolutionsSection from '@/src/components/SolutionsSection';
import SectorsSection from '@/src/components/SectorsSection';
import CTASection from '@/src/components/CTASection';
import { SEO } from '@/src/components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Unifi.id | Smarter Buildings. Safer People. Greener Futures."
        description="Unifi.id delivers real-time building intelligence that protects people, strengthens compliance, and optimises your entire estate for a greener future."
      />
      <HeroSection />
      <ChallengeSection />
      <CortexSection />
      <SolutionsSection />
      <SectorsSection />
      <CTASection />
    </>
  );
}
