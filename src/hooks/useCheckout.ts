import { useState } from 'react'
import { createCheckoutSession } from '../services/api'
import type { CheckoutRequest } from '../types'

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout(data: CheckoutRequest) {
    setIsLoading(true)
    setError(null)

    try {
      const { url } = await createCheckoutSession(data)
      window.location.href = url
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Checkout failed. Please try again.'
      setError(message)
      console.error('Checkout error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleCheckout, isLoading, error }
}
