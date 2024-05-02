let playerScore = 0
let aiScore = 0

function getPlayerChoice() {
    let playerInput = prompt("What do you choose? Rock, Paper, or Scissors?")
    if (playerInput == "Rock") {
        playerInput = 0
    } else if (playerInput == "Paper") {
        playerInput = 1
    } else if (playerInput == "Scissors") {
        playerInput = 2
    }
    return(playerInput)
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


function playRound() {

    playerChoice = getPlayerChoice()
    aiChoice = getComputerChoice() 

    if (playerChoice === aiChoice) {
        console.log("Its a tie!")
    } else if (playerChoice == 2 && aiChoice == 0) {
        console.log("You Lose! Scissors beats rock.")
        aiScore += 1
    } else if (playerChoice == 0 && aiChoice == 2) {
        console.log("You Win! Rock beats Scissors.")
        playerScore += 1
    } else if (playerChoice < aiChoice) {
        console.log("You Lose!")
        aiScore += 1
    } else if (playerChoice > aiChoice) {
        console.log("You Won!")
        playerScore += 1
    }
    console.log(`Player: ${playerScore}`)
    console.log(`Bot: ${aiScore}`)
}

function playGame(amount) {
    for (let rounds = 0; rounds < amount; rounds++) {
        playRound()
    }
}

playGame(5)


