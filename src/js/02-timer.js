import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const choosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, dateStr) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      convertMs(selectedDates[0]);
      // console.log();
      choosenDate = Date.now(convertMs(selectedDates[0]));
      startButton.disabled = false;
    }
  },
};
const startButton = document.querySelector('[data-start]');
const inputPicker = document.querySelector('#datetime-picker');
const refs = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
flatpickr(inputPicker, options);

startButton.disabled = true;

startButton.addEventListener('click', onButtonClick);
const DELAY = 1000;
// // const choosenDate = convertMs(onClose(selectedDates[0]));
// console.log(choosenDate);

function onButtonClick() {
  const startDate = options.defaultDate;

  setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startDate - currentTime;
    const time = convertMs(deltaTime);
    // const { days, hours, minutes, seconds } = convertMs(вібранное время - текущее время);
  }, DELAY);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// function updateTimerOnScreen({ days, hours, minutes, seconds }) {
//   refs.daysEl.textContent = `${days}`;
//   refs.hoursEl.textContent = `${hours}`;
//   refs.minutesEl.textContent = `${minutes}`;
//   refs.secondsEl.textContent = `${seconds}`;
// }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
