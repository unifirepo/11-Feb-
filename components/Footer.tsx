import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-auto bg-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Language Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Language</h3>
            <p className="text-sm text-gray-300 inline-flex items-center gap-2">
              <span aria-hidden className="text-base leading-none">🇬🇧</span>
              English
            </p>
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
                <p>
                  <Link href="/legal-support" className="hover:text-white transition-colors">
                    Legal & Support
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/unifi-id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Unifi.id on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/unifi_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Unifi.id on X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Unifiid-103314678961278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Unifi.id on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3cGjmwqWw4f37mR8yYBGLw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Unifi.id on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
