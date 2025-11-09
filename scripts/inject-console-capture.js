const fs = require('fs');
const path = require('path');

const outputDir = path.join(process.cwd(), '.next', 'server', 'app');
const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) return;
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${scriptTag}</head>`);
    fs.writeFileSync(filePath, content);
    console.log(`Injected console capture into ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

console.log('Injecting console capture script...');
walkDir(outputDir);
console.log('Done!');