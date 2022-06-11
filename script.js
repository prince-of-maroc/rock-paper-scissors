
const options = ["rock", "paper", "scissors"];

let computerSelection;


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

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "rock"){ 
            return("You both chose Rock. Its a draw.");
        }
        if(computerSelection == "paper"){ 
            return("Paper beats rock. You lose.");
        }
        if(computerSelection == "scissors"){ 
            return("Rock beats scissors. You win.");
        }
    } else if (playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "rock"){ 
            return("Paper beats rock. You win.");
        }
        if(computerSelection == "paper"){ 
            return("You both chose paper. Its a draw.");
        }
        if(computerSelection == "scissors"){ 
            return("Scissors beat paper, you lose.");
        }
    } else if (playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "rock"){ 
            return("Rock beats scissors, you lose.");
        }
        if(computerSelection == "paper"){ 
            return("Scissors beats paper, you win.");
        }
        if(computerSelection == "scissors"){ 
            return("You both chose scissors. Its a draw.");
        }
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, paper or scissors?");
        console.log(playRound(playerSelection, computerPlay()))
    }
}