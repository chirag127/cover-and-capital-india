# Editorial Review Checklist — Cover & Capital India

Before any article, guide, or comparison is promoted from `draft` to `published`, it must pass every item on this checklist.

## 1. Citation & Source Authenticity
- [ ] Every substantive statutory claim links to or cites an official primary source (India Code, CBDT, IRDAI, or insurer policy wording).
- [ ] No circular number, notification date, or legal section is fabricated or unverified.
- [ ] Inaccessible or archived URLs are recorded with snapshot references; unverified claims are explicitly qualified.
- [ ] Product-specific policy terms (e.g., suicide exclusion grace period, grace period interest, revival health declarations) cite the actual product wording and UIN.

## 2. Tax Integrity & Scoping
- [ ] The article explicitly defines the governing statute (Income-tax Act, 2025 vs Income-tax Act, 1961 for legacy policies).
- [ ] The applicable Financial Year (e.g., FY 2026–27) is prominently stated.
- [ ] Policy issue date ranges are accurately segregated:
  - Pre-April 1, 2012 (20% sum assured limit).
  - April 1, 2012 to January 31, 2021 (10% sum assured limit).
  - Post-February 1, 2021 (₹2.5 lakh aggregate ULIP limit).
  - Post-April 1, 2023 (₹5 lakh aggregate non-ULIP traditional limit).
- [ ] New Tax Regime (default) vs Old Tax Regime differences are explicitly explained without assuming Section 80C deductions exist by default.

## 3. Mathematical & Cash-Flow Verification
- [ ] All rate-of-return calculations use true IRR / XIRR cash-flow equations, not misleading CAGR approximations across multi-period cash flows.
- [ ] Cash-flow signs adhere to standard financial convention: negative for premium outflows, positive for survival / maturity / death inflows.
- [ ] Nominal vs real return formulas state inflation assumptions transparently ($r_{\text{real}} = \frac{1+r}{1+\pi} - 1$).
- [ ] Unit tests for any underlying calculation functions have run and passed in Vitest.

## 4. Consumer Protection & Impartiality
- [ ] The content does not constitute or present itself as licensed personal financial advice, legal counsel, or actuarial opinion.
- [ ] No insurer is ranked or promoted based on commercial or affiliate incentives.
- [ ] Death benefit guarantees are distinguished from non-guaranteed bonuses or illustrated fund returns.
- [ ] Claims settlement ratio (CSR) data is accompanied by duration analysis and explanation of Section 45 repudiation timeframes.

## 5. Technical & Accessibility Quality
- [ ] Markdown/MDX frontmatter strictly conforms to the Zod schema in `src/content.config.ts`.
- [ ] Mathematical equations are rendered cleanly via KaTeX with accessible text descriptions.
- [ ] Diagrams (Mermaid / SVG) have accompanying textual explanations for screen readers.
- [ ] Tables are mobile-responsive with horizontal scrolling containers or stacked responsive views.
- [ ] All base-aware internal URLs use standard Astro URL pathing (`/cover-and-capital-india/...`).
