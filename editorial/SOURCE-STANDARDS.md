# Cover & Capital India — Research and Citation Standards

## 1. Editorial Purpose & Hierarchy of Authority
Cover & Capital India is an independently authored Indian insurance, taxation, and wealth education publication created by Chirag Singhal. Every substantive article, comparison, calculation, and regulatory explainer must adhere to this verifiable hierarchy of primary sources:

### Tier 1: Primary Legislation, Statutory Rules & Government Publications
1. **India Code & Ministry of Law and Justice**: Primary legislation (e.g., Insurance Act, 1938; Life Insurance Corporation Act, 1956; Consumer Protection Act, 2019; Income-tax Act, 2025; Income-tax Act, 1961 for historical policies).
2. **Ministry of Finance & Department of Revenue**: Official Gazette Notifications, Central Board of Direct Taxes (CBDT) circulars, notifications, and explanatory memoranda to Finance Bills.
3. **Goods and Services Tax (GST) Council & CBIC**: GST rates, exemptions, input tax credit rules on insurance premiums.

### Tier 2: Statutory Regulators & Official Authorities
1. **Insurance Regulatory and Development Authority of India (IRDAI)**:
   - IRDAI Acts, Regulations (e.g., Protection of Policyholders' Interests Regulations, 2017 & 2024 updates).
   - IRDAI Master Circulars on Life Insurance Products, Protection, Underwriting, and Grievance Redressal.
   - Official Consumer Education material and Annual Reports (for claim settlement ratio data, repudiation statistics, and solvency margins).
   - Insurance Ombudsman decisions and grievance protocols under the Redressal of Public Grievances Rules.
2. **Securities and Exchange Board of India (SEBI)** & **AMFI**:
   - Mutual fund expense ratios (TER caps), SID/KIM formats, categorisation circulars, and historical return disclosures.
3. **Reserve Bank of India (RBI)** & **PFRDA**:
   - Small Savings Interest Rates (PPF, Sukanya Samriddhi), National Pension System (NPS) PFRDA regulations, annuity service guidelines.

### Tier 3: Official Insurer Documents (Contract-Specific)
1. **Policy Wordings**: The legal contract issued upon policy bond receipt. This takes precedence over all promotional material.
2. **Prospectuses & Key Feature Documents (KFD)** filed with IRDAI under the File & Use procedure with valid Unique Identification Numbers (UIN).
3. **Sales Literature & Benefit Illustrations (BI)**: Standardized illustrations compliant with IRDAI illustrative return guidelines (historically 4% and 8% gross return caps for unit-linked and participating policies).
4. **Public Disclosures**: Quarterly financial reports, Form L-1 through L-40, claim settlement disclosures by duration and cause.

### Tier 4: Credible Secondary Sources (Informative / Contextual Only)
- Institute of Actuaries of India (IAI) research papers.
- Reputable financial press investigations and academic finance journals.
- *Strict Rule*: Secondary news reports or broker blog posts can never be cited as primary proof of a legal tax exemption, regulatory clause, or policy exclusion. The primary document must be retrieved and verified.

---

## 2. Source Metadata Schema
Every referenced citation must record:
```json
{
  "id": "irdai-cir-2024-life-master",
  "title": "Master Circular on Life Insurance Products",
  "issuingAuthority": "Insurance Regulatory and Development Authority of India (IRDAI)",
  "referenceNumber": "IRDAI/ACTL/CIR/MISC/89/06/2024",
  "officialUrl": "https://irdai.gov.in/...",
  "publishedDate": "2024-06-12",
  "effectiveDate": "2024-06-12",
  "lastVerifiedDate": "2026-10-10",
  "relevantClause": "Clause 14 (Surrender Value Norms) & Clause 18 (Free-look Period)",
  "substantiveClaim": "Mandates revised special surrender values and extended 30-day free-look period for policies obtained through any mode.",
  "status": "active"
}
```

---

## 3. Strict Rules of Verification
1. **No Invented References**: Never invent circular numbers, dates, clauses, or statutory thresholds.
2. **Date & Financial Year Scoping**: Every tax article must explicitly state the applicable Financial Year (e.g., FY 2026–27) and governing statute (e.g., Income-tax Act, 2025 vs Income-tax Act, 1961 for legacy policies).
3. **Policy Contract vs Sales Pitch**: Always distinguish contractually guaranteed cash flows from projected, non-guaranteed bonuses or illustrative returns.
4. **Distinguish Product from Category**: An exclusion or clause in one insurer's term plan must never be generalized to the entire Indian life insurance industry.
5. **Conflict Handling**: When two credible sources diverge, prioritize binding primary authority, state the tension openly, and explain the limits of current administrative interpretation.
