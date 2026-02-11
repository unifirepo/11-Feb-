'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { COOL_EASE, DURATION_STANDARD } from './motion';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: 'auto' | 'white' | 'gray' | 'blue';
  variant?: 'dark' | 'light';
  className?: string;
  animate?: boolean;
  stagger?: boolean;
}

export function Section({
  children,
  backgroundColor = 'auto',
  variant,
  className = '',
  animate = true,
  stagger = true,
}: SectionProps) {
  const reduce = useReducedMotion();

  // If variant is provided, it takes precedence over backgroundColor
  // But if className contains background styles, don't override
  const hasCustomBg = className.includes('bg-') || className.includes('background');
  const effectiveBg = hasCustomBg
    ? backgroundColor
    : variant === 'dark' 
      ? 'blue' 
      : variant === 'light'
        ? 'white'
        : backgroundColor;

  // If the caller provided a custom background class (bg-*), do NOT add section-auto.
  // section-auto has global CSS that would override custom backgrounds.
  const bgClass = hasCustomBg
    ? ''
    : effectiveBg === 'gray'
      ? 'bg-unifi-light'
      : effectiveBg === 'white'
        ? 'bg-white'
        : effectiveBg === 'blue'
          ? 'bg-unifi-blue text-white'
          : 'section-auto';

  // If reduced motion or animate is false, we don't use variants
  const shouldAnimate = !reduce && animate;
  const sectionVariants = shouldAnimate ? {
    initial: { opacity: 1 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0,
        ease: COOL_EASE,
        staggerChildren: stagger ? 0.1 : 0,
        delayChildren: 0
      }
    }
  } : undefined;

  // Use a regular section if no animation, otherwise use motion.section
  if (!shouldAnimate) {
    return (
      <section className={`${bgClass} py-20 md:py-32 ${className}`.trim()}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      className={`${bgClass} py-20 md:py-32 ${className}`.trim()}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true, amount: 0.05, margin: "-100px" }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
