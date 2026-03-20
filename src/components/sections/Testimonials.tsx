import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
  {
    quote:
      'Controlled Environment Services transformed our server room. The difference in air quality alone was worth it.',
    name: 'James K.',
    role: 'IT Director',
    company: 'Southeast Regional Bank',
    initials: 'JK',
  },
  {
    quote:
      "We've used three different vendors before. CES is the only one I trust to work around live equipment.",
    name: 'Maria S.',
    role: 'Facilities Manager',
    company: 'CloudNine Hosting',
    initials: 'MS',
  },
  {
    quote:
      'Their documentation and before/after reporting made our compliance audit a breeze.',
    name: 'David R.',
    role: 'VP of Infrastructure',
    company: 'MedTech Solutions',
    initials: 'DR',
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 sm:py-28 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-cyan-400 text-sm font-semibold">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Trusted by Data Center Professionals
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Hear from IT directors and facility managers who rely on us to protect their
            critical infrastructure.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card
              key={t.name}
              className={`bg-slate-800/50 border-slate-700 hover:border-cyan-700/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
                transitionDuration: '600ms',
              }}
            >
              <CardContent className="pt-7 pb-7 px-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote size={20} className="text-cyan-600/60 mb-3" />

                {/* Quote text */}
                <p className="text-slate-200 text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-700 to-teal-800 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
