document.addEventListener('DOMContentLoaded', () => {
  const pomodoroTimeElement = document.getElementById('pomodoro-time');
  const startButton = document.getElementById('start');
  const resetButton = document.getElementById('reset');

  let timeLeft = 25 * 60; 
  let timerId = null;
  let isRunning = false;

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    pomodoroTimeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      startButton.textContent = 'stop';
      timerId = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
          clearInterval(timerId);
          resetTimer();
        }
      }, 1000); 
    } else {
      stopTimer();
    }
  }

  function stopTimer() {
    isRunning = false;
    startButton.textContent = 'start';
    clearInterval(timerId);
  }

  function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateTimer();
  }

  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);

  updateTimer();
});
