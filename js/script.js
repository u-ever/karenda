const days = document.querySelector(".day-indice");

for (let day = 1; day <= 35; day++) {
   if (day <= 31) {
    days.innerHTML += `<button><time datetime="2021-08-${day}">${day}</time></button> `
   } else {
    days.innerHTML += `<button style = "background-color: gray; color: white"><time datetime="2021-08-${day - 31}">${day - 31}</time></button> `
   }
   

}