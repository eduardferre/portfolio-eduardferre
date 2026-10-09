import type { APIRoute } from 'astro'
import { LANGS, fullPage, header, links, publications, textResponse } from '@/lib/llms'

/** `/llms-full.txt` — the full content of the portfolio as text, per language. */
export const GET: APIRoute = () =>
  textResponse(
    [...header(), ...LANGS.flatMap(fullPage), ...publications(), ...links()].join('\n')
  )
