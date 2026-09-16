import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand bg-sand/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-serif text-2xl">Clothing Store</p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            A small clothing house for well-cut staples and seasonal extras.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">Shop</p>
          <div className="flex flex-col gap-2 text-muted">
            <Link to="/products">All products</Link>
            <Link to="/products?category=Women">Women</Link>
            <Link to="/products?category=Men">Men</Link>
            <Link to="/products?category=Accessories">Accessories</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">Visit</p>
          <p className="text-muted">
            18 Mercer Street
            <br />
            New York, NY
            <br />
            Open Tue–Sun, 11–7
          </p>
        </div>
      </div>
      <p className="border-t border-sand px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Clothing Store. All rights reserved.
      </p>
    </footer>
  )
}
