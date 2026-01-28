import { ReactNode } from 'react';

export const typography = {
  h1: 'font-display text-5xl md:text-7xl font-bold text-unifi-dark leading-[1.1] tracking-tight',
  h2: 'font-display text-3xl md:text-4xl font-bold text-unifi-dark tracking-tight',
  h3: 'font-display text-xl md:text-2xl font-bold text-unifi-dark tracking-tight',
  lead: 'text-lg md:text-xl text-unifi-gray leading-relaxed',
  body: 'text-base md:text-lg text-unifi-gray leading-relaxed',
};

// React component exports
export function H1({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h1 className={`${typography.h1} ${className}`}>{children}</h1>;
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`${typography.h2} ${className}`}>{children}</h2>;
}

export function H3({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`${typography.h3} ${className}`}>{children}</h3>;
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`${typography.lead} ${className}`}>{children}</p>;
}

export function Body({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`${typography.body} ${className}`}>{children}</p>;
}
