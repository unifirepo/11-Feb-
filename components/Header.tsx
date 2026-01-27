'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  label: string;
  items: NavLink[];
};

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`.trim()}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | 'solutions' | 'roles' | 'energy'>(null);

  const solutionsGroup: NavGroup = useMemo(
    () => ({
      label: 'Solutions',
      items: [
        { href: '/solutions/hub', label: 'Solutions Hub' },
        { href: '/solutions/fireguard', label: 'FireGuard Platform' },
        { href: '/solutions/insurelink', label: 'InsureLink' },
      ],
    }),
    []
  );

  const rolesGroup: NavGroup = useMemo(
    () => ({
      label: 'Roles',
      items: [
        { href: '/roles/ceo', label: 'CEO' },
        { href: '/roles/cfo', label: 'CFO' },
        { href: '/roles/facilities', label: 'Facilities' },
        { href: '/roles/esg-lead', label: 'ESG Lead' },
        { href: '/roles/fire-safety', label: 'Fire Safety' },
      ],
    }),
    []
  );

  const energyGroup: NavGroup = useMemo(
    () => ({
      label: 'Decarbonisation Hub',
      items: [
        { href: '/energy/technology', label: 'Our Technology' },
        { href: '/energy/funding-options', label: 'Funding Options' },
        { href: '/energy/monitoring', label: 'Energy Monitoring' },
        { href: '/energy/the-energy-trap', label: 'The Energy Trap' },
        { href: '/energy/energy-club', label: 'Unifi.id Energy Club' },
        { href: '/energy/contact', label: 'Energy Contact' },
      ],
    }),
    []
  );

  const topLinks: NavLink[] = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/platform', label: 'Platform' },
      { href: '/sectors', label: 'Industries' },
      { href: '/resources', label: 'Resources' },
      { href: '/partners', label: 'Partners' },
      { href: '/contact', label: 'Contact / Book a Demo' },
    ],
    []
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v);
    setOpenDropdown(null);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo placeholder */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Logo
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {topLinks
              .filter((l) => l.label !== 'Contact / Book a Demo')
              .map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  {route.label}
                </Link>
              ))}

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown((v) => (v === 'solutions' ? null : v))}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'solutions'}
                onClick={() => setOpenDropdown((v) => (v === 'solutions' ? null : 'solutions'))}
              >
                <span>{solutionsGroup.label}</span>
                <ChevronDown className={openDropdown === 'solutions' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openDropdown === 'solutions' && (
                <div
                  role="menu"
                  className="absolute z-50 mt-3 w-60 rounded-lg border border-gray-200 bg-white shadow-sm p-2"
                >
                  {solutionsGroup.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Roles dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('roles')}
              onMouseLeave={() => setOpenDropdown((v) => (v === 'roles' ? null : v))}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'roles'}
                onClick={() => setOpenDropdown((v) => (v === 'roles' ? null : 'roles'))}
              >
                <span>Roles</span>
                <ChevronDown className={openDropdown === 'roles' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openDropdown === 'roles' && (
                <div
                  role="menu"
                  className="absolute z-50 mt-3 w-60 rounded-lg border border-gray-200 bg-white shadow-sm p-2"
                >
                  {rolesGroup.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Decarbonisation Hub dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('energy')}
              onMouseLeave={() => setOpenDropdown((v) => (v === 'energy' ? null : v))}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'energy'}
                onClick={() => setOpenDropdown((v) => (v === 'energy' ? null : 'energy'))}
              >
                <span>{energyGroup.label}</span>
                <ChevronDown className={openDropdown === 'energy' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openDropdown === 'energy' && (
                <div
                  role="menu"
                  className="absolute z-50 mt-3 w-72 rounded-lg border border-gray-200 bg-white shadow-sm p-2"
                >
                  {energyGroup.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact link */}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Contact / Book a Demo
            </Link>

            {/* Book a Demo button */}
            <Link
              href="/contact"
              className="inline-block px-5 py-2 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle mobile menu"
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {topLinks.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={closeAll}
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                >
                  {route.label}
                </Link>
              ))}

              <div className="pt-2 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-2">Solutions</div>
                <div className="flex flex-col">
                  {solutionsGroup.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-2">Roles</div>
                <div className="flex flex-col">
                  {rolesGroup.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-2">Decarbonisation Hub</div>
                <div className="flex flex-col">
                  {energyGroup.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={closeAll}
                className="mt-2 inline-block px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors text-center"
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
