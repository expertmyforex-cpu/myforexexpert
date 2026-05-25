import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  {
    name: 'BASIC',
    price: '$99',
    features: [
      '1 Trading Account',
      'MT4/MT5 Access',
      'Basic Support',
      'Standard Settings',
    ],
    highlighted: false,
  },
  {
    name: 'PREMIUM',
    price: '$199',
    features: [
      '3 Trading Accounts',
      'Premium Settings',
      'Priority Support',
      'Lifetime Updates',
      'Advanced Risk Setup',
    ],
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'VIP',
    price: '$399',
    features: [
      'Unlimited Accounts',
      'VIP Support',
      'Advanced Risk Setup',
      'Free Future Updates',
      'Personal Strategy Call',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pricing-header',
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
        '.pricing-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative z-[1] py-[140px] px-[5vw] bg-navy"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="pricing-header text-center mb-16">
          <p className="font-body font-medium text-xs tracking-[3px] uppercase text-gold mb-4">
            CHOOSE YOUR PLAN
          </p>
          <h2
            className="font-display font-bold text-slate-offwhite mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="font-body text-[17px] text-slate-text">
            One-time payment. Lifetime access. No hidden fees.
          </p>
        </div>

        {/* Cards */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card relative rounded-2xl p-12 ${
                plan.highlighted
                  ? 'bg-card/80 border-2 border-gold shadow-gold-lg scale-105 z-10'
                  : 'bg-card/80 border border-gold/10 hover:border-gold/25 hover:-translate-y-1.5 transition-all duration-[400ms]'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-navy font-display font-bold text-[11px] px-4 py-1.5 rounded-full tracking-wide">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <p className="font-body font-medium text-sm tracking-[2px] uppercase text-slate-text mb-4">
                {plan.name}
              </p>

              {/* Price */}
              <p className="font-display font-bold text-[56px] text-gradient-gold leading-none mb-8">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <span className="font-body text-[15px] text-slate-text leading-[1.6]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full font-display font-bold text-sm py-3.5 rounded-md transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-gold text-navy hover:brightness-110'
                    : 'border border-gold/40 text-gold hover:border-gold/80 hover:bg-gold/5'
                }`}
                onClick={() => {
                  const contact = document.querySelector('#contact')
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
