
const options = ["rock", "paper", "scissors"];

let computerChoice;


function computerPlay(){
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
    console.log("Loading computer choice...")
    if(num == 1){
        computerChoice = "rock";
    } else if (num == 2){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
}