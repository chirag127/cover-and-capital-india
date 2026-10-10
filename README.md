# Cover & Capital India

[![Validate & Deploy](https://github.com/chirag127/cover-and-capital-india/actions/workflows/deploy.yml/badge.svg)](https://github.com/chirag127/cover-and-capital-india/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Framework: Astro](https://img.shields.io/badge/Framework-Astro_5-orange.svg)](https://astro.build)
[![Mathematics: KaTeX](https://img.shields.io/badge/Math-KaTeX-blue.svg)](https://katex.org)

> **Understand Your Cover. Calculate Your Costs. Build Your Wealth.**  
> An independently authored, research-first educational publication and financial-mathematics library dedicated to Indian life insurance, policy contracts, taxation, and wealth accumulation.

**Author & Maintainer**: [Chirag Singhal](https://chirag127.github.io/cover-and-capital-india/about/) (Software Engineer, Tata Consultancy Services, India)  
**Public Website**: [https://chirag127.github.io/cover-and-capital-india/](https://chirag127.github.io/cover-and-capital-india/)  
**Public Contact**: [chirag@oriz.in](mailto:chirag@oriz.in)

---

## 1. Project Overview & Philosophy
The Indian financial ecosystem suffers from pervasive informational asymmetry. Life insurance policies—intended to protect families from mortality catastrophe—are overwhelmingly sold through bancassurance sales quotas and agency commissions as "tax-saving investments" or "guaranteed wealth creators".

**Cover & Capital India** was created from a software-engineering mindset: to deconstruct financial contracts from first principles using verifiable primary legislation, binding regulator circulars, and transparent mathematics.

### Non-Commercial Mandate
* **Zero Affiliates**: No referral links, agent commissions, or lead-generation sales.
* **Zero Tracking**: No Google Analytics, advertising tracking pixels, or user profiling.
* **Zero Server Storage**: All financial calculators run locally and in-memory inside your browser.
* **Evidence-First**: Every statutory claim is anchored in primary legislation (India Code, CBDT, IRDAI).

---

## 2. Technology Stack & Architecture

* **Core Framework**: [Astro 5](https://astro.build/) (Static Site Generator, zero-JS by default).
* **Language & Typing**: Strict TypeScript with path aliases (`@/*`, `@components/*`, `@lib/*`).
* **Content Engine**: Astro Content Layer (`src/content.config.ts`) with strict Zod metadata schemas.
* **Styling & Design System**: Tailwind CSS v4 with bespoke editorial serif/sans tokens (`#FAF9F5` warm paper, `#0F172A` ink, `#0D5C46` emerald accent).
* **Mathematical Notation**: [KaTeX](https://katex.org/) via `remark-math` and `rehype-katex`.
* **Diagrams & Flowcharts**: [Mermaid](https://mermaid.js.org/) with accessible textual descriptions.
* **Financial Engines**: Custom pure TypeScript implementations of Newton-Raphson IRR, ACT/365 XIRR, Fisher real return equation, and Human Life Value (HLV).
* **Testing Suite**: [Vitest](https://vitest.dev/) for automated unit testing of financial math.
* **Hosting**: GitHub Pages via automated GitHub Actions CI/CD.

---

## 3. Key Publication Features

1. **12 Researched Cornerstone Guides**: In-depth explainers covering term insurance, ULIPs, guaranteed plans, death claim mechanics, Section 45 incontestability, and the Income-tax Act, 2025.
2. **Master Editorial Roadmap**: 320+ planned article topics systematically structured across 14 thematic domains in [editorial/ROADMAP.md](editorial/ROADMAP.md).
3. **Interactive Financial Calculators**:
   * *Life Cover Need Estimator* (Expense replacement and debt clearance model).
   * *Buy Term & Invest Difference (BTID) Analyzer* (Comparative terminal wealth model).
   * *Guaranteed Policy Return Analyzer* (Newton-Raphson cash-flow IRR solver).
   * *Inflation-Adjusted Cover Calculator* (Purchasing-power erosion tables).
   * *Nominal vs Real Return Calculator* (Fisher equation solver).
   * *Policy Surrender vs Paid-Up Decision Analyzer* (Sunk-cost evaluation engine).
4. **Instant Static Discovery**: Client-side search engine with real-time keyword and category filtering.
5. **A-Z Insurance Glossary**: Plain-English definitions of Indian regulatory and actuarial terms.
6. **Primary Source Library**: Centralized repository of verified statutes and IRDAI master circulars.

---

## 4. Local Development Setup

### Prerequisites
* Node.js v20+ or v22+
* npm v10+

### Installation
```bash
# Clone the repository
git clone https://github.com/chirag127/cover-and-capital-india.git
cd cover-and-capital-india

# Install dependencies reproducibly
npm install
```

### Running Locally
```bash
# Start local development server
npm run dev

# Open in browser:
# http://localhost:4321/cover-and-capital-india/
```

### Development & Validation Commands
```bash
# Run financial mathematics unit tests (Vitest)
npm test

# Run editorial content and metadata validation
node ./scripts/validate-content.mjs

# Run internal link integrity and base-path checks
node ./scripts/check-links.mjs

# Build production static bundle
npm run build

# Preview production static build locally
npm run preview
```

---

## 5. How to Add a New Article

1. Select a topic slug from [editorial/ROADMAP.md](editorial/ROADMAP.md).
2. Create a new MDX file in `src/content/articles/<slug>.mdx`.
3. Use the standardized frontmatter template from [editorial/ARTICLE-TEMPLATE.md](editorial/ARTICLE-TEMPLATE.md):
   ```yaml
   ---
   title: "Your Article Title"
   description: "140-160 character description."
   summary: "2-3 sentence executive summary."
   category: "term-insurance" # Check valid categories in src/content.config.ts
   tags: ["term-insurance", "underwriting"]
   author: "Chirag Singhal"
   draft: false
   publishedAt: "2026-10-10"
   reviewStatus: "approved"
   readingTime: 12
   difficulty: "intermediate"
   applicableFinancialYear: "FY 2026–27"
   sourceReferences:
     - id: "irdai-ref"
       title: "Official Circular Title"
       issuingAuthority: "IRDAI"
       officialUrl: "https://irdai.gov.in"
   ---
   ```
4. Run validation:
   ```bash
   node ./scripts/validate-content.mjs
   npm test
   npm run build
   ```
5. Commit and push to `main`. GitHub Actions will automatically validate and deploy to GitHub Pages.

---

## 6. How the Financial Calculators Work

All financial tools are implemented in modular TypeScript modules in `src/lib/finance/`:
* `irr.ts`: Implements the **Newton-Raphson method** to solve for the root of the Net Present Value polynomial:
  $$\sum_{t=0}^{n} \frac{\text{CF}_t}{(1 + r)^t} = 0$$
* `xirr.ts`: Evaluates dated cash flows using the **ACT/365 calendar convention**:
  $$\sum_{i=0}^{n} \frac{\text{CF}_i}{(1 + r)^{\frac{d_i - d_0}{365.0}}} = 0$$
* `math.ts`: Calculates true real return using the exact **Fisher equation**:
  $$r_{\text{real}} = \frac{1 + r_{\text{nominal}}}{1 + \pi} - 1$$

All calculator logic is covered by automated unit tests in `tests/finance.test.ts`.

---

## 7. Deployment & Custom Domain Configuration

### Automatic GitHub Pages Deployment
A GitHub Actions workflow is pre-configured at `.github/workflows/deploy.yml`. On every push to the `main` branch, the workflow:
1. Installs dependencies via `npm ci`.
2. Executes the full Vitest unit test suite.
3. Runs content and link integrity validation scripts.
4. Compiles the static Astro site into `./dist`.
5. Uploads and deploys the artifact to GitHub Pages.

### Configuring a Custom Domain (e.g., `coverandcapital.in`)
If you attach a custom domain in GitHub repository settings:
1. Update `site` and set `base: '/'` in `astro.config.mjs`.
2. Add your custom domain to `public/CNAME`.
3. Update internal base URL helpers if necessary.

---

## 8. Disclaimers & Professional Boundaries

Cover & Capital India is an independent educational and research publication created by Chirag Singhal. **It does not provide licensed financial advice, tax consultancy, actuarial certification, or legal counsel.** Products and statutory rules are explained from first principles based on published statutes and circulars. Always review your official policy bond and consult qualified professionals for individual financial situations.

---

## 9. License

This project is open-source under the [MIT License](LICENSE).
