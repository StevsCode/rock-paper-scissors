let roundCounter = 0; // Track rounds
let maxRounds = 5; // Maximum number of rounds
let humanChoice = "";

// Declare the players' score variables
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
}

// Function to handle the game logic (for button clicks)
function playGame() {
    document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
    document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
    document.getElementById("scissors").addEventListener("click", () => handleChoice("scissors"));
}

// Handle the player's choice and play the round
function handleChoice(choice) {
    if (humanScore < 5 && computerScore < 5) { // Play only if the game is not over
        roundCounter++;
        humanChoice = choice;
        document.getElementById("results").textContent = `Round ${roundCounter}: You chose ${humanChoice}.`;
        playRound(humanChoice, getComputerChoice());
    } else {
        document.getElementById("results").textContent += " Game over!";
    }
}

// Function to play a round and determine the winner
function playRound(humanChoice, computerChoice) {
    let resultMessage;

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++; // Increase human score
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++; // Increase computer score
    }

    // Update results with the current round and score
    document.getElementById("results").textContent = resultMessage;
    updateScores();
}

// Function to update the score display and check for winner
function updateScores() {
    document.getElementById("score").textContent = `Current score: You ${humanScore} - Computer ${computerScore}`;

    // Check if the game is over
    if (humanScore >= 5) {
        document.getElementById("results").textContent = "Congratulations! You win the game!";
        disableButtons(); // Disable the buttons once the game is over
    } else if (computerScore >= 5) {
        document.getElementById("results").textContent = "Sorry! The computer wins the game.";
        disableButtons(); // Disable the buttons once the game is over
    }
}

// Function to disable the buttons after the game ends
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Start the game
playGame();
