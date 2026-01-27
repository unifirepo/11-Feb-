import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function TheEnergyTrap() {
  return (
    <>
      <Section className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            The Energy Trap
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Many organisations are locked into waste: limited capital, rising costs, and competing priorities.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              This page frames the problem in financially literate terms without unsupported statistics.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/energy/hub">Back to hub</ButtonLink>
            <ButtonLink href="/energy/funding-options" variant="secondary">
              Funding options
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
