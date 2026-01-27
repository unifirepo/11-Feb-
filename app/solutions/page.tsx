import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function Solutions() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Solutions
              </h1>
              <div className="space-y-4 mb-8 max-w-3xl">
                <p className="text-lg md:text-xl text-gray-600">
                  Tailored solutions for your business challenges
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Innovative approaches to drive your success
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <PlaceholderImage className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions Grid Section */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Discover how our solutions can address your specific business needs and challenges.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise Solutions
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Comprehensive solutions designed for large-scale organizations
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Solutions
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Tailored approaches built specifically for your unique requirements
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Integrated Solutions
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Seamlessly connect and optimize your existing systems
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Details Section */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Solution Approach
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Our solutions are built on a foundation of deep industry expertise and 
            cutting-edge technology. We work closely with you to understand your 
            challenges and deliver results that make a meaningful impact on your business.
          </p>
        </div>
      </Section>
    </>
  );
}
