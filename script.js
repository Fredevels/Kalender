const date = new Date();

date.setDate(1);

console.log(date.getDay());

const monthDays = document.querySelector(".days")

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//console.log(lastDay);

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
//console.log(prevLastDay)

const firstDayIndex = date.getDate()

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0). getDate();
//console.log(lastDayIndex);

const nextDays = 7 - lastDayIndex - 1;
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "september",
    "October",
    "November",
    "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    console.log(date.getMonth());
    
    document.querySelector(".date p").innerHTML = date.toDateString(); 
    console.log(date.getDate());

    let days = "";

    for(let x = firstDayIndex; x > 0; x--){
         days += `<div class="prev-date">${prevLastDay - x + 1}</div> `;
        
    }

    for(let i = 1; i <= lastDay; i ++) {
        if( i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
       
        monthDays.innerHTML = days;
    }

    for(let j = 1; j <= nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }