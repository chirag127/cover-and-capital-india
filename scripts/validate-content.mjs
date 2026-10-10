import fs from 'node:fs';
import path from 'node:path';

const articlesDir = path.resolve('src/content/articles');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const yaml = match[1];
  const data = {};

  const lines = yaml.split(/\r?\n/);
  let currentKey = null;
  let inArray = false;
  let arrayItems = [];

  for (const line of lines) {
    if (line.trim().startsWith('#')) continue;

    const keyValMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (keyValMatch) {
      if (currentKey && inArray) {
        data[currentKey] = arrayItems;
        inArray = false;
        arrayItems = [];
      }
      currentKey = keyValMatch[1];
      const val = keyValMatch[2].trim();
      if (val === '') {
        inArray = true;
      } else {
        data[currentKey] = val.replace(/^["']|["']$/g, '');
      }
    } else if (inArray && line.trim().startsWith('-')) {
      const item = line.trim().substring(1).trim().replace(/^["']|["']$/g, '');
      arrayItems.push(item);
    }
  }

  if (currentKey && inArray) {
    data[currentKey] = arrayItems;
  }

  return data;
}

let errors = 0;
let warnings = 0;

console.log('🔍 Validating Cover & Capital India Content Collections...');

if (!fs.existsSync(articlesDir)) {
  console.error(`❌ Articles directory not found: ${articlesDir}`);
  process.exit(1);
}

const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
console.log(`Found ${files.length} article files to validate.`);

for (const file of files) {
  const filePath = path.join(articlesDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = parseFrontmatter(raw);

  if (!frontmatter) {
    console.error(`❌ [${file}] Missing YAML frontmatter!`);
    errors++;
    continue;
  }

  // Mandatory fields check
  const requiredFields = ['title', 'description', 'summary', 'category', 'publishedAt'];
  for (const field of requiredFields) {
    if (!frontmatter[field]) {
      console.error(`❌ [${file}] Missing required frontmatter field: "${field}"`);
      errors++;
    }
  }

  // Tax articles check
  if (frontmatter.category === 'taxation') {
    if (!frontmatter.applicableFinancialYear) {
      console.error(`❌ [${file}] Tax article MUST specify "applicableFinancialYear" (e.g. FY 2026–27)`);
      errors++;
    }
  }

  // Check for sourceReferences presence
  if (!raw.includes('sourceReferences:')) {
    console.warn(`⚠️ [${file}] Warning: No "sourceReferences" block detected in frontmatter.`);
    warnings++;
  }
}

console.log('--------------------------------------------------');
if (errors > 0) {
  console.error(`❌ Content validation FAILED with ${errors} error(s) and ${warnings} warning(s).`);
  process.exit(1);
} else {
  console.log(`✅ Content validation PASSED! Validated ${files.length} articles with 0 errors and ${warnings} warning(s).`);
  process.exit(0);
}
