import type { Request, Response } from 'express'
import { stripe } from '../config/stripe.js'

interface CheckoutBody {
  priceName: string
  priceAmount: number
  isRecurring: boolean
}

export async function createCheckoutSession(req: Request, res: Response): Promise<void> {
  const { priceName, priceAmount, isRecurring } = req.body as CheckoutBody

  if (!priceName || typeof priceAmount !== 'number' || typeof isRecurring !== 'boolean') {
    res.status(400).json({ error: 'Invalid request body' })
    return
  }

  const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173'

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `CES — ${priceName}`,
              description: 'Nano Clean Data Services — Professional Data Center Cleaning',
            },
            unit_amount: priceAmount,
            ...(isRecurring && {
              recurring: { interval: 'month' },
            }),
          },
          quantity: 1,
        },
      ],
      mode: isRecurring ? 'subscription' : 'payment',
      success_url: `${clientUrl}/success`,
      cancel_url: `${clientUrl}/`,
      billing_address_collection: 'required',
      custom_text: {
        submit: {
          message: 'We will contact you within 1 business day to schedule your service.',
        },
      },
    })

    res.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Stripe error:', message)
    res.status(500).json({ error: 'Failed to create checkout session', detail: message })
  }
}
