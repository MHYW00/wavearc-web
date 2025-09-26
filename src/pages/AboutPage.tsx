import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import MainLayout from '../layouts/MainLayout'

const AboutPage = () => {
  const navigate = useNavigate()
  const { t, language } = useLanguage()
  useScrollToTop()

  return (
    <MainLayout>
      <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mb-12 flex items-center text-gray-400 hover:text-white transition-colors group"
            whileHover={{ x: -10 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'tr' ? 'Ana Sayfa' : 'Home'}
          </motion.button>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-thin text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'tr' ? 'Hakkımızda' : 'About Us'}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t.sections.about.description}
            </motion.p>
          </motion.div>

          {/* Company Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-thin text-white mb-6">
                {language === 'tr' ? 'Kuruluş' : 'Foundation'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === 'tr'
                  ? 'WaveArc, 2025 yılında Türkiye\'de kurulmuş bir teknoloji şirketidir. Yazılım geliştirme ve teknoloji alanında çığır açan yenilikçi çözümler sunmaktayız.'
                  : 'WaveArc is a technology company founded in Turkey in 2025. We provide groundbreaking innovative solutions in software development and technology.'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-thin text-white mb-6">
                {language === 'tr' ? 'Kurucu' : 'Founder'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.sections.about.subtitle}
              </p>
              <p className="text-gray-400 mt-4 text-sm">
                {language === 'tr'
                  ? 'Vizyoner liderlik ve teknoloji tutkusu ile şirketi yönlendiren kurucumuz'
                  : 'Our founder who leads the company with visionary leadership and passion for technology'
                }
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-thin text-white mb-8">
                {t.sections.vision.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t.sections.vision.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-thin text-white mb-8">
                {t.sections.mission.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t.sections.mission.description}
              </p>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-thin text-white mb-6">
              {language === 'tr' ? 'Bizimle İletişime Geçin' : 'Get in Touch'}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Projeleriniz için işbirliği yapmak istiyorsanız bizimle iletişime geçin'
                : 'Contact us if you want to collaborate on your projects'
              }
            </p>
            <motion.button
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}

export default AboutPage