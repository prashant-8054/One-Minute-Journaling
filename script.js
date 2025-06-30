// const startBtn = document.getElementById("startBtn");
// const journalInput = document.getElementById("journalInput");
// const timerDisplay = document.getElementById("timer");

// let timer;

// function endTimer() {
//     const message = document.createElement("p");
//     message.textContent = "Time's up! Your journal entry has been saved.";
//     message.style.color = "green";
//     startBtn.parentNode.appendChild(message);
// }

// endTimer();

// startBtn.addEventListener("click", () => {
//     journalInput.disabled = false;
//     journalInput.value = "";
//     timerDisplay.textContent = 60;
//     journalInput.focus();
//     startBtn.disabled = true;

//     let seconds = 60;
//     timer = setInterval(() => {
//         seconds--;
//         timerDisplay.textContent = seconds;
//         if (seconds <= 0) {
//             clearInterval(timer);
//             journalInput.disabled = true;
//             startBtn.disabled = false;
//             submitEntry(journalInput.value);
//         }
//     }, 1000);
// });












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
        message.style.color = "green";
        startBtn.parentNode.appendChild(message);
    }
    message.textContent = "Time's up! Your journal entry has been saved.";
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