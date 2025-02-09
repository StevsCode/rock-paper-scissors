function getComputerChoice() {
    // Generate random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3)

    // Return one of the options based on the random number
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
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
