document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger')
	const mobileNav = document.querySelector('.mobile-nav')

	if (!mobileNav || !hamburger) return

	const toggleMobileNav = () => {
		const isOpen = mobileNav.classList.contains('open')

		mobileNav.classList.toggle('open')
		hamburger.classList.toggle('is-active', !isOpen) // Ensure .is-active only changes when menu state changes
	}

	const closeMobileNav = () => {
		if (mobileNav.classList.contains('open')) {
			mobileNav.classList.remove('open')
			hamburger.classList.remove('is-active')
		}
	}

	const handleResize = () => {
		if (window.innerWidth > 1024) {
			closeMobileNav()
		}
	}

	// Toggle when hamburger clicked
	hamburger.addEventListener('click', (e) => {
		e.preventDefault()
		toggleMobileNav()
	})

	// Close menu when any nav link is clicked
	mobileNav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			closeMobileNav()
		})
	})

	// Auto close on resize
	window.addEventListener('resize', handleResize)
	handleResize() // On page load
})
