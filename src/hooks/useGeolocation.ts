import { useState, useEffect } from 'react'

interface GeolocationResult {
  country: string | null
  isInTurkey: boolean
  loading: boolean
  error: string | null
}

export const useGeolocation = (): GeolocationResult => {
  const [result, setResult] = useState<GeolocationResult>({
    country: null,
    isInTurkey: false,
    loading: true,
    error: null
  })

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // IP-based geolocation using a free service
        const response = await fetch('https://ipapi.co/json/')

        if (!response.ok) {
          throw new Error('Failed to fetch location')
        }

        const data = await response.json()
        const countryCode = data.country_code || data.country
        const isInTurkey = countryCode === 'TR'

        setResult({
          country: countryCode,
          isInTurkey,
          loading: false,
          error: null
        })
      } catch (error) {
        // Fallback: assume international user
        setResult({
          country: null,
          isInTurkey: false,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    detectLocation()
  }, [])

  return result
}