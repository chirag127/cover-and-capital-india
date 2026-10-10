import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sourceReferenceSchema = z.object({
  id: z.string(),
  title: z.string(),
  issuingAuthority: z.string(),
  referenceNumber: z.string().optional(),
  officialUrl: z.string(),
  publishedDate: z.string().optional(),
  effectiveDate: z.string().optional(),
  lastVerifiedDate: z.string().optional(),
  relevantClause: z.string().optional(),
  substantiveClaim: z.string().optional(),
  status: z.enum(['active', 'superseded', 'repealed']).optional().default('active'),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    category: z.enum([
      'foundations',
      'term-insurance',
      'ulip',
      'guaranteed-savings',
      'riders',
      'claims-and-servicing',
      'taxation',
      'comparisons',
      'calculations',
    ]),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Chirag Singhal'),
    draft: z.boolean().default(false),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    reviewedAt: z.string().optional(),
    reviewStatus: z.enum(['outline', 'draft', 'technical-review', 'approved', 'needs-update']).default('approved'),
    readingTime: z.number().default(10),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    canonicalUrl: z.string().optional(),
    applicableFinancialYear: z.string().optional(),
    applicablePolicyDates: z.string().optional(),
    regulatoryJurisdiction: z.string().default('India (IRDAI & Income Tax Department)'),
    sourceReferences: z.array(sourceReferenceSchema).default([]),
    relatedArticles: z.array(z.string()).default([]),
    faq: z.array(faqSchema).default([]),
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparisons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    comparisonType: z.enum(['product-to-product', 'category-level']).default('category-level'),
    categoryA: z.string(),
    categoryB: z.string(),
    summaryVerdict: z.string(),
    keyTakeaways: z.array(z.string()).default([]),
    assumptions: z.array(z.string()).default([]),
    applicableFinancialYear: z.string().default('FY 2026–27'),
    author: z.string().default('Chirag Singhal'),
    publishedAt: z.string(),
    sourceReferences: z.array(sourceReferenceSchema).default([]),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    hindiTransliteration: z.string().optional(),
    category: z.string(),
    plainEnglishSummary: z.string(),
    legalOrRegulatoryBasis: z.string().optional(),
    commonTrapOrConfusion: z.string().optional(),
    relatedTerms: z.array(z.string()).default([]),
  }),
});

export const collections = {
  articles,
  comparisons,
  glossary,
};
