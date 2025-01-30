let timer;
let elapsedTime = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            elapsedTime++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    updateDisplay();
}

function updateDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;
    document.getElementById('display').innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
