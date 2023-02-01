
const buttons = document.querySelectorAll('button');
const div = document.createElement('div')
const resultDiv = document.querySelector('.results')

let playerChoice
let computerChoice

let playerPoints = 0
let computerPoints = 0
const playerPointsDiv = document.querySelector('.playerScore')
const computerPointsDiv = document.querySelector('.computerScore')

function updatePoints(){
    playerPointsDiv.textContent = playerPoints
    computerPointsDiv.textContent = computerPoints
    checkIfFinished()
}


buttons.forEach((button) => {

  button.addEventListener('click', function(e){
    playerChoice = e.target.innerText
    playGame(playerChoice)
  });
});





function playGame(playerChoice){
    if(playerPoints <5 && computerPoints <5){
        getComputerChoice()
        if(playerChoice === computerChoice) {
            showResult(playerChoice, computerChoice, 'draw')
        }
        else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') ||
                (playerChoice === 'Scissors' && computerChoice === 'Paper') || 
                (playerChoice === 'Paper' && computerChoice === 'Rock')){
                    showResult(playerChoice, computerChoice, 'win')
                }
        else{
            showResult(playerChoice, computerChoice, 'lost')
        }
    }
}



function getComputerChoice(){
    let computerChoiceNumber = Math.floor(Math.random() * 3)

    switch(computerChoiceNumber){
        case 0:
            computerChoice = "Rock"
            break
        case 1:
            computerChoice = "Paper"
            break
        case 2:
            computerChoice = "Scissors"
            break
    }
}

function showResult(playerChoice, computerChoice, result){
    const divPlayerChoice = document.createElement('div')
    divPlayerChoice.textContent = `You picked : ${playerChoice}`
    const divComputerChoice = document.createElement('div')
    divComputerChoice.textContent = `, Computer picked : ${computerChoice}`
    const divResult = document.createElement('div')

    const divResultBox = document.createElement('div')


    switch(result){
        case 'win':
            divResult.textContent = '. You WON!' 
            playerPoints++
            updatePoints()
            break
        case 'lost':
            divResult.textContent = '. You LOST!' 
            computerPoints++
            updatePoints()
            break
        case 'draw':
            divResult.textContent = '. You DREW!'
            break





    }
    divResultBox.appendChild(divPlayerChoice)
    divResultBox.appendChild(divComputerChoice)
    divResultBox.appendChild(divResult)
    divResultBox.classList.add('flexbox')
    resultDiv.appendChild(divResultBox)

}

function checkIfFinished(){
    if(playerPoints == 5){
        showWinner('Player')
        return(true)
    }
    if(computerPoints == 5){
        showWinner('Computer')
        return(true)
    }
    return(false)
}
function initiateGame(){
    const gameDiv = document.querySelector('.results')
    gameDiv.textContent  = ''
    playerPoints = 0
    computerPoints = 0
    updatePoints()
    const winnerDiv = document.querySelector('.winner')
    winnerDiv.textContent = ''

}


function showWinner(winner){
    const gameDiv = document.querySelector('.results')
    gameDiv.textContent  = ''
    const winnerDiv = document.querySelector('.winner')
    winnerDiv.textContent = `${winner} has won the game!`


    const newGameButton = document.createElement('button')
    newGameButton.innerText = 'RESTART'
    newGameButton.style.margin = '20px'
    winnerDiv.appendChild(newGameButton)
    newGameButton.addEventListener('click', initiateGame)

}