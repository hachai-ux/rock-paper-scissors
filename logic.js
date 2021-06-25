let playerCounter = 0;
let computerCounter = 0;

function computerPlay (){
    let arrSign =["rock","paper","scissors"];
    return sign = arrSign[Math.floor(Math.random()*arrSign.length)];

    
}

function playerSelection(){
    let sign = prompt("Rock, paper or scissors?");
    
    if (sign.toLowerCase() == "rock") {
        return "rock";
}
    else if (sign.toLowerCase() == "paper") {
        return "paper";
    }
    else if (sign.toLowerCase() == "scissors") {
        return "scissors";
    }
    else {
        console.log("Invalid sign");
        return playerSelection();
    }
}

function playRound(playerSelection, computerSelection){


    if (playerSelection == "rock" && computerSelection == "rock") {
        return message = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerCounter++;
        return message = "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCounter++;
        return message = "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCounter++;
        return message = "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return message = "It's a tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerCounter++;
        return message = "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerCounter++;
        return message = "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCounter++;
        return message = "You Win! Scissors beats Papers";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return message = "It's a tie!";
    }
}

function game(){

    let result; 


    result = playRound(playerSelection(), computerPlay());
    console.log(result);
    result = playRound(playerSelection(), computerPlay());
    console.log(result);
    result = playRound(playerSelection(), computerPlay());
    console.log(result);
    result = playRound(playerSelection(), computerPlay());
    console.log(result);
    result = playRound(playerSelection(), computerPlay());
    console.log(result);

    if (playerCounter > computerCounter){
    console.log("Game is over. You win!");
    }
    else if (playerCounter < computerCounter){
    console.log("Game is over. You lose!");
    }
    else {
        console.log("Game is over. It's a tie.");
    }

    playerCounter = 0;
    computerCounter = 0;
}

game();
