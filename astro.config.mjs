import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt()],
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
