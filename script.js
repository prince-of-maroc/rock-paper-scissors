const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
let playerChoice;

    
rockButton.addEventListener('click', () =>{
    playerChoice = 'rock';
    console.log(playerChoice)
})
paperButton.addEventListener('click', () =>{
    playerChoice = 'paper';
    console.log(playerChoice)
})
scissorsButton.addEventListener('click', () =>{
    playerChoice = 'scissors';
    console.log(playerChoice)
})




function computerPlay(){
    let num = Math.floor(Math.random() * 3) + 1;
    if(num == 1){
        computerSelection = "rock";
    } else if (num == 2){
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound(playerChoice, computerSelection){
    if(playerChoice.toLowerCase() == computerSelection){
        return("You both chose " + computerSelection + ", its a draw.")
    }
    if(playerChoice.toLowerCase() == "rock"){
        if(computerSelection == "paper"){ 
            return("Paper beats rock. You lose.");
        }
        if(computerSelection == "scissors"){ 
            return("Rock beats scissors. You win.");
        }
    } else if (playerChoice.toLowerCase() == "paper"){
        if(computerSelection == "rock"){ 
            return("Paper beats rock. You win.");
        }
        if(computerSelection == "scissors"){ 
            return("Scissors beat paper, you lose.");
        }
    } else if (playerChoice.toLowerCase() == "scissors"){
        if(computerSelection == "rock"){ 
            return("Rock beats scissors, you lose.");
        }
        if(computerSelection == "paper"){ 
            return("Scissors beats paper, you win.");
        }
    }
}


function game(){
    console.log(playRound(playerChoice, computerPlay()))
}