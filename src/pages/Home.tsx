import { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/sections/Hero'
import ScrollSections from '../components/sections/ScrollSections'

const Home = () => {
  // Ensure we start at top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainLayout>
      <Hero />
      <ScrollSections />
    </MainLayout>
  )
}

export default Home