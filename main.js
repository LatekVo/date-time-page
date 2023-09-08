let dateHandler = document.getElementById('date-container');
let timeHandler = document.getElementById('time-container');
let clockHandler = document.getElementById('clock-container');
let clockHandlerHour = document.getElementById('clock-arm-hour');
let clockHandlerMinute = document.getElementById('clock-arm-minute');
let clockHandlerSecond = document.getElementById('clock-arm-second');

let dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}

setInterval(() => {
    let dateObject = new Date();
    dateHandler.innerHTML = dateObject.toLocaleDateString('pl-PL', dateOptions);
    timeHandler.innerHTML = `${dateObject.toLocaleTimeString('pl-PL')}.${dateObject.getMilliseconds().toString()[0]}`;

    let secondDeg = dateObject.getSeconds();
    let minuteDeg = dateObject.getMinutes() + (dateObject.getSeconds() / 60);
    let hourDeg = dateObject.getHours() + (dateObject.getMinutes() / 60);

    clockHandlerHour.style.rotate = `${hourDeg*30}deg`;
    clockHandlerMinute.style.rotate = `${minuteDeg*6}deg`
    clockHandlerSecond.style.rotate = `${secondDeg*6}deg`

}, 100);