import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import MainLayout from '../layouts/MainLayout'

const LabsPage = () => {
  const navigate = useNavigate()
  const { t, language } = useLanguage()
  useScrollToTop()

  return (
    <MainLayout>
      <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
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
            className="mb-20"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-thin text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              WaveArc
              <motion.span
                className="block text-gray-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Labs
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {t.labs.description}
            </motion.p>
          </motion.div>

          {/* Research Areas */}
          <div className="space-y-12 mb-20">
            {[
              {
                title: t.labs.research.ai.title,
                desc: t.labs.research.ai.description,
                tech: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: t.labs.research.blockchain.title,
                desc: t.labs.research.blockchain.description,
                tech: ["Ethereum", "Solidity", "IPFS", "DeFi"],
                color: "from-green-500/20 to-blue-500/20"
              },
              {
                title: t.labs.research.iot.title,
                desc: t.labs.research.iot.description,
                tech: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN"],
                color: "from-orange-500/20 to-red-500/20"
              },
              {
                title: t.labs.research.cloud.title,
                desc: t.labs.research.cloud.description,
                tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
                color: "from-purple-500/20 to-pink-500/20"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative bg-gradient-to-r ${area.color} backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-white mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                      {area.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <motion.div
                      className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/20"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="w-16 h-16 bg-white/10 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-white mb-6">
              {t.labs.cta.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.labs.cta.description}
            </p>
            <motion.button
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.labs.cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}

export default LabsPage