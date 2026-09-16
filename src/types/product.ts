export type ProductCategory = 'Women' | 'Men' | 'Accessories'

export type ProductColor = {
  name: string
  hex: string
  image: string
}

export type Product = {
  id: string
  name: string
  price: number
  category: ProductCategory
  description: string
  image: string
  sizes: string[]
  colors: ProductColor[]
  featured?: boolean
}

export type CartItem = {
  product: Product
  size: string
  quantity: number
}
