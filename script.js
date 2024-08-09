console.log("Let the game start!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    //demo run
    //return choice;
    // end demo

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
    let win = false;
    if (humanChoice === "invalid") {
        console.log("invalid input, you loose by default!");
        computerScore++;
        return;
    }
    if (humanChoice === compChoice) {
        console.log("it's a tie!");
        return;
    }
    switch (humanChoice) {
        case "rock":
            if (compChoice === "scissor") win = true;
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
        console.log("You loose, " + compChoice + " beats " + humanChoice);
        computerScore++;
        return;
    } else {
        console.log("you win, " + humanChoice + " beats " + compChoice);
        humanScore++;
        return;
    }
}

let humanScore = 0, computerScore = 0;
for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1));
    let compChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, compChoice);
}
let winner = "It s a tie";
if (computerScore < humanScore) winner = "You";
if (computerScore > humanScore) winner = "The Computer";
console.log("the winner is: " + winner);
