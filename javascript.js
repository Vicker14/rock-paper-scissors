function getComputerChoice() {
    const indexValue = Math.floor(Math.random() * 3);
    if (indexValue === 0)
        return "rock";
    else if (indexValue === 1)
        return "paper";
    else if (indexValue === 2)
        return "scissors";
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, scissors): ");

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;

    } else {
        // This is a recursive call to getHumanChoice if the input is invalid
        // It will keep asking for input until a valid choice is made

        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(){
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();


}