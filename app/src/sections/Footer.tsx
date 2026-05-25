import { MessageCircle, Mail } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative z-[1] bg-navy border-t border-gold/[0.06]">
      <div className="max-w-[1200px] mx-auto px-[5vw] pt-16 pb-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-display font-bold text-lg text-gold tracking-tight"
          >
            MY FOREX EXPERT
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
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

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923017777776"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="mailto:support@myforexexpert.com"
              className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/[0.06] mb-8" />

        {/* Disclaimer */}
        <div className="mb-8">
          <p className="font-display font-bold text-sm text-gold mb-2">
            Risk Disclaimer
          </p>
          <p className="font-body text-[13px] text-slate-text leading-[1.7] max-w-[720px]">
            Forex trading involves substantial risk and may not be suitable for all investors. Past performance does not guarantee future results. Trade responsibly and use proper risk management.
          </p>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="font-body text-xs text-slate-text">
            &copy; 2025 MY FOREX EXPERT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
