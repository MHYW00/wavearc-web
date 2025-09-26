import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Zap, Globe } from 'lucide-react'

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified infrastructure with end-to-end encryption, multi-factor authentication, and comprehensive audit trails.',
      stats: 'ISO 27001 Certified'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-100ms response times globally with 99.99% uptime SLA, powered by enterprise-grade cloud infrastructure.',
      stats: '<100ms Response Time'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Multi-region deployment across 15+ data centers worldwide with intelligent load balancing and disaster recovery.',
      stats: '15+ Data Centers'
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Built on industry-leading standards with the reliability and security
            that Fortune 500 companies demand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-white/10 rounded-2xl group-hover:bg-white/15 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-sm text-green-400 font-medium mb-2">
                    {feature.stats}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features