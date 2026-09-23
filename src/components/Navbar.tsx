import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n'
import IconButton from './IconButton'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function handleNavClick(to: string) {
    setOpen(false)
    const [path, hash] = to.split('#')
    if (!hash || location.pathname !== (path || '/')) return
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/products', label: t('nav.shop') },
    { to: '/categories', label: t('nav.categories') },
  ]

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'border-sand/80 bg-paper/80 shadow-[0_8px_30px_rgb(22_20_18_/0.06)] backdrop-blur-md'
          : 'border-transparent bg-paper/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 md:px-6">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight text-ink transition hover:text-clay"
          onClick={() => setOpen(false)}
        >
          {t('brand')}
        </Link>

        <nav className="hidden items-center gap-7 text-sm tracking-wide md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => handleNavClick(link.to)}
              className={({ isActive }) =>
                isActive && !link.to.includes('#')
                  ? 'text-ink underline decoration-clay decoration-2 underline-offset-8'
                  : 'text-muted transition hover:text-ink'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher />

          <IconButton
            className="md:hidden"
            aria-label={t('nav.toggleMenu')}
            aria-expanded={open}
            tone="soft"
            active={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </IconButton>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-sand bg-paper/95 px-4 py-4 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => handleNavClick(link.to)}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2.5 text-sm ${
                  isActive && !link.to.includes('#')
                    ? 'bg-sand font-medium text-clay'
                    : 'text-muted hover:bg-sand/60 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
