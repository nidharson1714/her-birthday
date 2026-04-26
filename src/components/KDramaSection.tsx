import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface VideoData {
  src: string;
  message?: string;
  id: string;
}

const videos: VideoData[] = [
  { id: '1', src: '/video2/video_1.mp4', message: 'Harini enaku unna unmaive antha white coat ah stethoscope potu en munnadi nee varu podhu achoo!!' },
  { id: '2', src: '/video2/video_2.mp4' },
  { id: '3', src: '/video2/video_3.mp4', message: 'en harini epo ketalum even kekalanalum naa unnakaga cook pannuve papuh! only for my papuh!' },
  { id: '4', src: '/video2/scene5.mp4', message: 'orey vatti matu pls last chance ah' },
  { id: '5', src: '/video2/video_5.mp4' },
  { id: '6', src: '/video2/video_6.mp4', message: 'naa unakaga eppovu wait pannuve evlw years aanalum wait pannuve nee vara varaiku wait pannuve en harini kaga' },
  { id: '7', src: '/video2/video_7.mp4', message: 'i will never forgot those eyes in my life! i love you harini' },
  { id: '8', src: '/video2/3d4c73b8-d766-4ff7-a4b9-213cd0a81456_1.mp4' }
]

export function KDramaSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useGSAP(() => {
    if (!horizontalRef.current || !containerRef.current) return;

    // ── INITIAL STATE: Ensure all videos are muted ──
    videoRefs.current.forEach(v => {
      if (v) {
        v.muted = true;
      }
    });

    const cards = gsap.utils.toArray<HTMLElement>('.video-card')
    
    // Function to calculate the actual scroll amount
    const getScrollAmount = () => {
      if (!horizontalRef.current) return 0;
      return horizontalRef.current.scrollWidth - window.innerWidth;
    }

    // ── Floating/Levitation Animation ──
    // Only run on non-mobile or reduce intensity to save CPU
    // ── Floating/Levitation Animation for all cards ──
    cards.forEach((card, i) => {
       gsap.to(card, {
          y: i % 2 === 0 ? -15 : 15,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
       })
    })

    // ── Master Horizontal Scroll ──
    const horizontalScroll = gsap.to(horizontalRef.current, {
      x: () => -getScrollAmount(),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1.5,
        snap: window.innerWidth < 768 ? {
          snapTo: 1 / (videos.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.1,
          ease: 'power1.inOut'
        } : undefined,
        start: 'top top',
        end: () => `+=${getScrollAmount() + (window.innerWidth < 768 ? 600 : 1000)}`, // Reduced distance for mobile
        invalidateOnRefresh: true,
        onEnter: () => {
          window.dispatchEvent(new CustomEvent('pause-bgm'))
          ScrollTrigger.refresh()
        },
        onEnterBack: () => window.dispatchEvent(new CustomEvent('pause-bgm')),
        onLeave: () => {
          window.dispatchEvent(new CustomEvent('resume-bgm'))
          videoRefs.current.forEach(v => { if(v) { v.muted = true; v.pause(); } })
        },
        onLeaveBack: () => {
          window.dispatchEvent(new CustomEvent('resume-bgm'))
          videoRefs.current.forEach(v => { if(v) { v.muted = true; v.pause(); } })
        }
      }
    })

    // ── Individual Card Logic (Focus & Audio) ──
    cards.forEach((card, i) => {
      const video = videoRefs.current[i]
      const msgWords = card.querySelectorAll('.msg-word')
      const visualizer = card.querySelector('.visualizer')

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: horizontalScroll,
        start: 'left center+=15%',
        end: 'right center-=15%',
        onEnter: () => {
          videoRefs.current.forEach((v, idx) => {
            if (v) {
              if (idx === i) {
                v.muted = false;
                v.play().catch(() => {});
              } else {
                v.muted = true;
              }
            }
          });

          gsap.to(card, { scale: 1.1, opacity: 1, duration: 0.8, ease: 'power3.out' })
          if (visualizer) gsap.to(visualizer, { opacity: 1, scale: 1, duration: 0.5 })
          
          if (msgWords.length > 0) {
            gsap.to(msgWords, {
              opacity: 1,
              duration: 0.8,
              stagger: 0.03,
              ease: 'power2.out'
            })
          }
        },
        onLeave: () => {
          gsap.to(card, { scale: 0.85, opacity: 0.2, duration: 0.8 })
          if (visualizer) gsap.to(visualizer, { opacity: 0, scale: 0.5, duration: 0.3 })
          if (video) video.muted = true
          if (msgWords.length > 0) {
            gsap.to(msgWords, { opacity: 0, duration: 0.4 })
          }
        },
        onEnterBack: () => {
          videoRefs.current.forEach((v, idx) => {
            if (v) {
              if (idx === i) {
                v.muted = false;
                v.play().catch(() => {});
              } else {
                v.muted = true;
              }
            }
          });

          gsap.to(card, { scale: 1.1, opacity: 1, duration: 0.8, ease: 'power3.out' })
          if (visualizer) gsap.to(visualizer, { opacity: 1, scale: 1, duration: 0.5 })
          if (msgWords.length > 0) {
            gsap.to(msgWords, { opacity: 1, stagger: 0.03, duration: 0.8, ease: 'power2.out' })
          }
        },
        onLeaveBack: () => {
          gsap.to(card, { scale: 0.85, opacity: 0.2, duration: 0.8 })
          if (visualizer) gsap.to(visualizer, { opacity: 0, scale: 0.5, duration: 0.3 })
          if (video) video.muted = true
          if (msgWords.length > 0) {
            gsap.to(msgWords, { opacity: 0, duration: 0.4 })
          }
        }
      })
    })

    // Header reveal
    gsap.from('.kdrama-header-content', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true
      },
      y: 100,
      opacity: 0,
      scale: 0.9,
    })

  }, { scope: containerRef })

  // ── Mouse Parallax Detail ──
  const onMouseMove = (e: React.MouseEvent) => {
     if (!containerRef.current) return;
     const { clientX, clientY } = e;
     const xPos = (clientX / window.innerWidth - 0.5) * 30;
     const yPos = (clientY / window.innerHeight - 0.5) * 30;
     
     gsap.to('.video-card-inner', {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: 'power2.out',
        overwrite: 'auto'
     })
  }

  return (
    <section 
      ref={containerRef} 
      onMouseMove={onMouseMove}
      className="relative z-20 w-full min-h-screen bg-[#050a0a] overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-teal-950/10 to-black" />

      <div className="kdrama-header-content text-center px-6 absolute top-8 sm:top-12 left-0 right-0 z-20">
        <span className="font-label text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-rose/40 mb-2 sm:mb-3 block">
          A Recommendation That Changed Things
        </span>
        <h2 className="font-headline text-3xl sm:text-6xl text-parchment italic tracking-tight">
          The <span className="text-rose">Unspoken</span> Language
        </h2>
      </div>

      <div className="relative w-full h-[80vh] flex items-center">
        <div 
          ref={horizontalRef}
          className="flex flex-nowrap items-center h-full px-[15vw] sm:px-[35vw] will-change-transform transform-gpu"
        >
          {videos.map((video, idx) => (
            <div 
              key={video.id} 
              className="video-card flex-shrink-0 w-[90vw] sm:w-[50vw] px-4 sm:px-12 opacity-20 relative perspective-2000 will-change-transform transform-gpu"
            >
              <div className="video-card-inner relative group overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-1000 ease-out hover:border-rose/30 transform-gpu">
                <video 
                  ref={el => videoRefs.current[idx] = el}
                  src={video.src}
                  className="w-full aspect-video object-cover"
                  autoPlay muted loop playsInline
                />
                <div className="absolute top-6 left-6 sm:top-8 sm:left-10 font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-white/40">Scene 0{idx + 1}</div>
                <div className="visualizer opacity-0 scale-50 absolute bottom-6 right-6 sm:bottom-8 sm:right-10 flex gap-1 sm:gap-1.5 items-end h-4 sm:h-6">
                  <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-rose/80 animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-1 h-4 sm:w-1.5 sm:h-6 bg-rose/80 animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-rose/80 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>

              {/* Message Placement - Always visible on mobile */}
              <div className="absolute top-[105%] left-0 right-0 text-center px-4 sm:px-12 pointer-events-none">
                {video.message && (
                  <div className="font-headline italic text-lg sm:text-2xl lg:text-3xl text-parchment/80 leading-relaxed drop-shadow-2xl flex flex-wrap justify-center gap-x-2">
                    {video.message.split(' ').map((word, wIdx) => (
                      <span key={wIdx} className="msg-word inline-block opacity-0">
                        {word}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[50vw] flex flex-col items-center justify-center text-center px-10">
            <div className="w-16 h-[1px] bg-rose/20 mb-12" />
            <p className="font-body text-parchment/30 text-base italic leading-relaxed max-w-xs">
              "Wait for the one who speaks your language without saying a single word."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

