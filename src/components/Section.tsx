import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: 'white' | 'gray';
  className?: string;
}

export default function Section({
  children,
  backgroundColor = 'white',
  className = '',
}: SectionProps) {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white';

  return <section className={`${bgClass} py-16 md:py-20 ${className}`}>{children}</section>;
}
