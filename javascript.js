function getComputerChoice() {
    // Generate random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3)

    // Return one of the options based on the random number
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // Ask user to type his choice in the prompt
    const userChoice = prompt("Enter your choice here (rock, paper or scissors):")

    // Return one of the options based on the input
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Oops, invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
        // Ask question again
        return getHumanChoice();
    }
}

// Declare the players score variables
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    // Make insensitive to upper or lower case
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Determine winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice + ".")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + " beats " + computerChoice + ".");
        humanScore++; // Increase human score
    } else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + " beats " + humanChoice + ".");
        computerScore++; // Increase computer score
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);