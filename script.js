console.log("Let the game start!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let result;
    switch (choice) {
        case 0:
            result = 'rock';
            break;
        case 1:
            result = 'paper';
            break;
        case 2:
            result = 'scissors';
            break;
        default:
            result = 'error';
    }
    return result;
}

function playRound(humanChoice, compChoice) {

    // adding the result to the board
    const res = document.querySelector("#h2_result");
    let result;
    let win = false;
    if (humanChoice === "invalid") {
        result = "Invalid input, you loose by default!";
        computerScore++;
        res.textContent = result;
        return;
    }
    if (humanChoice === compChoice) {
        result = "It's a tie!";
        res.textContent = result;
        return;
    }
    switch (humanChoice) {
        case "rock":
            if (compChoice === "scissors") win = true;
            break;
        case "paper":
            if (compChoice === "rock") win = true;
            break;
        case "scissors":
            if (compChoice == "paper") win = true;
            break;
        default:
            win = false;
    }


    if (win == false) {
        result = "You lose, " + compChoice + " beats " + humanChoice + "!";
        computerScore++;
    } else {
        result = "You win, " + humanChoice + " beats " + compChoice + "!";
        humanScore++;
    }
    res.textContent = result;
    if (humanScore == 5 || computerScore == 5) {
        res.textContent = '';
        res.remove();
    }
    return;
}

function displayEnd(humanScore, computerScore) {

}

let humanScore = 0, computerScore = 0;

const scr = document.querySelector("h2");
const wnr = document.querySelector("#winner");
scr.textContent = "Score: You: 0, Robot: 0";

let buttons = document.querySelectorAll(".rsp-btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        scr.textContent = "Score: You: " + humanScore + ", Robot: " + computerScore;
        if (humanScore == 5 || computerScore == 5) {

            let winner = humanScore > computerScore ? "You" : "The Robot";
            wnr.textContent = "Winner: " + winner;
        }
    });
});
