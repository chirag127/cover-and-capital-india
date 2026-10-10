export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    title: 'Start Here',
    href: '/cover-and-capital-india/start-here/',
    description: 'First principles guide for young professionals and first-time insurance buyers.',
  },
  {
    title: 'Insurance Guides',
    href: '/cover-and-capital-india/insurance/',
    description: 'In-depth contract breakdowns and policy category analyses.',
    children: [
      {
        title: 'Complete Guide',
        href: '/cover-and-capital-india/insurance/',
        description: 'Comprehensive overview of life protection in India.',
      },
      {
        title: 'Term Insurance',
        href: '/cover-and-capital-india/insurance/term/',
        description: 'Pure term cover, limited pay, riders, and underwriting.',
      },
      {
        title: 'ULIPs Explained',
        href: '/cover-and-capital-india/insurance/ulip/',
        description: 'Charge breakdowns, FMC, NAV mechanics, and ₹2.5L tax limits.',
      },
      {
        title: 'Guaranteed Savings Plans',
        href: '/cover-and-capital-india/insurance/guaranteed/',
        description: 'Traditional endowments, non-par plans, and cash-flow IRR.',
      },
      {
        title: 'Riders & Add-ons',
        href: '/cover-and-capital-india/insurance/riders/',
        description: 'Critical illness, accidental disability, and waiver of premium.',
      },
      {
        title: 'Claims & Exclusions',
        href: '/cover-and-capital-india/insurance/claims/',
        description: 'Section 45 incontestability, repudiation grounds, and Ombudsman.',
      },
      {
        title: 'Surrender or Keep',
        href: '/cover-and-capital-india/insurance/surrender/',
        description: 'Decision framework for existing policies and surrender values.',
      },
    ],
  },
  {
    title: 'Taxation',
    href: '/cover-and-capital-india/taxation/',
    description: 'Income-tax Act 2025, Schedule II(2), and the ₹5L / ₹2.5L thresholds.',
  },
  {
    title: 'Comparisons',
    href: '/cover-and-capital-india/comparisons/',
    description: 'Honest numerical comparisons between insurance and direct investments.',
  },
  {
    title: 'Calculators',
    href: '/cover-and-capital-india/calculators/',
    description: 'Client-side financial math engines with transparent equations.',
  },
  {
    title: 'Glossary',
    href: '/cover-and-capital-india/glossary/',
    description: 'Plain-English explanations of Indian insurance & actuarial jargon.',
  },
  {
    title: 'Research & Sources',
    href: '/cover-and-capital-india/sources/',
    description: 'Primary legislative library, IRDAI circulars, and editorial methodology.',
  },
  {
    title: 'About',
    href: '/cover-and-capital-india/about/',
    description: 'Author background, philosophy, and independence disclosure.',
  },
];
