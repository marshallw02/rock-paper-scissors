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
    return pc.toLowerCase();
}

//Function will take both selections and determine the winner.
//playRound() returns -1 if player loses, 0 if round is a tie, and 1 if player wins
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log("Tie!  You both played Rock!")
                    return 0;
                case "paper":
                    console.log("You Lose!  Paper beats Rock!")
                    return -1;
                case "scissors":
                    console.log("You Win!  Rock beats Scissors!")
                    return 1;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("You Win!  Paper beats Rock!")
                    return 1;
                case "paper":
                    console.log("Tie!  You both played Paper")
                    return 0;
                case "scissors":
                    console.log("You Lose!  Scissors beat Paper!")
                    return -1;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log("You Lose!  Rock beats Scissors!")
                    return -1;
                case "paper":
                    console.log("You Win!  Scissors beat Paper!")
                    return 1;
                case "scissors":
                    console.log("Tie!  You both played Scissors!")
                    return 0;
            }
    }
}

function game() {
    let playerSelection, computerSelection; 
    let roundResult, finalResult = 0;

    for (let i = 0; i < 5; i++) {
        roundResult = 0;
        while (roundResult == 0){
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
        }
        finalResult += roundResult;
    }

    if (finalResult > 0)
        return "Player wins!";
    else
        return "Computer wins!";
}

console.log(game());