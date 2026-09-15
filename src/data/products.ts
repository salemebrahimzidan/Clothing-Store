import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 'linen-wrap-dress',
    name: 'Linen Wrap Dress',
    price: 148,
    category: 'Women',
    description:
      'A fluid wrap silhouette in washed linen. Soft drape, adjustable tie waist, and a midi length that moves with you.',
    image:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80',
    sizes: ['XS', 'S', 'M', 'L'],
    featured: true,
  },
  {
    id: 'wool-tailored-blazer',
    name: 'Wool Tailored Blazer',
    price: 228,
    category: 'Women',
    description:
      'Structured shoulders, a nipped waist, and a lightly padded lapel. Cut from Italian wool for everyday polish.',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'wide-leg-denim',
    name: 'Wide-Leg Denim',
    price: 118,
    category: 'Women',
    description:
      'High-rise wide-leg jeans in a vintage wash. Rigid cotton that softens with wear and holds a clean crease.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80',
    sizes: ['24', '25', '26', '27', '28', '29'],
  },
  {
    id: 'cashmere-crew',
    name: 'Cashmere Crew Knit',
    price: 196,
    category: 'Women',
    description:
      'A weightless crewneck in Scottish cashmere. Ribbed cuffs and a relaxed body for layering through the season.',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'camel-overcoat',
    name: 'Camel Overcoat',
    price: 312,
    category: 'Men',
    description:
      'A classic single-breasted overcoat in camel hair. Notch lapel, welt pockets, and a full lining for cool evenings.',
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'oxford-shirt',
    name: 'Oxford Shirt',
    price: 89,
    category: 'Men',
    description:
      'Button-down oxford cloth with a boxy, slightly cropped cut. Washed for a lived-in hand from the first wear.',
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'pleated-trousers',
    name: 'Pleated Trousers',
    price: 154,
    category: 'Men',
    description:
      'Single-pleat trousers in a drapey wool blend. Tapered from the knee with a clean break at the shoe.',
    image:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80',
    sizes: ['30', '32', '34', '36'],
  },
  {
    id: 'heavyweight-hoodie',
    name: 'Heavyweight Hoodie',
    price: 98,
    category: 'Men',
    description:
      'Brushed fleece hoodie with a generous hood and dropped shoulders. Cut for warmth without bulk.',
    image:
      'https://images.unsplash.com/photo-1556821840-3a69f8430b99?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'leather-tote',
    name: 'Leather Tote',
    price: 246,
    category: 'Accessories',
    description:
      'Vegetable-tanned leather tote with an open top and interior zip pocket. Softens and darkens with age.',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
    sizes: ['One size'],
    featured: true,
  },
  {
    id: 'wool-scarf',
    name: 'Merino Scarf',
    price: 64,
    category: 'Accessories',
    description:
      'A long merino scarf in a herringbone weave. Light enough for indoors, warm enough for a city commute.',
    image:
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
    sizes: ['One size'],
  },
  {
    id: 'leather-sneakers',
    name: 'Court Sneakers',
    price: 168,
    category: 'Accessories',
    description:
      'Low-profile leather sneakers with a gum sole. Minimal branding and a cushioned insole for all-day wear.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
  },
  {
    id: 'silk-bandana',
    name: 'Silk Bandana',
    price: 42,
    category: 'Accessories',
    description:
      'Printed silk twill bandana. Wear it at the neck, in the hair, or tied to a bag handle.',
    image:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80',
    sizes: ['One size'],
  },
]

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured)
}

export function getProductsByCategory(category: Product['category'] | 'All') {
  if (category === 'All') return products
  return products.filter((product) => product.category === category)
}
