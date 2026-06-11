// Post-build guard: ensures every inline <script> emitted into the static
// output has its sha256 hash allow-listed in vercel.json's CSP.
//
// Astro 6 inlines small hoisted scripts (theme toggle, Vercel Analytics/Speed
// Insights bootstraps, JSON-LD). A strict `script-src` blocks any inline script
// whose hash is missing, which silently breaks dark mode and analytics in
// production. This check fails the build instead, and prints the hashes to add.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join } from 'node:path'

const DIST = 'dist'

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) out.push(...walk(p))
    else if (p.endsWith('.html')) out.push(p)
  }
  return out
}

const csp = readFileSync('vercel.json', 'utf8')
const inlineScript = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi

const missing = new Map()
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8')
  let m
  while ((m = inlineScript.exec(html))) {
    if (m[1].trim() === '') continue
    const hash = 'sha256-' + createHash('sha256').update(m[1], 'utf8').digest('base64')
    if (!csp.includes(hash) && !missing.has(hash)) missing.set(hash, file)
  }
}

if (missing.size > 0) {
  console.error('\n❌ CSP check failed: inline script hashes missing from vercel.json script-src:\n')
  for (const [hash, file] of missing) console.error(`   '${hash}'   (e.g. ${file})`)
  console.error('\nAdd the hashes above to the script-src directive in vercel.json.\n')
  process.exit(1)
}

console.log('✅ CSP check: all inline script hashes are allow-listed in vercel.json')
