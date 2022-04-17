// Game is played against a computer.

//computerPlay randomly returns rock, paper or scissors
function computerPlay() {
  //create array with values to pick randomly
  const rps = ["rock", "paper", "scissors"];
  //randomly pick one and return
  return rps[Math.floor(Math.random() * rps.length)];
}
