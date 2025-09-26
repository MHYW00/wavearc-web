import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'
import Button from '../ui/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en'
    i18n.changeLanguage(newLang)

    // Update URL path for locale
    const currentPath = location.pathname
    const newPath = newLang === 'tr'
      ? `/tr${currentPath.replace(/^\/(en|tr)/, '')}`
      : `/en${currentPath.replace(/^\/(en|tr)/, '')}`

    window.history.replaceState(null, '', newPath)
  }

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'brands', href: '/brands' },
    { key: 'caseStudies', href: '/case-studies' },
    { key: 'careers', href: '/careers' },
    { key: 'contact', href: '/contact' }
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="text-2xl lg:text-3xl font-bold text-white">
              WaveArc
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map(({ key, href }) => (
                <Link
                  key={key}
                  to={href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{i18n.language}</span>
              </Button>

              <Button size="md">
                {t('hero.cta')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-bold">Menu</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-4">
                    {navItems.map(({ key, href }) => (
                      <Link
                        key={key}
                        to={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-lg text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200"
                      >
                        {t(`nav.${key}`)}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <Button
                      variant="ghost"
                      onClick={toggleLanguage}
                      className="w-full justify-start"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {i18n.language === 'en' ? 'Türkçe' : 'English'}
                    </Button>
                    <Button className="w-full">
                      {t('hero.cta')}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header