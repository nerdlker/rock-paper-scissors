function whenClicked () {
  
    playerChoice = this.id
    computerChoice = computerPlay()
    playRound(playerChoice, computerChoice)
    
    console.log(roundNumber)
    gameRound.textContent = `Round ${roundNumber}`
    
    gameStatus()
  
}
function removeEvent(){
  document.querySelectorAll('.images').forEach(button => {
    button.removeEventListener('click', whenClicked)
  })
}

function gameStatus(){
  if (roundNumber < 6) {
    document.querySelectorAll('.images').forEach(button => {
      button.addEventListener('click', whenClicked)
    })
    roundNumber += 1
} else {
  
  if (userScoreCount > computerScoreCount){
    gameRound.textContent = `Game Over. You Won!`;
    removeEvent()
  }
  else if (userScoreCount == computerScoreCount){
    gameRound.textContent = `Game Draw`;
    removeEvent()
  }
  else{
    gameRound.textContent = `Game Over. You Lost!`;
    removeEvent()
  }
}
}

function computerPlay () {
  let arr = ['Rock', 'Paper', 'Scissor']
  return arr[Math.floor(Math.random() * arr.length)]
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection == 'Rock') {
    //Player selects ROCK
    if (computerSelection == 'Paper') {
      resultLose(playerSelection, computerSelection)
      computerScoreCount += 1 //Loss condition
    } else if (computerSelection == 'Scissor') {
      resultWin(playerSelection, computerSelection)
      userScoreCount += 1 //Win condition
    } else {
      resultDraw(playerSelection) //Draw
    }
  } else if (playerSelection == 'Scissor') {
    //Player Selects Scissor
    if (computerSelection == 'Paper') {
      resultWin(playerSelection, computerSelection) // Win Condition
      userScoreCount += 1
    } else if (computerSelection == 'Rock') {
      resultLose(playerSelection, computerSelection) // Loss condition
      computerScoreCount += 1
    } else {
      resultDraw(playerSelection) // Draw
    }
  } else if (playerSelection == 'Paper') {
    // Player Selects Paper
    if (computerSelection == 'Rock') {
      resultWin(playerSelection, computerSelection) // Win Condition
      userScoreCount += 1
    } else if (computerSelection == 'Scissor') {
      resultLose(playerSelection, computerSelection) // Loss Condition
      computerScoreCount += 1
    } else {
      resultDraw(playerSelection) // Draw
    }
  } else {
    alert('Invalid input, please enter Rock,Paper or Scissors')
  }
  scoreUpdate()
}

function scoreUpdate () {
  userScore.textContent = `You: ${userScoreCount}`
  computerScore.textContent = `Computer : ${computerScoreCount}`
}

function newGame () {
  userScoreCount = 0
  computerScoreCount = 0
  userScore.textContent = `You: ${userScoreCount}`
  computerScore.textContent = `Computer : ${computerScoreCount}`
  console.log(`${this} was clicked , new game has begun`)
  resultLine.innerHTML = ''
  roundNumber = 1
  gameRound.textContent = `Round ${roundNumber}`
  gameStatus()
  
}

function resultWin (playerSelection, computerSelection) {
  let newLi = document.createElement('li')
  resultLine.appendChild(newLi)
  newLi.innerHTML = `<h4>Round ${roundNumber-1} - You chose: ${playerSelection} , computer chose: ${computerSelection}, you Win! </h4>`
}

function resultLose (playerSelection, computerSelection) {
  let newLi = document.createElement('li')
  resultLine.appendChild(newLi)
  newLi.innerHTML = `<h4>Round ${roundNumber-1} - Computer chose: ${computerSelection}, you chose:${playerSelection}, you Lose! </h4>`
}

function resultDraw (playerSelection) {
  let newLi = document.createElement('li')
  resultLine.appendChild(newLi)
  newLi.innerHTML = `<h4>Round ${roundNumber-1} - Both players selected ${playerSelection}, Round Draw! </h4>`
}

const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')
const gameRound  = document.querySelector('.game-round')

let resultLine = document
  .getElementById('results')
  .getElementsByTagName('ul')[0]
let userScoreCount
let computerScoreCount
let roundNumber


document.querySelector('.new-game').addEventListener('click', newGame)



