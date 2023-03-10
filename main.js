//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon= document.querySelectorAll(".icons i");


// getting new date, current year,month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January",'February','March',"April","May","June","July","August","September","October","November","December"]

const renderCalender = () => {
  let firstDayofMonth = new Date(currYear,currMonth, 0).getDay(), // getting first day of month
  lastDateofMonth = new Date(currYear,currMonth + 1, 0).getDate(), // getting last date of month
  lastDayofMonth = new Date(currYear,currMonth, lastDateofMonth).getDay(), // getting last day of month
   lastDateofLastMonth = new Date(currYear,currMonth, 0).getDate(); // getting last date of the prev month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {  // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1
}</li>`
}

for (let i = 1; i <= lastDateofMonth; i++) {
// creating li of all days of current month
    let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active": "";
liTag += `<li class=${isToday
}>${i
}</li>`;
}

for (var i = lastDayofMonth; i < 6; i++) {
// creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1
}</li>`
}

currentDate.innerText = `${
months[currMonth]
} ${currYear
}`;

daysTag.innerHTML = liTag;
}

renderCalender();

prevNextIcon.forEach((icons) => {
icons.addEventListener("click",() => {
    currMonth = icons.id === "prev" ? currMonth - 1: currMonth + 1;
if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear,currMonth);
    currYear = date.getFullYear();
    currMonth = date.getMonth();
}

else {
date = new Date()
}

renderCalender();
})
});
