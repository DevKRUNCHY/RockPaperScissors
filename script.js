let playerScore = 0
let aiScore = 0

function getPlayerChoice() {
    let choice = prompt("What do you choose? Rock, Paper, or Scissors?")
        return(choice.toLowerCase())
}

function getComputerChoice() {
    let botChoice = Math.floor(Math.random() * 3);
    if (botChoice == 0) {
        botChoice = "rock"
    } else if (botChoice == 1) {
        botChoice = "paper"
    } else if (botChoice == 2) {
        botChoice = "scissors"
    }
    return(botChoice)
}


function playRound() {

    playerChoice = getPlayerChoice()
    aiChoice = getComputerChoice() 

    if (playerChoice === aiChoice) {
        console.log("Its a tie!")
    } else if (playerChoice == "rock" && aiChoice == "paper" || playerChoice == "paper" && aiChoice == "scissors" || playerChoice == "scissors" && aiChoice == "rock") {
        console.log("You Lose!")
        aiScore += 1
    } else if (playerChoice == "paper" && aiChoice == "rock" || playerChoice == "scissors" && aiChoice == "paper" || playerChoice == "rock" && aiChoice == "scissors") {
        console.log("You Win!")
        playerScore += 1
    } else if (playerChoice !="") {
        console.log("Typo occured.")
    }
}

function playGame(amount) {
    for (let rounds = 0; rounds < amount; rounds++) {
        playRound()
        console.log(`Player: ${playerScore}`)
        console.log(`Bot: ${aiScore}`)
    }
}

playGame(5)