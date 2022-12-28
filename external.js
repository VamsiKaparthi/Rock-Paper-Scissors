const playerBoard = document.getElementById('b1');
const computerBoard = document.getElementById('b2');
const final = document.getElementById('con');
const arr=['rock','paper','scissors'];
function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    return item;
}

//single round
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
//actual function to check who won
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        return['t',"It's a tie"];
    }
    else if(playerSelection=="rock"){
        if(computerSelection=="scissors"){
            return["w","You win! Rock breaks Scissors"];
        }
        else{
            return["l","You lose! Paper beats Rock"];
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            return["w","You win! Scissors cut Paper"];
        }
        else{
            return["l","You lose! Rock beats Scissors"];
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return["w","You win! Paper beats Rock"];
        }
        else{
            return["w","You lose! Scissors cuts Paper"];
        }
    }
    else{
        return['t',"It's a tie"];
    }
}
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

//taking User's input


function restartGame(){
    const buttons = document.querySelectorAll("#buttons");
    buttons.forEach(button=>button.remove());
    computerScore=0;
    playerScore=0;
}
function game(e){
    let roundResult = playRound(this.id,getComputerChoice(arr));
    if(roundResult[0] =="w"){
        ++playerScore;
        console.log('round win');
    }
    else if(roundResult[0]=="l"){
        ++computerScore;
        console.log('round lost');
    }
    else{
        console.log('tie');
    }
    
    playerBoard.textContent = `${playerScore}`;
    computerBoard.textContent = `${computerScore}`;
    con.textContent = `${roundResult[1]}`
    if(playerScore==5||computerScore==5){
        if(playerScore==5){
            console.log("Yay! You've won the game");
            con.textContent = "Yay! You've won the game";
        }
        else if(computerScore==5){
            console.log("You've lost the game");
            con.textContent = "You've lost the game";
        }
        restartGame();
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', game));
