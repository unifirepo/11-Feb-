import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function FundingOptions() {
  return (
    <>
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Funding Options
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Funding routes are designed to avoid unnecessary upfront capital where applicable.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Modelling remains conservative and evidence-led.
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

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Principles
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              No upfront capital where applicable. Cashflow positive where applicable. Conservative modelling only.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
