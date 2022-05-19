const mainPage = document.body
const nav = document.querySelector('.nav')
const btnMenu = document.querySelector('.nav__btn')
const navItems = document.querySelectorAll('.nav__item a')
const footerYear = document.querySelector('.footer__year')
const keyUp = document.querySelector('.key-up')

const handleKeyUp = () => {
	keyUp.classList.toggle('key-up-visible', window.scrollY > 80)
}
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
window.addEventListener('scroll', handleKeyUp)
keyUp.addEventListener('click', scrollToTop)

const toogleMenu = () => {
	nav.classList.toggle('menu-active')
	mainPage.classList.toggle('no-touch')

	navItems.forEach(item => {
		item.addEventListener('click', toogleMenu)
	})
}

btnMenu.addEventListener('click', toogleMenu)

function currentYear() {
	footerYear.textContent = new Date().getFullYear()
}
currentYear()

// function darkmode(){
// 	const body = document.body
// 	const wasDarkmode = localStorage.getItem('darkmode') === 'true'

// 	localStorage.setItem('darkmode', !wasDarkmode)
// 	body.classList.toggle('dark-mode', !wasDarkmode)
// }

// document.querySelector('.btn').addEventListener('click', darkmode)

// function onload() {
// 	document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
// }
// document.addEventListener('DOMContentLoaded', onload)
