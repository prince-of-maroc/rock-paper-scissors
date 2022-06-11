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
    if(playerSelection.toLowerCase() == computerSelection){
        return("You both chose " + computerSelection + ", its a draw.")
    }
    if(playerSelection.toLowerCase() == "rock"){
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
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper or scissors?");
        console.log(playRound(playerSelection, computerPlay()))
    }
}