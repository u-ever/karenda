//calendar-----------------------------------------------

function calendar() {
    const days = document.querySelector(".day-indice");
 
    for (let day = 1; day <= 35; day++) {
       if (day <= 31) {
        days.innerHTML += ` <div onclick="prompt('Digite o título do evento')"><time datetime="2021-08-${day}">${day}</time></div> `
       } else {
        days.innerHTML += `<div style = "background-color: gray; color: white"><time datetime="2021-08-${day - 31}">${day - 31}</time></div> `
       }
    }
 }
 
 window.onload = calendar()