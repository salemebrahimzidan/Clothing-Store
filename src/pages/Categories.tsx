import { Link } from 'react-router-dom'
import { getFeaturedProducts, products } from '../data/products'
import { useTranslation } from '../i18n'
import type { ProductCategory } from '../types/product'

type CategoryEntry = {
  id: string
  labelKey: string
  to: string
  image: string
  count: number
}

function categoryEntry(category: ProductCategory): CategoryEntry {
  const items = products.filter((product) => product.category === category)
  return {
    id: category,
    labelKey: `categories.${category}`,
    to: `/products?category=${category}`,
    image: items[0]?.image ?? products[0].image,
    count: items.length,
  }
}

export default function Categories() {
  const { t } = useTranslation()
  const featured = getFeaturedProducts()

  const categories: CategoryEntry[] = [
    categoryEntry('Women'),
    categoryEntry('Men'),
    {
      id: 'offers',
      labelKey: 'categories.Offers',
      to: '/products?featured=1',
      image: featured[0]?.image ?? products[0].image,
      count: featured.length,
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.28em] text-muted">
        {t('categoriesPage.eyebrow')}
      </p>
      <h1 className="mt-2 font-serif text-4xl">{t('categoriesPage.title')}</h1>
      <p className="mt-3 max-w-xl text-muted">{t('categoriesPage.body')}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} to={category.to} className="category-card group">
            <img src={category.image} alt="" className="category-card__image" />
            <div className="category-card__overlay" />
            <span className="category-card__label">
              {t(category.labelKey)}
              <span className="mt-1 block font-sans text-sm font-normal tracking-normal text-paper/80">
                {t('categoriesPage.items', { count: category.count })}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
