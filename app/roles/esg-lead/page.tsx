import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function RoleESGLead() {
  return (
    <>
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            ESG Lead
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Verifiable data and reporting aligned to real constraints built to withstand scrutiny.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Focused on outcomes, not automation hype.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/energy/hub">Decarbonisation hub</ButtonLink>
            <ButtonLink href="/platform/overview" variant="secondary">
              Cortex overview
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
