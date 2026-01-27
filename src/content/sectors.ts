export type SectorRoute = {
  label: string;
  href: string;
  description: string;
};

export type Sector = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  icon: {
    label: string;
    svgPath: string;
  };
  keyOutcomes: string[];
  recommendedRoutes: SectorRoute[];
  comingSoon?: boolean;
};

export const sectors: Sector[] = [
  {
    slug: 'education',
    title: 'Education',
    summary: 'Estates teams under budget pressure — without disrupting learning.',
    description:
      'Support estates teams under budget pressure while maintaining compliance and minimising disruption.',
    icon: {
      label: 'Graduation cap',
      svgPath:
        'M12 3 2 8l10 5 10-5-10-5Zm0 12L6 12v5l6 3 6-3v-5l-6 3Z',
    },
    keyOutcomes: [
      'Plan works around term time and occupancy constraints',
      'Evidence compliance with clear, auditable records',
      'Reduce disruption by prioritising the highest-risk items first',
    ],
    recommendedRoutes: [
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Get visibility across buildings, assets, and responsibilities.',
      },
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Triage and reduce immediate fire risk with accountable workflows.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Identify energy waste and prioritise quick-win savings.',
      },
    ],
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    summary: 'Consistent oversight across offices and mixed-use estates.',
    description:
      'Create consistent visibility across office and mixed-use estates, with clear accountability and reporting.',
    icon: {
      label: 'Office building',
      svgPath:
        'M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17h-2v-2H8v2H6Zm3-12h2V7H9v2Zm0 4h2v-2H9v2Zm4-4h2V7h-2v2Zm0 4h2v-2h-2v2Z',
    },
    keyOutcomes: [
      'Standardise reporting across sites and suppliers',
      'Make responsibilities and ownership unambiguous',
      'Improve assurance without slowing down delivery',
    ],
    recommendedRoutes: [
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'A single operational picture across your estate.',
      },
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Govern fire safety actions with clear accountability.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Track energy performance and support carbon reporting.',
      },
    ],
  },
  {
    slug: 'public-sector',
    title: 'Public sector',
    summary: 'Assurance and governance across complex multi-site portfolios.',
    description:
      'Reduce risk and waste across complex, multi-site portfolios where assurance and governance matter.',
    icon: {
      label: 'Shield',
      svgPath:
        'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 18c-3.1-1.3-6-4.7-6-9V6.3L12 4l6 2.3V11c0 4.3-2.9 7.7-6 9Z',
    },
    keyOutcomes: [
      'Improve assurance with consistent evidence and audit trails',
      'Reduce avoidable spend through prioritisation and visibility',
      'Support governance with clear reporting and controls',
    ],
    recommendedRoutes: [
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Start with immediate risk reduction and statutory actions.',
      },
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Unify data and responsibilities across a multi-site estate.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Monitor energy and support reporting requirements.',
      },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    summary: 'High-occupancy, high-risk environments — with zero tolerance for downtime.',
    description:
      'Keep critical environments safe and compliant while coordinating work across busy, high-occupancy sites.',
    icon: {
      label: 'Medical cross',
      svgPath:
        'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z',
    },
    keyOutcomes: [
      'Coordinate works around clinical operations and occupancy',
      'Strengthen assurance with clear evidence and ownership',
      'Reduce risk with prioritised, trackable remediation',
    ],
    recommendedRoutes: [
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Prioritise immediate risk reduction and close the loop on actions.',
      },
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Maintain a single source of truth across sites and teams.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Identify waste and support operational efficiency programmes.',
      },
    ],
    comingSoon: true,
  },
  {
    slug: 'residential',
    title: 'Residential',
    summary: 'Assurance for landlords and managing agents across buildings and residents.',
    description:
      'Support managing agents and landlords with consistent oversight, assurance, and reporting across residential portfolios.',
    icon: {
      label: 'Home',
      svgPath:
        'M12 3 2 12h3v9h6v-6h2v6h6v-9h3L12 3Z',
    },
    keyOutcomes: [
      'Improve visibility across buildings, blocks, and common areas',
      'Support assurance and resident communications with clear records',
      'Reduce risk by prioritising actions and tracking completion',
    ],
    recommendedRoutes: [
      {
        label: 'FireGuard',
        href: '/solutions/fireguard',
        description: 'Support fire safety compliance workflows and remediation tracking.',
      },
      {
        label: 'Cortex',
        href: '/platform/overview',
        description: 'Unify responsibilities and evidence across a portfolio.',
      },
      {
        label: 'Energy',
        href: '/energy/hub',
        description: 'Support efficiency initiatives and cost control.',
      },
    ],
    comingSoon: true,
  },
];

export function getSectorBySlug(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
