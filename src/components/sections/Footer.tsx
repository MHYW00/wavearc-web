import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const Footer = () => {
  const { t, language, setLanguage } = useLanguage()

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Minimal Logo */}
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="/" className="text-3xl font-thin text-white hover:text-gray-200 transition-colors">
              WaveArc
            </a>
          </motion.div>

          {/* Minimal Links */}
          <motion.div
            className="flex justify-center items-center gap-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { text: t.footer.links.about, path: '/about' },
              { text: t.footer.links.contact, path: '/contact' },
              { text: t.footer.links.privacy, path: '/privacy' }
            ].map((link, index) => (
              <motion.a
                key={link.text}
                href={link.path}
                className="text-gray-400 hover:text-white transition-colors font-light text-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {link.text}
              </motion.a>
            ))}
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-light min-w-[120px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.footer.languageToggle}
            </motion.button>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-gray-600 text-sm font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.footer.copyright}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer