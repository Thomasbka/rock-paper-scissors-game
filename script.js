alert(`
Welcome to the Rock, Paper, Scissors game!

- Open the console in the Spection Tools of your Browser. CMD + OPT +C (Mac) or CTRL + SHIFT + C (Windows) or Right Click and click Inspect.
- Here you get to play against your own computer in a match best of 5.
- In order to play this game you will need to open your inspecter window and use the console tab.
- After clicking 'OK' you can type your choice inside the box.
- You will afterwards see the result in the console.

May the best player win!
`);

const choices = ["rock", "paper", "scissors"];

const isPlayerSelectionNull = (playerSelection) => {
  if (playerSelection === null) {
    alert("Game ended.");
    return true;
  } else {
    return false;
  }
};

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function getPlayerSelection() {
  let validInput;
  let playerSelection = "";
  while (!validInput) {
    playerSelection = prompt("Enter Rock, Paper, or Scissors:")
    if (isPlayerSelectionNull(playerSelection)) {
      return null;
    }
    playerSelection = playerSelection.toLowerCase().trim();
    if (choices.includes(playerSelection)) {
      validInput = true;
    } else {
      alert("Invalid input! Please enter Rock, Paper, or Scissors.");
    }
  };
  return playerSelection;
};

function playRound(playerSelection, computerSelection) {
  if (isPlayerSelectionNull(playerSelection)) {
    return null;
  };
  if (playerSelection === computerSelection) {
    return  `It's a tie! ${playerSelection.toUpperCase()} = ${computerSelection.toUpperCase()}`; 
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } else {
    return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;  
  }
};

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let round = 0; round < 5; round++) {
    const playerSelection = getPlayerSelection(); 
    if (playerSelection === null) {
      console.log("Game was CANCELED by player!");
      return;
    };
    const computerSelection = computerPlay(); 
    const result = playRound(playerSelection, computerSelection);
    if (result === null) {
      return;
    };
    console.log(`Round ${round + 1}:`);
    console.log(result);
    if (result.includes("You Win!")) {
      playerWins++;
    } else if (result.includes("You Lose!")) {
      computerWins++;
    }
    console.log(`Score: Player ${playerWins}, Computer ${computerWins}`);
    if (playerWins === 3 || computerWins === 3) {
      break; 
    }
  };
  if (playerWins === 3) {
    console.log("Congratulations! You won the game.");
  } else if (computerWins === 3) {
    console.log("Sorry, the computer won the game.");
  } else {
    console.log("Game over! Neither player reached 3 wins after 5 rounds.");
  }
  playAgain();
};

function playAgain() {
  let response = confirm("Do you want to play again?");
  if (response) {
    console.clear();
    game();
  } else {
    alert("Thanks for playing! See you next time.");
  };
};

setTimeout(() => {
  game();
}, 100);
