let playerScore = 0
let aiScore = 0

function getPlayerChoice() {
    let choice = prompt("What do you choose? Rock, Paper, or Scissors?")
        return(choice.toLowerCase())
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 1) {
        choice = "rock"
    } else if (choice == 2) {
        choice = "paper"
    } else if (choice == 3) {
        choice == "scissors"
    }
    return(choice)
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


