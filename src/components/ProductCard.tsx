import { useState } from 'react'
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
  const [activeColor, setActiveColor] = useState(product.colors[0]?.name ?? '')
  const selectedColor = product.colors.find((item) => item.name === activeColor)
  const displayImage = selectedColor?.image ?? product.image

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-3xl bg-sand">
        <Link to={`/products/${product.id}`} className="block">
          <img
            key={displayImage}
            src={displayImage}
            alt={name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <p className="pointer-events-none absolute end-3 top-3 rounded-full bg-clay px-3 py-1 text-xs font-medium tracking-wide text-paper shadow-sm">
          {formatCurrency(product.price, locale)}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        {product.colors.length > 0 ? (
          <div className="flex flex-wrap items-center gap-1.5">
            {product.colors.map((option) => {
              const active = activeColor === option.name
              return (
                <button
                  key={option.name}
                  type="button"
                  title={option.name}
                  aria-label={option.name}
                  aria-pressed={active}
                  onClick={() => setActiveColor(option.name)}
                  className={`overflow-hidden rounded-md border-2 ${
                    active ? 'border-clay' : 'border-sand'
                  }`}
                >
                  <img
                    src={option.image}
                    alt=""
                    className="size-7 object-cover"
                  />
                </button>
              )
            })}
          </div>
        ) : (
          <span />
        )}

        <Link
          to={`/products/${product.id}`}
          className="rounded-full bg-ink px-4 py-2 text-sm text-paper transition hover:bg-clay"
        >
          {t('product.viewProduct')}
        </Link>
      </div>
    </article>
  )
}
