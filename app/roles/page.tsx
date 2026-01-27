import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import Section from '@/src/components/Section';
import Text from '@/src/components/Text';

const roles = [
  {
    title: 'CEO',
    description: 'Executive visibility on risk, cost drivers, and outcomes across estates.',
    href: '/roles/ceo',
  },
  {
    title: 'CFO',
    description: 'Financially literate decision support and verifiable outcomes.',
    href: '/roles/cfo',
  },
  {
    title: 'Facilities',
    description: 'Practical control for day-to-day delivery and consistent evidence.',
    href: '/roles/facilities',
  },
  {
    title: 'ESG Lead',
    description: 'Evidence-led reporting designed to withstand scrutiny.',
    href: '/roles/esg-lead',
  },
  {
    title: 'Fire Safety',
    description: 'Audit-ready compliance routes and proactive control.',
    href: '/roles/fire-safety',
  },
];

export default function Roles() {
  return (
    <>
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Roles
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">
              Unifi.id is built for decision makers and delivery teams responsible for safety, cost, and carbon.
            </Text>
            <Text variant="body">
              Use this page to enter by role, then follow the pathways to platform, FireGuard, or Energy.
            </Text>
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

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Text as="h2" variant="h2" className="mb-3">
                Role pathways
              </Text>
              <Text variant="body" className="mb-10">
                Each pathway is written to match how decisions are made: risk, cost, compliance, and operational delivery.
              </Text>

              <div className="grid md:grid-cols-2 gap-6">
                {roles.map((role) => (
                  <Card key={role.href}>
                    <Text as="h3" variant="h3" className="mb-2">
                      {role.title}
                    </Text>
                    <Text variant="body" className="mb-6">
                      {role.description}
                    </Text>
                    <ButtonLink href={role.href} variant="secondary">
                      View role page
                    </ButtonLink>
                  </Card>
                ))}
              </div>
            </div>

            <ImagePlaceholder className="aspect-[4/3]" label="Roles illustration" />
          </div>

          <PageActions>
            <ButtonLink href="/platform/overview" variant="secondary">
              Cortex overview
            </ButtonLink>
            <ButtonLink href="/solutions/fireguard" variant="secondary">
              FireGuard
            </ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">
              Energy
            </ButtonLink>
          </PageActions>
        </div>
      </Section>
    </>
  );
}
