import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function InsureLink() {
  return (
    <>
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            InsureLink
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              InsureLink is a structured pathway for linking building evidence and outcomes to
              assurance and risk conversations.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              This page is intentionally minimal until approved detail is provided.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact">Discuss InsureLink</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary">
              Back to solutions
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Purpose</h2>
            <p className="text-base md:text-lg text-gray-700">
              Designed for decision makers who need credible, evidence-led reporting and clear
              accountability.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
