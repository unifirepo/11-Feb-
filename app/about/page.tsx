import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import ImagePlaceholder from '@/src/components/ImagePlaceholder';
import PageActions from '@/src/components/PageActions';
import Section from '@/src/components/Section';
import Text from '@/src/components/Text';

export default function About() {
  return (
    <>
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            About Us
          </Text>
        }
        lead={
          <div className="space-y-3">
            <Text variant="lead">Every building tells a story.</Text>
            <Text variant="lead">How it’s used. How it breathes. How it wastes or saves.</Text>
          </div>
        }
        secondaryLead={
          <div className="space-y-3 mt-6">
            <Text variant="body">
              At Unifi.id, we give buildings the ability to listen, learn, and act — turning static spaces into living,
              intelligent environments.
            </Text>
            <Text variant="body">
              Unifi.id is a smart building intelligence company. We help organisations understand and optimise how people
              actually use their estates — delivering insights that cut costs, increase safety, strengthen compliance, and
              accelerate progress to net zero.
            </Text>
          </div>
        }
        actions={
          <PageActions>
            <ButtonLink href="/platform/overview">Explore the platform</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book a demo
            </ButtonLink>
          </PageActions>
        }
      />

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Text as="h2" variant="h2" className="mb-3">
                Our narrative of purpose
              </Text>
              <Text variant="body">
                People-first intelligence, delivered in a way that supports real operational teams. The goal is measurable
                outcomes: safer buildings, stronger compliance, and better control of cost and carbon.
              </Text>
            </div>
            <ImagePlaceholder className="aspect-[16/10]" label="Team / mission image" />
          </div>
        </div>
      </Section>

      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <Text as="h2" variant="h2" className="mb-3">
              Why Unifi.id
            </Text>
            <Text variant="body">
              We focus on building intelligence that strengthens decision making. No hype. No speculative claims.
              Just a structured route from fragmented systems to verified outcomes.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <Text as="h3" variant="h3" className="mb-2">
                Rapid ROI
              </Text>
              <Text variant="body">Rapid ROI on energy efficiency and net-zero initiatives.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">
                Increased safety
              </Text>
              <Text variant="body">Increased safety through real-time occupancy and fire intelligence.</Text>
            </Card>
            <Card>
              <Text as="h3" variant="h3" className="mb-2">
                Scalable roadmap
              </Text>
              <Text variant="body">
                A scalable roadmap to support both immediate savings and long-term transformation.
              </Text>
            </Card>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Text as="h2" variant="h2" className="mb-3">
              Next step
            </Text>
            <Text variant="body" className="mb-10">
              If you want to see how the platform connects to solutions across safety and energy, start with Cortex.
            </Text>
            <PageActions>
              <ButtonLink href="/platform/overview">Cortex overview</ButtonLink>
              <ButtonLink href="/solutions/hub" variant="secondary">
                Solutions hub
              </ButtonLink>
            </PageActions>
          </div>
        </div>
      </Section>
    </>
  );
}
