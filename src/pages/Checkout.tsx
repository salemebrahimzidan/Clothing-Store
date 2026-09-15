import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../cart'

export default function Checkout() {
  const { items, total, clear } = useCart()
  const navigate = useNavigate()
  const [placed, setPlaced] = useState(false)

  if (items.length === 0 && !placed) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-serif text-4xl">Nothing to check out</h1>
        <Link to="/products" className="mt-6 inline-block text-sm text-muted">
          Shop first
        </Link>
      </section>
    )
  }

  if (placed) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-muted">
          Order confirmed
        </p>
        <h1 className="mt-3 font-serif text-4xl">Thank you</h1>
        <p className="mt-4 text-muted">
          A confirmation will arrive by email. Your pieces ship within 3–5
          days.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper"
        >
          Back home
        </Link>
      </section>
    )
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    clear()
    setPlaced(true)
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <h1 className="font-serif text-4xl">Checkout</h1>
        <label className="block text-sm">
          Full name
          <input
            required
            name="name"
            className="mt-1 w-full rounded-2xl border-0 bg-sand px-4 py-3 outline-none ring-ink/20 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-2xl border-0 bg-sand px-4 py-3 outline-none ring-ink/20 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          Shipping address
          <input
            required
            name="address"
            className="mt-1 w-full rounded-2xl border-0 bg-sand px-4 py-3 outline-none ring-ink/20 focus:ring-2"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            City
            <input
              required
              name="city"
              className="mt-1 w-full rounded-2xl border-0 bg-sand px-4 py-3 outline-none ring-ink/20 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            Postal code
            <input
              required
              name="postal"
              className="mt-1 w-full rounded-2xl border-0 bg-sand px-4 py-3 outline-none ring-ink/20 focus:ring-2"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-full bg-ink px-6 py-3 text-sm text-paper"
        >
          Place order · ${total}
        </button>
      </form>

      <aside className="h-fit rounded-3xl bg-sand p-6">
        <h2 className="font-serif text-2xl">Order</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {items.map((item) => (
            <li
              key={`${item.product.id}-${item.size}`}
              className="flex justify-between gap-4"
            >
              <span>
                {item.product.name} · {item.size} × {item.quantity}
              </span>
              <span>${item.product.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between border-t border-paper pt-4">
          <span>Total</span>
          <span className="font-serif text-2xl">${total}</span>
        </div>
        <button
          type="button"
          onClick={() => navigate('/cart')}
          className="mt-4 text-sm text-muted hover:text-ink"
        >
          Edit bag
        </button>
      </aside>
    </section>
  )
}
