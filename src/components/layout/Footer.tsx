import { Mail, Phone, Shield } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact-footer" className="bg-[#080f1c] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Controlled Environment Services logo"
                className="h-9 w-auto object-contain"
              />
              <div>
                <div className="text-white font-bold text-sm tracking-wide">
                  Controlled Environment
                </div>
                <div className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                  Services
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Professional data center cleaning and maintenance for critical infrastructure across the continental United States.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-600">
              <Shield size={14} className="text-cyan-700" />
              <span>ASHRAE · NFPA · ISO 14644 Certified</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '#services', label: 'Services' },
                { href: '#benefits', label: 'Benefits' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#faq', label: 'FAQ' },
                { href: '#contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@controlledenvservices.com"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-cyan-600" />
                  info@controlledenvservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550199"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-cyan-600" />
                  (800) 555-0199
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                <a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a>
                <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; 2025 Controlled Environment Services. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Serving data centers across the continental United States
          </p>
        </div>
      </div>
    </footer>
  )
}
