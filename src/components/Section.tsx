import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: 'auto' | 'white' | 'gray';
  className?: string;
}

export default function Section({
  children,
  backgroundColor = 'auto',
  className = '',
}: SectionProps) {
  const bgClass =
    backgroundColor === 'gray'
      ? 'bg-gray-50'
      : backgroundColor === 'white'
        ? 'bg-white'
        : 'section-auto';

  return <section className={`${bgClass} py-16 md:py-20 ${className}`}>{children}</section>;
}
