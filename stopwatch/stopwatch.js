

let timerInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function toggleTimer() {
  if (isRunning) {
   
    clearInterval(timerInterval);
    document.getElementById('start-stop').textContent = 'Start';
  } else {
    
    timerInterval = setInterval(updateTime, 10);
    document.getElementById('start-stop').textContent = 'Stop';
  }

  isRunning = !isRunning;
}

function updateTime() {
  milliseconds++;

  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);
  document.getElementById('milliseconds').textContent = formatTime(milliseconds);
}


function formatTime(time) {
  return time < 10 ? '0' + time : time;
}


function resetTimer() {
  clearInterval(timerInterval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  
  document.getElementById('minutes').textContent = '00';
  document.getElementById('seconds').textContent = '00';
  document.getElementById('milliseconds').textContent = '00';

  document.getElementById('start-stop').textContent = 'Start';
  isRunning = false;
}
