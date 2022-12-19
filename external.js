const arr=['rock','paper','scissor'];
function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    return item;
}
