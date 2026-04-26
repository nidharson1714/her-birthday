import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const trail = trailRef.current
    if (!dot || !trail) return

    const onMouseMove = (e: MouseEvent) => {
      // Main heart follows with speed
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })
      
      // Trail heart follows with a slight lag (organic feel)
      gsap.to(trail, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power3.out',
      })

      // Organic rotation based on speed/direction
      const rotate = (e.movementX + e.movementY) * 2;
      gsap.to([dot, trail], {
         rotate: rotate,
         duration: 0.8,
         ease: 'power2.out'
      })
    }

    const onMouseEnter = () => {
      gsap.to([dot, trail], { 
        scale: 1.5, 
        duration: 0.4,
        ease: 'back.out(2)'
      })
    }

    const onMouseLeave = () => {
      gsap.to([dot, trail], { 
        scale: 1, 
        duration: 0.4,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] text-rose"
        style={{
          width: 20,
          height: 20,
          marginLeft: -10,
          marginTop: -10,
          filter: 'drop-shadow(0px 0px 8px rgba(184, 107, 119, 0.4))',
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] text-rose/30"
        style={{
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  )
}

