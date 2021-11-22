let userChoice;

function addListeners(){
    let buttons = document.querySelectorAll(".images")
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=> {
          userChoice = e.target.id
          console.log(userChoice)
               })
      });
}




function computerPlay(){
    let arr= ["Rock", "Paper", "Scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
    
};


function playRound(playerSelection, computerSelection){

    if (playerSelection == "rock"){ //Player selects ROCK
        if (computerSelection == "Paper"){
            console.log(`"You Lose!!  ${computerSelection} beats ${playerSelection}"`);  //Loss condition
        }
        else if (computerSelection == "Scissor"){
            console.log(`"You Win!!  ${playerSelection} beats ${computerSelection}"`);  //Win condition
        }
        else {
            console.log("Round Draw, both of you selected ROCK"); //Draw
        }
    } else if (playerSelection == "scissor"){ //Player Selects Scissor
        if (computerSelection == "Paper"){
            console.log(`"You Win!!  ${playerSelection} beats ${computerSelection}"`); // Win Condition
        } 
        else if (computerSelection == "Rock"){
            console.log(`"You Lose!!  ${computerSelection} beats ${playerSelection}"`); // Loss condition
        } 
        else {
            console.log("Round Draw, both of you selected Scissor"); // Draw
        };

    } else if (playerSelection == "paper"){ // Player Selects Paper
        if (computerSelection == "Rock"){
            console.log(`"You Win!!  ${playerSelection} beats ${computerSelection}"`);  // Win Condition
        } 
        else if (computerSelection == "Scissor"){
            console.log(`"You Lose!!  ${computerSelection} beats ${playerSelection}"`); // Loss Condition
        } 
        else {
            console.log("Round Draw, both of you selected Paper"); // Draw
        } 
    } else{
        alert("Invalid input, please enter Rock,Paper or Scissors");
    }
};



// // let i=0;

// // while (  i <= 5){
// // // const playerSelection= prompt("Enter Rock | Paper | Scissor").toLowerCase();
// // const computerSelection= computerPlay();
// // console.log (`user selected ${playerSelection}`);
// // console.log (`computer selected ${computerSelection}`); 
// playRound(playerSelection,computerSelection);


// // i++;
// // };





addListeners();
