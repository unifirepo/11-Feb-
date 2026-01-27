import { homeContent } from '@/src/content/home';
import Section from './Section';
import Text from './Text';

export default function HeroSection() {
  return (
    <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Headline */}
        <Text as="h1" variant="h1" className="mb-6">
          {homeContent.hero.headline}
        </Text>

        {/* Supporting lines */}
        <div className="space-y-4">
          {homeContent.hero.supportingLines.map((line, index) => (
            <Text key={index} variant="lead">
              {line}
            </Text>
          ))}
        </div>
      </div>
    </Section>
  );
}
