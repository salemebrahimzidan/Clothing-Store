import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CartItem, Product } from './types/product'

type CartContextValue = {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity?: number) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  removeItem: (productId: string, size: string) => void
  clear: () => void
  count: number
  total: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const value = useContext(CartContext)
  if (!value) {
    throw new Error('useCart must be used inside the cart provider')
  }
  return value
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback(
    (product: Product, size: string, quantity = 1) => {
      setItems((current) => {
        const existing = current.find(
          (item) => item.product.id === product.id && item.size === size,
        )
        if (existing) {
          return current.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        }
        return [...current, { product, size, quantity }]
      })
    },
    [],
  )

  const updateQuantity = useCallback(
    (productId: string, size: string, quantity: number) => {
      setItems((current) => {
        if (quantity < 1) {
          return current.filter(
            (item) => !(item.product.id === productId && item.size === size),
          )
        }
        return current.map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity }
            : item,
        )
      })
    },
    [],
  )

  const removeItem = useCallback((productId: string, size: string) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.product.id === productId && item.size === size),
      ),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const total = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    )
    return { items, addItem, updateQuantity, removeItem, clear, count, total }
  }, [items, addItem, updateQuantity, removeItem, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
