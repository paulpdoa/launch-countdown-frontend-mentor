"use strict";
const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
// update second per second
const updateSecond = () => {
    setInterval(() => {
        second.innerHTML = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
    }, 1000);
};
// update minute per minute
const updateMinute = () => {
    // when second is 0, update minute
    minute.innerHTML = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
    setInterval(() => {
        if (second.innerHTML === '00') {
            minute.innerHTML = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        }
    }, 1000);
};
const updateHour = () => {
    hour.innerHTML = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    setInterval(() => {
        if (minute.innerHTML === '00' && second.innerHTML === '00') {
            hour.innerHTML = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
        }
    }, 1000);
};
const updateDay = () => {
    day.innerHTML = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
    setInterval(() => {
        if (hour.innerHTML === '00' && minute.innerHTML === '00' && second.innerHTML === '00') {
            day.innerHTML = new Date().getDate() < 10 ? '0' + (new Date().getDate() - 1) : new Date().getDate() - 1;
        }
    }, 1000);
};
updateSecond();
updateMinute();
updateHour();
updateDay();
