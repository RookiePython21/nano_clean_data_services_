import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-cyan-700 via-teal-700 to-cyan-800">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <Users size={26} className="text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Your Equipment Deserves a{' '}
            <span className="underline decoration-4 decoration-white/40">
              Clean Room Environment
            </span>
          </h2>

          <p className="text-cyan-100 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of facilities that trust Controlled Environment Services to protect
            their critical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing">
              <Button
                size="lg"
                className="bg-white text-cyan-800 hover:bg-cyan-50 font-bold px-8 shadow-xl shadow-black/20 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                Schedule Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+12703024064">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-semibold px-8 backdrop-blur-sm w-full sm:w-auto transition-all"
              >
                Call (270) 302-4064
              </Button>
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              'No long-term contracts',
              'Free initial assessment',
              'Satisfaction guaranteed',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-cyan-100 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
