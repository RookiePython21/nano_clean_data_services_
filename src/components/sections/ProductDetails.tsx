import { CheckCircle2, Cpu } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const included = [
  'Subfloor cleaning & decontamination',
  'Overhead plenum vacuuming',
  'Equipment surface cleaning (anti-static)',
  'Cable management inspection',
  'Air quality particle testing (before & after)',
  'Photo documentation & compliance reports',
]

const equipment = [
  'HEPA-filtered vacuums',
  'Anti-static wipes and solutions',
  'Particle counters',
  'Raised floor lifters',
  'ESD-safe tools only',
]

export function ProductDetails() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-5">
            <span className="text-slate-600 text-sm font-semibold">Service Details</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            What Every Service Includes
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every visit follows the same rigorous protocol — no cutting corners, no skipped steps.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {/* What's Included */}
          <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Included in Every Service</h3>
            </div>
            <ul className="space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 mt-0.5 text-cyan-600"
                    strokeWidth={2}
                  />
                  <span className="text-slate-700 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div className="bg-[#0f172a] rounded-2xl p-7 sm:p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-900/50 border border-cyan-700 flex items-center justify-center">
                <Cpu size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Equipment We Use</h3>
            </div>
            <ul className="space-y-3.5">
              {equipment.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-300 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom note */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-xs leading-relaxed">
                All equipment is maintained, calibrated, and tested to industry standards before
                every engagement. We never use consumer-grade tools in critical environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
