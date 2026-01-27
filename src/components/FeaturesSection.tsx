import Section from './Section';

const features = [
  {
    title: 'Unified visibility',
    description:
      'Bring safety, occupancy, energy, and compliance into a consistent view for decision making.',
  },
  {
    title: 'Operational control',
    description:
      'Support teams with clear priorities, ownership, and defensible reporting.',
  },
  {
    title: 'Verified outcomes',
    description:
      'Enable evidence-based reporting without relying on unsupported statistics or hype.',
  },
];

export default function FeaturesSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Core capabilities
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            This section is intentionally conservative and can be expanded with approved copy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-base md:text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
