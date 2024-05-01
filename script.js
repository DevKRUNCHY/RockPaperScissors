let playerInput = prompt("What do you choose? Rock, Paper, or Scissors?")
const playerSelection = getPlayerChoice()
const aiSelection = getComputerChoice()
let playerScore = 0
let aiScore = 0

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    if (playerInput = "Rock") {
        playerInput = 0
        console.log(playerInput)
    } else if (playerInput = "Paper") {
        playerInput = 1
        console.log(playerInput)
    } else if (playerInput = "Scissors") {
        playerInput = 2
        console.log(playerInput)
    }
    return(playerInput)
}

console.log(aiSelection)

function playRound(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
        console.log("Its a tie!")
    } 
}

playRound(playerSelection, aiSelection)
