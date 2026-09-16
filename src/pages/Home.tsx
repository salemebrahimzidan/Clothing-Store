import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts } from '../data/products'
import { useTranslation } from '../i18n'

export default function Home() {
  const featured = getFeaturedProducts()
  const { t } = useTranslation()

  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              {t('home.featured')}
            </p>
            <h2 className="mt-2 font-serif text-3xl">{t('home.title')}</h2>
          </div>
          <Link to="/products" className="text-sm text-muted hover:text-ink">
            {t('home.viewAll')}
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
