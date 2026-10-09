import type { APIRoute } from 'astro'
import { useTranslations } from '@/i18n/utils'
import { languages } from '@/i18n/ui'
import { LANGS, header, homeOf, links, publications, textResponse } from '@/lib/llms'
import { abs } from '@/lib/site'

/**
 * `/llms.txt` — the index: who this is, the pages in each language and where
 * to find the full text. Generated from i18n/ui.ts so it never drifts from
 * the pages.
 */
export const GET: APIRoute = () =>
  textResponse(
    [
      ...header(),
      '## Pages',
      '',
      ...LANGS.map(
        (lang) =>
          `- [Portfolio (${languages[lang]})](${homeOf(lang)}): ${useTranslations(lang)('meta.description')}`
      ),
      `- [Full text, both languages](${abs('/llms-full.txt')})`,
      '',
      ...publications(),
      ...links()
    ].join('\n')
  )
