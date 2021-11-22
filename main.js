<<<<<<< HEAD
function whenClicked() {
    playerChoice = this.id;
    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);

  }
  
  function computerPlay() {
    let arr = ["Rock", "Paper", "Scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  

  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {        //Player selects ROCK
      if (computerSelection == "Paper") {
        resultLose(playerSelection,computerSelection);
        computerScoreCount += 1; //Loss condition
      } else if (computerSelection == "Scissor") {
        resultWin(playerSelection, computerSelection);
        userScoreCount += 1; //Win condition
      } else {
        resultDraw(playerSelection) //Draw
      }
    } else if (playerSelection == "Scissor") {
      //Player Selects Scissor
      if (computerSelection == "Paper") {
        resultWin(playerSelection, computerSelection); // Win Condition
        userScoreCount += 1;
      } else if (computerSelection == "Rock") {
        resultLose(playerSelection,computerSelection); // Loss condition
        computerScoreCount += 1;
      } else {
        resultDraw(playerSelection) // Draw
      }
    } else if (playerSelection == "Paper") {
      // Player Selects Paper
      if (computerSelection == "Rock") {
        resultWin(playerSelection, computerSelection); // Win Condition
        userScoreCount += 1;
      } else if (computerSelection == "Scissor") {
        resultLose(playerSelection,computerSelection); // Loss Condition
        computerScoreCount += 1;
      } else {
        resultDraw(playerSelection) // Draw
      }
    } else {
      alert("Invalid input, please enter Rock,Paper or Scissors");
    }
    scoreUpdate();
  }
  
  function scoreUpdate() {
    userScore.textContent = `You: ${userScoreCount}`;
    computerScore.textContent = `computer : ${computerScoreCount}`;
  }
  
  function newGame() {
    userScoreCount = 0;
    computerScoreCount = 0;
    userScore.textContent = `You: ${userScoreCount}`;
    computerScore.textContent = `computer : ${computerScoreCount}`;
    console.log(`${this} was clicked , new game has begun`);
    resultLine.innerHTML= ""

  
    document.querySelectorAll(".images").forEach((button) => {
      button.addEventListener("click", whenClicked);
    });
  }

  function resultWin(playerSelection, computerSelection) {
    let newLi = document.createElement("li")
    resultLine.appendChild(newLi);
    newLi.innerHTML = `<h4>${playerSelection} beats ${computerSelection}, you Win! </h4>`;
      }

 function resultLose(playerSelection, computerSelection) {
    let newLi = document.createElement("li")
    resultLine.appendChild(newLi);
    newLi.innerHTML = `<h4>${computerSelection} beats ${playerSelection}, you Lose! </h4>`;
      }  
  
function resultDraw(playerSelection) {
  let newLi = document.createElement("li")
  resultLine.appendChild(newLi);
  newLi.innerHTML = `<h4>Both players selected ${playerSelection}, Round Draw! </h4>`;
}

  
  const userScore = document.querySelector(".user-score");
  const computerScore = document.querySelector(".computer-score");
  
  let resultLine = document.getElementById("results").getElementsByTagName("ul")[0];
  let userScoreCount;
  let computerScoreCount;
  
  document.querySelector(".new-game").addEventListener("click", newGame);
  
=======






function whenClicked() {
    playerChoice = this.id
    computerChoice = computerPlay()
    playRound(playerChoice,computerChoice)
}

function computerPlay(){
    let arr= ["Rock", "Paper", "Scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
    
};

function playRound(playerSelection, computerSelection){

    if (playerSelection == "rock"){ //Player selects ROCK
        if (computerSelection == "Paper"){
            console.log(`"You Lose!!  ${computerSelection} beats ${playerSelection}"`);
            computerScoreCount += 1;  //Loss condition
        }
        else if (computerSelection == "Scissor"){
            console.log(`"You Win!!  ${playerSelection} beats ${computerSelection}"`);
            userScoreCount +=1  //Win condition
        }
        else {
            console.log("Round Draw, both of you selected ROCK"); //Draw
        }
    } else if (playerSelection == "scissor"){ //Player Selects Scissor
        if (computerSelection == "Paper"){
            console.log(`"You Win!!  ${playerSelection} beats ${computerSelection}"`); // Win Condition
            userScoreCount +=1 
        } 
        else if (computerSelection == "Rock"){
            console.log(`"You Lose!!  ${computerSelection} beats ${playerSelection}"`); // Loss condition
            computerScoreCount += 1;
        } 
        else {
            console.log("Round Draw, both of you selected Scissor"); // Draw
        };

    } else if (playerSelection == "paper"){ // Player Selects Paper
        if (computerSelection == "Rock"){
            console.log(`"You Win!!  ${playerSelection} beats ${computerSelection}"`);  // Win Condition
            userScoreCount += 1;
        } 
        else if (computerSelection == "Scissor"){
            console.log(`"You Lose!!  ${computerSelection} beats ${playerSelection}"`); // Loss Condition\
            computerScoreCount += 1;
        } 
        else {
            console.log("Round Draw, both of you selected Paper"); // Draw
        } 
    } else{
        alert("Invalid input, please enter Rock,Paper or Scissors");
    }
    scoreUpdate()
};

function scoreUpdate(){
    userScore.textContent = `You: ${userScoreCount}`
    computerScore.textContent = `computer : ${computerScoreCount}`
}

function newGame(){
    userScoreCount = 0;
    computerScoreCount = 0;
    userScore.textContent = `You: ${userScoreCount}`
    computerScore.textContent = `computer : ${computerScoreCount}`
    console.log(`${this} was clicked`)
    
document.
querySelectorAll(".images")
.forEach(button=>{button.addEventListener("click",whenClicked)});
}

const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score"); 
let userScoreCount;
let computerScoreCount;







document.querySelector(".new-game").addEventListener("click", newGame);

>>>>>>> origin
