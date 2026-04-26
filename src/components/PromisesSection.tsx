import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const promises = [
  { p: 'I will listen.', text: 'Not wait for my turn — actually listen. Your feelings will always come before my reactions.' },
  { p: 'I will match your effort.', text: 'You cared about my studies, my appearance, my future. I will care about yours just as fiercely.' },
  { p: 'I will control my anger.', text: 'I will never let my pride or temper become a distance between us. Your peace of mind is worth everything.' },
  { p: 'I will show up.', text: 'In the small moments, the quiet ones, and the hard ones. Consistently. Not just when it is easy.' },
  { p: 'I will watch every drama you recommend.', text: 'Even the ones that make me feel things I cannot name. Especially those.' },
  { p: 'I will wait.', text: 'No pressure. No timeline. You are the person worth every second of patience I have ever had to learn.' },
]

export function PromisesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Fleuron
      gsap.from('.promise-fleuron', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        scale: 0, rotation: 180, opacity: 0, duration: 1, ease: 'back.out(1.7)',
      })

      // Title words
      gsap.from('.promise-title-word', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 78%' },
        y: 60, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'power4.out', delay: 0.15,
      })

      // Each promise — smooth stagger
      gsap.from('.promise-item', {
        scrollTrigger: { trigger: '.promise-list', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.12, duration: 1, ease: 'power3.out',
        clearProps: 'all',
      })

      // Roman numerals — slight rotation reveal
      gsap.from('.promise-numeral', {
        scrollTrigger: { trigger: '.promise-list', start: 'top 80%' },
        x: -20, opacity: 0, rotation: -15, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        clearProps: 'all',
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-16 sm:py-32 px-4 sm:px-6 relative z-20 w-full" style={{ background: '#2F4F4F' }} id="promises">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Fleuron */}
        <div className="promise-fleuron text-center mb-8 relative">
          <span className="text-gold-accent text-3xl">❧</span>
          <img 
            src="/stck/stck6.jpg" 
            alt="Butterflies" 
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-auto mix-blend-multiply opacity-30 pointer-events-none animate-sticker-float"
          />
        </div>

        <h2 className="font-headline text-3xl sm:text-6xl mb-16 sm:mb-24 max-w-2xl text-parchment leading-tight italic overflow-hidden">
          <span className="promise-title-word inline-block">What I</span><br/>
          <span className="promise-title-word inline-block text-gold-accent">Promise You</span>
        </h2>

        <div className="promise-list flex flex-col">
          {promises.map((prom, index) => (
             <div
               key={index}
               className="promise-item promise-glow py-10 flex flex-col md:flex-row gap-6 md:gap-16 items-start relative"
               style={{ transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
             >
               {/* Gold divider at top */}
               {index === 0 && <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(233,193,118,0.3), rgba(233,193,118,0.5), rgba(233,193,118,0.3), transparent)' }} />}
               
                <div className="promise-numeral font-headline text-xl md:text-3xl text-gold-accent italic min-w-[2.5rem] md:min-w-[3rem]">
                  {['i', 'ii', 'iii', 'iv', 'v', 'vi'][index]}.
                </div>
                <div className="font-body text-base sm:text-xl text-parchment-dim leading-relaxed max-w-3xl">
                  <span className="text-parchment font-medium block md:inline md:mr-2 font-headline italic" style={{ transition: 'color 0.4s ease' }}>
                    {prom.p}
                  </span>{' '}
                  {prom.text}
                </div>

                {/* Bottom divider */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(233,193,118,0.15), rgba(233,193,118,0.3), rgba(233,193,118,0.15), transparent)' }} />
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
