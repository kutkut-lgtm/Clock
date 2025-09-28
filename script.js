function unpdateClock(){


const today = new Date()

let hours = today.getHours();

    const meridiem = hours >= 12 ? "PM" : "AM"

    hours = hours %24 || 24; 

    hours = hours .toString().padStart(2,"0");

    const minutes = today.getMinutes();toString().padStart(2,"0");

    const seconds = today.getSeconds();toString().padStart(2,"0");

    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;




    const daysOfWeek = ["Sunday","Monday" ,"Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const dayName = daysOfWeek[today.getDay()];

    const day = today.getDate().toString().padStart(2,"0");

    const month = ( today.getMonth () +1).toString().padStart(2,"0");

    const year = today.getFullYear();

    const dateString = `${day}/${month}/${year} ${dayName}`;

    
    document.getElementById("clock").textContent =`${timestring} - ${dateString}`;





   
}

unpdateClock();
setInterval(unpdateClock, 1000);