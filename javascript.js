function getComputerChoice() {
    const indexValue = Math.floor(Math.random() * 3);
    if (indexValue === 0)
        return "rock";
    else if (indexValue === 1)
        return "paper";
    else if (indexValue === 2)
        return "scissors";
}