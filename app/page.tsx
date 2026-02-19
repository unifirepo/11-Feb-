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
        title="unifi.id – Movement Intelligence with IoT – Seamless data solutions for smarter buildings"
        description="Analytics and data insights are vital to build a structure to attain your ESG targets and avoid greenwashing. Unifi.id"
        canonical="https://unifi.id/"
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
