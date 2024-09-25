alert(`
Welcome to Rock, Paper or Scissors game!
Here's how to play:
1. Make your choice: Rock, Paper or Scissors.
2. You will be playing against the computer 5 rounds. Whoever wins 3 rounds first wins! 
3. Your input should be given in the Prompt window.
4. To play, please use the console on your browser's inspection tool. 
Good luck! :)
`)

const computerPlay = function() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function playRound(playerSelection, computerSelection) {
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
