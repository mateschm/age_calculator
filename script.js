const date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

let yearsPassed = document.querySelector(`.years`);
let monthsPassed = document.querySelector(`.months`);
let daysPassed = document.querySelector(`.days`);;

let birthDay;
let birthMonth;
let birthYear;

let previousMonth = currentMonth - 1;
let previousYear = currentYear - 1;


const button = document.querySelector(`img`);

button.addEventListener(`click`, calcAge);

function calcAge() {
    birthDay = Number(document.getElementById(`day`).value);
    birthMonth = Number(document.getElementById(`month`).value);
    birthYear = Number(document.getElementById(`year`).value);
    console.log(birthYear);
    if ((birthYear > currentYear) || 
        (birthYear === currentYear && birthMonth > currentMonth) ||
        (birthYear === currentYear && birthMonth === currentMonth && birthDay > currentDay) ||
        (isLeapYear(birthYear) === true && birthMonth === 2 && birthDay > 29) ||
        (isLeapYear(birthYear) === false && birthMonth === 2 && birthDay > 28) ||
        (birthDay <= 0 || birthMonth <= 0 || birthYear <= 0) ||
        (birthMonth > 12) ||
        (birthMonth != 2 && birthDay > getDaysInMonth(birthMonth))) {
            alert(`Enter valid date!`);
            return;
    } else if (birthYear === currentYear && birthMonth === currentMonth) {
        yearsPassed.textContent = 0;
        monthsPassed.textContent = 0;
        daysPassed.textContent = currentDay - birthDay;
    } else if (birthYear === currentYear) {
        yearsPassed.textContent = 0;
        if (birthDay > currentDay) {
            monthsPassed.textContent = currentMonth - birthMonth - 1;
            if ((previousMonth) === 2 && isLeapYear(currentYear) === true) {
                daysPassed.textContent = 29 - birthDay + currentDay
            } else {
                daysPassed.textContent = getDaysInMonth(previousMonth) - birthDay + currentDay
            }
        } else {
            monthsPassed.textContent = currentMonth - birthMonth;
            daysPassed.textContent = currentDay - birthDay;
        }
    } else {
        if (birthMonth >= currentMonth) {
            yearsPassed.textContent = currentYear - birthYear - 1;
            if (birthDay > currentDay) {
                monthsPassed.textContent = (12 - birthMonth + currentMonth) - 1;
                if ((previousMonth) === 2 && isLeapYear(currentYear) === true) {
                    daysPassed.textContent = 29 - birthDay + currentDay
                } else {
                    daysPassed.textContent = getDaysInMonth(previousMonth) - birthDay + currentDay
                }
            } else {
                monthsPassed.textContent = (12 - birthMonth + currentMonth);
                daysPassed.textContent = currentDay - birthDay;
            }
        } else {
            yearsPassed.textContent = currentYear - birthYear;
            if (birthDay > currentDay) {
                monthsPassed.textContent = currentMonth - birthMonth - 1;
                if ((previousMonth) === 2 && isLeapYear(currentYear) === true) {
                    daysPassed.textContent = 29 - birthDay + currentDay
                } else {
                    daysPassed.textContent = getDaysInMonth(previousMonth) - birthDay + currentDay
                }
            } else {
                monthsPassed.textContent = currentMonth - birthMonth;
                daysPassed.textContent = currentDay - birthDay;
            }
        }
    }
    

}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getDaysInMonth(x) {
    return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x);
}
