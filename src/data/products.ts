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
    colors: [
      {
        name: 'Sand',
        hex: '#c4b198',
        image:
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Olive',
        hex: '#6b7340',
        image:
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Ivory',
        hex: '#f2ebe0',
        image:
          'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Camel',
        hex: '#c08a4f',
        image:
          'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Navy',
        hex: '#1f2a44',
        image:
          'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Light Wash',
        hex: '#9bb5c9',
        image:
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Indigo',
        hex: '#2f4a6d',
        image:
          'https://images.unsplash.com/photo-1582418702050-061b3a0f0c0a?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Cream',
        hex: '#efe6d6',
        image:
          'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Grey',
        hex: '#8a8a8a',
        image:
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Camel',
        hex: '#c08a4f',
        image:
          'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Charcoal',
        hex: '#3d3d3d',
        image:
          'https://images.unsplash.com/photo-1544923246-77307dd628ce?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'White',
        hex: '#f5f5f5',
        image:
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Sky Blue',
        hex: '#9ec5e8',
        image:
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Stripe',
        hex: '#c9d6e3',
        image:
          'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Beige',
        hex: '#d2b48c',
        image:
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Olive',
        hex: '#6b7340',
        image:
          'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1556821840-3a69f8430b99?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Heather Grey',
        hex: '#a8a8a8',
        image:
          'https://images.unsplash.com/photo-1509942772902-268acb76cce7?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Forest',
        hex: '#2f4f3e',
        image:
          'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Tan',
        hex: '#b07848',
        image:
          'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1590874103328-eac38a67478e?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Grey',
        hex: '#8a8a8a',
        image:
          'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Burgundy',
        hex: '#722f37',
        image:
          'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Navy',
        hex: '#1f2a44',
        image:
          'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'White',
        hex: '#f5f5f5',
        image:
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Black',
        hex: '#1a1a1a',
        image:
          'https://images.unsplash.com/photo-1491553895911-0055cfa702bf?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
    colors: [
      {
        name: 'Ivory Print',
        hex: '#f2ebe0',
        image:
          'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Navy Print',
        hex: '#1f2a44',
        image:
          'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1200&q=80',
      },
    ],
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
