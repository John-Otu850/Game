//Global score variables
let computerScore = 0;
let humanScore = 0;



function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3)

    if(randomNum === 0){
        return 'Rock';
    }
    else if(randomNum === 1){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}


function getHumanChoice(){
    let humanChoice = prompt('Enter rock,paper or Scissors');
    return humanChoice
}

console.log('Computer chose:' + getComputerChoice());
console.log('Human chose:' + getHumanChoice());

console.log('Compter score:' + computerScore);
console.log('Human score:' + humanScore);

function playRound(humanChoice, computerChoice) {
    // Make the human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
        humanScore++;
    } else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        computerScore++;
    }
}


function playGame() {
  // Score tracking variables
  let humanScore = 0;
  let computerScore = 0;

  // Random computer choice
  function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      return "rock";
    } else if (randomNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  // Get user choice
  function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors");
    return userInput.toLowerCase();
  }

  // Play a single round and update scores
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Play 5 rounds
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  // Final result
  console.log("\n=== Final Score ===");
  console.log(`You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 The computer won the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

// Start the game
playGame();
