import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-auto border-t border-sand bg-sand/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-serif text-2xl">{t('brand')}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{t('footer.tagline')}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">{t('footer.shop')}</p>
          <div className="flex flex-col gap-2 text-muted">
            <Link to="/products">{t('footer.allProducts')}</Link>
            <Link to="/products?category=Women">{t('categories.Women')}</Link>
            <Link to="/products?category=Men">{t('categories.Men')}</Link>
            <Link to="/products?category=Accessories">
              {t('categories.Accessories')}
            </Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">{t('footer.help')}</p>
          <p className="text-muted">
            {t('footer.onlineOnly')}
            <br />
            {t('footer.shipping')}
            <br />
            {t('footer.questions')}
          </p>
        </div>
      </div>
      <p className="border-t border-sand px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {t('brand')}. {t('footer.rights')}
      </p>
    </footer>
  )
}
