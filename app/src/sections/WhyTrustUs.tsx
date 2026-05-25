import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, User, Headphones, Zap, RefreshCw, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'Easy to Use' },
  { icon: User, label: 'Beginner Friendly' },
  { icon: Headphones, label: 'Professional Support' },
  { icon: Zap, label: 'High Speed Execution' },
  { icon: RefreshCw, label: 'Regular Updates' },
  { icon: Users, label: 'Trusted by 500+ Traders' },
]

export default function WhyTrustUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trust-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        '.trust-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.trust-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] py-[120px] px-[5vw] bg-navy-light"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="trust-header font-display font-bold text-slate-offwhite text-center mb-14"
          style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
        >
          Why Traders Trust Us
        </h2>

        <div className="trust-grid grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="trust-item flex flex-col items-center text-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                <item.icon
                  size={28}
                  className={i % 2 === 0 ? 'text-gold' : 'text-green-trading'}
                />
              </div>
              <span className="font-body text-base text-slate-offwhite">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
