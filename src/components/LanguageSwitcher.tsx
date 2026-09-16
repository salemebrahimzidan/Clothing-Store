import { useTranslation, type Locale } from '../i18n'

const languages: Locale[] = ['en', 'ar']

type LanguageSwitcherProps = {
  className?: string
}

export default function LanguageSwitcher({
  className = '',
}: LanguageSwitcherProps) {
  const { t, locale, setLocale } = useTranslation()

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-sand bg-sand p-1 ${className}`}
      role="group"
      aria-label={t('lang.switchTo')}
    >
      {languages.map((code) => {
        const active = locale === code

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={
              active
                ? 'rounded-full bg-clay px-3 py-1.5 text-xs font-medium text-paper'
                : 'rounded-full px-3 py-1.5 text-xs text-muted transition hover:bg-paper hover:text-ink'
            }
          >
            {t(`lang.${code}`)}
          </button>
        )
      })}
    </div>
  )
}
