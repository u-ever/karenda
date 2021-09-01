//dark-mode-----------------------------------------------
const html = document.querySelector('html')
const btntheme = document.querySelector('#switch-dark')
const btntheme = document.querySelector('#switch-light')

btntheme.addEventListener('click', function() {
	html.classList.toggle('dark-mode')
	localStorage.setItem("theme", "dark-mode")
	
})


let theme = localStorage.getItem("theme")
html.classList.toggle(theme)
console.log(theme)


// necessário salvar no Local Storage 
/*
if (typeof(Storage) !== "undefined") {
	localStorage.setItem("lightmode", 0)
}
*/

// 	checkbox.innerHTML = '<input type="checkbox" id="switch"> Light Mode'