import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted">
          {t('hero.eyebrow')}
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="mt-5 max-w-md text-muted">{t('hero.body')}</p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper hover:bg-ink/90"
        >
          {t('hero.cta')}
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="relative overflow-hidden rounded-[28px] bg-sand">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80"
          alt={t('hero.imageAlt')}
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
        <p className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-4 py-2 text-xs tracking-wide">
          {t('hero.badge')}
        </p>
      </div>
    </section>
  )
}
