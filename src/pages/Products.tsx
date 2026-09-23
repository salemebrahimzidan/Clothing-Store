import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useTranslation } from '../i18n'
import type { ProductCategory } from '../types/product'

const filters: Array<'All' | ProductCategory | 'Featured'> = [
  'All',
  'Women',
  'Men',
  'Featured',
]

export default function Products() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  const featuredOnly = params.get('featured') === '1'
  const activeFilter: 'All' | ProductCategory | 'Featured' = featuredOnly
    ? 'Featured'
    : ((category as ProductCategory | null) ?? 'All')
  const { t } = useTranslation()

  const visible = useMemo(() => {
    if (featuredOnly) return products.filter((product) => product.featured)
    if (!category || category === 'All') return products
    return products.filter((product) => product.category === category)
  }, [category, featuredOnly])

  function filterLabel(filter: 'All' | ProductCategory | 'Featured') {
    if (filter === 'All') return t('shop.all')
    if (filter === 'Featured') return t('categories.Offers')
    return t(`categories.${filter}`)
  }

  function applyFilter(filter: 'All' | ProductCategory | 'Featured') {
    if (filter === 'All') setParams({})
    else if (filter === 'Featured') setParams({ featured: '1' })
    else setParams({ category: filter })
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.28em] text-muted">
        {t('shop.eyebrow')}
      </p>
      <h1 className="mt-2 font-serif text-4xl">{t('shop.title')}</h1>
      <p className="mt-3 max-w-xl text-muted">{t('shop.body')}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => applyFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? 'bg-ink text-paper'
                : 'bg-sand text-ink hover:bg-sand/70'
            }`}
          >
            {filterLabel(filter)}
          </button>
        ))}
      </div>

      <div key={activeFilter} className="product-grid mt-10">
        {visible.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
