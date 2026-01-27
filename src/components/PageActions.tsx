import type { ReactNode } from 'react';

export default function PageActions({ children }: { children: ReactNode }) {
  return <div className="mt-10 flex flex-col sm:flex-row gap-4">{children}</div>;
}
