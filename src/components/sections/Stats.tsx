import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCounter } from 'react-use'

interface StatItemProps {
  end: number
  label: string
  suffix?: string
  delay?: number
}

const StatItem = ({ end, label, suffix = '', delay = 0 }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, { set }] = useCounter(0)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = end / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= end) {
          set(end)
          clearInterval(counter)
        } else {
          set(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInView, end, delay, set])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
    >
      <div className="text-4xl lg:text-6xl font-bold text-brand-600 dark:text-brand-400 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 text-lg">
        {label}
      </div>
    </motion.div>
  )
}

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    { end: 500, label: 'Happy Clients', suffix: '+' },
    { end: 99, label: 'Success Rate', suffix: '%' },
    { end: 24, label: 'Hour Support', suffix: '/7' },
    { end: 150, label: 'Countries Served', suffix: '+' }
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-brand-600 to-brand-700 dark:from-brand-800 dark:to-brand-900"
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the numbers that matter most
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats