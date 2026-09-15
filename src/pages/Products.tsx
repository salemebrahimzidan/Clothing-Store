import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import type { ProductCategory } from '../types/product'

const filters: Array<'All' | ProductCategory> = [
  'All',
  'Women',
  'Men',
  'Accessories',
]

export default function Products() {
  const [params, setParams] = useSearchParams()
  const category = (params.get('category') ?? 'All') as 'All' | ProductCategory

  const visible = useMemo(() => {
    if (category === 'All') return products
    return products.filter((product) => product.category === category)
  }, [category])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.28em] text-muted">Catalog</p>
      <h1 className="mt-2 font-serif text-4xl">Shop</h1>
      <p className="mt-3 max-w-xl text-muted">
        Twelve pieces, three categories. Filter by wardrobe and open any item
        for sizes and details.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              if (filter === 'All') setParams({})
              else setParams({ category: filter })
            }}
            className={`rounded-full px-4 py-2 text-sm ${
              category === filter
                ? 'bg-ink text-paper'
                : 'bg-sand text-ink hover:bg-sand/70'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
