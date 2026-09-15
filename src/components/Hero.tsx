import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted">
          Spring edit
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Quiet pieces, made to last.
        </h1>
        <p className="mt-5 max-w-md text-muted">
          Tailored coats, washed linen, and everyday knits — a considered
          wardrobe without the noise.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper hover:bg-ink/90"
        >
          Shop the collection
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="relative overflow-hidden rounded-[28px] bg-sand">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80"
          alt="Editorial lookbook"
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
        <p className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-4 py-2 text-xs tracking-wide">
          New arrivals · Limited run
        </p>
      </div>
    </section>
  )
}
