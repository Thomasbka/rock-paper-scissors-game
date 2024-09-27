alert(`
Welcome to the Rock, Paper, Scissors game!

- Open the console in the Spection Tools of your Browser. CMD + OPT +C (Mac) or CTRL + SHIFT + C (Windows) or Right Click and click Inspect.
- Here you get to play against your own computer in a match best of 5.
- In order to play this game you will need to open your inspecter window and use the console tab.
- After clicking 'OK' you can type your choice inside the box.
- You will afterwards see the result in the console.

May the best player win!
`);

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function getPlayerSelection() {
    let validInput;
    let playerSelection = "";
    while (!validInput) {
        playerSelection = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
        if (["rock", "paper", "scissors"].includes(playerSelection)) {
            validInput = true;
        } else {
            alert("Invalid input! Please enter Rock, Paper, or Scissors.");
        }
    }
    return playerSelection;
};

function playRound(playerSelection, computerSelection) {
    const playerUpper = playerSelection.toUpperCase();
    const computerUpper = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return  `It's a tie! ${playerUpper} = ${computerUpper}`; 
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerUpper} beats ${computerUpper}`;
    } else {
        return `You Lose! ${computerUpper} beats ${playerUpper}`;  
    }
};

async function game() {
    let playerWins = 0;
    let computerWins = 0;
    let round = 0;
    while (round < 5 && playerWins < 3 && computerWins < 3) {
        const playerSelection = getPlayerSelection();
        const computerSelection = computerPlay(); 
        const result = playRound(playerSelection, computerSelection); 
        console.log(`Round ${round + 1}:`);
        console.log(result);
        if (result.includes("You Win!")) {
            playerWins++;
        } else if (result.includes("You Lose!")) {
            computerWins++;
        }
        console.log(`Score: Player ${playerWins}, Computer ${computerWins}`);
        round++; 
    }
    if (playerWins === 3) {
        console.log("Congratulations! You won the game.");
        playAgain();
    } else if (computerWins === 3) {
        console.log("Sorry, the computer won the game.");
        playAgain();
    } else {
        console.log("Game over! Neither player reached 3 wins after 5 rounds.");
        playAgain();
    }
};

function playAgain() {
    let response = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (response === "yes") {
        console.clear();
        game();
    } else {
        alert("Thanks for playing! See you next time.");
    }
};

setTimeout(() => {
    game();
}, 100);


