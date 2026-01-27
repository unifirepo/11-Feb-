import Section from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';
import Card from '@/src/components/Card';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Contact Us
              </h1>
              <div className="space-y-4 mb-8 max-w-3xl">
                <p className="text-lg md:text-xl text-gray-600">Get in touch with our team</p>
                <p className="text-lg md:text-xl text-gray-600">
                  We're here to help answer your questions
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <PlaceholderImage className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Information Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Reach out to us through any of the following channels. We'll respond as soon as possible.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-base md:text-lg text-gray-700">
                Send us an email and we'll get back to you
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-base md:text-lg text-gray-700">Call us during business hours</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-base md:text-lg text-gray-700">Visit us at our headquarters</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Fill out the form below and we'll get back to you promptly. 
            All fields are required to ensure we can assist you effectively.
          </p>
        </div>
      </Section>
    </>
  );
}
