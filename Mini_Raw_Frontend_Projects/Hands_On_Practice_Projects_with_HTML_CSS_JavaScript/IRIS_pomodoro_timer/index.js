const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  console.log("Stop timer clicked");
  clearInterval(interval);
  interval = null; // Ensure interval is reset
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
  interval = null; // Ensure interval is reset
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
