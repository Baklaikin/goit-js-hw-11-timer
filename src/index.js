
import './sass/main.scss';
import Swal from 'sweetalert2';
import "./color-switcher";
import './promises';


const refs = {
    clockDays: document.querySelector('[data-days]'),
    clockHours: document.querySelector('[data-hours]'),
    clockMinutes: document.querySelector('[data-minutes]'),
    clockSeconds: document.querySelector('[data-seconds]'),
    dateInputField: document.querySelector('#date-selector'),
    startCountdownBtn: document.querySelector('[data-start]'),
};

refs.startCountdownBtn.setAttribute('disabled', true)
refs.dateInputField.addEventListener('change', () => {
    if (new Date(refs.dateInputField.value).getTime() > new Date().getTime()) {
        refs.startCountdownBtn.removeAttribute('disabled', true)
    } else {
        Swal.fire('Please choose a date in the future');
    }
})

let timeInterval;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    const beautifiedDays = days.toString().padStart(2, '0')
    const beautifiedHours = hours.toString().padStart(2, '0')
    const beautifiedMins = minutes.toString().padStart(2, '0')
    const beautifiedSecs = seconds.toString().padStart(2, '0')

  return { beautifiedDays, beautifiedHours, beautifiedMins, beautifiedSecs };
}
    
function onClick() {
   
    const date = new Date(refs.dateInputField.value).getTime();
    const currentDate = new Date().getTime();
    let ms = date - currentDate;
    let timeData = convertMs(ms);

    if (date < currentDate) {
        Swal.fire('Please choose a date in the future');
        clearInterval(timeInterval);
    }
    else if (date !== date) {
        Swal.fire(`Its comming`);
        clearInterval(timeInterval);
    }

    refs.clockDays.textContent = timeData.beautifiedDays;
    refs.clockHours.textContent =timeData.beautifiedHours;
    refs.clockMinutes.textContent = timeData.beautifiedMins;
    refs.clockSeconds.textContent = timeData.beautifiedSecs;
}

const interval = () => {
    timeInterval = setInterval(onClick, 1000);
}
refs.startCountdownBtn.addEventListener('click', interval);
