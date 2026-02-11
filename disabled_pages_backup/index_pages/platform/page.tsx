'use client';
import { ButtonLink } from '@/src/components/ButtonLink';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import { Section } from '@/src/components/Section';
import Text from '@/src/components/Text';
import { SEO } from '@/src/components/SEO';

export default function PlatformHub() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Platform | Cortex™ Building Intelligence Layer"
        description="Cortex™ is the intelligence layer that unifies safety, occupancy, energy, and compliance. Discover how we connect building data into one system of record."
      />
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Platform
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">
              The platform hub provides a clear entry point to Cortex — the intelligence layer that unifies safety,
              occupancy, energy, and compliance.
            </Text>
            <Text variant="body">
              Start with the overview, then follow the pathways to Solutions and the sector or role pages.
            </Text>
          </div>
        }
        actions={
          <PageActions>
            <ButtonLink href="/platform/overview">View Cortex overview</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary">
              Explore solutions
            </ButtonLink>
          </PageActions>
        }
      />

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Text as="h2" variant="h2" className="mb-3">
                What the platform does
              </Text>
              <Text variant="body">
                Cortex connects occupancy, fire safety, energy, compliance, and reporting into one system of record.
                The purpose is decision support: clear priorities, clear evidence, and consistent outcomes.
              </Text>
            </div>
            <ImagePlaceholder className="aspect-[16/10]" label="Platform overview image" />
          </div>
        </div>
      </Section>
    </main>
  );
}
