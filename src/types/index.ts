export interface PricingTier {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  priceAmount?: number // in cents for Stripe
  isRecurring?: boolean
  isCustom?: boolean
}

export interface BenefitItem {
  iconName: string
  title: string
  description: string
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
  company: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface MoreBenefitItem {
  iconName: string
  title: string
  description: string
}

export interface CheckoutRequest {
  priceName: string
  priceAmount: number
  isRecurring: boolean
}

export interface CheckoutResponse {
  url: string
}
