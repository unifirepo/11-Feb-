'use client';

import { useState, useEffect } from 'react';
import { homeContent } from '@/src/content/home';
import Text from './Text';
import Link from 'next/link';
import { m, TextReveal, COOL_EASE } from './motion';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = homeContent.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  /**
   * Exact Unifi.id Font Settings from DevTools:
   * Font Family: 'Ubuntu'
   * Font Size: 62px
   * Letter Spacing: -2px
   * 
   * Button Calculation (20% smaller than headline):
   * 62px * 0.8 = ~50px
   */

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Alternating Background Images with Direct Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <m.div 
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={slides[currentIndex].image}
              alt="Hero Background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </m.div>
        </AnimatePresence>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <m.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: COOL_EASE }}
              className="flex flex-col items-center"
            >
              {/* Headline - Exact Unifi.id Settings */}
              <TextReveal className="mb-10">
                <h1 
                  className="font-sans font-bold text-white drop-shadow-lg leading-[1.1]"
                  style={{ 
                    fontSize: '62px', 
                    letterSpacing: '-2px',
                    fontFamily: "'Ubuntu', sans-serif"
                  }}
                >
                  {slides[currentIndex].line}
                </h1>
              </TextReveal>
              
              {/* CTA Button - Oval Border, 20% smaller than headline */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: COOL_EASE }}
              >
                <Link 
                  href={slides[currentIndex].href}
                  className="inline-block px-10 py-4 font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ 
                    fontSize: '50px',
                    fontFamily: "'Ubuntu', sans-serif"
                  }}
                >
                  {slides[currentIndex].cta}
                </Link>
              </m.div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
