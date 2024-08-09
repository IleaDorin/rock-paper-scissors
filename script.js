console.log("Let the game start!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let result;;
    switch (choice) {
        case 0:
            result = 'rock';
            break;
        case 1:
            result = 'paper';
            break;
        case 2:
            result = 'scissor';
            break;
        default:
            result = 'error';
    }
    return result;
}

function getHumanChoice() {
    while (true) {
        let result = window.prompt("enter your choice: ", "rock");
        if (result != 'rock' && result != 'paper' && result != 'scissor') {
            console.log("invalid input");
            continue;
        }
        return result;
    }
}

console.log("comp choice: " + getComputerChoice());
let human = getHumanChoice();
console.log("your choice: " + human);

