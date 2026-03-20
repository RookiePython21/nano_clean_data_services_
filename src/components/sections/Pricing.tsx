import { Check, Star, PhoneCall, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useCheckout } from '@/hooks/useCheckout'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import type { PricingTier } from '@/types'

const tiers: PricingTier[] = [
  {
    id: 'assessment',
    name: 'Assessment',
    price: '$499',
    period: 'one-time',
    description: 'Start with a thorough site evaluation and custom cleaning plan.',
    features: [
      'Initial site visit & walkthrough',
      'Air quality particle testing',
      'Contamination report',
      'Custom cleaning plan',
      'Priority scheduling',
    ],
    cta: 'Book Assessment',
    popular: false,
    priceAmount: 49900,
    isRecurring: false,
    isCustom: false,
  },
  {
    id: 'standard',
    name: 'Standard Clean',
    price: '$2,499',
    period: '/mo',
    description: 'Ongoing monthly maintenance keeps your environment consistently clean.',
    features: [
      'Monthly scheduled cleaning',
      'Raised floor care & subfloor cleaning',
      'Equipment surface wipe-down (anti-static)',
      'Quarterly deep clean included',
      'Air quality reporting each visit',
      'Digital compliance documentation',
    ],
    cta: 'Get Started',
    popular: true,
    priceAmount: 249900,
    isRecurring: true,
    isCustom: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Dedicated crew and SLA-backed service for mission-critical facilities.',
    features: [
      'Dedicated cleaning crew assigned',
      'Weekly service visits',
      '24/7 on-call availability',
      'SLA-backed response times',
      'Full compliance documentation suite',
      'Executive reporting & dashboards',
    ],
    cta: 'Contact Sales',
    popular: false,
    isCustom: true,
  },
]

function PricingCard({ tier, index, isVisible }: { tier: PricingTier; index: number; isVisible: boolean }) {
  const { handleCheckout, isLoading } = useCheckout()

  function handleClick() {
    if (tier.isCustom) {
      window.location.href = 'mailto:info@controlledenvservices.com?subject=Enterprise Inquiry'
      return
    }
    if (tier.priceAmount) {
      handleCheckout({
        priceName: tier.name,
        priceAmount: tier.priceAmount,
        isRecurring: tier.isRecurring ?? false,
      })
    }
  }

  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 130}ms` : '0ms',
      }}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
          <div className="inline-flex items-center gap-1.5 bg-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-cyan-900/40">
            <Star size={12} className="fill-white" />
            Most Popular
          </div>
        </div>
      )}
      <Card
        className={`h-full flex flex-col transition-all duration-200 ${
          tier.popular
            ? 'border-cyan-500 bg-white shadow-2xl shadow-cyan-900/20 scale-[1.02]'
            : 'border-slate-700 bg-slate-800/60 hover:border-slate-600'
        }`}
      >
        <CardHeader className={`pb-4 ${tier.popular ? 'bg-white' : ''}`}>
          <div className="mb-2">
            <span
              className={`text-sm font-bold uppercase tracking-wider ${
                tier.popular ? 'text-cyan-600' : 'text-slate-400'
              }`}
            >
              {tier.name}
            </span>
          </div>
          <div className="flex items-end gap-1 mb-3">
            <span
              className={`text-4xl sm:text-5xl font-extrabold leading-none ${
                tier.popular ? 'text-slate-900' : 'text-white'
              }`}
            >
              {tier.price}
            </span>
            {tier.period && (
              <span className={`text-base mb-1 ${tier.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                {tier.period}
              </span>
            )}
          </div>
          <p className={`text-sm leading-relaxed ${tier.popular ? 'text-slate-500' : 'text-slate-400'}`}>
            {tier.description}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 pt-2">
          <ul className="space-y-3 mb-8 flex-1">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <Check
                  size={16}
                  className={`shrink-0 mt-0.5 ${
                    tier.popular ? 'text-cyan-600' : 'text-cyan-500'
                  }`}
                  strokeWidth={2.5}
                />
                <span
                  className={`text-sm ${
                    tier.popular ? 'text-slate-700' : 'text-slate-300'
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            onClick={handleClick}
            disabled={isLoading && !tier.isCustom}
            size="lg"
            className={`w-full font-bold transition-all ${
              tier.popular
                ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/30'
                : tier.isCustom
                ? 'bg-transparent border-2 border-slate-500 text-slate-200 hover:border-cyan-500 hover:text-cyan-300'
                : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
            }`}
            variant={tier.isCustom ? 'outline' : 'default'}
          >
            {isLoading && !tier.isCustom ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Redirecting…
              </>
            ) : tier.isCustom ? (
              <>
                <PhoneCall size={16} className="mr-2" />
                {tier.cta}
              </>
            ) : (
              tier.cta
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-[#0c1525] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-cyan-400 text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            No hidden fees. No long-term lock-ins. Choose the plan that fits your facility's
            needs and scale as you grow.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          All plans include our satisfaction guarantee. Contact us at{' '}
          <a
            href="mailto:info@controlledenvservices.com"
            className="text-cyan-500 hover:text-cyan-400 underline underline-offset-2"
          >
            info@controlledenvservices.com
          </a>{' '}
          for custom quotes.
        </p>
      </div>
    </section>
  )
}
