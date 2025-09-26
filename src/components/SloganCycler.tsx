import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const SloganCycler = () => {
  return (
    <motion.div
      className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-16 space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <div className="text-center">
        <div className="min-h-[1.2em]">
          <Typewriter
            options={{
              strings: ['Think Different, Build Better'],
              autoStart: true,
              loop: false,
              delay: 80,
              deleteSpeed: 50,
              cursor: '|',
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor'
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default SloganCycler