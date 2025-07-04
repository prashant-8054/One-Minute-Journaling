const startBtn = document.getElementById("startBtn");
const journalInput = document.getElementById("journalInput");
const timerDisplay = document.getElementById("timer");

const DURATION = 60;
let timer;

function endTimer() {
    let message = document.getElementById("endMessage");
    if (!message) {
        message = document.createElement("p");
        message.id = "endMessage";
        message.style.color = "orange";
        startBtn.parentNode.appendChild(message);
    }
    message.textContent = "Time's up! Your journal entry has been saved.";
}

const oldMessage = document.getElementById("endMessage");
if (oldMessage) {
    oldMessage.style.display = "none";
}

function submitEntry(entry) {
    console.log("Entry submitted:", entry);
    endTimer();
    // Save entry logic can go here
}

startBtn.addEventListener("click", () => {
    journalInput.disabled = false;
    journalInput.value = "";
    journalInput.focus();
    startBtn.disabled = true;
    timerDisplay.textContent = DURATION;

    let seconds = DURATION;
    timer = setInterval(() => {
        seconds--;
        timerDisplay.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            journalInput.disabled = true;
            startBtn.disabled = false;
            submitEntry(journalInput.value);
        }
    }, 1000);
});





// Add features: choose fonts before the timer starts, save journals, AI-generated summary, count the number of words of each entry, provide lined-background that feels like writing on paper, etc.
// Bugs: the final message remains even after restarting the timer or refreshing the page.