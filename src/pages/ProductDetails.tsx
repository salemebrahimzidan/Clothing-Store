import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../cart'
import { getProductById } from '../data/products'
import { useTranslation } from '../i18n'
import { formatCurrency } from '../utils/formatCurrency'

export default function ProductDetails() {
  const { id } = useParams()
  const product = id ? getProductById(id) : undefined
  const { addItem } = useCart()
  const navigate = useNavigate()
  const { t, locale } = useTranslation()
  const [size, setSize] = useState(product?.sizes[0] ?? '')
  const [added, setAdded] = useState(false)

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

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6">
      <div className="overflow-hidden rounded-[28px] bg-sand">
        <img
          src={product.image}
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

        <fieldset className="mt-8">
          <legend className="mb-3 text-sm">{t('product.size')}</legend>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
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

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              addItem(product, size, 1)
              setAdded(true)
            }}
            className="rounded-full bg-ink px-6 py-3 text-sm text-paper hover:bg-ink/90"
          >
            {added ? t('product.addedToBag') : t('product.addToBag')}
          </button>
          <button
            type="button"
            onClick={() => {
              addItem(product, size, 1)
              navigate('/cart')
            }}
            className="rounded-full border border-ink px-6 py-3 text-sm hover:bg-sand"
          >
            {t('product.buyNow')}
          </button>
        </div>
      </div>
    </section>
  )
}
