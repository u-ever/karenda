//dark-mode-----------------------------------------------
const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')

checkbox.addEventListener('click', function() {
	html.classList.toggle('dark-mode')
})

// necessário salvar no Local Storage 
// 	checkbox.innerHTML = '<input type="checkbox" id="switch"> Light Mode'