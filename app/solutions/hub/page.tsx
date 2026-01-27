import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import Section from '@/src/components/Section';
import Text from '@/src/components/Text';

// Copy source: /Users/reeceforbes/Desktop/sriramcheedi-site/.../solutions-hub/index.html

const challengeRoutes = [
  {
    title: 'Access Control & Security',
    description: 'Detect anomalies, prevent risks, and respond in real time.',
  },
  {
    title: 'Fire Safety & Evacuation',
    description: 'Know your systems are ready and your people are safe.',
  },
  {
    title: 'Live Occupancy Intelligence',
    description: "See who’s in, where they are, and how spaces are used.",
  },
  {
    title: 'Operational Insights',
    description: 'Understand the causes behind trends, not just the patterns.',
  },
  {
    title: 'Energy Performance',
    description: 'Align energy use with real demand, reducing cost and carbon.',
  },
];

const moduleCards = [
  {
    title: 'SafeGuard',
    description: 'Access control and security intelligence.',
  },
  {
    title: 'FireSafe',
    description: 'Fire safety and evacuation intelligence.',
  },
  {
    title: 'Pulse',
    description: 'Live occupancy intelligence.',
  },
  {
    title: 'Predict & Insights',
    description: 'Operational insight and decision support.',
  },
  {
    title: 'Energy Intelligence',
    description: 'Energy performance intelligence.',
  },
];

export default function SolutionsHub() {
  return (
    <>
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Solutions Hub
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">Intelligent Solutons for a People-First Buildings World.</Text>
            <Text variant="body">
              The Unifi.id Solutions Hub brings together a suite of modular technologies designed to make your building
              safer, smarter, and more efficient. Each solution delivers immediate value — and when combined, forms a
              powerful ecosystem managed through LiveView and powered by Cortex™, our central intelligence layer.
            </Text>
          </div>
        }
        actions={
          <PageActions>
            <ButtonLink href="/platform/overview">Explore Cortex</ButtonLink>
            <ButtonLink href="/solutions/fireguard" variant="secondary">
              FireGuard Platform
            </ButtonLink>
          </PageActions>
        }
      />

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Text as="h2" variant="h2" className="mb-3">
                Intelligence That Works Across Your Estate
              </Text>
              <Text variant="body" className="mb-10">
                We’ve organised our solutions by the challenges you face.
              </Text>

              <div className="space-y-4">
                {challengeRoutes.map((item) => (
                  <Card key={item.title}>
                    <Text as="h3" variant="h3" className="mb-1">
                      {item.title}
                    </Text>
                    <Text variant="body">{item.description}</Text>
                  </Card>
                ))}
              </div>
            </div>

            <ImagePlaceholder className="aspect-[4/3]" label="Solutions illustration" />
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <Text as="h2" variant="h2" className="mb-3">
              Our Intelligence Modules turn building data into action.
            </Text>
            <Text variant="body">
              The modules below reflect the current structure of the solutions hub copy source. Detailed capabilities and
              use-cases can be added as approved.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {moduleCards.map((m) => (
              <Card key={m.title}>
                <Text as="h3" variant="h3" className="mb-2">
                  {m.title}
                </Text>
                <Text variant="body">{m.description}</Text>
              </Card>
            ))}
          </div>

          <PageActions>
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <ButtonLink href="/solutions/insurelink" variant="secondary">
              InsureLink
            </ButtonLink>
          </PageActions>
        </div>
      </Section>
    </>
  );
}
