import Section from './Section';

export default function StatsSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Evidence-led reporting
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            No statistics are shown here until approved sources are provided.
          </p>
        </div>
      </div>
    </Section>
  );
}
