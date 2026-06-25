// Focus Mode Study Timer
let focusTimer;
let timeLeft = 25 * 60; // 25 minutes
const timerDisplay = document.getElementById('timer-display');

function updateTimerDisplay() {
    if (!timerDisplay) return;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start-btn')?.addEventListener('click', () => {
    if (!focusTimer) {
        focusTimer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(focusTimer);
                focusTimer = null;
                alert("Session complete! Great work.");
            }
        }, 1000);
    }
});

document.getElementById('pause-btn')?.addEventListener('click', () => {
    clearInterval(focusTimer);
    focusTimer = null;
});

document.getElementById('reset-btn')?.addEventListener('click', () => {
    clearInterval(focusTimer);
    focusTimer = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
});