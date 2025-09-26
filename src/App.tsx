import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import Home from './pages/Home'
import StudioPage from './pages/StudioPage'
import LabsPage from './pages/LabsPage'
import TechPage from './pages/TechPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import SupportPage from './pages/SupportPage'

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </Router>
      </MotionConfig>
    </LanguageProvider>
  )
}

export default App