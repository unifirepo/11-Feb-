import type { ReactNode } from 'react';
import Section from './Section';

type HeroProps = {
  title: ReactNode;
  lead?: ReactNode;
  secondaryLead?: ReactNode;
  actions?: ReactNode;
};

export default function Hero({ title, lead, secondaryLead, actions }: HeroProps) {
  return (
    <Section backgroundColor="white" className="min-h-[55vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {title}
          {lead}
          {secondaryLead}
          {actions}
        </div>
      </div>
    </Section>
  );
}
