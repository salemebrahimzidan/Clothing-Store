import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { I18nProvider } from './i18n'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </I18nProvider>
  )
}
