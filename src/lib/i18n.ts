import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        brands: 'Brands',
        caseStudies: 'Case Studies',
        careers: 'Careers',
        contact: 'Contact'
      },
      hero: {
        title: 'Premium Corporate Solutions',
        subtitle: 'Transforming businesses with innovative technology',
        cta: 'Get Started',
        secondary: 'Learn More'
      },
      about: {
        title: 'About WaveArc',
        description: 'We are a leading technology company specializing in premium corporate solutions.'
      },
      footer: {
        copyright: '© 2025 WaveArc. All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service'
      }
    }
  },
  tr: {
    translation: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        brands: 'Markalar',
        caseStudies: 'Vaka Çalışmaları',
        careers: 'Kariyer',
        contact: 'İletişim'
      },
      hero: {
        title: 'Premium Kurumsal Çözümler',
        subtitle: 'İnovatif teknoloji ile işletmeleri dönüştürüyoruz',
        cta: 'Başlayın',
        secondary: 'Daha Fazla Öğren'
      },
      about: {
        title: 'WaveArc Hakkında',
        description: 'Premium kurumsal çözümlerde uzmanlaşmış lider teknoloji şirketiyiz.'
      },
      footer: {
        copyright: '© 2025 WaveArc. Tüm hakları saklıdır.',
        privacyPolicy: 'Gizlilik Politikası',
        termsOfService: 'Hizmet Şartları'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  })

export default i18n