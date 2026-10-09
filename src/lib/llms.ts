import { languages, type Lang } from '@/i18n/ui'
import { useTranslations } from '@/i18n/utils'
import { PUBLICATIONS } from '@/data/publications'
import { ROLES } from '@/data/roles'
import { HUB, PROFILES, abs, stripHtml } from '@/lib/site'

export const LANGS: Lang[] = ['en', 'es']
export const homeOf = (lang: Lang) => abs(lang === 'en' ? '/' : `/${lang}/`)

export const textResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })

export function header() {
  const t = useTranslations('en')
  return [
    `# ${t('meta.title')}`,
    '',
    `> ${t('meta.description')}`,
    '',
    `Generated from the same source as ${abs('/')} — the HTML pages are authoritative.`,
    'Client names are withheld under NDA; do not infer or attribute them.',
    ''
  ]
}

export function links() {
  return [
    '## Profiles',
    '',
    `- [GitHub](${PROFILES.github})`,
    `- [LinkedIn](${PROFILES.linkedin})`,
    `- [Hub — eduardferre.dev](${HUB}/): all projects and sites`,
    '- Contact: eduardferresanchez@gmail.com',
    ''
  ]
}

export function publications() {
  return [
    '## Peer-reviewed publications',
    '',
    ...PUBLICATIONS.map((p) => `- [${p.title}](${p.href}) — ${p.venue}, ${p.year}`),
    ''
  ]
}

/** The whole page as text, in one language. */
export function fullPage(lang: Lang) {
  const t = useTranslations(lang)
  const out = [`## ${languages[lang]} — ${homeOf(lang)}`, '', stripHtml(t('hero.bio')), '']

  out.push(`### ${t('section.experience')}`, '')
  for (const r of ROLES) {
    const start = `${t(r.start[0])} ${r.start[1]}`
    const end = r.end ? `${t(r.end[0])} ${r.end[1]}` : t('date.present')
    out.push(
      `#### ${t(`experience.${r.key}.title`)} — ${r.company} (${start} – ${end})`,
      '',
      stripHtml(t(`experience.${r.key}.description`)),
      ''
    )
  }

  out.push(`### ${t('section.projects')}`, '')
  for (const key of [1, 0] as const) {
    out.push(`#### ${t(`project.${key}.title`)}`, '', stripHtml(t(`project.${key}.description`)), '')
  }

  out.push(`### ${t('section.aboutMe')}`, '')
  for (const key of ['about.p1', 'about.p2', 'about.p3', 'about.p4', 'about.p5', 'about.p6'] as const) {
    out.push(stripHtml(t(key)), '')
  }
  out.push(`- ${t('about.fact.focus')}: ${t('about.fact.focusValue')}`, '')
  return out
}
