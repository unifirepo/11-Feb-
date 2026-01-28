'use client';

import { MotionConfig, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * CoolPlanet-inspired Easing & Timing
 * Heavy start, very smooth finish.
 */
export const COOL_EASE = [0.16, 1, 0.3, 1];
export const DURATION_STANDARD = 0.8;
export const DURATION_HERO = 1.2;

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig 
      reducedMotion="user" 
      transition={{ duration: DURATION_STANDARD, ease: COOL_EASE }}
    >
      {children}
    </MotionConfig>
  );
}

export const m = motion;

/**
 * Shared Variants for Consistency
 */
export const fadeInUp = {
  initial: { opacity: 1, y: 0 }, // Start visible to prevent content from being hidden
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION_STANDARD,
      ease: COOL_EASE,
    }
  },
};

export const maskReveal = {
  initial: { y: "100%" },
  animate: { y: 0 },
};

export const subtleScale = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Keep variants object for backward compatibility
export const variants = {
  fadeInUp,
  maskReveal,
  subtleScale,
  staggerContainer,
};

export function useEnterVariants(direction: 'right' | 'left' | 'up' = 'up') {
  const reduce = useReducedMotion();

  if (reduce) {
    return {
      initial: { opacity: 1, x: 0, y: 0 },
      animate: { opacity: 1, x: 0, y: 0 },
    };
  }

  const offset = 30;
  const from =
    direction === 'right'
      ? { opacity: 0, x: offset, y: 0 }
      : direction === 'left'
        ? { opacity: 0, x: -offset, y: 0 }
        : { opacity: 0, x: 0, y: offset };

  return {
    initial: from,
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: DURATION_STANDARD, ease: COOL_EASE }
  };
}

/**
 * Text Reveal Component for Headlines
 */
export function TextReveal({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={variants.maskReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: DURATION_HERO, ease: COOL_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
