import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function RoleFacilities() {
  return (
    <>
      <Section className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Facilities
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Practical control for day-to-day delivery with consistent workflows and evidence-led
              reporting.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Designed to reduce reactive compliance and improve visibility across sites.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/solutions/fireguard">FireGuard</ButtonLink>
            <ButtonLink href="/platform/overview" variant="secondary">
              Cortex overview
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
