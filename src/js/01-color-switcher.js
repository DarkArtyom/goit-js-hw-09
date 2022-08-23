function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let changeBG = null;

function onChangeBG() {
  body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  changeBG = setInterval(() => {
    onChangeBG();
  }, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(changeBG);
  startButton.disabled = false;
});
