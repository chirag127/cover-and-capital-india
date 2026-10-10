export interface OfficialSource {
  id: string;
  category: 'legislation' | 'irdai' | 'cbdt' | 'regulator' | 'case-law';
  title: string;
  issuingAuthority: string;
  referenceNumber?: string;
  officialUrl: string;
  publishedDate: string;
  effectiveDate: string;
  lastVerifiedDate: string;
  summary: string;
  substantiveClauses: string;
}

export const officialSources: OfficialSource[] = [
  {
    id: 'it-act-2025',
    category: 'legislation',
    title: 'The Income-tax Act, 2025',
    issuingAuthority: 'Ministry of Law and Justice / Ministry of Finance, Government of India',
    officialUrl: 'https://incometaxindia.gov.in',
    publishedDate: '2025-08-21',
    effectiveDate: '2026-04-01',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Replaced the Income-tax Act, 1961 effective April 1, 2026. Recodified former Section 10(10D) insurance exemptions into Schedule II, Clause 2, preserving the ₹5,00,000 traditional and ₹2,50,000 ULIP thresholds.',
    substantiveClauses:
      'Schedule II, Clause 2 (Tax Exemption on Life Insurance Proceeds); Schedule of Income from Other Sources (Taxation of high-premium non-ULIPs); Schedule of Capital Gains (Taxation of high-premium ULIPs).',
  },
  {
    id: 'cbdt-cir-15-2023',
    category: 'cbdt',
    title: 'CBDT Circular No. 15 of 2023 — Guidelines under Section 10(10D) & Section 56(2)(xiii)',
    issuingAuthority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance',
    referenceNumber: 'Circular No. 15/2023 / F. No. 370142/28/2023-TPL',
    officialUrl: 'https://incometaxindia.gov.in',
    publishedDate: '2023-08-16',
    effectiveDate: '2023-04-01',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Comprehensive circular detailing the computation of taxable income on maturity of life insurance policies issued on or after April 1, 2023 with aggregate annual premium exceeding ₹5 Lakh.',
    substantiveClauses:
      'Paragraphs 3, 4 & 5: Formula for calculating income as maturity proceeds less total premiums paid; aggregation rules across multiple policies; clear carve-out affirming 100% tax exemption on death benefits.',
  },
  {
    id: 'cbdt-cir-02-2022',
    category: 'cbdt',
    title: 'CBDT Circular No. 02 of 2022 — Guidelines for ULIP Taxation under Section 10(10D)',
    issuingAuthority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance',
    referenceNumber: 'Circular No. 02/2022 / F. No. 370142/61/2021-TPL',
    officialUrl: 'https://incometaxindia.gov.in',
    publishedDate: '2022-01-19',
    effectiveDate: '2021-02-01',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Provides practical examples and aggregation methodologies for ULIPs issued on or after February 1, 2021 where annual premium exceeds ₹2,50,000.',
    substantiveClauses:
      'Examples 1 through 6: Multi-policy selection rules where policyholder may claim exemption on optimal combination of ULIPs totaling under ₹2.5 Lakh.',
  },
  {
    id: 'insurance-act-1938-sec45',
    category: 'legislation',
    title: 'Section 45 of the Insurance Act, 1938 (As amended by Insurance Laws Amendment Act, 2015)',
    issuingAuthority: 'Parliament of India / India Code',
    officialUrl: 'https://www.indiacode.nic.in/handle/123456789/2304',
    publishedDate: '2015-03-20',
    effectiveDate: '2015-03-23',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Establishes the strict 3-year incontestability moratorium. No policy of life insurance can be called into question by an insurer after the expiry of 3 years from the date of issuance or revival, for any reason whatsoever.',
    substantiveClauses:
      'Section 45(1): 3-year absolute bar; Section 45(2): Repudiation within 3 years on grounds of fraud with burden of proof on the insurer; Section 45(4): Repudiation on non-fraudulent misstatement with mandatory refund of premiums.',
  },
  {
    id: 'irdai-master-cir-life-2024',
    category: 'irdai',
    title: 'IRDAI Master Circular on Life Insurance Products, 2024',
    issuingAuthority: 'Insurance Regulatory and Development Authority of India (IRDAI)',
    referenceNumber: 'IRDAI/ACTL/CIR/MISC/89/06/2024',
    officialUrl: 'https://irdai.gov.in',
    publishedDate: '2024-06-12',
    effectiveDate: '2024-06-12',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Consolidates all life insurance product regulations. Mandates enhanced Special Surrender Values (SSV), 30-day universal free-look cancellation, customer information sheets, and standardized benefit illustration formats.',
    substantiveClauses:
      'Clause 14 (Surrender value norms and progressive scale); Clause 18 (Mandatory 30-day free look period for all distribution channels); Clause 22 (Benefit illustration assumptions).',
  },
  {
    id: 'mwpa-1874-sec6',
    category: 'legislation',
    title: "Section 6 of the Married Women's Property Act, 1874 (MWPA)",
    issuingAuthority: 'India Code',
    officialUrl: 'https://www.indiacode.nic.in/handle/123456789/1684',
    publishedDate: '1874-02-24',
    effectiveDate: '1874-02-24',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Enables a policy of life insurance taken by a married man on his own life for the benefit of his wife or children to create an irrevocable statutory trust outside the reach of creditors, court attachments, and tax claims.',
    substantiveClauses:
      'Section 6(1): Deemed statutory trust created immediately on policy execution; proceeds cannot be attached by husband’s creditors.',
  },
  {
    id: 'insurance-ombudsman-rules-2017',
    category: 'regulator',
    title: 'Insurance Ombudsman Rules, 2017 (Amended 2021)',
    issuingAuthority: 'Ministry of Finance / Council for Insurance Ombudsmen',
    referenceNumber: 'G.S.R. 413(E)',
    officialUrl: 'https://www.cioins.co.in',
    publishedDate: '2017-04-27',
    effectiveDate: '2017-04-27',
    lastVerifiedDate: '2026-10-10',
    summary:
      'Establishes the alternate dispute resolution framework for policyholder grievances against insurers up to a compensation limit of ₹50 Lakh. Ombudsman awards are binding on insurers within 30 days.',
    substantiveClauses:
      'Rule 13 (Jurisdiction and powers); Rule 14 (Manner of filing complaints); Rule 17 (Award compliance and 30-day implementation requirement).',
  },
];
