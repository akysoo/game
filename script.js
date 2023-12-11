// Select all cells on the game board
const cells = document.querySelectorAll(".cell");

// Initialize game state variables
let currentPlayer = "X";
let gameIsOver = false;

// Function to handle a cell click event
function handleClick(event) {
    if (gameIsOver) return;

    const cell = event.target;

    // Check if the cell is already occupied
    if (cell.textContent !== "") return;

    // Update cell content with the current player's symbol
    cell.textContent = currentPlayer;

    // Switch players for the next move
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    // Check for a win or a draw
    if (checkWin(currentPlayer)) {
        endGame(`${currentPlayer} wins!`);
    } else if (checkDraw()) {
        endGame("It's a draw!");
    }
}

// Function to check if a player has won
function checkWin(player) {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Check each winning condition to see if the player has all three cells
    return winningConditions.some((condition) => {
        return (
            cells[condition[0]].textContent === player &&
            cells[condition[1]].textContent === player &&
            cells[condition[2]].textContent === player
        );
    });
}

// Function to check if the game is a draw
function checkDraw() {
    return Array.from(cells).every((cell) => cell.textContent !== "");
}

// Function to end the game and display a message
function endGame(message) {
    gameIsOver = true;
    alert(message);
}

// Add click event listeners to all cells
cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
});
