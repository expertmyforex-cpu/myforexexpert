import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  'AI-powered market analysis in real-time',
  'Automatic buy/sell execution',
  'Built-in risk management & stop loss',
  'Optimized for XAUUSD (Gold) trading',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      tl.fromTo(
        '.about-label',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      )
        .fromTo(
          '.about-heading',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          '.about-text',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
          '-=0.6'
        )
        .fromTo(
          '.about-feature',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
          '-=0.5'
        )
        .fromTo(
          '.about-image',
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
          '-=0.8'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] py-[140px] px-[5vw] bg-navy-light"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="about-label font-body font-medium text-xs tracking-[3px] uppercase text-green-trading mb-4">
              WHY CHOOSE MY FOREX EXPERT
            </p>
            <h2 className="about-heading font-display font-bold text-slate-offwhite mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
            >
              Why Choose MY FOREX EXPERT?
            </h2>
            <p className="about-text font-body text-[17px] text-slate-text leading-[1.7] mb-4">
              MY FOREX EXPERT is an advanced automated trading system developed for traders who want consistent and smart trading performance in the forex market.
            </p>
            <p className="about-text font-body text-[17px] text-slate-text leading-[1.7] mb-8">
              Our EA analyzes market trends, price action, volatility, and smart entry points to execute trades automatically with precision. No emotions. No guesswork. Just data-driven trading decisions.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {FEATURES.map((feature, i) => (
                <div key={i} className="about-feature flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-trading/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-trading" />
                  </div>
                  <span className="font-body text-[15px] text-slate-offwhite">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="about-text inline-block font-body font-medium text-sm text-gold border-b border-gold/50 hover:border-gold transition-colors duration-300 pb-0.5"
            >
              Learn More
            </a>
          </div>

          {/* Right - Image */}
          <div className="about-image">
            <div className="relative rounded-xl overflow-hidden shadow-gold"
              style={{ boxShadow: '0 0 40px rgba(255, 215, 0, 0.08)' }}
            >
              <img
                src="/images/about-dashboard.jpg"
                alt="MY FOREX EXPERT Trading Dashboard"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
