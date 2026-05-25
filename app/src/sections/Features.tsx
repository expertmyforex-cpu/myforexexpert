import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, ArrowLeftRight, Shield, Gem, Zap, Wrench } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: Brain,
    title: 'AI Smart Trading',
    description: 'Advanced algorithms analyze market conditions instantly and adapt to changing volatility.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Auto Buy & Sell',
    description: 'Fully automated execution without manual trading. Set it up once and let the EA handle everything.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Built-in stop loss, take profit, and money management system to protect your capital.',
  },
  {
    icon: Gem,
    title: 'Gold Optimized',
    description: 'Specially optimized for XAUUSD trading with parameters fine-tuned for gold market behavior.',
  },
  {
    icon: Zap,
    title: 'Fast Scalping',
    description: 'Quick trade execution during market movements. Capture small profitable moves consistently.',
  },
  {
    icon: Wrench,
    title: 'Easy Installation',
    description: 'Simple setup for MT4 & MT5 platforms. Get started in minutes with our step-by-step guide.',
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.features-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative z-[1] py-[140px] px-[5vw] bg-navy"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="features-header text-center mb-16">
          <p className="font-body font-medium text-xs tracking-[3px] uppercase text-gold mb-4">
            POWERFUL FEATURES
          </p>
          <h2
            className="font-display font-bold text-slate-offwhite mb-4 max-w-[640px] mx-auto"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Everything You Need To Trade Gold Profitably
          </h2>
          <p className="font-body text-[17px] text-slate-text max-w-[520px] mx-auto">
            Our EA combines cutting-edge AI technology with proven trading strategies.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="feature-card group relative bg-card/60 border border-gold/[0.08] rounded-xl p-10 pb-8 hover:border-gold/25 hover:-translate-y-1 hover:shadow-gold transition-all duration-[350ms]"
              style={{
                boxShadow: 'inset 0 3px 0 0 transparent',
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-4 right-4 h-[3px] bg-gradient-to-r from-gold to-gold-dark rounded-t-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center mb-5">
                <feature.icon size={24} className="text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-xl text-slate-offwhite mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[15px] text-slate-text leading-[1.7]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
