import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { useScrollVelocity } from '../../hooks/useScrollVelocity'

const ScrollSections = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  const { t } = useLanguage()
  const { velocity, isScrollingFast } = useScrollVelocity()

  const sections = [
    {
      id: 1,
      title: t.sections.studio.title,
      subtitle: t.sections.studio.subtitle,
      description: t.sections.studio.description,
      direction: 'left' as const,
      delay: 0,
      isStudio: true,
      subsidiaries: [
        { name: "Studio", description: t.sections.studio.studioDesc },
        { name: "Labs", description: t.sections.studio.labsDesc },
        { name: "Tech", description: t.sections.studio.techDesc }
      ]
    },
    {
      id: 2,
      title: t.sections.vision.title,
      subtitle: t.sections.vision.subtitle,
      description: t.sections.vision.description,
      direction: 'right' as const,
      delay: 0.2,
      isStudio: false
    },
    {
      id: 3,
      title: t.sections.mission.title,
      subtitle: t.sections.mission.subtitle,
      description: t.sections.mission.description,
      direction: 'left' as const,
      delay: 0.4,
      isStudio: false
    },
    {
      id: 4,
      title: t.sections.about.title,
      subtitle: t.sections.about.subtitle,
      description: t.sections.about.description,
      direction: 'right' as const,
      delay: 0.6,
      isStudio: false
    }
  ]

  return (
    <div ref={containerRef} className="relative bg-black">
      {sections.map((section) => (
        <motion.section
          key={section.id}
          className="min-h-screen flex items-center justify-center relative overflow-hidden py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: isScrollingFast ? 0.4 : 1,
            delay: isScrollingFast ? section.delay * 0.3 : section.delay
          }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Background animated element */}
          <motion.div
            className="absolute inset-0"
            initial={{
              x: section.direction === 'left' ? '-100%' : '100%',
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 0.1
            }}
            transition={{
              duration: isScrollingFast ? 0.6 : 1.5,
              delay: isScrollingFast ? (section.delay + 0.2) * 0.3 : section.delay + 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </motion.div>

          <div className={`container-custom flex items-center ${
            section.direction === 'right' ? 'justify-end' : 'justify-start'
          }`}>
            <motion.div
              className={`max-w-2xl ${
                section.direction === 'right' ? 'text-right' : 'text-left'
              }`}
              initial={{
                x: section.direction === 'left' ? -100 : 100,
                opacity: 0
              }}
              whileInView={{
                x: 0,
                opacity: 1
              }}
              transition={{
                duration: isScrollingFast ? 0.3 : 0.8,
                delay: isScrollingFast ? (section.delay + 0.5) * 0.3 : section.delay + 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: section.delay + 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-light text-gray-500 uppercase tracking-wider">
                  0{section.id}
                </span>
              </motion.div>

              <motion.h2
                className="text-6xl md:text-7xl lg:text-8xl font-thin text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: section.delay + 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(255,255,255,0.3)"
                }}
              >
                {section.isStudio ? (
                  <div className="relative">
                    {/* Ana WaveArc başlığı */}
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: section.delay + 0.8 }}
                      className="block text-white mb-8"
                    >
                      {section.title}
                    </motion.span>

                    {/* Alt yapılar - hepsi eşit seviyede */}
                    <div className="space-y-6">
                      {section.subsidiaries?.map((sub, index) => (
                        <motion.div
                          key={sub.name}
                          initial={{ opacity: 0, x: -100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: section.delay + 1.2 + (index * 0.4), duration: 1.0, ease: "easeOut" }}
                          className="cursor-pointer group"
                          whileHover={{ x: 20 }}
                          onClick={() => navigate(`/${sub.name.toLowerCase()}`)}
                        >
                          <div className="flex items-center mb-3">
                            <span className="text-gray-400 text-5xl md:text-6xl lg:text-7xl font-thin group-hover:text-white transition-colors duration-300">
                              {sub.name}
                            </span>
                            <motion.div
                              className="ml-6 w-3 h-3 bg-white/20 rounded-full group-hover:bg-white/60 transition-all duration-300"
                              whileHover={{ scale: 1.5 }}
                            />
                          </div>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: section.delay + 1.4 + (index * 0.4) }}
                            className="text-gray-500 text-lg font-light leading-relaxed ml-2 group-hover:text-gray-300 transition-colors duration-300"
                          >
                            {sub.description}
                          </motion.p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  section.title
                )}
              </motion.h2>

              {!section.isStudio && (
                <motion.p
                  className="text-xl md:text-2xl text-gray-400 font-light mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: section.delay + 1 }}
                  viewport={{ once: true }}
                >
                  {section.subtitle}
                </motion.p>
              )}

              <motion.p
                className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: section.delay + 1.2 }}
                viewport={{ once: true }}
              >
                {section.description}
              </motion.p>

              {/* Animated line */}
              <motion.div
                className={`mt-8 h-px bg-gradient-to-r ${
                  section.direction === 'left'
                    ? 'from-white/30 to-transparent'
                    : 'from-transparent to-white/30'
                } w-32`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: section.delay + 1.4, duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  transformOrigin: section.direction === 'left' ? 'left' : 'right'
                }}
              />
            </motion.div>
          </div>

          {/* Floating particles with glow */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 15}%`,
                boxShadow: `0 0 ${25 + i * 8}px rgba(255, 255, 255, ${0.5 + i * 0.15}), 0 0 ${50 + i * 15}px rgba(255, 255, 255, ${0.25 + i * 0.08})`,
                filter: `blur(${0.3 + i * 0.1}px)`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: section.delay + i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.section>
      ))}

      {/* Parallax background elements */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full" style={{
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)'
        }} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-white/15 rounded-full" style={{
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.15)'
        }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full" style={{
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)'
        }} />
      </motion.div>
    </div>
  )
}

export default ScrollSections