// Count up timer since April 22, 2024 (relationship start)
const startDate = new Date("2024-04-22T00:00:00"); // Start of relationship
const mainTimerCircles = document.querySelectorAll('.timer-circle');

// Function to calculate time elapsed
function updateMainTimer() {
    const now = new Date();
    const timeElapsed = now - startDate;

    if (timeElapsed <= 0) {
        mainTimerCircles.forEach(circle => circle.textContent = "0");
        return;
    }

    const totalSeconds = Math.floor(timeElapsed / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    // Update each main timer circle
    mainTimerCircles[0].textContent = String(days).padStart(2, '0'); // Days
    mainTimerCircles[1].textContent = String(hours).padStart(2, '0'); // Hours
    mainTimerCircles[2].textContent = String(minutes).padStart(2, '0'); // Minutes
    mainTimerCircles[3].textContent = String(seconds).padStart(2, '0'); // Seconds
}

// Countdown timer for cute countdown (April 13, 2025)
const cuteTargetDate = new Date("2025-04-13T00:00:00"); // Future meeting date
const cuteTimerCircles = document.querySelectorAll('.cute-timer-circle');

function updateCuteTimer() {
    const now = new Date();
    const timeLeft = cuteTargetDate - now;

    if (timeLeft <= 0) {
        cuteTimerCircles.forEach(circle => circle.textContent = "0");
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update each cute timer circle
    cuteTimerCircles[0].textContent = String(days).padStart(2, '0'); // Days
    cuteTimerCircles[1].textContent = String(hours).padStart(2, '0'); // Hours
    cuteTimerCircles[2].textContent = String(minutes).padStart(2, '0'); // Minutes
    cuteTimerCircles[3].textContent = String(seconds).padStart(2, '0'); // Seconds
}

updateMainTimer();
updateCuteTimer();
setInterval(updateMainTimer, 1000);
setInterval(updateCuteTimer, 1000);