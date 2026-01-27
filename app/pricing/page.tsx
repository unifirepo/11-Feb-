import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Pricing
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-gray-600">
              Flexible pricing plans to suit your needs
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Choose the plan that works best for your organization
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Plans Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Select the plan that aligns with your business requirements and scale as you grow.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Starter
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Perfect for small teams getting started
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Ideal for growing businesses with advanced needs
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Comprehensive solution for large organizations
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Details Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Custom Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            For organizations with unique requirements, we offer custom pricing solutions. 
            Contact our sales team to discuss your specific needs and receive a tailored 
            quote that fits your budget and objectives.
          </p>
        </div>
      </Section>
    </>
  );
}
