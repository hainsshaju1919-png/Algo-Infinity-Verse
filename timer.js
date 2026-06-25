// Focus Mode Study Timer

/**
 * Updates the timer display element with the current formatted time.
 * Depends on timerDisplay DOM element and global timeLeft variable.
 */
function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer-display');
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
                timeLeft = 25 * 60; // Reset time after completion
                updateTimerDisplay();
                alert("Session complete! Great work.");
            }
        }, 1000);
    }
});

// ... (Keep your existing pause/reset logic below this)