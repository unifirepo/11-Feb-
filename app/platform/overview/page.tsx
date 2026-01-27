import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import Section from '@/src/components/Section';
import Text from '@/src/components/Text';

export default function PlatformOverview() {
  return (
    <>
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Cortex
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">
              Cortex is the intelligence layer that unifies safety, occupancy, energy, and compliance into one decision system.
            </Text>
            <Text variant="lead">
              It is designed for people running complex estates not for dashboards that create noise.
            </Text>
          </div>
        }
        actions={
          <PageActions>
            <ButtonLink href="/solutions/hub">Explore solutions</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Talk to Unifi
            </ButtonLink>
          </PageActions>
        }
      />

      {/* Definition + Value */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <Text as="h2" variant="h2" className="mb-3">
              A decision system, not just software
            </Text>
            <Text variant="body">
              Cortex helps organisations move from reactive building management to controlled, verifiable outcomes with clear accountability.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Unify data</Text>
              <Text variant="body">Bring fragmented building inputs into a consistent system of record.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Prioritise action</Text>
              <Text variant="body">Support decisions with evidence what matters, whats next, and why.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Prove outcomes</Text>
              <Text variant="body">Enable reporting that stands up to scrutiny financial, operational, and compliance.</Text>
            </Card>
          </div>
        </div>
      </Section>

      {/* What it replaces */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
            <div className="max-w-3xl">
              <Text as="h2" variant="h2" className="mb-3">What Cortex replaces</Text>
              <Text variant="body">
                Most estates teams are forced to manage risk and energy through disconnected tools, spreadsheets, and reactive workflows. Cortex replaces fragmentation with a coherent operating model.
              </Text>
            </div>
            <ImagePlaceholder className="aspect-[16/10]" label="Platform illustration" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Disconnected systems</Text>
              <Text variant="body">Multiple vendors, no shared truth, and inconsistent reporting.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Reactive compliance</Text>
              <Text variant="body">Chasing evidence after the fact instead of managing control in real time.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Manual coordination</Text>
              <Text variant="body">Important decisions locked in email threads and fragmented task trackers.</Text>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who it is for + CTA */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <Text as="h2" variant="h2" className="mb-3">Who Cortex is for</Text>
            <Text variant="body">
              Cortex is designed for decision makers and delivery teams who need defensible outcomes across safety, cost, and carbon.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Estates & facilities</Text>
              <Text variant="body">Reduce operational risk, improve visibility, and create repeatable processes.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">Finance & ESG</Text>
              <Text variant="body">Understand cost drivers, verify upgrades, and report performance credibly.</Text>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/solutions/hub">
              See how Cortex supports FireGuard and Energy
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
