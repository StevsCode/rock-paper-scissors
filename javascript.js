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

console.log(getComputerChoice())