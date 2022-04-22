//game is played against a computer.
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let gameCount = 1;

function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  return rps[Math.floor(Math.random() * rps.length)];
}

function gameOutcome(playerScore, computerScore) {
  let outcome;
  if (playerScore > computerScore) {
    outcome = "You win!!";
  } else if (playerScore < computerScore) {
    outcome = "You lose!!";
  } else {
    outcome = "It's a tie!!";
  }
  return outcome;
}

function reset() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  gameCount++;
  createDiv(); //create new div after reset
}

function declareWinner() {
  if (roundCount === 5) {
    //appends header to div with winner declaration
    declareWinnerHeader(gameOutcome(playerScore, computerScore));
    reset();
  }
}

function keepScore(result) {
  if (result[1] === 1) {
    playerScore++;
  } else if (result[1] === 2) {
    computerScore++;
  }
  roundCount++;
  parText(playerScore, computerScore); //update score to p element
  declareWinner();
}

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

  keepScore(result);
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));

function createDiv() {
  const div = document.createElement("div");
  div.id = "div" + gameCount;
  const h2 = document.createElement("h2");
  h2.innerText += `Round ${gameCount}. Fight!`;
  div.appendChild(h2);
  const p = document.createElement("p");
  p.id = "par" + gameCount;
  p.innerText = "0 - 0";
  div.appendChild(p);
  document.body.appendChild(div);
}

if (gameCount === 1) createDiv(); //create first div

function declareWinnerHeader(outcome) {
  const h3 = document.createElement("h3");
  const div = document.querySelector(`#div${gameCount}`);
  h3.innerText = `${outcome}`;
  div.appendChild(h3);
}

function parText(playerScore, computerScore) {
  const p = document.querySelector(`#par${gameCount}`);
  p.innerText = `${playerScore} - ${computerScore}`;
}
