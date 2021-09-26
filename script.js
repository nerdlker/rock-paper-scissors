
function computerPlay(){
    let arr= ["Rock", "Paper", "Scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
    
};


function playRound(playerSelection, computerSelection){

    if (playerSelection == "rock" && computerSelection == "Paper"){
        console.log ("Paper beats rock");
    }
    else {
        console.log("try again");
    }
}



const playerSelection= prompt("Enter Rock | Paper | Scissor").toLowerCase();



const computerSelection= computerPlay();
playRound(playerSelection,computerSelection);

console.log (computerSelection);
console.log (playerSelection)
