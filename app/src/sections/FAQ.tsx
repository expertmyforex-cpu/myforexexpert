import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FAQ_ITEMS = [
  {
    question: 'Is this EA beginner friendly?',
    answer:
      'Yes, the EA is designed for both beginners and professional traders. Our step-by-step installation guide and 24/7 support team make it easy to get started, even if you\'ve never used an EA before.',
  },
  {
    question: 'Which broker is recommended?',
    answer:
      'The EA works with most MT4 & MT5 brokers. We recommend brokers with low spreads on XAUUSD (Gold) for best results, such as IC Markets, Pepperstone, or Exness.',
  },
  {
    question: 'Does it work on mobile?',
    answer:
      'Yes, you can monitor trades from mobile using MT4/MT5 apps. However, the EA needs to run on a VPS or your computer to execute trades automatically.',
  },
  {
    question: 'Is support available?',
    answer:
      'Yes, our support team is available 24/7. You can reach us via WhatsApp, email, or our support ticket system. Premium and VIP plans get priority response times.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'We offer a 7-day money-back guarantee. If you\'re not satisfied with the EA\'s performance, contact our support team for a full refund — no questions asked.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-header',
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
        '.faq-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative z-[1] py-[140px] px-[5vw] bg-navy"
    >
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="faq-header text-center mb-14">
          <p className="font-body font-medium text-xs tracking-[3px] uppercase text-gold mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2
            className="font-display font-bold text-slate-offwhite"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Got Questions? We've Got Answers.
          </h2>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="faq-item border-b border-gold/[0.08]"
              >
                <button
                  className="w-full flex items-center justify-between py-7 text-left focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-navy rounded-sm"
                  onClick={() => toggleItem(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-display font-semibold text-[17px] text-slate-offwhite pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-text flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="overflow-hidden transition-all duration-[350ms] ease-in-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="font-body text-[15px] text-slate-text leading-[1.7] pb-7">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
