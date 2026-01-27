import { homeContent } from '@/src/content/home';
import Section from './Section';
import ButtonLink from './ButtonLink';
import Card from './Card';
import Text from './Text';

export default function CortexSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <Text as="h2" variant="h2" className="mb-6">
          {homeContent.cortex.title}
        </Text>
        <Text variant="body" className="mb-4">
          {homeContent.cortex.description}
        </Text>
        <Text variant="body" className="mb-10">
          {homeContent.cortex.intro}
        </Text>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {homeContent.cortex.pillars.map((pillar, index) => (
            <Card key={index}>
              <Text as="h3" variant="h3" className="mb-2">
                {pillar.title}
              </Text>
              <Text variant="body">{pillar.description}</Text>
            </Card>
          ))}
        </div>
        <Text variant="body" className="mb-6">
          {homeContent.cortex.note}
        </Text>
        <ButtonLink href={homeContent.cortex.cta.href}>
          {homeContent.cortex.cta.text}
        </ButtonLink>
      </div>
    </Section>
  );
}
