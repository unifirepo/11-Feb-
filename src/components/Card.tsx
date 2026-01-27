import type { ReactNode } from 'react';

import PlaceholderImage from '@/src/components/PlaceholderImage';

type CardProps = {
  children: ReactNode;
  className?: string;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Card({
  children,
  className = '',
  withImage = true,
  imageSrc = '/placeholders/card-abstract.svg',
  imageAlt = '',
}: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`.trim()}>
      {withImage ? (
        <PlaceholderImage
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[16/9] mb-5"
        />
      ) : null}
      {children}
    </div>
  );
}
