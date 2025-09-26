import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import SloganCycler from '../SloganCycler'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { t } = useLanguage()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2
          }}
          className="mb-12"
        >
          {/* WaveArc Logo with Sequential Animation */}
          <motion.div
            className="relative mx-auto w-40 h-40"
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            {/* Step 1: W Letter Drawing */}
            <motion.svg
              width="160"
              height="160"
              viewBox="0 0 200 200"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 3,
                times: [0, 0.1, 0.8, 1],
                delay: 0.5
              }}
            >
              <defs>
                <linearGradient id="wGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#cccccc" />
                </linearGradient>
              </defs>

              {/* W Letter */}
              <motion.path
                d="M60 70 L75 130 L90 90 L105 130 L120 70"
                stroke="url(#wGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))'
                }}
              />

              {/* Wave Effect */}
              <motion.path
                d="M 40 100 Q 70 80, 100 100 T 160 100"
                stroke="url(#wGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 1.2,
                  delay: 2.5,
                  ease: "easeOut"
                }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                }}
              />
            </motion.svg>

            {/* Step 2: Real Logo Fade In */}
            <motion.img
              src="/wavearc-beyaz-logo.png"
              alt="WaveArc Logo"
              className="w-full h-full object-contain absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 3.8,
                ease: "easeOut"
              }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Main Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1.8,
            ease: "easeOut"
          }}
          className="text-8xl md:text-9xl lg:text-[12rem] font-thin text-white mb-8 tracking-tight leading-none"
        >
          <motion.span
            whileHover={{
              textShadow: "0 0 30px rgba(255,255,255,0.5)",
              scale: 1.05
            }}
            transition={{ duration: 0.3 }}
          >
{t.hero.mainTitle}
          </motion.span>
        </motion.h1>

        {/* Cycling Slogan */}
        <SloganCycler />

        {/* Floating Elements with Glow */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-16 w-3 h-3 bg-white/30 rounded-full"
          style={{
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)',
            filter: 'blur(0.5px)'
          }}
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-48 left-20 w-2 h-2 bg-white/40 rounded-full"
          style={{
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.4)',
            filter: 'blur(0.3px)'
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-32 w-4 h-4 bg-white/20 rounded-full"
          style={{
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2)',
            filter: 'blur(0.7px)'
          }}
        />

        {/* Additional glowing particles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-64 left-32 w-1 h-1 bg-white/50 rounded-full"
          style={{
            boxShadow: '0 0 18px rgba(255, 255, 255, 0.8), 0 0 35px rgba(255, 255, 255, 0.5)',
            filter: 'blur(0.2px)'
          }}
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-64 left-16 w-2 h-2 bg-white/35 rounded-full"
          style={{
            boxShadow: '0 0 28px rgba(255, 255, 255, 0.5), 0 0 55px rgba(255, 255, 255, 0.25)',
            filter: 'blur(0.4px)'
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 6 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        {/* Animated Arrow Down */}
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-white/60"
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 6.5 }}
          />
          <motion.path
            d="M7 6l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 7 }}
          />
        </motion.svg>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 border border-white/20 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 6
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero