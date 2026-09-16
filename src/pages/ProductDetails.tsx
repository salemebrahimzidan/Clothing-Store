import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useTranslation } from '../i18n'
import { formatCurrency } from '../utils/formatCurrency'
import {
  buildWhatsAppOrderMessage,
  openWhatsAppOrder,
} from '../utils/whatsapp'

export default function ProductDetails() {
  const { id } = useParams()
  const product = id ? getProductById(id) : undefined
  const { t, locale } = useTranslation()
  const [size, setSize] = useState(
    product?.sizes.length === 1 ? (product.sizes[0] ?? '') : '',
  )
  const [colorName, setColorName] = useState(
    product?.colors.length === 1 ? (product.colors[0]?.name ?? '') : '',
  )
  const [error, setError] = useState('')

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl">{t('product.notFound')}</h1>
        <Link to="/products" className="mt-4 inline-block text-sm text-muted">
          {t('product.backToShop')}
        </Link>
      </section>
    )
  }

  const name = t(`catalog.${product.id}.name`)
  const description = t(`catalog.${product.id}.description`)
  const category = t(`categories.${product.category}`)
  const selectedColor = product.colors.find((item) => item.name === colorName)
  const displayImage = selectedColor?.image ?? product.image
  const needsSize = product.sizes.length > 0
  const needsColor = product.colors.length > 0
  const canOrder =
    (!needsSize || Boolean(size)) && (!needsColor || Boolean(colorName))

  function orderViaWhatsApp() {
    if (!canOrder) {
      setError(t('product.selectOptions'))
      return
    }

    setError('')
    const message = buildWhatsAppOrderMessage({
      productName: name,
      price: product!.price,
      size: size || undefined,
      color: colorName || undefined,
      imageUrl: displayImage,
    })
    openWhatsAppOrder(message)
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6">
      <div className="overflow-hidden rounded-[28px] bg-sand">
        <img
          key={displayImage}
          src={displayImage}
          alt={name}
          className="h-full min-h-[420px] w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.28em] text-muted">
          {category}
        </p>
        <h1 className="mt-3 font-serif text-4xl">{name}</h1>
        <p className="mt-3 text-xl">{formatCurrency(product.price, locale)}</p>
        <p className="mt-5 max-w-md text-muted">{description}</p>

        {needsSize && (
          <fieldset className="mt-8">
            <legend className="mb-3 text-sm">{t('product.size')}</legend>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSize(option)
                    setError('')
                  }}
                  className={`min-w-12 rounded-full px-4 py-2 text-sm ${
                    size === option
                      ? 'bg-ink text-paper'
                      : 'bg-sand hover:bg-sand/70'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {needsColor && (
          <fieldset className="mt-6">
            <legend className="mb-3 text-sm">{t('product.color')}</legend>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((option) => {
                const active = colorName === option.name
                return (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => {
                      setColorName(option.name)
                      setError('')
                    }}
                    className={`inline-flex min-w-12 items-center gap-2 rounded-full px-4 py-2 text-sm ${
                      active
                        ? 'bg-ink text-paper'
                        : 'bg-sand hover:bg-sand/70'
                    }`}
                  >
                    <span
                      className={`size-3.5 shrink-0 rounded-full border ${
                        active ? 'border-paper/70' : 'border-ink/15'
                      }`}
                      style={{ backgroundColor: option.hex }}
                      aria-hidden
                    />
                    {option.name}
                  </button>
                )
              })}
            </div>
          </fieldset>
        )}

        {error && <p className="mt-4 text-sm text-clay">{error}</p>}

        <div className="mt-8">
          <button
            type="button"
            onClick={orderViaWhatsApp}
            className="w-full rounded-full bg-ink px-6 py-3.5 text-sm text-paper hover:bg-ink/90 sm:w-auto"
          >
            {t('product.orderWhatsApp')}
          </button>
        </div>
      </div>
    </section>
  )
}
