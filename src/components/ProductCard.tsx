import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import type { Product } from '../types/product'
import { formatCurrency } from '../utils/formatCurrency'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, locale } = useTranslation()
  const name = t(`catalog.${product.id}.name`)
  const category = t(`categories.${product.category}`)

  return (
    <article className="group block">
      <Link to={`/products/${product.id}`} className="block">
        <div className="overflow-hidden rounded-3xl bg-sand">
          <img
            src={product.image}
            alt={name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {category}
          </p>
          <Link to={`/products/${product.id}`}>
            <h3 className="mt-1 font-serif text-xl hover:text-clay">{name}</h3>
          </Link>
          {product.colors.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {product.colors.map((option) => (
                <span
                  key={option.name}
                  title={option.name}
                  className="size-3.5 rounded-full border border-ink/10"
                  style={{ backgroundColor: option.hex }}
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-sm">{formatCurrency(product.price, locale)}</p>
      </div>
      <Link
        to={`/products/${product.id}`}
        className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:bg-ink/90"
      >
        {t('product.viewProduct')}
      </Link>
    </article>
  )
}
