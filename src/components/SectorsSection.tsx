import { homeContent } from '@/src/content/home';
import Section from './Section';
import ButtonLink from './ButtonLink';
import Text from './Text';

export default function SectorsSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-7xl mx-auto px-6">
        <Text as="h2" variant="h2" className="mb-6">
          {homeContent.sectors.title}
        </Text>
        <Text variant="body" className="mb-10">
          {homeContent.sectors.intro}
        </Text>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Text as="h3" variant="h3" className="mb-4">
              {homeContent.sectors.bySector.title}
            </Text>
            <ul className="space-y-3 mb-6">
              {homeContent.sectors.bySector.items.map((item, index) => (
                <li key={index} className="text-base md:text-lg text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href={homeContent.sectors.bySector.cta.href}>
              {homeContent.sectors.bySector.cta.text}
            </ButtonLink>
          </div>
          <div>
            <Text as="h3" variant="h3" className="mb-4">
              {homeContent.sectors.byRole.title}
            </Text>
            <ul className="space-y-3 mb-6">
              {homeContent.sectors.byRole.items.map((item, index) => (
                <li key={index} className="text-base md:text-lg text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href={homeContent.sectors.byRole.cta.href}>
              {homeContent.sectors.byRole.cta.text}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
