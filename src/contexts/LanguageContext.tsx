import React, { createContext, useContext, useState, useEffect } from 'react'
import { useGeolocation } from '../hooks/useGeolocation'
import trTranslations from '../locales/tr.json'
import enTranslations from '../locales/en.json'

type Language = 'tr' | 'en'
type Translations = typeof trTranslations

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = {
  tr: trTranslations,
  en: enTranslations
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isInTurkey, loading: geoLoading } = useGeolocation()
  const [language, setLanguage] = useState<Language>('en')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has manually set a language preference
    const savedLanguage = localStorage.getItem('wavearc-language') as Language

    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
      setIsLoading(false)
    } else if (!geoLoading) {
      // Set language based on geolocation
      const defaultLang = isInTurkey ? 'tr' : 'en'
      setLanguage(defaultLang)
      setIsLoading(false)
    }
  }, [isInTurkey, geoLoading])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('wavearc-language', lang)
  }

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
    isLoading
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}