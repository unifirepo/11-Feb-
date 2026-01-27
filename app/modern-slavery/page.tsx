import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function ModernSlavery() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Modern Slavery Agreement
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-gray-600">
              Modern Slavery Agreement page
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Our commitment to ethical practices
            </p>
          </div>
        </div>
      </Section>

      {/* Modern Slavery Content Section */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Modern Slavery Statement
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Modern Slavery Agreement page - This statement sets out the steps we have 
            taken to ensure that slavery and human trafficking are not taking place in 
            our business or supply chains. We are committed to acting ethically and with 
            integrity in all our business relationships.
          </p>
        </div>
      </Section>
    </>
  );
}
