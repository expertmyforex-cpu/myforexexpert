import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-xl border-b border-gold/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-[5vw] flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2"
        >
          <span
            className="w-2 h-2 rounded-full bg-gold animate-pulse-dot"
          />
          <span className="font-display font-bold text-lg text-gold tracking-tight">
            MY FOREX EXPERT
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body font-medium text-[13px] uppercase tracking-[1.5px] text-slate-text hover:text-slate-offwhite transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          onClick={(e) => handleNavClick(e, '#pricing')}
          className="hidden md:inline-flex font-display font-bold text-[13px] bg-gradient-gold text-navy px-6 py-2.5 rounded-md hover:brightness-110 transition-all duration-300"
        >
          Get Started
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-offwhite p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-navy/95 backdrop-blur-xl border-b border-gold/[0.06] md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body font-medium text-sm uppercase tracking-[1.5px] text-slate-text hover:text-slate-offwhite transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="inline-flex justify-center font-display font-bold text-sm bg-gradient-gold text-navy px-6 py-3 rounded-md mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
