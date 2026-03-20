import type { CheckoutRequest, CheckoutResponse } from '../types'

const API_BASE = import.meta.env.VITE_API_URL || ''

export async function createCheckoutSession(data: CheckoutRequest): Promise<CheckoutResponse> {
  const response = await fetch(`${API_BASE}/api/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Failed to create checkout session')
  }

  return response.json() as Promise<CheckoutResponse>
}
