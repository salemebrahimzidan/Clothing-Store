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
    <Link to={`/products/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-3xl bg-sand">
        <img
          src={product.image}
          alt={name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {category}
          </p>
          <h3 className="mt-1 font-serif text-xl">{name}</h3>
        </div>
        <p className="text-sm">{formatCurrency(product.price, locale)}</p>
      </div>
    </Link>
  )
}
