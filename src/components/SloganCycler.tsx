import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const SloganCycler = () => {
  const { t } = useLanguage()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const fullText = `${t.hero.slogan1}, ${t.hero.slogan2}` // "Think Different, Build Better"

  useEffect(() => {
    let index = 0

    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setShowCursor(false)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [fullText])

  return (
    <motion.div
      className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-16 space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <div className="text-center">
        <div className="min-h-[1.2em]">
          {displayText}
          {showCursor && <span className="border-r-2 border-white/50 ml-1 animate-pulse"></span>}
        </div>
      </div>
    </motion.div>
  )
}

export default SloganCycler