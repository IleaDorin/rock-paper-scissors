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

function getHumanChoice() {
    let result = window.prompt("enter your choice: ");
    result = result.toLowerCase();
    if (result === 'rock' || result === 'paper' || result === 'scissors') {
        return result;
    }
    return "invalid";
}

function playRound(humanChoice, compChoice) {

    // adding the result to the board
    const lst = document.querySelector("#ul_result");
    const listItm = document.createElement('li');
    const listText = document.createElement('span');
    listItm.appendChild(listText);
    let result;
    let win = false;
    if (humanChoice === "invalid") {
        result = "Invalid input, you loose by default!";
        computerScore++;
        listText.textContent = result;
        lst.appendChild(listItm);
        return;
    }
    if (humanChoice === compChoice) {
        result = "It's a tie!";
        listText.textContent = result;
        lst.appendChild(listItm);
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
        result = "You loose, " + compChoice + " beats " + humanChoice + "!";
        computerScore++;
    } else {
        result = "You win, " + humanChoice + " beats " + compChoice + "!";
        humanScore++;
    }
    listText.textContent = result;
    lst.appendChild(listItm);
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


// let winner = "It s a tie";
// if (computerScore < humanScore) winner = "You";
// if (computerScore > humanScore) winner = "The Computer";
// console.log("the winner is: " + winner);
