import type { Locale } from '../i18n'

export function formatCurrency(amount: number, locale: Locale = 'en') {
  const formatted = new Intl.NumberFormat(
    locale === 'ar' ? 'ar-EG' : 'en-EG',
    { maximumFractionDigits: 0 },
  ).format(amount)

  return locale === 'ar' ? `${formatted} جنيه` : `E£ ${formatted}`
}
