
document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger, SplitText)

	const bannerContainer = document.querySelector('.banner-img-container')
	const bannerIntroTextElements = gsap.utils.toArray('.banner-intro-text')
	const bannerMaskLayers = gsap.utils.toArray('.mask')

	const bannerHeader = document.querySelector('.banner-header h1')
	const splitText = new SplitText(bannerHeader, { type: 'words' })
	const words = splitText.words

	gsap.set(words, { opacity: 0 })
	bannerMaskLayers.forEach((layer, i) => {
		gsap.set(layer, { scale: 0.9 - i * 0.2 })
	})
	gsap.set(bannerContainer, { scale: 0 })

	ScrollTrigger.create({
		trigger: '.banner',
		start: 'top top',
		end: `+=${window.innerHeight * 4}px`,
		pin: true,
		scrub: 1,
		onUpdate: self => {
			const progress = self.progress

			gsap.set(bannerContainer, { scale: progress })

			bannerMaskLayers.forEach((layer, i) => {
				const initialScale = 0.9 - i * 0.2
				const layerProgress = Math.min(progress / 0.9, 1)
				gsap.set(layer, {
					scale: initialScale + layerProgress * (1 - initialScale),
				})
			})

			if (progress <= 0.9) {
				const textProgress = progress / 0.9
				const moveDistance = window.innerWidth * 0.5
				gsap.set(bannerIntroTextElements[0], {
					x: -textProgress * moveDistance,
				})
				gsap.set(bannerIntroTextElements[1], {
					x: textProgress * moveDistance,
				})
			}

			if (progress >= 0.7 && progress <= 0.9) {
				const headerProgress = (progress - 0.7) / 0.2
				const totalWords = words.length

				words.forEach((word, i) => {
					const start = i / totalWords
					const end = (i + 1) / totalWords
					let opacity = 0

					if (headerProgress >= end) {
						opacity = 1
					} else if (headerProgress >= start) {
						opacity = (headerProgress - start) / (end - start)
					}

					gsap.set(word, { opacity })
				})
			} else if (progress < 0.7) {
				gsap.set(words, { opacity: 0 })
			} else {
				gsap.set(words, { opacity: 1 })
			}
		},
	})
})
