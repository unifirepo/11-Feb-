import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function Support() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Support
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-gray-600">
              We're here to help you succeed
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Get the assistance you need, when you need it
            </p>
          </div>
        </div>
      </Section>

      {/* Support Options Section */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Support Options
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Choose the support channel that works best for you. Our team is ready to assist.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Help Center
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Browse our knowledge base for answers to common questions
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Support
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Get expert assistance with technical issues and troubleshooting
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Forum
              </h3>
              <p className="text-base md:text-lg text-gray-700">
                Connect with other users and share experiences
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Support Details Section */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Getting Help
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Our support team is committed to providing timely and effective assistance. 
            Whether you need help getting started, troubleshooting an issue, or have 
            questions about advanced features, we're here to help you every step of the way.
          </p>
        </div>
      </Section>
    </>
  );
}
