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
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
              cursor: '|',
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor'
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Think Different, Build Better')
                .pauseFor(4000)
                .deleteAll()
                .typeString('Farklı Düşün, Daha İyisini İnşa Et')
                .pauseFor(4000)
                .deleteAll()
                .callFunction(() => {
                  typewriter.start();
                })
                .start();
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default SloganCycler