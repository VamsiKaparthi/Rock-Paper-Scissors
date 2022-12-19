const arr=['rock','paper','scissors'];
function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    return item;
}

//single round
const playerSelection = "rock";

//actual function to check who won
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        console.log("It's a tie");
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){
            console.log("You win! Rock breaks Scissors");
        }
        else{
            console.log("You lose! Paper beats Rock");
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            console.log("You win! Scissors cut Paper");
        }
        else{
            console.log("You lose! Rock beats Scissors");
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            console.log("You win! Paper beats Rock");
        }
        else{
            console.log("You lose! Scissors cuts Paper");
        }
    }
    else{
        console.log("Choice doesn't exist");
    }
}
