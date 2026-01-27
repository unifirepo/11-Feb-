import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function EnergyMonitoring() {
  return (
    <>
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Energy Monitoring
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              A structured approach to monitoring that supports decision making and reporting.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              This page is intentionally minimal until approved detail is provided.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/energy/hub">Back to hub</ButtonLink>
            <ButtonLink href="/energy/contact" variant="secondary">
              Energy contact
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
