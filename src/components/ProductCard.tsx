import { ArrowRight, Heart, MessageCircle } from 'lucide-react'
import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import type { Product } from '../types/product'
import { formatCurrency } from '../utils/formatCurrency'
import {
  buildWhatsAppOrderMessage,
  openWhatsAppOrder,
} from '../utils/whatsapp'
import { useWishlist } from '../wishlist'

type ProductCardProps = {
  product: Product
  index?: number
}

type Badge = { key: string; label: string; tone: 'accent' | 'neutral' }

function getBadges(product: Product, t: (key: string) => string): Badge[] {
  const badges: Badge[] = []
  if (product.featured) {
    badges.push({ key: 'featured', label: t('product.featuredBadge'), tone: 'accent' })
  }
  return badges
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t, locale } = useTranslation()
  const wishlist = useWishlist()
  const mediaRef = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const name = t(`catalog.${product.id}.name`)
  const productUrl = `/products/${product.id}`
  const [activeColor, setActiveColor] = useState(product.colors[0]?.name ?? '')
  const [previewColor, setPreviewColor] = useState<string | null>(null)
  const [burst, setBurst] = useState(0)

  const saved = wishlist.has(product.id)
  const shownColor = previewColor ?? activeColor
  const selectedColor = product.colors.find((item) => item.name === activeColor)
  const displayImage = selectedColor?.image ?? product.image
  const images =
    product.colors.length > 0
      ? product.colors.map((color) => ({ key: color.name, src: color.image }))
      : [{ key: '', src: product.image }]
  const badges = getBadges(product, t)
  const wishLabel = saved
    ? t('product.removeFromWishlist')
    : t('product.addToWishlist')

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return
    const node = mediaRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      node.style.setProperty('--px', x.toFixed(3))
      node.style.setProperty('--py', y.toFixed(3))
    })
  }

  function handlePointerLeave() {
    cancelAnimationFrame(frame.current)
    mediaRef.current?.style.setProperty('--px', '0')
    mediaRef.current?.style.setProperty('--py', '0')
  }

  function handleWishlist() {
    if (!saved) setBurst((value) => value + 1)
    wishlist.toggle(product.id)
  }

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
    <article
      className="pcard"
      style={{ '--i': Math.min(index, 11) } as CSSProperties}
      aria-labelledby={`pcard-${product.id}`}
    >
      <div
        ref={mediaRef}
        className="pcard__media"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <Link
          to={productUrl}
          className="pcard__image-link"
          tabIndex={-1}
          aria-hidden
        >
          <div className="pcard__image-stack">
            {images.map((image) => (
              <img
                key={image.key}
                src={image.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="pcard__image"
                data-visible={images.length === 1 || image.key === shownColor}
              />
            ))}
          </div>
          <span className="pcard__overlay" />
        </Link>

        {badges.length > 0 ? (
          <ul className="pcard__badges">
            {badges.map((badge) => (
              <li key={badge.key} className="pcard__badge" data-tone={badge.tone}>
                {badge.label}
              </li>
            ))}
          </ul>
        ) : null}

        <button
          type="button"
          onClick={handleWishlist}
          aria-pressed={saved}
          aria-label={`${wishLabel}: ${name}`}
          title={wishLabel}
          className="pcard__wish"
          data-saved={saved}
        >
          <Heart key={burst} className="pcard__wish-icon" strokeWidth={1.75} />
        </button>
      </div>

      <div className="pcard__body">
        <p className="pcard__category">{t(`categories.${product.category}`)}</p>

        <div className="pcard__heading">
          <h3 id={`pcard-${product.id}`} className="pcard__title">
            <Link to={productUrl} className="pcard__title-link">
              {name}
            </Link>
          </h3>
          <p className="pcard__price">{formatCurrency(product.price, locale)}</p>
        </div>

        {product.colors.length > 0 ? (
          <div className="pcard__colors">
            <div
              role="group"
              aria-label={`${t('product.color')}: ${name}`}
              className="pcard__swatches"
              onMouseLeave={() => setPreviewColor(null)}
            >
              {product.colors.map((option) => {
                const active = activeColor === option.name
                return (
                  <button
                    key={option.name}
                    type="button"
                    aria-pressed={active}
                    aria-label={option.name}
                    title={option.name}
                    onClick={() => setActiveColor(option.name)}
                    onMouseEnter={() => setPreviewColor(option.name)}
                    onFocus={() => setPreviewColor(option.name)}
                    onBlur={() => setPreviewColor(null)}
                    className="pcard__swatch"
                    style={{ '--swatch': option.hex } as CSSProperties}
                  >
                    <img
                      src={option.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="pcard__swatch-img"
                    />
                  </button>
                )
              })}
            </div>
            <span className="pcard__color-name" aria-live="polite">
              {shownColor}
            </span>
          </div>
        ) : null}

        <div className="pcard__actions">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="pcard__btn pcard__btn--whatsapp"
            aria-label={`${t('product.orderWhatsApp')}: ${name}`}
          >
            <MessageCircle className="pcard__btn-icon" strokeWidth={2} />
            <span className="truncate">{t('product.orderWhatsApp')}</span>
          </button>
          <Link
            to={productUrl}
            className="pcard__btn pcard__btn--view"
            aria-label={`${t('product.viewProduct')}: ${name}`}
          >
            <span className="truncate">{t('product.viewProduct')}</span>
            <ArrowRight className="pcard__btn-icon pcard__arrow" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  )
}
