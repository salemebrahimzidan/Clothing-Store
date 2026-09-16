import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart'
import { useTranslation } from '../i18n'
import { formatCurrency } from '../utils/formatCurrency'

export default function Cart() {
  const { items, updateQuantity, removeItem, total } = useCart()
  const { t, locale } = useTranslation()

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-serif text-4xl">{t('cart.emptyTitle')}</h1>
        <p className="mt-3 text-muted">{t('cart.emptyBody')}</p>
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper"
        >
          {t('cart.continueShopping')}
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="font-serif text-4xl">{t('cart.title')}</h1>
      <ul className="mt-8 divide-y divide-sand">
        {items.map((item) => (
          <li
            key={`${item.product.id}-${item.size}`}
            className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
          >
            <img
              src={item.product.image}
              alt=""
              className="h-28 w-24 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <p className="font-serif text-xl">
                {t(`catalog.${item.product.id}.name`)}
              </p>
              <p className="text-sm text-muted">
                {t('cart.size', { size: item.size })}
              </p>
              <p className="mt-1 text-sm">
                {formatCurrency(item.product.price, locale)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-sand p-2"
                onClick={() =>
                  updateQuantity(
                    item.product.id,
                    item.size,
                    item.quantity - 1,
                  )
                }
                aria-label={t('cart.decreaseQuantity')}
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm">{item.quantity}</span>
              <button
                type="button"
                className="rounded-full border border-sand p-2"
                onClick={() =>
                  updateQuantity(
                    item.product.id,
                    item.size,
                    item.quantity + 1,
                  )
                }
                aria-label={t('cart.increaseQuantity')}
              >
                <Plus size={14} />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-muted hover:text-ink"
                onClick={() => removeItem(item.product.id, item.size)}
                aria-label={t('cart.removeItem')}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between border-t border-sand pt-6">
        <p className="text-muted">{t('cart.subtotal')}</p>
        <p className="font-serif text-3xl">{formatCurrency(total, locale)}</p>
      </div>
      <Link
        to="/checkout"
        className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper"
      >
        {t('cart.checkout')}
      </Link>
    </section>
  )
}
