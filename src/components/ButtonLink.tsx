import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export default function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  const base =
    'inline-block px-8 py-3 font-semibold text-lg rounded-lg transition-colors duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 focus-visible:ring-offset-2';

  const styles: Record<Variant, string> = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'border border-gray-300 text-gray-900 hover:bg-gray-50',
  };

  return (
    <Link {...props} className={`${base} ${styles[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
