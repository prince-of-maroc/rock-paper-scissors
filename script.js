const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const fpants = document.querySelector('#fpants');
const click = document.querySelector('#click');
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const sbPlayer = document.querySelector('#player-score');
const sbComputer = document.querySelector('#computer-score');
const playerSide = document.querySelector('.player-side');
const computerSide = document.querySelector('.computer-side');

const bobKey = document.querySelector('#bob-key');


const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const replayButton = document.querySelector('#replay');


const pRock = document.createElement('img');
pRock.src = "./images/player-rock.png"
pRock.style.width = '200px';
pRock.style.height = '200px';
const pPaper = document.createElement('img');
pPaper.src = "./images/player-paper.png"
pPaper.style.width = '200px';
pPaper.style.height = '200px';
const pScissors = document.createElement('img');
pScissors.src = "./images/player-scissors.png"
pScissors.style.width = '200px';
pScissors.style.height = '200px';
const cRock = document.createElement('img');
cRock.src = "./images/computer-rock.png"
cRock.style.width = '200px';
cRock.style.height = '200px';
const cPaper = document.createElement('img');
cPaper.src = "./images/computer-paper.png"
cPaper.style.width = '200px';
cPaper.style.height = '200px';
const cScissors = document.createElement('img');
cScissors.src = "./images/computer-scissors.png"
cScissors.style.width = '200px';
cScissors.style.height = '200px';


rockButton.addEventListener('click', () =>{
    playClick();
    playerChoice = 'rock';
    game();
})
paperButton.addEventListener('click', () =>{
    playClick();
    playerChoice = 'paper';
    game();
})
scissorsButton.addEventListener('click', () =>{
    playClick();
    playerChoice = 'scissors';
    game();
})

playButton.addEventListener('click', () =>{
    playClick();
    fpants.play();
})
pauseButton.addEventListener('click', ()=>{
    playClick();
    fpants.pause();
})

replayButton.addEventListener('click', ()=>{
    playClick();
    resetGame();
})


function resetGame(){
    playerSide.innerHTML = '';
    computerSide.innerHTML = '';
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
}

function playClick(){
    click.currentTime = 0;
    click.play();
}

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
    if (playerScore < 5 && computerScore <5){
        playRound(playerChoice, computerPlay());
        updateScoreboard();
        displayHands();
        bobKey.textContent = computerSelection.toUpperCase();

    }
}


function displayHands(){
    if (playerChoice == 'rock'){
        playerSide.innerHTML = '';
        playerSide.append(pRock);
    } else if (playerChoice == 'paper'){
        playerSide.innerHTML = '';
        playerSide.append(pPaper);
    } else if (playerChoice == 'scissors'){
        playerSide.innerHTML = '';
        playerSide.append(pScissors);
    }
    if (computerSelection == 'rock'){
        computerSide.innerHTML = '';
        computerSide.append(cRock);
    } else if (computerSelection == 'paper'){
        computerSide.innerHTML = '';
        computerSide.append(cPaper);
    } else if (computerSelection == 'scissors'){
        computerSide.innerHTML = '';
        computerSide.append(cScissors);
    }
}


function updateScoreboard(){
    sbComputer.textContent = computerScore;
    sbPlayer.textContent = playerScore;
}
