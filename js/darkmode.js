//dark-mode-----------------------------------------------
const html = document.querySelector('html')
const btntheme = document.querySelector('#switch-dark')

btntheme.addEventListener('click', function () {
	if (theme == "dark-mode") {
		html.classList.toggle(theme)
		localStorage.removeItem("theme")
	} else {
		html.classList.toggle('dark-mode')
		localStorage.setItem("theme", "dark-mode")
	}
})


let theme = localStorage.getItem("theme")
if (theme == "dark-mode") {
	html.classList.toggle(theme)
} 
