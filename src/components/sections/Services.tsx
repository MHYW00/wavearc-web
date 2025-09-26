import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Cloud, BarChart3, Settings, Users, Rocket } from 'lucide-react'

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions that transform data into actionable insights, automate processes, and drive intelligent decision-making.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation'],
      price: 'Custom Pricing'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for enterprise workloads with multi-cloud deployment and disaster recovery.',
      features: ['Multi-Cloud Architecture', '99.99% Uptime SLA', 'Auto-Scaling', '24/7 Monitoring'],
      price: 'Starting at $10K/month'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Real-time analytics and reporting solutions that provide comprehensive insights into your business operations.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Mobile Access'],
      price: 'From $5K/month'
    },
    {
      icon: Settings,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services that modernize legacy systems and optimize business processes.',
      features: ['Legacy Modernization', 'Process Optimization', 'Change Management', 'Training & Support'],
      price: 'Project-based'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Strategic technology consulting with industry experts to guide your digital transformation journey.',
      features: ['Technology Strategy', 'Architecture Review', 'Security Assessment', 'ROI Analysis'],
      price: '$500/hour'
    },
    {
      icon: Rocket,
      title: 'Managed Services',
      description: 'Complete managed IT services with proactive monitoring, maintenance, and support for your infrastructure.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Security Management', 'Performance Optimization'],
      price: 'From $15K/month'
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
            Enterprise Services
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions tailored for large-scale enterprises
            and growing businesses worldwide.
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-300 font-medium">
              Serving 40+ Countries • 24/7 Global Support
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-medium text-green-400">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 pt-6 border-t border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <button className="w-full py-3 text-center text-white font-medium bg-white/10 hover:bg-white/20 rounded-xl transition-colors duration-200">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 font-light mb-6">
            Need a custom solution? Our experts are ready to help.
          </p>
          <button className="px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200">
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services