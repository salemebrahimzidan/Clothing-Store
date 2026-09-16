import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import ar from './locales/ar.json'
import en from './locales/en.json'

export type Locale = 'en' | 'ar'

const dictionaries = { en, ar } as const
const STORAGE_KEY = 'clothing-store-locale'

type Dictionary = typeof en

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, vars?: Record<string, string | number>) => string
  dir: 'ltr' | 'rtl'
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readPath(dict: Dictionary, key: string): unknown {
  return key.split('.').reduce<unknown>((value, part) => {
    if (value && typeof value === 'object' && part in value) {
      return (value as Record<string, unknown>)[part]
    }
    return undefined
  }, dict)
}

function translate(
  locale: Locale,
  key: string,
  vars?: Record<string, string | number>,
): string {
  const value = readPath(dictionaries[locale], key)
  const fallback = readPath(dictionaries.en, key)
  const text =
    typeof value === 'string'
      ? value
      : typeof fallback === 'string'
        ? fallback
        : key

  if (!vars) return text

  return Object.entries(vars).reduce(
    (result, [name, replacement]) =>
      result.replaceAll(`{{${name}}}`, String(replacement)),
    text,
  )
}

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ar') return stored
  } catch {
    // ignore
  }
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      dir: locale === 'ar' ? 'rtl' : 'ltr',
      t: (key, vars) => translate(locale, key, vars),
    }),
    [locale, setLocale],
  )

  return createElement(I18nContext.Provider, { value }, children)
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used inside I18nProvider')
  }
  return context
}

export function t(key: string, vars?: Record<string, string | number>) {
  return translate(readStoredLocale(), key, vars)
}
