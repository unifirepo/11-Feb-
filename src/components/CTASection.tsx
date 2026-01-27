import { homeContent } from '@/src/content/home';
import Section from './Section';
import ButtonLink from './ButtonLink';
import Text from './Text';

export default function CTASection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <Text as="h2" variant="h2" className="mb-6">
          {homeContent.cta.title}
        </Text>
        <Text variant="body" className="mb-10">
          {homeContent.cta.description}
        </Text>
        <div className="flex flex-col sm:flex-row gap-4">
          {homeContent.cta.buttons.map((button, index) => (
            <ButtonLink key={index} href={button.href}>
              {button.text}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
