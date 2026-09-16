import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from '../i18n'
import IconButton from './IconButton'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.shop') },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight text-ink transition hover:text-clay"
        >
          {t('brand')}
        </Link>

        <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
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
            tone="soft"
            active={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </IconButton>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-sand bg-sand/40 px-4 py-4 text-sm md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'font-medium text-clay' : 'text-muted hover:text-ink'
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
