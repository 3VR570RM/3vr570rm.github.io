const game = () => {
	game()
	{
		alert('constructor');
	}
}

let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

function getComputerSelection() {
    const result = ["ROCK", "PAPER", "SCISSORS"];
    return result[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "PAPER" && playerSelection === "rock") {
        computerScore += 1
        return "You lose"

    } else if (computerSelection === "PAPER" && playerSelection === "scissor") {
        playerScore += 1
        return "You win"

    }

    if (computerSelection === "ROCK" && playerSelection === "paper") {
        playerScore += 1
        return "You win"

    } else if (computerSelection === "ROCK" && playerSelection === "scissor") {
        computerScore += 1
        return "You lose"

    }

    if (computerSelection === "SCISSORS" && playerSelection === "paper") {
        computerScore += 1
        return "You lose"

    } else if (computerSelection === "SCISSORS" && playerSelection === "rock") {
        playerScore += 1
        return "You win"

    } else(computerSelection, playerSelection)
    return "Draw"


}

let computerChoice = document.querySelector("#computerselection")
let roundResult = document.querySelector("#roundresult")
let runningScoreC = document.querySelector("#runningscorecomputer")
let runningScoreP = document.querySelector("#runningscoreplayer")


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('playing')
        const playerSelection = button.id

        button.classList.add(getComputerSelection())
        const computerSelection = getComputerSelection()
        computerChoice.textContent = computerSelection


        button.classList.add(playRound())
        const playerRoundResult = playRound(computerSelection, playerSelection)
        roundResult.textContent = playerRoundResult
        runningScoreC.textContent = computerScore
        runningScoreP.textContent = playerScore


        setTimeout(
            function stopPlaying() {
                button.classList.remove('playing')
            }, 1000)

        if (computerScore === 5) {
            alert("You died! -sad-")
            window.location.reload()
        }

        if (playerScore === 5) {
            alert("You won, open the champagne!")
            window.location.reload()
        }


    })
})