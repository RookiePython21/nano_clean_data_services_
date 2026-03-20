import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden pt-16">
      {/* Hero photo — covers the right half, bleeds to full on mobile */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_image.jpg"
          alt="Professional data center environment"
          className="absolute right-0 top-0 h-full w-full lg:w-[60%] object-cover object-center"
        />
        {/* Strong left-to-right gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/92 lg:via-[#0f172a]/80 to-[#0f172a]/40" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
      </div>

      {/* Subtle grid overlay for texture */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8, 145, 178, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8, 145, 178, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div
          ref={ref}
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">
              Certified Data Center Professionals
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Professional Data Center{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Cleaning You Can Trust
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            Certified technicians. Zero downtime. Pristine environments that protect your
            critical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 w-full sm:w-auto shadow-xl shadow-cyan-900/40 transition-all hover:shadow-cyan-800/50 hover:-translate-y-0.5"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="bg-teal-600 hover:bg-teal-500 text-white border-transparent font-semibold px-8 w-full sm:w-auto transition-all hover:-translate-y-0.5"
              >
                View Our Services
              </Button>
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 items-center">
            {[
              '500+ Facilities Cleaned',
              'ASHRAE & ISO Certified',
              '24/7 Availability',
              'Zero-Downtime Guarantee',
            ].map((stat) => (
              <div key={stat} className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-600 hover:text-cyan-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  )
}
