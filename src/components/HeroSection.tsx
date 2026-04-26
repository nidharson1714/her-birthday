import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ── ENTRANCE ANIMATION ──
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from('.hero-btn', {
        y: -40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })

      // Title reveal
      tl.from('.hero-word', {
        y: 120,
        opacity: 0,
        rotateX: -30,
        filter: 'blur(10px)',
        duration: 2,
        stagger: 0.2,
        ease: 'power4.out'
      }, '-=0.8')

      // Bloom/Pulse for "Harini"
      gsap.to('.hero-name', {
         textShadow: '0 0 20px rgba(142, 124, 195, 0.4)',
         opacity: 1,
         duration: 2,
         repeat: -1,
         yoyo: true,
         ease: 'sine.inOut'
      })

      // ── SCROLL PARALLAX ──
      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 150,
        scale: 0.9,
        opacity: 0.3,
        ease: 'none'
      })

    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  // ── Mouse Parallax Detail ──
  const onMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const xMove = (clientX / window.innerWidth - 0.5) * 40;
    const yMove = (clientY / window.innerHeight - 0.5) * 40;
    
    gsap.to('.hero-title-container', {
      x: xMove,
      y: yMove,
      rotateY: xMove * 0.1,
      rotateX: -yMove * 0.1,
      duration: 2,
      ease: 'power2.out'
    })
  }

  return (
    <div ref={containerRef} onMouseMove={onMouseMove} className="relative overflow-hidden bg-transparent">
      {/* Top Right Button */}
      <div className="absolute top-10 right-10 z-20">
        <button
          className="hero-btn font-label rounded-full px-10 py-4 text-[10px] tracking-[0.4em] uppercase hover:scale-[1.05] transition-all duration-700 active:scale-95 group relative"
          style={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: '#FFFFFF',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}
        >
          <span className="relative z-10">Begin Journey</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full" />
        </button>
      </div>

      {/* Centered Hero Text */}
      <section className="hero-content flex flex-col items-center justify-center text-center px-6 min-h-screen relative z-10">
        <div className="hero-title-container perspective-2000 transform-gpu">
          <h1
            ref={titleRef}
            className="font-headline text-5xl sm:text-8xl md:text-9xl lg:text-[11rem] font-normal max-w-7xl italic leading-[0.9] tracking-tighter"
            style={{
              color: '#1a1a1a',
            }}
          >
            <span className="hero-word inline-block">Welcome</span>
            <br />
            <span className="hero-word hero-name inline-block mt-6" style={{ color: '#b86b77' }}>
              dear Harini.
            </span>
          </h1>
          
          <div className="hero-word mt-12 opacity-40 font-label text-[10px] tracking-[0.6em] uppercase">
             Scroll to explore our story
          </div>

          <img 
            src="/stck/stck3.jpg" 
            alt="Sticker" 
            className="absolute -bottom-10 -right-20 w-24 h-auto mix-blend-multiply opacity-60 hover:opacity-100 transition-opacity duration-700 rotate-12 animate-sticker-wobble"
          />
        </div>
      </section>

      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-gold rounded-full blur-[120px]" />
      </div>
    </div>
  )
}

