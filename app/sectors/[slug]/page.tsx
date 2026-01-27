import { notFound } from 'next/navigation';

import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import { getSectorBySlug, sectors } from '@/src/content/sectors';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sectors.filter((s) => !s.comingSoon).map((s) => ({ slug: s.slug }));
}

export default async function SectorPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector || sector.comingSoon) notFound();

  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-600 mb-3">Sector</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              {sector.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">{sector.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/contact">Talk to us</ButtonLink>
              <ButtonLink href="/solutions/hub" variant="secondary">
                Explore solutions
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              What this pathway is designed to do
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              A practical route through Unifi.id that maps to the pressures and constraints of this
              sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sector.keyOutcomes.map((outcome) => (
              <Card key={outcome}>
                <p className="text-base md:text-lg text-gray-800">{outcome}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Recommended routes */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Recommended routes
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Choose a starting point based on whether you need visibility first, immediate risk
              reduction, or cost control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sector.recommendedRoutes.map((route) => (
              <Card key={route.href}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{route.label}</h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">{route.description}</p>
                <ButtonLink href={route.href} variant="secondary">
                  View {route.label}
                </ButtonLink>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Next steps */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Next steps</h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you want to validate fit quickly, we can map your estate, priorities, and compliance
              needs to the right route.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/contact">Contact</ButtonLink>
              <ButtonLink href="/sectors" variant="secondary">
                Back to sectors
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
