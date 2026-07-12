const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

// Helper to recursively list files
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, fileList);
    } else {
      fileList.push(name);
    }
  }
  return fileList;
}

console.log('--- SCANNING CODEBASE FOR IMAGE DUPLICATIONS ---');

const files = getFiles(SRC_DIR).filter(f => /\.(tsx|ts|js|jsx)$/.test(f));
const imageReferences = {}; // Map of imagePath -> Set of files referencing it

// Regex to find paths starting with '/' and ending with image extensions
const imageRegex = /['"\/]img_[a-zA-Z0-9_\-\/]+\.(png|jpg|jpeg|svg|webp|gif)/g;
const legacyImageRegex = /['"\/](slide|event|blog|ind|career|logo|avatar)[a-zA-Z0-9_\-\/]*\.(png|jpg|jpeg|svg|webp|gif)/g;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(path.join(__dirname, '..'), file);

  // Skip the registry file itself in references to avoid self-reporting
  if (relativePath.includes('images.ts')) {
    return;
  }

  let match;
  // Search for new unique images
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[0].replace(/['"]/g, '');
    if (!imageReferences[imgPath]) {
      imageReferences[imgPath] = new Set();
    }
    imageReferences[imgPath].add(relativePath);
  }

  // Search for legacy images (to detect any remaining duplicates)
  while ((match = legacyImageRegex.exec(content)) !== null) {
    const imgPath = match[0].replace(/['"]/g, '');
    if (!imageReferences[imgPath]) {
      imageReferences[imgPath] = new Set();
    }
    imageReferences[imgPath].add(relativePath);
  }
});

let duplicatesFound = false;

console.log('\n--- AUDITING REGISTERED IMAGES ---');
// Also read images.ts directly to verify there are no duplicate path values defined inside it
const imagesTsContent = fs.readFileSync(path.join(SRC_DIR, 'data', 'images.ts'), 'utf8');
const registryPaths = [];
const pathRegex = /:\s*['"](\/img_[a-zA-Z0-9_\-\/]+\.(png|jpg|jpeg|svg|webp|gif))['"]/g;
let regMatch;
while ((regMatch = pathRegex.exec(imagesTsContent)) !== null) {
  registryPaths.push(regMatch[1]);
}

const pathCounts = {};
registryPaths.forEach(p => {
  pathCounts[p] = (pathCounts[p] || 0) + 1;
});

const duplicatePathsInRegistry = Object.keys(pathCounts).filter(p => pathCounts[p] > 1);
if (duplicatePathsInRegistry.length > 0) {
  console.error('\n❌ ERROR: Duplicate image file paths found inside images.ts registry!');
  duplicatePathsInRegistry.forEach(p => {
    console.error(`  - "${p}" is defined ${pathCounts[p]} times.`);
  });
  duplicatesFound = true;
} else {
  console.log('✅ Registry verification passed: all defined image paths are unique.');
}

console.log('\n--- CODEBASE REFERENCES REPORT ---');
let referencedCount = 0;
let duplicatesCount = 0;

Object.keys(imageReferences).forEach(imgPath => {
  referencedCount++;
  const filesList = Array.from(imageReferences[imgPath]);
  if (filesList.length > 1) {
    duplicatesCount++;
    console.warn(`⚠️ DUPLICATE DETECTED: Image "${imgPath}" is referenced in ${filesList.length} files:`);
    filesList.forEach(file => {
      console.warn(`  - ${file}`);
    });
    duplicatesFound = true;
  }
});

console.log(`\nAudit completed: Scanned ${files.length} code files.`);
console.log(`Found ${referencedCount} unique image references.`);

if (duplicatesFound) {
  console.error(`\n❌ AUDIT FAILED: ${duplicatesCount} duplicate image reference(s) found.`);
  process.exit(1);
} else {
  console.log('\n✅ AUDIT PASSED: All image references in components and data files are unique!');
  process.exit(0);
}
