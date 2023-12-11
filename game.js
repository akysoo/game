const minNumber = 1;
const maxNumber = 100;
let attempts = 5; // Number of attempts

// Generate a random number between minNumber and maxNumber
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');

submitGuess.addEventListener('click', function() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        setMessage(`Please enter a number between ${minNumber} and ${maxNumber}.`, 'red');
        return;
    }

    attempts--;

    if (guess === randomNumber) {
        gameOver(true);
    } else if (attempts === 0) {
        gameOver(false);
    } else {
        setMessage(`Wrong guess. ${attempts} attempt(s) left.`, 'blue');
    }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won) {
    const color = won ? 'green' : 'red';
    const msg = won ? 'Congratulations! You guessed the correct number!' : `Game over. The number was ${randomNumber}.`;
    
    setMessage(msg, color);
    guessInput.disabled = true;
    submitGuess.disabled = true;
}
