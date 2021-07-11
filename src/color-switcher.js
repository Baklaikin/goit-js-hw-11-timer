import './sass/main.scss';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

const colorsLength = colors.length - 1;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
let previousIndex = null;

function onStartBtnClick() {
    refs.startBtn.removeEventListener('click', onStartBtnClick);
    timerId = setInterval(() => {
        const nextIndex = randomIntegerFromInterval(0, colorsLength);
        let backgroundColor;
        if (nextIndex === previousIndex && nextIndex < 5) {
            backgroundColor = colors[`${nextIndex + 1}`];
            refs.body.style.backgroundColor = backgroundColor;
            previousIndex = nextIndex + 1;
        } else if (nextIndex === previousIndex && nextIndex === 5) {
            backgroundColor = colors[`${nextIndex - 1}`];
            refs.body.style.backgroundColor = backgroundColor;
            previousIndex = nextIndex - 1;
        } else {
            backgroundColor = colors[`${nextIndex}`];
            refs.body.style.backgroundColor = backgroundColor;
            previousIndex = nextIndex;
        }

    }, 1000);
}
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startBtn.addEventListener('click', onStartBtnClick)
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}