import { motion } from 'framer-motion'
import Button from '../ui/Button'

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-300 font-medium">
              Join 500+ Leading Companies
            </span>
          </div>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl font-thin text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Scale Your
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Enterprise?
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 font-light mb-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Partner with WaveArc to accelerate your digital transformation.
          Our enterprise solutions have generated over $2.5B in client revenue.
        </motion.p>

        <motion.p
          className="text-lg text-gray-500 mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Free consultation • Custom solutions • 30-day ROI guarantee
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="px-10 py-5 text-lg font-medium group">
            Schedule Strategy Call
            <div className="ml-3 w-5 h-5 rounded-full border-2 border-current opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
          <Button variant="secondary" size="lg" className="px-10 py-5 text-lg font-medium">
            Download Case Studies
          </Button>
        </motion.div>

        {/* Enterprise Proof Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl font-thin text-white mb-2">24 Hours</div>
            <div className="text-sm text-gray-400 font-light">Average Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl font-thin text-white mb-2">ROI Guarantee</div>
            <div className="text-sm text-gray-400 font-light">30-Day Money Back</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-2xl font-thin text-white mb-2">Enterprise SLA</div>
            <div className="text-sm text-gray-400 font-light">99.99% Uptime Promise</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA