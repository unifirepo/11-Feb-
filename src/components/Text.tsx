import type { ElementType, ReactNode } from 'react';
import { typography } from './Typography';

type Variant = keyof typeof typography;

type TextProps = {
  as?: ElementType;
  variant: Variant;
  className?: string;
  children: ReactNode;
};

export default function Text({ as: As = 'p', variant, className = '', children }: TextProps) {
  return <As className={`${typography[variant]} ${className}`.trim()}>{children}</As>;
}
