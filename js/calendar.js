//calendar-----------------------------------------------
var defDate = new Date();
var today = defDate.getDate();
var month = defDate.getMonth();
var year = defDate.getFullYear();
const divDays = document.querySelector(".day-indice");
const elmonth = document.querySelector("#current_month")
const elyear = document.querySelector("#current_year")

function nameOfMonth(){
   let actualMonth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Oututro", "Novembro", "Dezembro"]
   elmonth.innerText = actualMonth[month]
}

function setCurrentYear() {
   elyear.innerText = year
}

function calendar() {

   for (var day = 1; day <= 35; day++) {
      if (day <= 31) {
         divDays.innerHTML += ` <div id="day${day}"><time datetime="2021-08-${day}">${day}</time></div> `
      } else {
         divDays.innerHTML += ` <div style = "background-color: gray; color: white"><time datetime="2021-08-${day - 31}">${day - 31}</time></div> `
      }
   }
   var dtoday = document.getElementById("day" + today)
   dtoday.style.backgroundColor = "cornflowerblue"
   dtoday.style.color = "white"
}

window.onload = calendar()
window.onload = nameOfMonth()
window.onload = setCurrentYear()
