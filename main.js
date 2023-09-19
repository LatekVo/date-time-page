let dateHandler = document.getElementById('date-container');
let timeHandler = document.getElementById('time-container');
let clockHandlerHour = document.getElementById('clock-arm-hour');
let clockHandlerMinute = document.getElementById('clock-arm-minute');
let clockHandlerSecond = document.getElementById('clock-arm-second');
let clockIndicatorPath = document.getElementById('clock-indicator-path');

let dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}

setInterval(() => {
    let dateObject = new Date();
    dateHandler.innerHTML = dateObject.toLocaleDateString('pl-PL', dateOptions);
    timeHandler.innerHTML = `${dateObject.toLocaleTimeString('pl-PL')}`;

    let secondDeg = dateObject.getSeconds();
    let minuteDeg = dateObject.getMinutes() + (dateObject.getSeconds() / 60);
    let hourDeg = dateObject.getHours() + (dateObject.getMinutes() / 60);

    clockHandlerHour.style.rotate = `${hourDeg*30}deg`;
    clockHandlerMinute.style.rotate = `${minuteDeg*6}deg`;
    clockHandlerSecond.style.rotate = `${secondDeg*6}deg`;

}, 50);

// draw clock markings
for(let li = 0; li < 12; li++) {
    let ldeg = li * 30;
    let lindicator = document.createElement('div');
    lindicator.style.rotate = `${ldeg}deg`;
    lindicator.classList.add('large');
    clockIndicatorPath.appendChild(lindicator);
    for(let si = 0; si < 4; si++) {
        let sdeg = ldeg + (si + 1) * 6;
        let sindicator = document.createElement('div');
        sindicator.style.rotate = `${sdeg}deg`;
        sindicator.classList.add('small');
        clockIndicatorPath.appendChild(sindicator);
    }
}

//.{dateObject.getMilliseconds().toString()[0]}`;
// + (parseInt(dateObject.getMilliseconds().toString()[0]) / 10);