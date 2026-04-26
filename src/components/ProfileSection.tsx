import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const profiles = [
  {
    label: 'Profession',
    value: 'Doctor',
    sub: 'She heals the world — and without knowing it, fixes mine too.',
    video: '/images/doctor-vid.mp4',
    poster: '/images/doctor.png',
  },
  {
    label: 'Art',
    value: 'Classical Dancer',
    sub: 'Grace made visible. Poetry made movement.',
    video: '/images/classical-dancer.mp4',
    poster: '/images/dancer.png',
  },
  {
    label: 'Identity',
    value: "Father's Daughter",
    sub: "The pride in her father's eyes — I completely understand it.",
    video: '/images/father-daughter.mp4',
    poster: '/images/father.png',
  },
  {
    label: 'Devotion',
    value: 'Forever Studying',
    sub: 'She reminds me to study while being the most disciplined person I know.',
    video: '/images/studying-vid.mp4',
    poster: '/images/studying.png',
  },
  {
    label: 'Cinema',
    value: 'K-Drama & C-Drama',
    sub: "She gave me Hidden Love and didn't warn me it would make me understand everything.",
    image: '/images/kdrama.png',
  },
  {
    label: 'A gift',
    value: 'She Cooked For Me',
    sub: 'She learned to cook for me. I still do not know what I did to deserve that kind of love.',
    video: '/images/cooking-vid.mp4',
    poster: '/images/cooking.png',
  },
  {
    label: 'Nicknames',
    value: 'Papu & Idiot',
    sub: 'She calls me an idiot. I call her Papu. It is the most honest language we speak.',
    image: '/images/nicknames.png',
  },
  {
    label: 'In one word',
    value: 'Irreplaceable',
    sub: 'The sweetest, most quietly extraordinary person I have ever met. No contest.',
    image: '/images/irreplaceable.jpg',
  },
]

export function ProfileSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const thumbnailRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Fleuron fade in
      gsap.from('.profile-fleuron', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%' },
        scale: 0, rotation: -180, opacity: 0, duration: 1.2, ease: 'back.out(1.7)',
      })

      // Title — smooth split reveal
      gsap.from('.profile-title-word', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 80, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'power4.out',
      })

      // Rows stagger in smoothly — they START visible but animate from below
      gsap.from('.profile-row', {
        scrollTrigger: { trigger: '.profile-list', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.08, duration: 0.9, ease: 'power3.out',
        clearProps: 'all',
      })

      // Height row
      gsap.from('.height-col', {
        scrollTrigger: { trigger: '.height-row', start: 'top 85%' },
        y: 30, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  // Portfolio hover effect — floating thumbnail
  useEffect(() => {
    const projectsEl = projectsRef.current
    const thumbnailEl = thumbnailRef.current
    if (!projectsEl || !thumbnailEl) return

    const rows = gsap.utils.toArray<HTMLElement>('.profile-row', projectsEl)
    const thumbs = gsap.utils.toArray<HTMLElement>('.profile-thumb', thumbnailEl)

    gsap.set(thumbnailEl, { scale: 0 })

    const xTo = gsap.quickTo(thumbnailEl, 'x', { duration: 0.3, ease: 'power3.out' })
    const yTo = gsap.quickTo(thumbnailEl, 'y', { duration: 0.3, ease: 'power3.out' })

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const handleMouseLeave = () => {
      gsap.to(thumbnailEl, {
        scale: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        overwrite: 'auto',
      })
    }

    projectsEl.addEventListener('mousemove', handleMouseMove)
    projectsEl.addEventListener('mouseleave', handleMouseLeave)

    rows.forEach((row, index) => {
      row.addEventListener('mouseenter', () => {
        gsap.to(thumbnailEl, {
          scale: 1,
          rotate: (index % 2 === 0 ? 2 : -2),
          duration: 0.6,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
        })
        gsap.to(thumbs, {
          yPercent: -100 * index,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      })
    })

    return () => {
      projectsEl.removeEventListener('mousemove', handleMouseMove)
      projectsEl.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-32 px-4 sm:px-6 bg-parchment relative z-20 w-full parchment-texture"
      id="profile"
    >
      <div className="max-w-[75rem] mx-auto">
        {/* Decorative fleuron */}
        <div className="profile-fleuron text-center mb-6 relative">
          <span className="text-gold-accent text-3xl">❧</span>
          <img 
            src="/stck/stck7.jpg" 
            alt="Cat Sticker" 
            className="absolute -top-12 right-[10%] w-20 h-auto mix-blend-multiply opacity-50 hover:opacity-100 transition-opacity duration-700 -rotate-12 animate-sticker-float"
          />
        </div>

        <h2 className="font-headline text-3xl sm:text-6xl mb-12 sm:mb-20 text-center text-ink italic overflow-hidden">
          <span className="profile-title-word inline-block">Everything</span>{' '}
          <span className="profile-title-word inline-block text-rose">She Is</span>
        </h2>

        {/* === Portfolio Hover List === */}
        <div className="relative">
          <div ref={projectsRef} className="profile-list hidden md:flex flex-col w-full">
            {profiles.map((p, i) => (
              <div
                key={i}
                className="profile-row w-full flex items-center justify-between py-8 sm:py-10 px-4 sm:px-16 cursor-pointer group"
                style={{
                  borderTop: '1px solid rgba(47, 79, 79, 0.12)',
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  ...(i === profiles.length - 1
                    ? { borderBottom: '1px solid rgba(47, 79, 79, 0.12)' }
                    : {}),
                }}
              >
                {/* Value */}
                <h3
                  className="font-headline text-3xl sm:text-[3.5rem] font-medium text-ink-deep italic leading-tight"
                  style={{ transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                >
                  <span className="inline-block group-hover:-translate-x-3 group-hover:text-rose transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    {p.value}
                  </span>
                </h3>

                {/* Label */}
                <p
                  className="font-label text-sm sm:text-base text-on-surface-variant tracking-wider uppercase"
                  style={{ transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                >
                  <span className="inline-block group-hover:translate-x-3 group-hover:text-ink transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                    {p.label}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Floating Thumbnail Container (Desktop Only) */}
          <div
            ref={thumbnailRef}
            className="fixed w-[22rem] h-[14rem] hidden md:flex flex-col overflow-hidden pointer-events-none top-0 left-0 z-50 rounded-sm"
            style={{
              boxShadow: '0 20px 60px rgba(47, 79, 79, 0.25)',
              border: '2px solid rgba(233, 193, 118, 0.4)',
            }}
          >
            {profiles.map((p, i) => (
              <div key={i} className="profile-thumb w-full shrink-0" style={{ height: '100%' }}>
                {p.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={p.poster}
                    className="w-full h-full object-cover"
                  >
                    <source src={p.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={p.image} alt={p.value} className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Fallback Grid - Inline Images */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {profiles.map((p, i) => (
              <div key={i} className="flex flex-col gap-3 p-4 bg-parchment-dim rounded-lg border border-ink/5 shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-black/5">
                   {p.video ? (
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        poster={p.poster}
                        className="w-full h-full object-cover"
                      >
                        <source src={p.video} type="video/mp4" />
                      </video>
                   ) : (
                      <img src={p.image} alt={p.value} className="w-full h-full object-cover" />
                   )}
                </div>
                <div>
                   <h3 className="font-headline text-xl italic text-ink">{p.value}</h3>
                   <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">{p.label}</p>
                   <p className="font-body text-xs italic text-on-surface-variant mt-1.5 leading-relaxed">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ink divider */}
        <div className="ink-divider my-12 sm:my-20" />

        {/* Height Row */}
        <div className="height-row flex flex-col sm:flex-row items-center sm:items-end justify-center gap-10 sm:gap-24">
          <div className="height-col flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-[1px] h-[60px] sm:h-[78px] bg-ink relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-rose" />
            </div>
            <div className="text-center">
              <div className="font-headline text-lg sm:text-xl text-ink italic">Harini</div>
              <div className="font-label text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mt-1">160 cm</div>
            </div>
          </div>

          <div className="height-col flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-[1px] h-[80px] sm:h-[97px] bg-ink-deep relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full border border-ink bg-parchment" />
            </div>
            <div className="text-center">
              <div className="font-headline text-lg sm:text-xl text-ink italic">Nidharson</div>
              <div className="font-label text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mt-1">180 cm</div>
            </div>
          </div>

          <div className="height-col w-full sm:max-w-[400px] flex flex-col md:flex-row items-center gap-6 sm:gap-8 border-t sm:border-t-0 sm:border-l border-gold-accent/30 pt-10 sm:pt-0 sm:pl-10">
            <div className="relative group">
              <img 
                src="/images/heart-image.jpg" 
                alt="Memory" 
                className="w-28 h-36 sm:w-32 sm:h-40 object-cover rounded-sm rotate-[-3deg] group-hover:rotate-0 transition-transform duration-700 shadow-xl border-[6px] border-white"
              />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white shadow-md flex items-center justify-center rotate-3">
                <span className="text-rose text-[10px] sm:text-xs">💜</span>
              </div>
            </div>
            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed italic text-center sm:text-left">
              Twenty centimetres.<br />
              She rests precisely where my heart is.<br />
              I think that was always the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
