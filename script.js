let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerDisplay = document.getElementById('timer-display');

function startTimer() {
  timer = setInterval(function() {
    milliseconds++;
    if (milliseconds === 10) {
      seconds++;
      milliseconds = 0;
    }

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    timerDisplay.innerText = formatTime(minutes, seconds, milliseconds);
  }, 100);
}

function formatTime(minutes, seconds, milliseconds) {
  return (
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds) +
    ':' +
    (milliseconds < 10 ? '0' + milliseconds : milliseconds)
  );
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timerDisplay.textContent = '00:00:00';
}


