import { useRef, useEffect, useState } from 'react'

export const useScrollVelocity = (threshold = 50) => {
  const [velocity, setVelocity] = useState(0)
  const [isScrollingFast, setIsScrollingFast] = useState(false)
  const lastScrollY = useRef(0)
  const lastTimestamp = useRef(0)

  useEffect(() => {
    const calculateVelocity = () => {
      const now = performance.now()
      const currentScrollY = window.scrollY

      if (lastTimestamp.current && lastScrollY.current !== undefined) {
        const timeDelta = now - lastTimestamp.current
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)

        if (timeDelta > 0) {
          const currentVelocity = scrollDelta / timeDelta
          setVelocity(currentVelocity)
          setIsScrollingFast(currentVelocity > threshold / 100)
        }
      }

      lastScrollY.current = currentScrollY
      lastTimestamp.current = now
    }

    const handleScroll = () => {
      requestAnimationFrame(calculateVelocity)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return { velocity, isScrollingFast }
}