import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '94%', label: 'Win Rate' },
  { value: '1,240+', label: 'Trades Executed' },
  { value: '$12K+', label: 'Monthly Profit*' },
]

const BULLETS = [
  'Daily profits with verified performance',
  'Live trading proof with real accounts',
  'Consistent growth over multiple months',
]

export default function LiveResults() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.results-image',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        '.results-content > *',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="results"
      className="relative z-[1] py-[140px] px-[5vw] bg-navy-light border-t border-gold/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="results-image">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ boxShadow: '0 0 50px rgba(0, 255, 153, 0.08)' }}
            >
              <img
                src="/images/results-chart.jpg"
                alt="Live Trading Results Dashboard"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="results-content">
            <p className="font-body font-medium text-xs tracking-[3px] uppercase text-green-trading mb-4">
              REAL TRADING RESULTS
            </p>
            <h2
              className="font-display font-bold text-slate-offwhite mb-8"
              style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
            >
              See The Results For Yourself
            </h2>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mb-8">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <p className="font-display font-bold text-[42px] sm:text-[48px] text-gradient-gold-green leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-[13px] uppercase tracking-[1px] text-slate-text">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              {BULLETS.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-trading/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-trading" />
                  </div>
                  <span className="font-body text-[15px] text-slate-offwhite">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="font-body text-xs text-slate-text italic mb-8 max-w-[480px]">
              *Results vary based on account size and market conditions. Past performance does not guarantee future results.
            </p>

            {/* CTA */}
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex font-display font-bold text-sm bg-gradient-gold text-navy px-8 py-3.5 rounded-md hover:brightness-110 transition-all duration-300"
            >
              View Live Results
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
