function getComputerChoice() {
    const indexValue = Math.floor(Math.random() * 3);
    if (indexValue === 0)
        return "rock";
    else if (indexValue === 1)
        return "paper";
    else if (indexValue === 2)
        return "scissors";
}
let humanScore = 0;
let computerScore = 0;

const gameInformation = document.querySelector("#ressult");

const scoreBoard = document.createElement("div");
gameInformation.appendChild(scoreBoard);

const result = document.createElement("div")
gameInformation.appendChild(result);

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
    scoreBoard.textContent =  `Current score: Player = ${humanScore} - Computer = ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5){
        if (humanScore > computerScore) {
            alert("Congratulations! You are the overall winner!");
        } else if (humanScore < computerScore) {
            alert("The computer wins the game! Better luck next time.");
        } else {
            alert("It's a tie game! Well played.");
        }
        humanScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(
    (button) =>  {
        button.addEventListener("click", () => {
            const computerChoice = getComputerChoice(); 
            playRound(button.textContent.toLowerCase(), computerChoice);
        })
    }
)
