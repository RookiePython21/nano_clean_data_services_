import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick() {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-[#0f172a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/logo.png"
              alt="Nano Clean Data Services logo"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide group-hover:text-cyan-300 transition-colors">
                Controlled Environment
              </div>
              <div className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                Services
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href="#pricing">
              <Button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 shadow-lg shadow-cyan-900/30 transition-all">
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2 rounded-md hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0c1525] border-t border-slate-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block text-slate-300 hover:text-cyan-400 hover:bg-slate-800 text-base font-medium py-2.5 px-3 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a href="#pricing" onClick={handleNavClick}>
              <Button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold w-full">
                Get a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
