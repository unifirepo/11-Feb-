import { homeContent } from '@/src/content/home';
import { Section } from './Section';
import { ButtonLink } from './ButtonLink';
import Card from './Card';
import Text from './Text';

export default function SolutionsSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <Text as="h2" variant="h2" className="mb-6">
          {homeContent.solutions.title}
        </Text>
        <Text variant="body" className="mb-10">
          {homeContent.solutions.intro}
        </Text>
        <div className="grid md:grid-cols-3 gap-6">
          {homeContent.solutions.cards.map((card, index) => (
            <Card key={index} seed={`${card.title}-${index}`} imageSrc={card.image} imageAlt={card.title}>
              <Text as="h3" variant="h3" className="mb-2">
                {card.title}
              </Text>
              <Text variant="body" className="mb-4">
                {card.description}
              </Text>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-6 space-y-1">
                {card.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
              <ButtonLink href={card.cta.href}>{card.cta.text}</ButtonLink>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
