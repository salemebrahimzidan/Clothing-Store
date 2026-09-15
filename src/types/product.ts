export type ProductCategory = 'Women' | 'Men' | 'Accessories'

export type Product = {
  id: string
  name: string
  price: number
  category: ProductCategory
  description: string
  image: string
  sizes: string[]
  featured?: boolean
}

export type CartItem = {
  product: Product
  size: string
  quantity: number
}
