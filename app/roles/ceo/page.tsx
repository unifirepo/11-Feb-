import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function RoleCEO() {
  return (
    <>
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                CEO
              </h1>
              <div className="space-y-4 mb-10 max-w-3xl">
                <p className="text-lg md:text-xl text-gray-600">
                  A clear view of operational risk, cost drivers, and outcomes across complex
                  estates.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Written for executive decisions: credibility first, with defensible reporting.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/platform/overview">Platform overview</ButtonLink>
                <ButtonLink href="/solutions/hub" variant="secondary">
                  Explore solutions
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <PlaceholderImage className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
