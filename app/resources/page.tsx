import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import Section from '@/src/components/Section';
import Text from '@/src/components/Text';

const resourceCards = [
  {
    title: 'Platform overview',
    description:
      'Understand Cortex and how it supports safety, occupancy, energy, and compliance in one operating model.',
    href: '/platform/overview',
    cta: 'Read platform overview',
  },
  {
    title: 'Fire safety',
    description: 'A practical, compliance-led route to proactive control and audit-ready evidence.',
    href: '/solutions/fireguard',
    cta: 'Explore FireGuard',
  },
  {
    title: 'Energy',
    description: 'How to prioritise upgrades and funding logic without speculative claims or unsupported statistics.',
    href: '/energy/hub',
    cta: 'Explore Energy',
  },
];

export default function Resources() {
  return (
    <>
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Resources
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">A structured library for decision makers: explainers, pathways, and clear next steps.</Text>
            <Text variant="body">Content is written to be conservative, credible, and compliance-led.</Text>
          </div>
        }
        actions={
          <PageActions>
            <ButtonLink href="/solutions/hub">Explore solutions</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </PageActions>
        }
      />

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Text as="h2" variant="h2" className="mb-3">
                Start here
              </Text>
              <Text variant="body" className="mb-10">
                These pages explain the core routes and language used across the site.
              </Text>

              <div className="grid md:grid-cols-2 gap-6">
                {resourceCards.map((card) => (
                  <Card key={card.href}>
                    <Text as="h3" variant="h3" className="mb-2">
                      {card.title}
                    </Text>
                    <Text variant="body" className="mb-6">
                      {card.description}
                    </Text>
                    <ButtonLink href={card.href}>{card.cta}</ButtonLink>
                  </Card>
                ))}
              </div>
            </div>

            <ImagePlaceholder className="aspect-[4/3]" label="Resources illustration" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Text as="h2" variant="h2" className="mb-3">
              Need a clear next step?
            </Text>
            <Text variant="body" className="mb-10">
              If you’re deciding where to start, use the sector and role pages to enter by context.
            </Text>
            <PageActions>
              <ButtonLink href="/sectors" variant="secondary">
                Explore sectors
              </ButtonLink>
              <ButtonLink href="/roles" variant="secondary">
                Explore roles
              </ButtonLink>
            </PageActions>
          </div>
        </div>
      </Section>
    </>
  );
}
