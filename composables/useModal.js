export const useModal = () => {
	onMounted(() => {
		let e = document.querySelectorAll('.enlarge'),
			t = document.getElementById('galleryModal'),
			a = document.getElementById('modalImage'),
			l = document.getElementById('modalCaption'),
			n = document.querySelector('.left'),
			r = document.querySelector('.right')

		if (!t || !a || !n || !r) return

		let o = 0,
			d = Array.from(e).map((e) => ({ src: e.getAttribute('data-full'), alt: e.getAttribute('data-alt') || '' })),
			i = () => {
				t.style.display = 'none'
				document.removeEventListener('keydown', y)
			},
			s = () => {
				a.classList.remove('fade-in')
				void a.offsetWidth // Forces reflow to restart animation
				a.classList.add('fade-in')

				a.src = d[o].src
				a.alt = d[o].alt
				if (l) l.textContent = d[o].alt
			},
			c = () => {
				o = (o + 1) % d.length
				s()
			},
			g = () => {
				o = (o - 1 + d.length) % d.length
				s()
			},
			y = (e) => {
				switch (e.key) {
					case 'ArrowRight':
						c()
						break
					case 'ArrowLeft':
						g()
						break
					case 'Escape':
						i()
				}
			}

		e.forEach((e, a) => {
			e.addEventListener('click', () => {
				o = a
				s()
				t.style.display = 'flex'
				document.addEventListener('keydown', y)
			})
		})

		t.addEventListener('click', i)
		n.addEventListener('click', (e) => {
			e.stopPropagation()
			g()
		})
		r.addEventListener('click', (e) => {
			e.stopPropagation()
			c()
		})

		// Cleanup event listeners when component unmounts
		onUnmounted(() => {
			t.removeEventListener('click', i)
			n.removeEventListener('click', g)
			r.removeEventListener('click', c)
			document.removeEventListener('keydown', y)
		})
	})
}
