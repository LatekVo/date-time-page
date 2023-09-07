let dateHandler = document.getElementById('date-container');
let timeHandler = document.getElementById('time-container');
let clockHandler = document.getElementById('clock-container');

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
    console.log('update');
}, 100);