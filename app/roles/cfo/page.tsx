import ButtonLink from '@/src/components/ButtonLink';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function RoleCFO() {
  return (
    <>
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">CFO</h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Understand cost drivers, prioritise investment, and verify outcomes without relying
              on speculative claims.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Focused on governance, reporting quality, and financially literate decision support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/energy/hub">Decarbonisation hub</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Book a demo
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
