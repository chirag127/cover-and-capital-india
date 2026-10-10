# Contributing to Cover & Capital India

Thank you for your interest in contributing to **Cover & Capital India**!

This project is an independently authored educational publication. We welcome contributions that improve mathematical precision, clarify complex regulatory provisions, correct factual errors, or enhance accessibility.

---

## Code of Conduct & Research Principles

1. **Evidence-First**: Every legal or tax claim must link to or cite an official primary document (India Code, CBDT Circular, IRDAI Regulation, or Insurer Policy Wording).
2. **No Commercial Promotion**: We do not accept sponsored articles, affiliate links, or promotional write-ups for specific insurers or financial products.
3. **Transparent Mathematics**: Any return or cash-flow calculation must provide its explicit formula, cash-flow schedule, and unit test coverage.
4. **Consumer Protection**: Content must always distinguish contractually guaranteed benefits from non-guaranteed bonuses or illustrative projections.

---

## Contribution Workflow

### 1. Proposing a New Article or Topic
Before writing an extensive article, review [editorial/ROADMAP.md](editorial/ROADMAP.md) to check if the topic is already planned. If it is a new topic, open an issue or pull request discussing the proposed scope, search intent, and primary sources to be cited.

### 2. Article Writing Standards
* Follow the standardized template in [editorial/ARTICLE-TEMPLATE.md](editorial/ARTICLE-TEMPLATE.md).
* Fill all required frontmatter fields, including `sourceReferences` and `applicableFinancialYear`.
* Use KaTeX for mathematical formulas and Mermaid for decision workflows.

### 3. Local Verification Before Submitting a PR
Ensure all local verification checks pass cleanly:
```bash
# 1. Run Vitest mathematical test suite
npm test

# 2. Run content collection & frontmatter validation
node ./scripts/validate-content.mjs

# 3. Run base-path and internal link checks
node ./scripts/check-links.mjs

# 4. Run static build
npm run build
```

---

## Reporting Errors & Errata

If you identify an error in a calculation or an outdated circular reference:
* Open an issue with the title `[Errata]: <Article Name>`.
* Provide the specific line/passage and link to the authoritative primary source.
* Or email [chirag@oriz.in](mailto:chirag@oriz.in).
