import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-auto bg-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Language Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Language</h3>
            <p className="text-sm text-gray-300">English</p>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Address</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Level 39, One Canada Square</p>
              <p>Canary Wharf, E14 5AB</p>
              <p>London, UK</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <a href="mailto:info@unifi.id" className="hover:text-white transition-colors">
                  info@unifi.id
                </a>
              </p>
              <p>
                <a href="tel:+447785996916" className="hover:text-white transition-colors">
                  +44 (0) 7785 996 916
                </a>
              </p>
              <div className="pt-2 space-y-1">
                <p>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link href="/modern-slavery" className="hover:text-white transition-colors">
                    Modern Slavery Agreement
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Follow Us</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </p>
              <p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
