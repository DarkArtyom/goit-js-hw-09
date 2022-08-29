import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const DELAY = 1000;

const startButton = document.querySelector('[data-start]');
const inputPicker = document.querySelector('#datetime-picker');

startButton.disabled = true;
startButton.style.borderRadius = '50px';
startButton.style.backgroundColor = 'yellow';
startButton.style.color = 'black';
startButton.style.width = '50px';
startButton.style.height = '50px';
startButton.style.marginLeft = '20px';

const refs = {
  timerDivEl: document.querySelector('.timer'),
  fieldDivEl: document.querySelectorAll('.timer > div'),
  timerValue: document.querySelectorAll('.value'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
refs.timerDivEl.style.display = 'flex';
refs.timerDivEl.style.width = '100px';
refs.fieldDivEl.forEach(element => {
  element.style.marginRight = '15px';
});
refs.timerValue.forEach(element => {
  element.style.display = 'block';
  element.style.fontSize = '38px';
  element.style.textAlign = 'center';
  element.style.color = 'blue';
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  isActive: false,
  intervalId: null,
  onClose(selectedDates, dateStr) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please, choose a future date');
      startButton.style.backgroundColor = 'yellow';
      startButton.disabled = true;
    } else {
      startButton.style.backgroundColor = 'green';
      Notiflix.Notify.success('Welcome to timer');
      startButton.disabled = false;
      const choosenDate = selectedDates[0];

      startButton.addEventListener('click', () => {
        if (this.isActive) {
          return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = choosenDate - currentTime;
          const time = convertMs(deltaTime);
          if (deltaTime < 0) {
            clearInterval(this.intervalId);
            this.isActive = false;
            return;
          }
          console.log(time);
          updateTimerOnScreen(time);
        }, DELAY);
      });
    }
  },
};

flatpickr(inputPicker, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerOnScreen({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}

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
