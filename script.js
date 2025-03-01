// Track the entered pin
let enteredPin = "";

// Add click handlers for keypad buttons
document.querySelectorAll(".key").forEach(button => {
    button.addEventListener("click", function() {
        if (enteredPin.length < 4) { // Limit to 4 digits for the pin
            enteredPin += this.getAttribute("data-value");
            updatePinDisplay();
        }
    });
});

// Clear button functionality
document.getElementById("clear-btn").addEventListener("click", function() {
    enteredPin = "";
    updatePinDisplay();
});

// Update the pin display
function updatePinDisplay() {
    const pinDisplay = document.getElementById("pin-display");
    pinDisplay.textContent = `Pin: ${"*".repeat(enteredPin.length)}`; // Show asterisks for security
}

// Check password function
function checkPassword() {
    if (enteredPin === "2024") {
        enteredPin = ""; // Reset pin after success
        updatePinDisplay();
        return true; // Allow navigation to main.html
    } else {
        alert("Oops! That's not our secret pin! Try again, my love! 💕");
        return false; // Prevent navigation
    }
}