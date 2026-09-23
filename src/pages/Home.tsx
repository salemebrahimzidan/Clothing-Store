import { ArrowRight, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts, products } from '../data/products'
import { useTranslation } from '../i18n'
import type { Product, ProductCategory } from '../types/product'
import {
  createWhatsAppOrderUrl,
  openWhatsAppOrder,
} from '../utils/whatsapp'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80'

const FEATURED_CATEGORIES: ProductCategory[] = ['Women', 'Men']

type FeaturedFilter = 'all' | ProductCategory

type CategoryCard = {
  id: string
  labelKey: string
  to: string
  image: string
}

function getHomeProducts(limit = 8): Product[] {
  const featured = getFeaturedProducts()
  const rest = products.filter((product) => !product.featured)
  return [...featured, ...rest].slice(0, limit)
}

function pickCategoryImage(category: ProductCategory) {
  return (
    products.find((product) => product.category === category)?.image ??
    products[0].image
  )
}

export default function Home() {
  const { t } = useTranslation()
  const { hash } = useLocation()
  const homeProducts = getHomeProducts(8)
  const [featuredFilter, setFeaturedFilter] = useState<FeaturedFilter>('all')
  const featuredFilters = [
    { id: 'all' as const, label: t('shop.all'), count: homeProducts.length },
    ...FEATURED_CATEGORIES.map((category) => ({
      id: category,
      label: t(`categories.${category}`),
      count: homeProducts.filter((product) => product.category === category)
        .length,
    })).filter((filter) => filter.count > 0),
  ]
  const visibleHomeProducts =
    featuredFilter === 'all'
      ? homeProducts
      : homeProducts.filter((product) => product.category === featuredFilter)
  const offerImage =
    getFeaturedProducts()[0]?.image ?? products[0]?.image ?? HERO_IMAGE

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [hash])

  const categories: CategoryCard[] = [
    {
      id: 'men',
      labelKey: 'categories.Men',
      to: '/products?category=Men',
      image: pickCategoryImage('Men'),
    },
    {
      id: 'women',
      labelKey: 'categories.Women',
      to: '/products?category=Women',
      image: pickCategoryImage('Women'),
    },
    {
      id: 'offers',
      labelKey: 'categories.Offers',
      to: '/products?featured=1',
      image: offerImage,
    },
  ]

  function handleWhatsApp() {
    openWhatsAppOrder(t('whatsapp.generalMessage'))
  }

  return (
    <div>
      <section className="home-hero" aria-label={t('hero.title')}>
        <img
          src={HERO_IMAGE}
          alt={t('hero.imageAlt')}
          className="home-hero__image"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="home-hero__title">{t('hero.title')}</h1>
          <p className="home-hero__body">{t('hero.body')}</p>
          <div className="home-hero__actions">
            <Link to="/products" className="home-hero__cta home-hero__cta--primary">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
      >
        <div className="mb-8 max-w-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            {t('home.categoriesEyebrow')}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            {t('home.categoriesTitle')}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.to}
              className="category-card group"
            >
              <img
                src={category.image}
                alt=""
                className="category-card__image"
              />
              <div className="category-card__overlay" />
              <span className="category-card__label">
                {t(category.labelKey)}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="featured"
        className="scroll-mt-24 bg-sand/35"
        aria-labelledby="featured-title"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="featured__head">
            <div className="max-w-xl">
              <p className="featured__eyebrow">{t('home.featured')}</p>
              <h2
                id="featured-title"
                className="mt-3 font-serif text-3xl leading-tight md:text-[2.625rem]"
              >
                {t('home.title')}
              </h2>
              <p className="mt-3 text-sm text-muted md:text-base">
                {t('home.featuredSubtitle')}
              </p>
            </div>
            <Link to="/products" className="featured__view-all">
              {t('home.viewAll')}
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div
            className="filter-bar"
            role="group"
            aria-label={t('home.filterLabel')}
          >
            {featuredFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={featuredFilter === filter.id}
                aria-controls="featured-grid"
                onClick={() => setFeaturedFilter(filter.id)}
                className="filter-chip"
              >
                {filter.label}
                <span className="filter-chip__count">{filter.count}</span>
              </button>
            ))}
          </div>

          <div
            id="featured-grid"
            key={featuredFilter}
            className="product-grid"
          >
            {visibleHomeProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="offers"
        className="promo-offer scroll-mt-24"
        aria-label={t('home.offerTitle')}
      >
        <div className="promo-offer__panel">
          <div className="promo-offer__copy">
            <p className="promo-offer__eyebrow">{t('home.offerEyebrow')}</p>
            <h2 className="promo-offer__title">{t('home.offerTitle')}</h2>
            <p className="promo-offer__body">{t('home.offerBody')}</p>
            <div className="promo-offer__actions">
              <Link to="/products?featured=1" className="promo-offer__cta">
                {t('home.offerCta')}
              </Link>
              <a
                href={createWhatsAppOrderUrl(t('whatsapp.generalMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                className="promo-offer__cta promo-offer__cta--ghost"
                onClick={(event) => {
                  event.preventDefault()
                  handleWhatsApp()
                }}
              >
                <MessageCircle size={16} />
                {t('hero.badge')}
              </a>
            </div>
          </div>

          <div className="promo-offer__media" aria-hidden>
            <img src={offerImage} alt="" className="promo-offer__image" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 md:px-6 md:py-16"
      >
        <div className="rounded-3xl bg-ink px-6 py-10 text-center text-paper md:px-10">
          <h2 className="font-serif text-3xl">{t('home.contactTitle')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-paper/75 md:text-base">
            {t('home.contactBody')}
          </p>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-paper transition hover:bg-paper hover:text-ink"
          >
            <MessageCircle size={16} />
            {t('nav.whatsapp')}
          </button>
        </div>
      </section>
    </div>
  )
}
