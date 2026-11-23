const fs = require('fs');

const html = fs.readFileSync('doc_content.html', 'utf8');

// Match body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let body = bodyMatch ? bodyMatch[1] : html;

// Convert links: <a href="...">text</a>
body = body.replace(/<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, (match, href, text) => {
  let cleanHref = href;
  if (href.includes('google.com/url?q=')) {
    try {
      const u = new URL(href);
      cleanHref = u.searchParams.get('q') || href;
    } catch (e) {
      // ignore
    }
  }
  return `[${text}](${cleanHref})`;
});

// Convert headings
body = body.replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
body = body.replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
body = body.replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
body = body.replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
body = body.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
body = body.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, '\n* $1');

// Strip tags
body = body.replace(/<[^>]+>/g, '');

// Decode entities
body = body.replace(/&amp;/g, '&')
           .replace(/&lt;/g, '<')
           .replace(/&gt;/g, '>')
           .replace(/&quot;/g, '"')
           .replace(/&#39;/g, "'")
           .replace(/&rsquo;/g, "'")
           .replace(/&lsquo;/g, "'")
           .replace(/&ldquo;/g, '"')
           .replace(/&rdquo;/g, '"')
           .replace(/&nbsp;/g, ' ');

// Clean extra blank lines
const lines = body.split('\n').map(l => l.trim()).filter(l => l.length > 0);

// Find battery article
let inBattery = false;
const batteryLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('# Tampa Battery Lawyer')) {
    inBattery = true;
  }
  if (inBattery) {
    batteryLines.push(line);
    if (line.includes('Meta description:') && batteryLines.some(l => l.includes('battery'))) {
      // Check if next lines start another article
      if (i + 1 < lines.length && lines[i + 1].includes('# Tampa Robbery')) {
        break;
      }
    }
    if (line.includes('# Tampa Robbery')) {
      batteryLines.pop(); // remove robbery header
      break;
    }
  }
}

const batteryDoc = batteryLines.join('\n\n');
fs.writeFileSync('doc_battery.md', batteryDoc, 'utf8');
console.log('Saved doc_battery.md with lines:', batteryLines.length, 'chars:', batteryDoc.length);

// Extract links
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
let m;
console.log('\n--- ALL LINKS IN BATTERY ARTICLE ---');
while ((m = linkRegex.exec(batteryDoc)) !== null) {
  console.log(`[${m[1]}] -> ${m[2]}`);
}
