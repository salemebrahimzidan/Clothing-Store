import { Link } from 'react-router-dom'
import type { Product } from '../types/product'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-3xl bg-sand">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {product.category}
          </p>
          <h3 className="mt-1 font-serif text-xl">{product.name}</h3>
        </div>
        <p className="text-sm">${product.price}</p>
      </div>
    </Link>
  )
}
