let timeDisplay = document.querySelector(".time-display");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let time = null; // time saves and then added to html element
let timer; // set interval function
let isStarted = false;
startBtn.addEventListener("click", () => {
  if (!isStarted) {
    // console.log(isStarted);
    timer = setInterval(displayTime, 10);
    isStarted = true;
  }
});

stopBtn.addEventListener("click", () => {
  if (isStarted) {
    clearInterval(timer);
    isStarted = false;
  }
});

resetBtn.addEventListener("click", () => {
  minutes = seconds = milliseconds = 0;
  // displayTime()
  clearInterval(timer);
  timeDisplay.innerHTML = `00 : 00 : 00`;
  isStarted = false;
});
function displayTime() {
  if (milliseconds >= 59) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 59) {
      seconds = 0;
      minutes++;
    }
  }
  milliseconds++;
  time = `${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  } : ${milliseconds < 10 ? `0${milliseconds}` : milliseconds}`;
  timeDisplay.innerHTML = time;
}
