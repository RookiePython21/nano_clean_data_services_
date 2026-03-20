import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY

if (!secretKey) {
  throw new Error(
    'Missing STRIPE_SECRET_KEY environment variable. Copy .env.example to .env and add your Stripe keys.'
  )
}

export const stripe = new Stripe(secretKey, {
  apiVersion: '2024-12-18.acacia',
})
