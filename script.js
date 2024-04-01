const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervalId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
};

const updateTimer = () => {
    timer += 1;
    timerEl.textContent = formatTime(timer);
};

const startTimer = () => {
    intervalId = setInterval(updateTimer, 10);
};

const stopTimer = () => {
    clearInterval(intervalId);
};

const resetTimer = () => {
    stopTimer();
    timer = 0;
    timerEl.textContent = formatTime(timer);
    marks = [];
    marksList.innerHTML = '';
};


document.getElementById('power').addEventListener('click', () => {
    const action = document.getElementById('power').getAttribute('action');
    if (action === 'start') {
        startTimer();
        document.getElementById('power').setAttribute('action', 'stop');
        document.getElementById('power').innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        stopTimer();
        document.getElementById('power').setAttribute('action', 'start');
        document.getElementById('power').innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

document.getElementById('reset').addEventListener('click', resetTimer);
