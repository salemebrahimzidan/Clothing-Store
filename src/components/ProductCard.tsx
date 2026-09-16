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
  const category = t(`categories.${product.category}`)
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

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/55 to-transparent p-4 pt-16">
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
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      setActiveColor(option.name)
                    }}
                    className={`size-4 rounded-full border-2 shadow-sm ${
                      active
                        ? 'border-clay ring-1 ring-paper'
                        : 'border-paper/90'
                    }`}
                    style={{ backgroundColor: option.hex }}
                  />
                )
              })}
            </div>
          ) : (
            <span />
          )}

          <Link
            to={`/products/${product.id}`}
            className="rounded-full bg-paper px-4 py-2 text-sm text-ink transition hover:bg-clay hover:text-paper"
          >
            {t('product.viewProduct')}
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {category}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 font-serif text-xl hover:text-clay">{name}</h3>
        </Link>
      </div>
    </article>
  )
}
