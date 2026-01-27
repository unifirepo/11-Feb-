import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import Section from '@/src/components/Section';
import Text from '@/src/components/Text';

const partnerTypes = [
  {
    title: 'Delivery partners',
    description: 'Specialists who support implementation and on-site delivery across estates and projects.',
  },
  {
    title: 'Technology partners',
    description: 'Tools and systems that connect into a coherent operating model where appropriate.',
  },
  {
    title: 'Sector partners',
    description:
      'Organisations aligned with compliance-led outcomes across public sector, education, and corporate estates.',
  },
];

export default function Partners() {
  return (
    <>
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Partners
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">Unifi.id works with partners who value credible delivery, clear accountability, and verifiable outcomes.</Text>
            <Text variant="body">The goal is consistency: the same operating model applied across buildings, teams, and programmes.</Text>
          </div>
        }
        actions={
          <PageActions>
            <ButtonLink href="/contact">Talk about partnering</ButtonLink>
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
                Partner pathways
              </Text>
              <Text variant="body" className="mb-10">
                This page provides a simple overview of partnership routes. Detailed criteria and programme information can
                be added without changing the site structure.
              </Text>

              <div className="grid md:grid-cols-2 gap-6">
                {partnerTypes.map((partner) => (
                  <Card key={partner.title}>
                    <Text as="h3" variant="h3" className="mb-2">
                      {partner.title}
                    </Text>
                    <Text variant="body">{partner.description}</Text>
                  </Card>
                ))}
              </div>
            </div>

            <ImagePlaceholder className="aspect-[4/3]" label="Partners illustration" />
          </div>

          <PageActions>
            <ButtonLink href="/contact">Contact</ButtonLink>
            <ButtonLink href="/platform" variant="secondary">
              Platform hub
            </ButtonLink>
          </PageActions>
        </div>
      </Section>
    </>
  );
}
