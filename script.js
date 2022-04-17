//Game is played against a computer.

//computerPlay randomly returns rock, paper or scissors
function computerPlay() {
  //create array with values to pick randomly
  const rps = ["rock", "paper", "scissors"];
  //randomly pick one and return
  return rps[Math.floor(Math.random() * rps.length)];
}

//playRound plays one round of rps and returns a string
//declaring a winner between computer and player
function playRound(playerSelection, computerSelection) {
  //there are 3 possible outcomes for player win, tie and lose
  //and there is 3 * 3 possible outcomes of the round for the player
  //so we can group them in 3 outcomes
  //tie: rock-rock, paper-paper, scissors-scissors
  //win: rock-scissors, scissors-paper, paper-rock
  //lose: rock-paper, scissors-rock, paper-scissors

  //create a variable so there is only one return statement
  let result = "";

  //lowercase player selection and computer selection so there is no comparison error and also uppercase first letter for printing to console
  const player =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  const computer =
    computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1).toLowerCase();

  if (player === computer) {
    result = `You Tie! ${player} ties ${computer}`;
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    result = `You Win! ${player} beats ${computer}`;
  } else {
    result = `You Lose! ${player} loses to ${computer}`;
  }

  return result;
}
