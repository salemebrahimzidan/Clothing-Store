import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart'

export default function Cart() {
  const { items, updateQuantity, removeItem, total } = useCart()

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-serif text-4xl">Your bag is empty</h1>
        <p className="mt-3 text-muted">Add a few pieces from the shop.</p>
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper"
        >
          Continue shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <h1 className="font-serif text-4xl">Bag</h1>
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
              <p className="font-serif text-xl">{item.product.name}</p>
              <p className="text-sm text-muted">Size {item.size}</p>
              <p className="mt-1 text-sm">${item.product.price}</p>
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
                aria-label="Decrease quantity"
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
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-muted hover:text-ink"
                onClick={() => removeItem(item.product.id, item.size)}
                aria-label="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between border-t border-sand pt-6">
        <p className="text-muted">Subtotal</p>
        <p className="font-serif text-3xl">${total}</p>
      </div>
      <Link
        to="/checkout"
        className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper"
      >
        Checkout
      </Link>
    </section>
  )
}
