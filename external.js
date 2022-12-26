const arr=['rock','paper','scissors'];
function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    return item;
}

//single round
let playerSelection = "";

//actual function to check who won
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        console.log("It's a tie");
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){
            return("You win! Rock breaks Scissors");
        }
        else{
            return("You lose! Paper beats Rock");
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            return("You win! Scissors cut Paper");
        }
        else{
            return("You lose! Rock beats Scissors");
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return("You win! Paper beats Rock");
        }
        else{
            return("You lose! Scissors cuts Paper");
        }
    }
    else{
        return("Choice doesn't exist");
    }
}
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
//taking User's input

rock.addEventListener("click",()=>{
    console.log(playRound('rock',getComputerChoice(arr)));
});
paper.addEventListener("click",()=>{
    console.log(playRound('paper',getComputerChoice(arr)));
});
scissor.addEventListener("click",()=>{
    console.log(playRound('scissors',getComputerChoice(arr)));
});



