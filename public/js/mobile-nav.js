document.addEventListener('DOMContentLoaded', () => {
	const triggers = document.querySelectorAll('.mobile-link, .hamburger')
	const mobileNav = document.querySelector('.mobile-nav')
	const hamburger = document.querySelector('.hamburger')

	if (!mobileNav) return

	const toggleMobileNav = () => {
		mobileNav.classList.toggle('open')
		if (hamburger) {
			hamburger.classList.toggle('is-active')
		}
	}

	const handleResize = () => {
		if (window.innerWidth > 1024) {
			mobileNav.classList.remove('open')
			if (hamburger) {
				hamburger.classList.remove('is-active')
			}
		}
	}

	// Click events
	triggers.forEach((trigger) => {
		trigger.addEventListener('click', (e) => {
			e.preventDefault()
			toggleMobileNav()
		})
	})

	// Resize event
	window.addEventListener('resize', handleResize)

	// Initial check
	handleResize()
})
