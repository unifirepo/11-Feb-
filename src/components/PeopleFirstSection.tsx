import { homeContent } from '@/src/content/home';
import { Section } from './Section';
import { ButtonLink } from './ButtonLink';
import Card from './Card';
import Text from './Text';

export default function PeopleFirstSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-7xl mx-auto px-6">
        <Text as="h2" variant="h2" className="mb-6">
          {homeContent.peopleFirst.title}
        </Text>
        <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 border-l-4 border-gray-300 pl-4">
          {homeContent.peopleFirst.quote}
        </blockquote>
        <Text variant="body" className="mb-10">
          {homeContent.peopleFirst.body}
        </Text>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {homeContent.peopleFirst.results.map((result, index) => (
            <Card key={index} seed={`${result.title}-${index}`} imageSrc={result.image} imageAlt={result.title}>
              <Text as="h3" variant="h3" className="mb-2">
                {result.title}
              </Text>
              <Text variant="body">{result.description}</Text>
            </Card>
          ))}
        </div>
        <ButtonLink href={homeContent.peopleFirst.cta.href}>
          {homeContent.peopleFirst.cta.text}
        </ButtonLink>
      </div>
    </Section>
  );
}
