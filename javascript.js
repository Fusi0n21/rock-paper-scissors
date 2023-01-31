let playerSelection
let playerwins = 0
let pcwins = 0
let draws = 0
let computerSelection
function getComputerChoice(){
    let a = Math.floor(Math.random() * 3)
    switch(a){
        case 0:
            return('rock')
            break
        case 1:
            return('paper') 
            break
        case 2:
            return('scissors')   
            break
    }
}


function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()


    if (player == computerSelection){
        draws++
    }
    else if(player == 'rock' && computerSelection == 'paper'){
        pcwins++
    }
    else if(player == 'rock' && computerSelection == 'scissors'){
        playerwins++
    }
    else if(player == 'paper' && computerSelection == 'rock'){
        playerwins++
    }
    else if(player == 'paper' && computerSelection == 'scissors'){
        pcwins++
    }
    else if(player == 'scissors' && computerSelection == 'paper'){
        playerwins++
    }
    else if(player == 'scissors' && computerSelection == 'rock'){
        pcwins++
    }


    
}

function game(){

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Your choice")
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        console.log(computerSelection)
    }
    console.log(playerwins)
    console.log(draws)
    console.log(pcwins)
}
game()