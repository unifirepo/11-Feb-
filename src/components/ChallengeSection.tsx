import { homeContent } from '@/src/content/home';
import { Section } from './Section';
import Card from './Card';
import Text from './Text';

export default function ChallengeSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <Text as="h2" variant="h2" className="mb-6">
          {homeContent.challenge.title}
        </Text>
        <Text variant="body" className="mb-8">
          {homeContent.challenge.intro}
        </Text>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {homeContent.challenge.cards.map((card, index) => (
            <Card key={index} seed={`${card.title}-${index}`} imageSrc={card.image} imageAlt={card.title}>
              <Text as="h3" variant="h3" className="mb-2">
                {card.title}
              </Text>
              <Text variant="body">{card.description}</Text>
            </Card>
          ))}
        </div>
        <Text variant="body">{homeContent.challenge.closing}</Text>
      </div>
    </Section>
  );
}
