import Section from './Section';

export default function AboutSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          About Unifi.id
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Unifi.id is a people-first smart building and decarbonisation platform. This section is
          intentionally minimal and can be expanded with approved copy.
        </p>
      </div>
    </Section>
  );
}
