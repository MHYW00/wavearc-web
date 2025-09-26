import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/sections/Footer'

interface MainLayoutProps {
  children: ReactNode
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: 'easeInOut' }
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <motion.main
        {...pageTransition}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export default MainLayout