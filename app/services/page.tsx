import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Our Services
              </h1>
              <div className="space-y-4 mb-8 max-w-3xl">
                <p className="text-lg md:text-xl text-gray-600">
                  Comprehensive solutions for your business needs
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Tailored services designed to drive success
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <PlaceholderImage className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid Section */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Service Offerings
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Explore our range of services designed to help your business thrive.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consulting
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Expert guidance to help you make informed decisions
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementation
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Seamless deployment of solutions tailored to your needs
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Support
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Ongoing assistance to ensure optimal performance
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Services Section */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Additional Services
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Beyond our core offerings, we provide specialized services including 
            custom development, training programs, and strategic planning to support 
            your long-term growth and success.
          </p>
        </div>
      </Section>
    </>
  );
}
