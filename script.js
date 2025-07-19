document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const journalInput = document.getElementById("journalInput");
    const timerDisplay = document.getElementById("timer");
    const fontSelect = document.getElementById("fontSelect");
    const toggle = document.getElementById("theme-toggle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Initialize theme
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    toggle.checked = theme === 'dark';

    // Toggle listener
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const DURATION = 60;
    let timer;

    function endTimer() {
        let message = document.getElementById("endMessage");
        if (!message) {
            message = document.createElement("p");
            message.id = "endMessage";
            message.style.color = "orange";
            startBtn.parentNode.appendChild(message);
        } else {
            message.style.display = "block";
        }
        message.textContent = "Time's up! Your journal entry has been saved.";
    }

    function submitEntry(entry) {
        console.log(`Entry submitted: ${entry}`);
        endTimer();
        // Save entry logic can go here
    }

    fontSelect.addEventListener("change", () => {
        journalInput.style.fontFamily = fontSelect.value;
    });

    startBtn.addEventListener("click", () => {
        const endMessage = document.getElementById("endMessage");
        if (endMessage) {
            endMessage.style.display = "none";
        }

        if (timer) clearInterval(timer); // Safety check

        journalInput.style.fontFamily = fontSelect.value;
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
});









// Add features: choose fonts before the timer starts, save journals, AI-generated summary, count the number of words of each entry, provide lined-background that feels like writing on paper, etc.
// Bugs: the final message remains even after restarting the timer or refreshing the page.