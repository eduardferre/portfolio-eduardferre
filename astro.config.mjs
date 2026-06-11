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
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' }
      }
    }),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/', disallow: '/components' }]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://eduardferre.dev/',
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
