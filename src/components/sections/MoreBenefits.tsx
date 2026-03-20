import { Camera, CalendarDays, Clock, Leaf } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const features = [
  {
    icon: Camera,
    title: 'Before & After Documentation',
    description:
      'Every service includes professional photos and air quality particle readings, giving you a clear record of before and after conditions.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border-cyan-100',
  },
  {
    icon: CalendarDays,
    title: 'Customized Cleaning Schedules',
    description:
      "Weekly, monthly, quarterly, or one-time deep cleans — we build a maintenance plan around your facility's specific needs and budget.",
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'We work on YOUR schedule including nights, weekends, and holidays. We never ask your team to change operations for us.',
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-100',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'All cleaning agents are anti-static, non-toxic, and equipment-safe. No harsh chemicals. No static discharge. No residue.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-100',
  },
]

export function MoreBenefits() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="benefits" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-5">
            <span className="text-slate-600 text-sm font-semibold">Everything Included</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We've designed every aspect of our service to fit seamlessly into your operations — not
            disrupt them.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`flex gap-5 p-6 bg-white rounded-xl border border-slate-200 hover:border-cyan-200 hover:shadow-md transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  transitionDuration: '600ms',
                }}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${feature.bg}`}
                >
                  <Icon size={22} className={feature.color} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
