const projects = gsap.utils.toArray('.project')
const thumbnails = gsap.utils.toArray('.thumbnail')
const projectThumbnail = document.querySelector('.project-thumbnail')
const projectsContainer = document.querySelector('.projects')

gsap.set(projectThumbnail, { scale: 0, xPercent: -50, yPercent: -50 })

const xTo = gsap.quickTo(projectThumbnail, 'x', {
	duration: 0.4,
	ease: 'power3.out',
})
const yTo = gsap.quickTo(projectThumbnail, 'y', {
	duration: 0.4,
	ease: 'power3.out',
})

projectsContainer.addEventListener('mousemove', e => {
	xTo(e.clientX)
	yTo(e.clientY)
})

projectsContainer.addEventListener('mouseleave', () => {
	gsap.to(projectThumbnail, {
		scale: 0,
		duration: 0.3,
		ease: 'power2.out',
		overwrite: 'auto',
	})
})

projects.forEach((project, index) => {
	project.addEventListener('mouseenter', () => {
		gsap.to(projectThumbnail, {
			scale: 1,
			duration: 0.4,
			ease: 'power2.out',
			overwrite: 'auto',
		})

		gsap.to(thumbnails, {
			yPercent: -100 * index,
			duration: 0.4,
			ease: 'power2.out',
			overwrite: 'auto',
		})
	})
})

// Audio setup
// Audio setup
const bgm = document.getElementById('bgm');
const muteBtn = document.getElementById('muteBtn');
const iconUnmute = document.getElementById('icon-unmute');
const iconMute = document.getElementById('icon-mute');

let isMuted = false;
bgm.volume = 1.0; 

// Ensure audio plays when user interacts with the page (if autoplay is blocked)
const startAudio = () => {
    if (bgm.paused) {
        bgm.play().catch(e => console.log('Audio play failed:', e));
    }
    document.body.removeEventListener('click', startAudio);
    document.body.removeEventListener('keydown', startAudio);
};

document.body.addEventListener('click', startAudio);
document.body.addEventListener('keydown', startAudio);

muteBtn.addEventListener('click', (e) => {
    // Prevent the body click listener from firing immediately after this if they bubble
    e.stopPropagation(); 
    
    if (bgm.paused) {
        bgm.play().catch(e => {
            console.log('Audio play failed:', e);
            alert("Audio could not play. Your browser might block it or the format is unsupported. Error: " + e.message);
        });
    }

    isMuted = !isMuted;
    bgm.muted = isMuted;
    
    if (isMuted) {
        iconUnmute.style.display = 'none';
        iconMute.style.display = 'block';
    } else {
        iconUnmute.style.display = 'block';
        iconMute.style.display = 'none';
    }
});
