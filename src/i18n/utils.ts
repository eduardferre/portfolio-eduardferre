import { ui, defaultLang, type Lang } from './ui'

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/')
    if (lang in ui) return lang as Lang
    return defaultLang
}

export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
        return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key]
    }
}

export function getRouteFromUrl(url: URL): string {
    const pathname = url.pathname
    const parts = pathname.split('/')

    // Remove the locale prefix if present
    if (parts[1] in ui) {
        parts.splice(1, 1)
    }

    return parts.join('/') || '/'
}

/**
 * Get the URL for switching to a different language.
 * Keeps the same route but changes the locale prefix.
 */
export function getLocalizedPathname(pathname: string, lang: Lang): string {
    const parts = pathname.split('/')

    // Remove existing locale prefix if present
    if (parts[1] in ui) {
        parts.splice(1, 1)
    }

    // Add new locale prefix (unless it's the default language)
    if (lang !== defaultLang) {
        parts.splice(1, 0, lang)
    }

    return parts.join('/') || '/'
}
