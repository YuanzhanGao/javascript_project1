function getComputerChoice() {
    var choice = ["rock", "paper", "scissor"];
    var index = Math.floor(Math.random()*choice.length);
    
    return choice[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "Draw";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") {
        return "You win";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "Draw";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor") {
        return "You lose";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win";
    }
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "scissor") {
        return "Draw";
    }
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock") {
        return "You lose";
    }
    else {
        return "You win";
    }

}

const playerSelection = "rock";

var playerWin = 0;
var cpWin = 0;

for (let i = 0; i < 5; i++) {
    var result = playRound(playerSelection, getComputerChoice());
    console.log(result);

    if (result == "Draw") {
        console.log("It's a draw!");
        console.log("Current Score:");
        console.log(playerWin);
        console.log(cpWin);
    }
    else if (result == "You win") {
        console.log("You've won 1 point!");
        playerWin++;

        console.log("Current Score:");
        console.log(playerWin);
        console.log(cpWin);
        
    } else {
        console.log("The Computer has won 1 point!");
        cpWin++;

        console.log("Current Score:");
        console.log(playerWin);
        console.log(cpWin);
    }

    console.log("---------------------------------------------");

}
