//dark-mode-----------------------------------------------
const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')

checkbox.addEventListener('click', function() {
	html.classList.toggle('dark-mode')
})



// necessário salvar no Local Storage 
/*
if (typeof(Storage) !== "undefined") {
	localStorage.setItem("lightmode", 0)
}
*/

// 	checkbox.innerHTML = '<input type="checkbox" id="switch"> Light Mode'