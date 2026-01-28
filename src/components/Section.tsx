'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { COOL_EASE, DURATION_STANDARD } from './motion';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: 'auto' | 'white' | 'gray' | 'blue';
  className?: string;
  animate?: boolean;
  stagger?: boolean;
}

export function Section({
  children,
  backgroundColor = 'auto',
  className = '',
  animate = true,
  stagger = true,
}: SectionProps) {
  const reduce = useReducedMotion();

  const bgClass =
    backgroundColor === 'gray'
      ? 'bg-unifi-light'
      : backgroundColor === 'white'
        ? 'bg-white'
        : backgroundColor === 'blue'
          ? 'bg-unifi-blue text-white'
          : 'section-auto';

  // If reduced motion or animate is false, we don't use variants
  const sectionVariants = (reduce || !animate) ? {} : {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: DURATION_STANDARD,
        ease: COOL_EASE,
        staggerChildren: stagger ? 0.15 : 0,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      className={`${bgClass} py-20 md:py-32 ${className}`.trim()}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
