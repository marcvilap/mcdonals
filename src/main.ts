/* REVEAL EFFECT
 ********************************************************************************/
const reveals = document.querySelectorAll('.reveal')
const revealsObserver = new IntersectionObserver(entries => {
	entries.forEach(({ isIntersecting, target }) => {
		target.classList.toggle('reveal', !isIntersecting)
		target.classList.toggle('revealed', isIntersecting)
	})
})
reveals.forEach(element => revealsObserver.observe(element))

// document.addEventListener('astro:after-swap', () => {})
