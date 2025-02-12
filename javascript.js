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
    // Make insensitive to upper or lower case
    let userChoice = prompt("Enter your choice here (rock, paper or scissors):").toLowerCase().trim();

    // Return one of the options based on the input
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Oops, invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
        // Ask question again
        return getHumanChoice();
    }
}

function playGame() {
    // Make the game repeatable
    while(true) {
        // Declare the players score variables
        let humanScore = 0
        let computerScore = 0

        function playRound(humanChoice, computerChoice) {
            // Determine winner
            if (humanChoice === computerChoice) {
                console.log("It's a tie! Both chose " + humanChoice + ".")
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
                humanScore++; // Increase human score
            } else {
                console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
                computerScore++; // Increase computer score
            }
        }

        // Play 5 rounds
        for (let i = 0; i < 5; i++) {
            console.log(`Round ${i + 1}:`);
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();

            // Play the round
            playRound(humanChoice, computerChoice);
            console.log("Current scores: human " + humanScore + ", computer " + computerScore + ".")
        }

        // After 5 rounds, declare the winner based on total scores
        console.log("Game over!");
        if (humanScore > computerScore) {
            console.log("Congratulations! You win the game!");
        } else if (humanScore < computerScore) {
            console.log("Sorry! The computer wins the game.")
        } else {
            console.log("It's a tie! Both scored " + humanScore + " points.")
        }
    }
}

//Start the game
playGame()