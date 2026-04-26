import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export function ClosingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showPetals, setShowPetals] = useState(false)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Date label
      gsap.from('.close-date', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
      })

      // "Happy Birthday" text
      gsap.from('.close-greeting', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
        y: 40, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.2,
      })

      // "Harini." — big name reveal
      gsap.from('.close-name', {
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: 'top 70%',
          onEnter: () => setShowPetals(true)
        },
        y: 80, opacity: 0, scale: 0.9, duration: 1.5, ease: 'power4.out', delay: 0.4,
      })

      // Wax seal bounce
      gsap.from('.close-seal', {
        scrollTrigger: { trigger: '.close-seal', start: 'top 88%' },
        scale: 0, rotation: -60, opacity: 0, duration: 1, ease: 'back.out(1.7)', delay: 0.6,
      })

      // Divider grows
      gsap.from('.close-divider', {
        scrollTrigger: { trigger: '.close-divider', start: 'top 90%' },
        scaleX: 0, transformOrigin: 'center', duration: 1.2, ease: 'power3.inOut', delay: 0.7,
      })

      // From text
      gsap.from('.close-from', {
        scrollTrigger: { trigger: '.close-from', start: 'top 92%' },
        y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.8,
      })

      // Footer
      gsap.from('.close-footer', {
        scrollTrigger: { trigger: '.close-footer', start: 'top 95%' },
        opacity: 0, duration: 1.5, ease: 'power2.out', delay: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 sm:py-40 px-4 sm:px-6 min-h-screen bg-parchment relative z-20 w-full flex flex-col items-center justify-center text-center parchment-texture overflow-hidden">
      {/* Falling Petals Layer */}
      {showPetals && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            >
              <div 
                className="w-4 h-4 bg-rose/40 rounded-full blur-[1px]"
                style={{
                  transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Date label */}
      <p className="close-date font-label text-[11px] tracking-[0.4em] uppercase text-rose mb-12">June 17 · For Harini</p>
      
      {/* Birthday Cake Sticker */}
      <img 
        src="/stck/stck2.jpg" 
        alt="Birthday Cake" 
        className="w-32 h-auto mix-blend-multiply mb-8 opacity-90 animate-sticker-float"
        style={{ animationDuration: '3s' }}
      />
      
      <p className="close-greeting font-headline text-3xl sm:text-5xl text-on-surface-variant mb-4 italic">Happy Birthday,</p>
      <h1 className="close-name font-headline text-5xl sm:text-[10rem] text-ink italic mb-12 sm:mb-16">Harini.</h1>
      
      {/* Wax seal */}
      <div className="close-seal wax-seal mb-12 shadow-[0_10px_30px_rgba(122,46,46,0.3)]" />
      
      {/* Divider */}
      <div className="close-divider w-48 mb-12">
        <div className="ink-divider" />
      </div>
      
      <p className="close-from font-body text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-md">
        From your idiot · <span className="font-medium text-ink">Nidharson</span><br/>
        <span className="italic">who is learning, slowly, to be someone worthy of you.</span>
      </p>

      {/* Footer & Contacts */}
      <div className="close-footer relative sm:absolute sm:bottom-12 mt-24 sm:mt-0 w-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center font-label text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-outline">
            <a href="https://www.instagram.com/nidharson.1714/" target="_blank" rel="noopener noreferrer" className="hover:text-rose transition-all duration-500 hover:scale-110">Instagram</a>
            <div className="hidden sm:block w-[1px] h-3 bg-outline/20" />
            <a href="tel:9361201248" className="hover:text-rose transition-all duration-500 hover:scale-110">9361201248</a>
            <div className="hidden sm:block w-[1px] h-3 bg-outline/20" />
            <a href="mailto:as14112004@gmail.com" className="hover:text-rose transition-all duration-500 hover:scale-110">Email</a>
          </div>
          <div className="w-12 h-[1px] bg-outline/10" />
        </div>
        <div className="font-label text-xs text-outline/40 tracking-[0.3em] uppercase">
          made with love · forever yours
        </div>
      </div>
    </section>
  )
}
