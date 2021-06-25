let playerCounter = 0;
let computerCounter = 0;
const playerScoreDiv = document.createElement('div');
const computerScoreDiv = document.createElement('div');
const body = document.querySelector('body'); //parentNode selector
const playerScoreText = document.querySelector('#playerScore'); //parentNode selector for siblings
const computerScoreText = document.querySelector('#computerScore'); //parentNode selector for siblings

function computerPlay (){
    let arrSign =["rock","paper","scissors"];
    return sign = arrSign[Math.floor(Math.random()*arrSign.length)];

    
}



function playRound(e){
    //event handlers can't return stuff(no time travel..the click event already finished(that's how I understood it))

    let computerSelection = computerPlay();
    let result;
    
    if ( e.target.id == "rock" &&  computerSelection == "rock") {
        result = "I's a tie!";
    } else if (e.target.id == "rock" && computerSelection == "paper") {
        computerCounter++;
        result ="You Lose! Paper beats Rock";
    } else if (e.target.id == "rock" && computerSelection == "scissors") {
        playerCounter++;
        result ="You Win! Rock beats Scissors";
    } else if (e.target.id == "paper" && computerSelection == "rock") {
        playerCounter++;
        result ="You Win! Paper beats Rock";
    } else if (e.target.id == "paper" && computerSelection == "paper") {
        result ="It's a tie!";
    } else if (e.target.id == "paper" && computerSelection == "scissors") {
        computerCounter++;
        result ="You Lose! Scissors beats Paper";
    } else if (e.target.id == "scissors" && computerSelection == "rock") {
        computerCounter++;
        result ="You Lose! Rock beats Scissors";
    } else if (e.target.id == "scissors" && computerSelection == "paper") {
        playerCounter++;
        result ="You Win! Scissors beats Papers";
    } else if (e.target.id == "scissors" && computerSelection == "scissors") {
        result ="It's a tie!";
    }

    playerScoreDiv.textContent = playerCounter;
    computerScoreDiv.textContent = computerCounter;

    

    const announcement = document.createElement('div');
    if (playerCounter === 5){
        announcement.textContent="Game is over. You win!";
        body.appendChild(announcement);
        }
        else if (computerCounter ===5){
        announcement.textContent=("Game is over. You lose!");
        body.appendChild(announcement);
        }
    
}
    


function game(){

    //setup score board
    playerScoreDiv.textContent = playerCounter;
    computerScoreDiv.textContent = computerCounter;
    body.insertBefore(playerScoreDiv, playerScoreText.nextSibling); //append div child into body
    body.insertBefore(computerScoreDiv, computerScoreText.nextSibling);
  

    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
        button.addEventListener('click', playRound)
        
    });

    
    
   
        
};
game();
