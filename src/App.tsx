import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import { HeroSection } from './components/HeroSection'
import { VideoBackground } from './components/VideoBackground'
import { ProfileSection } from './components/ProfileSection'
import { KDramaSection } from './components/KDramaSection'
import { LetterSection } from './components/LetterSection'
import { PromisesSection } from './components/PromisesSection'
import { ClosingSection } from './components/ClosingSection'
import { CustomCursor } from './components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useLayoutEffect(() => {
    // ── INITIALIZE LENIS SMOOTH SCROLL (ULTRA SMOOTH SETTINGS) ──
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // ── GLOBAL REVEAL ANIMATIONS ──
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // ── SCROLL PROGRESS BAR ANIMATION ──
    gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      }
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
    }
  }, [])

  useEffect(() => {
    // Ultra smooth defaults for ALL gsap animations
    gsap.defaults({
      ease: 'power4.out',
      duration: 1.2,
    })

    // Refresh ScrollTrigger after fonts load
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })

    const startAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e))
      }
      document.body.removeEventListener('click', startAudio)
      document.body.removeEventListener('keydown', startAudio)
    }

    // Handlers for external audio control (e.g. from KDramaSection)
    const handlePauseBGM = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
      }
    }

    const handleResumeBGM = () => {
      if (audioRef.current && audioRef.current.paused && !isMuted) {
        audioRef.current.play().catch(e => console.log('BGM resume failed:', e))
      }
    }

    document.body.addEventListener('click', startAudio)
    document.body.addEventListener('keydown', startAudio)
    window.addEventListener('pause-bgm', handlePauseBGM)
    window.addEventListener('resume-bgm', handleResumeBGM)

    return () => {
      document.body.removeEventListener('click', startAudio)
      document.body.removeEventListener('keydown', startAudio)
      window.removeEventListener('pause-bgm', handlePauseBGM)
      window.removeEventListener('resume-bgm', handleResumeBGM)
    }
  }, [isMuted])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e))
      }
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="w-full bg-parchment font-body text-on-surface relative">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" />

      {/* Audio Element */}
      <audio ref={audioRef} src="/bgm.m4a" loop preload="auto"></audio>

      {/* Mute Button */}
      <button 
        onClick={toggleMute}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center z-[1000] shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        )}
      </button>

      {/* HERO WRAPPER */}
      <section className="relative w-full min-h-screen overflow-hidden bg-background">
        <VideoBackground />
        <div className="relative z-10 w-full">
          <HeroSection />
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="relative z-20 bg-background">
        <ProfileSection />
        <KDramaSection />
        <LetterSection />
        <PromisesSection />
        <ClosingSection />
      </main>
    </div>
  )
}

export default App
