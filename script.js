alert(`
Welcome to the Rock, Paper, Scissors game!

- Here you get to play against your own computer in a match best of 5.
- In order to play this game you will need to open your inspecter window and use the console tab.
- After clicking 'OK' you can type your choice inside the box.
- You will afterwards see the result in the console.

May the best player win!
`);

const computerPlay = function() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = function(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const game = function() {
  console.clear();
  
  let playerScore = 0;
  let computerScore = 0;
  const validChoices = ["rock", "paper", "scissors"];

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please choose either Rock, Paper or Scissors:").toLowerCase();

    while (!validChoices.includes(playerSelection)) {
      playerSelection = prompt("Your choice is invalid. Please choose either Rock, Paper or Scissors:").toLowerCase();
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.startsWith("You Win")) {
      playerScore++;
    } else if (result.startsWith("You Lose")) {
      computerScore++;
    }

    console.log(`Round ${i + 1}: Player - ${playerScore}, Computer - ${computerScore}`);

    if (i === 3) {
      console.log(`LAST ROUND! Let's see if you can beat the computer!`);
    }
  }

  setTimeout(function() {
    playerResult(playerScore, computerScore);
  }, 100);
};

const playerResult = function(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert("Congratulations, you won the game!");
    console.log("You won the game!");
  } else if (computerScore > playerScore) {
    alert("Sorry, you lost the game.");
    console.log("You lost the game.");
  } else {
    alert("It's a tie game!");
    console.log("The game is a tie!");
  }

  playAgain();
};

const playAgain = function() {
  let response = prompt("Do you want to play again? (yes/no)").toLowerCase();
  if (response === "yes") {
    game();
  } else {
    alert("Thanks for playing! See you next time.");
  }
};

setTimeout(game, 100);
