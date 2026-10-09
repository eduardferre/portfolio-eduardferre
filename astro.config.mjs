import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/components'),
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' }
      }
    }),
    robotsTxt({
      // Cloudflare prepends its managed block (Content-Signal + training-bot
      // disallows) at the edge; search/answer crawlers fall under `*`.
      policy: [{ userAgent: '*', allow: '/', disallow: '/components' }]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://portfolio.eduardferre.dev/',
  output: 'static',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
})
