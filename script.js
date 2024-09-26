alert(`
Welcome to the Rock, Paper, Scissors game!

- Here you get to play against your own computer in a match best of 5.
- In order to play this game you will need to open your inspecter window and use the console tab.
- After clicking 'OK' you can type your chose inside the box.
- You will afterwards see the result in the console.

May the best player win!`);

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

    console.log(`Round ${i+1}: Player - ${playerScore}, Computer - ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("You won!");
  } else if ( computerScore > playerScore) {
    console.log("You Lose!");
  } else {
    console.log("The game is a tie!");
  }
};

game();