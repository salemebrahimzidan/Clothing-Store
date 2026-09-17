import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import type { Product } from '../types/product'
import { formatCurrency } from '../utils/formatCurrency'
import {
  buildWhatsAppOrderMessage,
  openWhatsAppOrder,
} from '../utils/whatsapp'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, locale } = useTranslation()
  const name = t(`catalog.${product.id}.name`)
  const [activeColor, setActiveColor] = useState(product.colors[0]?.name ?? '')
  const selectedColor = product.colors.find((item) => item.name === activeColor)
  const displayImage = selectedColor?.image ?? product.image

  function handleWhatsApp() {
    openWhatsAppOrder(
      buildWhatsAppOrderMessage({
        productName: name,
        price: product.price,
        color: selectedColor?.name,
        imageUrl: displayImage,
      }),
    )
  }

  return (
    <article className="product-card group flex h-full flex-col">
      <div className="product-card__media relative overflow-hidden rounded-2xl bg-sand">
        <Link to={`/products/${product.id}`} className="block">
          <img
            key={displayImage}
            src={displayImage}
            alt={name}
            className="product-card__image h-80 w-full object-cover"
          />
        </Link>

        <div className="product-card__top">
          {product.featured ? (
            <span className="product-card__badge">
              {t('product.featuredBadge')}
            </span>
          ) : (
            <span />
          )}
          <p className="product-card__price">
            {formatCurrency(product.price, locale)}
          </p>
        </div>

        <div className="product-card__actions">
          <Link
            to={`/products/${product.id}`}
            className="product-card__btn product-card__btn--primary"
          >
            {t('product.viewProduct')}
          </Link>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="product-card__btn product-card__btn--whatsapp"
            aria-label={t('product.orderWhatsApp')}
          >
            <MessageCircle className="product-card__wa-icon" strokeWidth={2} />
            <span>{t('product.orderWhatsApp')}</span>
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col gap-2.5">
        <h3 className="font-serif text-xl leading-snug text-ink">
          <Link
            to={`/products/${product.id}`}
            className="transition hover:text-clay"
          >
            {name}
          </Link>
        </h3>

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
                  className={`overflow-hidden rounded-md border-2 transition ${
                    active ? 'border-clay' : 'border-sand hover:border-sand-deep'
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
        ) : null}
      </div>
    </article>
  )
}
