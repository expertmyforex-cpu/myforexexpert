import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Bot, Star, Monitor, TrendingUp, Headset } from 'lucide-react'

const TRUST_BADGES = [
  { icon: Bot, label: 'Fully Automated', color: '#00FF99' },
  { icon: Star, label: 'Beginner Friendly', color: '#FFD700' },
  { icon: Monitor, label: 'MT4 & MT5', color: '#F0F2F5' },
  { icon: TrendingUp, label: 'Live Results', color: '#00FF99' },
  { icon: Headset, label: '24/7 Support', color: '#FFD700' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        '.hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-badge',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08 },
          '-=0.3'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center z-[1]"
    >
      <div
        ref={contentRef}
        className="max-w-[720px] mx-auto px-6 text-center pt-[72px]"
        style={{ marginTop: '-5vh' }}
      >
        {/* Label */}
        <p className="hero-label font-body font-medium text-xs tracking-[3px] uppercase text-gold/90 mb-6">
          AI POWERED GOLD TRADING
        </p>

        {/* H1 */}
        <h1 className="font-display font-bold text-slate-offwhite leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
        >
          <span className="hero-line block">Turn Your MT4/MT5</span>
          <span className="hero-line block">Into A</span>
          <span className="hero-line block text-gradient-gold">Profit Machine</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-body text-lg text-slate-text max-w-[560px] mx-auto leading-relaxed mb-10"
          style={{ textShadow: '0 2px 30px rgba(0,0,0,0.6)' }}
        >
          Gold Trading EA specially designed for XAUUSD. Smart entries, auto risk management, and fast scalping with high accuracy signals.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="font-display font-bold text-sm bg-gradient-gold text-navy px-8 py-3.5 rounded-md hover:brightness-110 transition-all duration-300"
          >
            Get Started Now
          </a>
          <a
            href="#results"
            onClick={(e) => handleNavClick(e, '#results')}
            className="font-display font-bold text-sm border border-gold/30 text-gold px-8 py-3.5 rounded-md hover:border-gold/60 transition-all duration-300"
          >
            Watch Live Results
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {TRUST_BADGES.map((badge, i) => (
            <div
              key={i}
              className="hero-badge flex items-center gap-2"
            >
              <badge.icon size={18} style={{ color: badge.color }} />
              <span className="font-body text-[11px] text-slate-text">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
