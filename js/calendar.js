//calendar global variables-----------------------------------------------
var defDate = new Date();
var actualMonth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Oututro", "Novembro", "Dezembro"]
var today = defDate.getDate();
var month = defDate.getMonth();
var year = defDate.getFullYear();
var prev_month = document.querySelector("#prev_month")
var next_month = document.querySelector("#next_month")
const divDays = document.querySelector(".day-indice");
const elmonth = document.querySelector("#current_month")
const elyear = document.querySelector("#current_year")

//name of month
function nameOfMonth() {
   elmonth.innerText = actualMonth[month]
}

//Current Year
function setCurrentYear() {
   elyear.innerText = year
}

//Calendar Grid
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

// Arrows for month and year change
function monthArrows(){
   let stay_CMonth = month
   let stay_CYear = year

   prev_month.addEventListener("click", function () {

      if (stay_CMonth > 0) {
         stay_CMonth -= 1
         elmonth.innerText = actualMonth[stay_CMonth]
         console.log(stay_CMonth)
      } else {
         stay_CMonth = 11
         stay_CYear -= 1
         elmonth.innerText = actualMonth[stay_CMonth]
         elyear.innerText = stay_CYear
      }
})

   next_month.addEventListener("click", function () {

      if (stay_CMonth < 11) {
         stay_CMonth += 1
         elmonth.innerText = actualMonth[stay_CMonth]
         console.log(stay_CMonth)
      } else {
         stay_CMonth = 0
         stay_CYear += 1
         elmonth.innerText = actualMonth[stay_CMonth]
         elyear.innerText = stay_CYear
      }
})

}

// Functions Calls
window.onload = calendar()
window.onload = nameOfMonth()
window.onload = setCurrentYear()
window.onload = monthArrows()




