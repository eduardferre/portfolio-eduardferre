// Single source of truth for the public origin. The portfolio is served from
// its own subdomain; eduardferre.dev is the separate hub site.
export const SITE = 'https://portfolio.eduardferre.dev'
export const HUB = 'https://eduardferre.dev'

export const PROFILES = {
  github: 'https://github.com/eduardferre',
  linkedin: 'https://www.linkedin.com/in/eduardferre'
} as const

// Stable @id nodes, identical in every language (Google consolidates by @id).
export const PERSON_ID = `${SITE}/#person`
export const WEBSITE_ID = `${SITE}/#website`

export const abs = (path: string) => new URL(path, `${SITE}/`).href

/** Plain text from the HTML snippets stored in i18n/ui.ts. */
export const stripHtml = (html: string) =>
  html
    .replace(/<\/p>\s*<p>/g, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim()
