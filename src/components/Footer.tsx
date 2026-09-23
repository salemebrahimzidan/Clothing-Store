import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import { createWhatsAppOrderUrl } from '../utils/whatsapp'

function SocialIcon({
  children,
  size = 16,
}: {
  children: ReactNode
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      {children}
    </svg>
  )
}

const icons = {
  whatsapp: (
    <SocialIcon>
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.75.46 3.45 1.33 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Zm0 18.08h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.15.82.84-3.07-.2-.32a8.18 8.18 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.21-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.2-8.17 8.2Z" />
    </SocialIcon>
  ),
  instagram: (
    <SocialIcon>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </SocialIcon>
  ),
  facebook: (
    <SocialIcon>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3.1l.9-3H13v-2c0-.6.4-1 1-1Z" />
    </SocialIcon>
  ),
  tiktok: (
    <SocialIcon>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 16.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.78 1.52V6.84a4.84 4.84 0 0 1-1.03-.15Z" />
    </SocialIcon>
  ),
}

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { to: '/products', label: t('footer.allProducts') },
    { to: '/products?category=Women', label: t('categories.Women') },
    { to: '/products?category=Men', label: t('categories.Men') },
    { to: '/products?featured=1', label: t('categories.Offers') },
  ]

  const socials = [
    {
      id: 'whatsapp' as const,
      href: createWhatsAppOrderUrl(t('whatsapp.generalMessage')),
      label: t('footer.whatsapp'),
      className: 'bg-[#25D366] text-white hover:bg-[#1ebe57]',
    },
    {
      id: 'instagram' as const,
      href: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/',
      label: t('footer.instagram'),
      className:
        'bg-gradient-to-br from-[#F58529] via-[#E1306C] to-[#833AB4] text-white hover:brightness-110',
    },
    {
      id: 'facebook' as const,
      href: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/',
      label: t('footer.facebook'),
      className: 'bg-[#1877F2] text-white hover:bg-[#166fe5]',
    },
    {
      id: 'tiktok' as const,
      href: import.meta.env.VITE_TIKTOK_URL || 'https://www.tiktok.com/',
      label: t('footer.tiktok'),
      className: 'bg-ink text-paper hover:bg-ink/90',
    },
  ]

  return (
    <footer id="site-footer" className="mt-auto border-t border-sand bg-sand/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-7 md:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full bg-paper px-3.5 py-1.5 text-xs text-ink transition hover:bg-clay hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className={`inline-flex size-10 items-center justify-center rounded-full transition ${social.className}`}
            >
              {icons[social.id]}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-muted">{t('footer.onlineOnly')}</p>
      </div>

      <p className="border-t border-sand px-4 py-3 text-center text-[11px] text-muted">
        © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
      </p>
    </footer>
  )
}
