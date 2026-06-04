import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, Mail, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CONTACT_DETAILS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92 3127777880',
    href: 'https://wa.me/923127777880',
    color: '#00FF99',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'support@myforexexpert.com',
    href: 'mailto:support@myforexexpert.com',
    color: '#FFD700',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.myforexexpert.com',
    href: 'https://www.myforexexpert.com',
    color: '#F0F2F5',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-left > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        '.contact-right',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
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
      id="contact"
      className="relative z-[1] py-[140px] px-[5vw] bg-navy-light"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Contact Info */}
          <div className="contact-left">
            <p className="font-body font-medium text-xs tracking-[3px] uppercase text-green-trading mb-4">
              GET IN TOUCH
            </p>
            <h2
              className="font-display font-bold text-slate-offwhite mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
            >
              Start Your Trading Journey Today
            </h2>
            <p className="font-body text-[17px] text-slate-text leading-[1.7] mb-10">
              Have questions? Our team is ready to help you get started with MY FOREX EXPERT.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {CONTACT_DETAILS.map((detail, i) => (
                <a
                  key={i}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${detail.color}15` }}
                  >
                    <detail.icon size={18} style={{ color: detail.color }} />
                  </div>
                  <span
                    className="font-body text-[15px] group-hover:underline transition-all duration-300"
                    style={{ color: detail.color }}
                  >
                    {detail.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - WhatsApp CTA Card */}
          <div className="contact-right">
            <div
              className="rounded-2xl p-14 text-center"
              style={{
                background: 'rgba(0, 255, 153, 0.05)',
                border: '1px solid rgba(0, 255, 153, 0.2)',
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-green-trading/15 flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-green-trading" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-offwhite mb-3">
                Join Our WhatsApp Group
              </h3>
              <p className="font-body text-[15px] text-slate-text leading-[1.7] mb-8 max-w-[320px] mx-auto">
                Get instant updates, support, and connect with other traders using MY FOREX EXPERT.
              </p>
              <a
                href="https://chat.whatsapp.com/HpMCyiac0ZS7oNJYgPzOuD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-display font-bold text-[15px] bg-[#25D366] text-white px-10 py-4 rounded-lg hover:brightness-110 transition-all duration-300"
              >
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
