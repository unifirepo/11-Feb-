'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from '@/src/components/PlaceholderImage';
import { variants, COOL_EASE } from './motion';

type CardProps = {
  children: ReactNode;
  className?: string;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  /** Used to deterministically pick a unique placeholder image when imageSrc isn't provided */
  seed?: string;
  /** Override the image aspect ratio class (e.g. "aspect-[16/9]") */
  imageAspectClassName?: string;
};

export default function Card({
  children,
  className = '',
  withImage = true,
  imageSrc,
  imageAlt = '',
  seed,
  imageAspectClassName = 'aspect-[16/9]',
}: CardProps) {
  const hasCustomBg = className.includes('bg-');

  return (
    <motion.div
      variants={variants.fadeInUp}
      transition={{ duration: 0.8, ease: COOL_EASE }}
      data-card-bg={hasCustomBg ? 'custom' : 'auto'}
      className={`unifi-card group bg-white border border-gray-200/80 shadow-sm rounded-sm p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:translate-y-[-4px] ${className}`.trim()}
    >
      {withImage ? (
        <div className="overflow-hidden rounded-sm mb-6">
          <PlaceholderImage
            src={imageSrc}
            kind="card"
            seed={seed || imageAlt || 'default'}
            alt={imageAlt}
            className={`${imageAspectClassName} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]`}
          />
        </div>
      ) : null}
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
}
