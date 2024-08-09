console.log("Let the gae start!");

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

console.log("comp choice: " + getComputerChoice());

