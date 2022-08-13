const day = document.querySelector('#day') as any;
const hour = document.querySelector('#hour') as any;
const minute = document.querySelector('#minute') as any;
const second = document.querySelector('#second') as any;

// update second per second
const updateSecond = (): void => {
    setInterval(() => {
        second.innerHTML = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
    },1000);
}
// update minute per minute
const updateMinute = (): void => {
    // when second is 0, update minute
    minute.innerHTML = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
    setInterval(() => {
        if (second.innerHTML === '00') {
            minute.innerHTML = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        }
    } ,1000);
}
const updateHour = (): void => {
    hour.innerHTML = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    setInterval(() => {
        if (minute.innerHTML === '00' && second.innerHTML === '00') {
            hour.innerHTML = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
        }
    },1000)
}
const updateDay = (): void => {
    day.innerHTML = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
    setInterval(() => {
        if (hour.innerHTML === '00' && minute.innerHTML === '00' && second.innerHTML === '00') {
            day.innerHTML = new Date().getDate() < 10 ? '0' + (new Date().getDate() - 1) : new Date().getDate() - 1;
        }
    },1000);
}
updateSecond();
updateMinute();
updateHour();
updateDay();