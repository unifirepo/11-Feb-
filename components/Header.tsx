'use client';

import Link from 'next/link';
import { useMemo, useState, useEffect, useRef } from 'react';
import { m, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    // Hide header when scrolling down, show when scrolling up
    if (latest < 10) {
      // Always show at the very top
      setIsHeaderVisible(true);
    } else if (latest > lastScrollY.current) {
      // Scrolling down - hide header
      setIsHeaderVisible(false);
    } else {
      // Scrolling up - show header
      setIsHeaderVisible(true);
    }
    
    lastScrollY.current = latest;
  });

  // Close mobile menu when header hides
  useEffect(() => {
    if (!isHeaderVisible && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isHeaderVisible, isMobileMenuOpen]);

  const navLinks: NavLink[] = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/platform/overview', label: 'Platform' },
    { href: '/sectors/hub', label: 'Industries' },
    { href: '/resources', label: 'Resources' },
    { href: '/partners', label: 'Partners' },
    { href: '/solutions/hub', label: 'Solutions' },
    { href: '/roles/hub', label: 'Roles' },
    { href: '/energy', label: 'Decarbonisation Hub' },
    { href: '/contact', label: 'Contact' },
  ], []);

  // Header is black if it's not the home page OR if it's scrolled on the home page
  const isBlackHeader = !isHomePage || isScrolled;

  return (
    <m.header
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isBlackHeader 
          ? 'bg-black border-b border-white/10 py-3' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/unifi-assets/logo.png"
                alt="Unifi.id"
                className={`transition-all duration-500 ${isBlackHeader ? 'h-8 lg:h-10' : 'h-10 lg:h-12'} w-auto brightness-0 invert`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Visible on large screens and up */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 flex-1 justify-end min-w-0">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} link={link} />
            ))}
            
            {/* Book a Demo Button */}
            <Link
              href="/contact"
              className="px-4 xl:px-6 2xl:px-8 py-2 xl:py-2.5 rounded-sm font-bold text-[10px] xl:text-xs 2xl:text-sm uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0 ml-2"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Mobile Menu Button - Visible on screens smaller than lg */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors z-10 relative"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Outside container for full width, visible on screens smaller than lg when open */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t w-full shadow-lg transition-all duration-500 ${
          isBlackHeader 
            ? 'bg-black border-white/20' 
            : 'bg-white/10 backdrop-blur-md border-white/10'
        }`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full py-3 px-4 text-base font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
                    isBlackHeader
                      ? 'text-white hover:bg-white/20 active:bg-white/30'
                      : 'text-white hover:bg-white/10 active:bg-white/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-8 py-3 mt-2 rounded-sm font-bold text-sm uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-white transition-all duration-300 text-center cursor-pointer active:opacity-90"
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </m.header>
  );
}

function NavLinkItem({ link }: { link: NavLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-white/80 whitespace-nowrap flex-shrink-0"
    >
      {link.label}
      
      {/* Unifi.id Style Hover Line Animation */}
      <m.div
        initial={false}
        animate={{ 
          width: isHovered ? '100%' : '0%',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 h-[2px] bg-white"
      />
    </Link>
  );
}
