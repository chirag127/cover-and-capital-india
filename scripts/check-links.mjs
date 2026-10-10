import fs from 'node:fs';
import path from 'node:path';

console.log('🔗 Running Base-Path and Internal Link Verification...');

const basePath = '/cover-and-capital-india';
const srcDir = path.resolve('src');

function scanFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath, fileList);
    } else if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = scanFiles(srcDir);
let issues = 0;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  // Check for suspicious root-relative links like href="/articles" or href="/about" that miss basePath
  const badHrefRegex = /href=["']\/(?!(cover-and-capital-india|#|http|\$))/g;
  let match;
  while ((match = badHrefRegex.exec(content)) !== null) {
    // Exclude imports or special cases
    const snippet = content.substring(Math.max(0, match.index - 10), Math.min(content.length, match.index + 40));
    console.warn(`⚠️ [${path.relative(process.cwd(), file)}] Potential missing base-path in link snippet: ${snippet.trim()}`);
    issues++;
  }
}

console.log('--------------------------------------------------');
if (issues > 0) {
  console.warn(`⚠️ Link check completed with ${issues} potential warning(s).`);
} else {
  console.log('✅ Link check PASSED! All internal navigation links properly preserve base path.');
}
