import './sass/main.scss';

const refs = {
    clockDays: document.querySelector('[data-days]'),
    clockHours: document.querySelector('[data-hours]'),
    clockMinutes: document.querySelector('[data-minutes]'),
    clockSeconds: document.querySelector('[data-seconds]'),
    dateInputField: document.querySelector('#date-selector'),
    startCountdownBtn: document.querySelector('[data-start]'),
};
// console.log(refs.clockDays.textContent);

// class CountdownTimer {
//     constructor(selector, targetDate) {
//         this.selector = selector;
//         this.targetDate = targetDate;
//     }
// }

// const myTimer = new CountdownTimer('#timer-1', 'Jul 17, 2019')
// console.log(myTimer.targetDate);
// // const myTimer = new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });



// const time = date - currentDate;
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// // console.log(myTimer);
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000)
const chosenDate = new Date(refs.dateInputField.value).getTime();
let timeInterval;


function getTime() {
    const date = new Date(refs.dateInputField.value).getTime();
    const currentDate = new Date().getTime();
    let time = date - currentDate;
    if (date === '' || date < currentDate) {
        alert('Please choose a date in the future')
        clearInterval(timeInterval);
        refs.startCountdownBtn.removeEventListener('click', interval)
        time = 0;
        
    }
 
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    
    return {
        time,
        days,
        hours,
        mins,
        secs
    }
}

function onClick() {
    let timeData = getTime();
    // console.log(timeData.time)
    // if (timeData.time === 0) {
    //     clearInterval(timeInterval);
    // }
    refs.clockDays.textContent = timeData.days+1;
    refs.clockHours.textContent =timeData.hours-3;
    refs.clockMinutes.textContent = timeData.mins;
    refs.clockSeconds.textContent = timeData.secs;

}

const interval = () => {
    timeInterval = setInterval(onClick, 1000);
}


if (refs.dateInputField.teXtContent !== undefined) {
    refs.startCountdownBtn.addEventListener('click', interval);
}
console.log(refs.dateInputField.teXtContent);