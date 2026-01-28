'use client';

import { MotionConfig, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: 'auto' | 'white' | 'gray';
  className?: string;
  animate?: boolean;
}

export default function Section({
  children,
  backgroundColor = 'auto',
  className = '',
  animate = true,
}: SectionProps) {
  const reduce = useReducedMotion();

  const bgClass =
    backgroundColor === 'gray'
      ? 'bg-gray-50'
      : backgroundColor === 'white'
        ? 'bg-white'
        : 'section-auto';

  const initial = reduce || !animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const whileInView = reduce || !animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <motion.section
        className={`${bgClass} py-20 md:py-28 ${className}`.trim()}
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.section>
    </MotionConfig>
  );
}

