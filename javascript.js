function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getPlayerChoice() {
    let valid = 0;
    let pc = prompt("Rock, Paper, or Scissors?");
    while (valid <= 0) {
        if (pc.toLowerCase() == "rock" || pc.toLowerCase() == "paper" || pc.toLowerCase() == "scissors") {
            valid = 1;
            break;
        }
        pc = prompt("Invalid option. Try again.\n\nRock, Paper, or Scissors?");
    }
    return pc;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie!  You both played Rock!";
                case "paper":
                    return "You Lose!  Paper beats Rock!";
                case "scissors":
                    return "You Win!  Rock beats Scissors!";
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You Win!  Paper beats Rock!";
                case "paper":
                    return "Tie!  You both played Paper";
                case "scissors":
                    return "You Lose!  Scissors beat Paper!";
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose!  Rock beats Scissors!";
                case "paper":
                    return "You Win!  Scissors beat Paper!";
                case "scissors":
                    return "Tie!  You both played Scissors!";
            }
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));