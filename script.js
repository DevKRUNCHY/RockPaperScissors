let playerInput = prompt("What do you choose? Rock, Paper, or Scissors?")
let playerScore = 0
let aiScore = 0

function getComputerChoice() {
    let aiInput = Math.floor(Math.random() * 3);
    console.log(aiInput)
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

getPlayerChoice()

getComputerChoice()