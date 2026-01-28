import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'blue';

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  const base =
    'inline-block px-8 py-4 font-medium text-lg rounded-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-unifi-blue/30 focus-visible:ring-offset-2';

  const styles: Record<Variant, string> = {
    primary: 'bg-unifi-dark text-white hover:bg-black hover:translate-y-[-2px] hover:shadow-lg',
    secondary: 'border border-gray-200 text-unifi-dark hover:bg-unifi-light hover:translate-y-[-2px]',
    blue: 'bg-unifi-blue text-white hover:bg-[#1664a7] hover:translate-y-[-2px] hover:shadow-lg',
  };

  return (
    <Link {...props} className={`${base} ${styles[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
