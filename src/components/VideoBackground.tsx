import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let animationFrameId: number

    const FADE_DURATION = 0.5 // seconds

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) {
        animationFrameId = requestAnimationFrame(handleTimeUpdate)
        return
      }

      const currentTime = video.currentTime
      const duration = video.duration

      // Fade in over first 0.5s
      if (currentTime < FADE_DURATION) {
        video.style.opacity = String(currentTime / FADE_DURATION)
      }
      // Fade out over last 0.5s
      else if (currentTime > duration - FADE_DURATION) {
        const remaining = duration - currentTime
        video.style.opacity = String(Math.max(0, remaining / FADE_DURATION))
      }
      // Fully visible in between
      else {
        video.style.opacity = '1'
      }

      animationFrameId = requestAnimationFrame(handleTimeUpdate)
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    // Start monitoring
    animationFrameId = requestAnimationFrame(handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    // Autoplay
    video.play().catch(() => {})

    return () => {
      cancelAnimationFrame(animationFrameId)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div
      className="absolute z-0"
      style={{ top: '300px', inset: 'auto 0 0 0', position: 'absolute' }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        style={{ opacity: 1 }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </div>
  )
}
