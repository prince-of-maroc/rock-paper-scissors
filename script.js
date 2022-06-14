const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const audio = document.querySelector('audio');
let playerChoice;
let playerScore = 0;
let computerScore = 0;


document.addEventListener('click', ()=>{
    audio.play();
},{once:true})
rockButton.addEventListener('click', () =>{
    playerChoice = 'rock';
    game();
})
paperButton.addEventListener('click', () =>{
    playerChoice = 'paper';
    game();
})
scissorsButton.addEventListener('click', () =>{
    playerChoice = 'scissors';
    game();
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
    return(computerSelection);
}

function playRound(playerChoice, computerSelection){
    if(playerChoice.toLowerCase() == computerSelection){
        console.log("You both chose " + computerSelection + ", its a draw.")
    }
    if(playerChoice.toLowerCase() == "rock"){
        if(computerSelection == "paper"){
            computerScore++; 
            console.log("Paper beats rock. You lose.");
        }
        if(computerSelection == "scissors"){
            playerScore++; 
            console.log("Rock beats scissors. You win.");
        }
    } else if (playerChoice.toLowerCase() == "paper"){
        if(computerSelection == "rock"){
            playerScore++; 
            console.log("Paper beats rock. You win.");
        }
        if(computerSelection == "scissors"){
            computerScore++; 
            console.log("Scissors beat paper, you lose.");
        }
    } else if (playerChoice.toLowerCase() == "scissors"){
        if(computerSelection == "rock"){
            computerScore++; 
            console.log("Rock beats scissors, you lose.");
        }
        if(computerSelection == "paper"){
            playerScore++; 
            console.log("Scissors beats paper, you win.");
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}


function game(){
    playRound(playerChoice, computerPlay());
}