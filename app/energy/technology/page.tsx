import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

const tech = [
  {
    title: 'LED lighting',
    description:
      'A practical, low-disruption route to reduce waste and improve reliability.',
  },
  {
    title: 'Heating & HVAC',
    description:
      'Improve control and performance with a focus on compliance and operational impact.',
  },
  {
    title: 'Solar & renewables',
    description:
      'A structured approach to generation aligned to constraints and verification.',
  },
];

export default function EnergyTechnology() {
  return (
    <>
      <Section className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Our Technology
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Explore technology pathways for funded upgrades.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Content remains conservative and outcome-led until detailed, approved copy is provided.
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

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tech.map((t) => (
              <Card key={t.title}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-base md:text-lg text-gray-700">{t.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
