//Game is played against a computer.

//computerPlay() randomly returns rock, paper or scissors
function computerPlay() {
  //create array with values to pick randomly
  const rps = ["rock", "paper", "scissors"];
  //randomly pick one and return
  return rps[Math.floor(Math.random() * rps.length)];
}

//playRound() plays one round of rps and returns a string
//declaring a winner between computer and player

const playRound = function (playerSelection, computerSelection) {
  //create a result array with result string and a number that determines the outcome so there is only one return statement
  // 0 - tie
  // 1 - win (for player)
  // 2 - lose (for player)
  let result = ["", null];

  //lowercase player selection and computer selection so there is no comparison error and also uppercase first letter for printing to console
  const player =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  const computer =
    computerSelection.charAt(0).toUpperCase() +
    computerSelection.slice(1).toLowerCase();

  //there are 3 possible outcomes for player win, tie and lose
  //and there is 3 * 3 possible outcomes of the round for the player
  //so we can group them in 3 outcomes
  //tie: rock-rock, paper-paper, scissors-scissors
  //win: rock-scissors, scissors-paper, paper-rock
  //lose: rock-paper, scissors-rock, paper-scissors
  if (player === computer) {
    result[0] = `You Tie! ${player} ties ${computer}`;
    result[1] = 0;
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    result[0] = `You Win! ${player} beats ${computer}`;
    result[1] = 1;
  } else {
    result[0] = `You Lose! ${player} loses to ${computer}`;
    result[1] = 2;
  }
  console.log(result); //added-remove
  return result;
};

//game() plays 5 rounds and declares a winner

function game() {
  //variables to store scores
  let playerScore = 0;
  let computerScore = 0;
  //variables to store players and computers choice
  let playerSelection = "";
  let computerSelection = "";
  //empty variable to store result in
  let result = null;

  console.log("Let the game begin!!");
  //while loop to iterate 5 rounds
  // let i = 0;
  // while (i < 5) {
  //   playerSelection = window.prompt("Enter: rock, paper or scissors");
  //   computerSelection = computerPlay();
  //   result = playRound(playerSelection, computerSelection);

  //   //keep track of scores
  //   if (result[1] === 1) {
  //     playerScore++;
  //   } else if (result[1] === 2) {
  //     computerScore++;
  //   }

  //   //print round outcome and current score
  //   console.log(`${result[0]}\nScore: ${playerScore} - ${computerScore}`);

  //   i++;
  // }

  //no round cap while loop
  let i = 0;
  while (true) {
    playerSelection = window.prompt("Enter: rock, paper or scissors");
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);

    //keep track of scores
    if (result[1] === 1) {
      playerScore++;
    } else if (result[1] === 2) {
      computerScore++;
    }

    //print round outcome and current score
    console.log(`${result[0]}\nScore: ${playerScore} - ${computerScore}`);

    i++;
  }

  //print game outcome message
  if (playerScore > computerScore) {
    console.log("You win!!");
  } else if (playerScore < computerScore) {
    console.log("You lose!!");
  } else {
    console.log("It's a tie!!");
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
