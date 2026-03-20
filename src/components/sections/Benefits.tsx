import { Zap, Shield, Sparkles, FileCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const benefits = [
  {
    icon: Zap,
    title: 'Zero Downtime Cleaning',
    description:
      'Our trained crews work around your operations so your systems never skip a beat.',
    accent: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  },
  {
    icon: Shield,
    title: 'Certified Technicians',
    description:
      'Every team member is background-checked, ESD-certified, and trained in controlled environment protocols.',
    accent: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Sparkles,
    title: 'Comprehensive Decontamination',
    description:
      'From raised floors to overhead plenums, we clean every surface that affects your airflow and equipment.',
    accent: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    icon: FileCheck,
    title: 'Compliance Ready',
    description:
      'We help you meet SLA requirements, audit standards, and insurance mandates for facility cleanliness.',
    accent: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
]

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-1.5 mb-5">
            <span className="text-cyan-600 text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Why Choose Nano Clean Data Services
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We bring enterprise-grade discipline to every job — protecting your equipment, your
            data, and your compliance posture.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={benefit.title}
                className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  transitionDuration: '600ms',
                }}
              >
                <CardContent className="pt-8 pb-8 px-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-5 ${benefit.accent}`}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
