'use client';

import { useEffect, useMemo, useState } from 'react';
import { homeContent } from '@/src/content/home';
import Link from 'next/link';
import { m, COOL_EASE } from './motion';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { withBasePath } from '@/src/content/unifiAssets';

const ROTATE_MS = 5000;

export default function HeroSection() {
  const slides = homeContent.hero.slides;

  const totalSlides = useMemo(() => Math.max(slides?.length ?? 0, 1), [slides?.length]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [totalSlides]);

  const slide = slides?.length
    ? slides[slideIndex % slides.length]
    : {
        title: 'Unifi.id',
        caption:
          'Real-time building intelligence that protects people, strengthens compliance, and optimises your entire estate.',
        image: '/unifi-assets/hero-1a.webp',
        cta: { text: 'Explore Platform', href: '/platform/overview' },
      };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image Carousel (crossfade; no black flash) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync" initial={false}>
          <m.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: COOL_EASE }}
          >
            <Image src={withBasePath(slide.image)} alt="Hero Background" fill priority className="object-cover" />
          </m.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait" initial={false}>
            <m.h1
              key={slide.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.05, duration: 0.55, ease: COOL_EASE }}
              className="font-sans font-bold text-white drop-shadow-lg leading-[1.1] text-5xl md:text-6xl xl:text-7xl mb-6"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              {slide.title}
            </m.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <m.p
              key={`${slideIndex}-${slide.caption}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.18, duration: 0.55, ease: COOL_EASE }}
              className="text-lg md:text-2xl text-white/90 max-w-3xl mb-10"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              {slide.caption}
            </m.p>
          </AnimatePresence>

          {/* CTA Button (also swaps + animates per slide) */}
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={`${slide.cta?.href ?? 'default'}-${slide.cta?.text ?? 'Explore Platform'}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ delay: 0.32, duration: 0.6, ease: COOL_EASE }}
            >
              <Link
                href={slide.cta?.href ?? '/platform/overview'}
                className="inline-block px-10 py-4 font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-xl md:text-2xl"
                style={{ fontFamily: "'Ubuntu', sans-serif" }}
              >
                {slide.cta?.text ?? 'Explore Platform'}
              </Link>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
