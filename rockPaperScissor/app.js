const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userSpan = document.getElementById('user-score');
const compSpan = document.getElementById('comp-score');
let userCount = 0;
let compCount = 0;
let userChoice;
console.log(possibleChoices);
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    playGame(userChoice);
  })
);

function playGame(userChoice) {
  const compChoice = getComputerChoice();
  console.log(compChoice);
  computerChoiceDisplay.innerHTML = compChoice;
  const winner = getWinner(userChoice, compChoice);
  updateScore(winner);
  showResult(winner, userChoice, compChoice);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNum = Math.floor(Math.random() * choices.length);
  console.log(randomNum);
  return choices[randomNum];
}

function getWinner(userChoice, compChoice) {
  if (userChoice === compChoice) return 'draw';
  else if (
    (userChoice === 'rock' && compChoice === 'scissor') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissor' && compChoice === 'paper')
  ) {
    return 'user';
  } else return 'computer';
}

function updateScore(winner) {
  if (winner === 'user') {
    userCount++;
    userSpan.innerText = userCount;
  } else if (winner === 'computer') {
    compCount++;
    compSpan.innerText = compCount;
  }
}

function showResult(winner, userChoice, compChoice) {
  if (winner === 'draw') {
    resultDisplay.textContent = `It's a draw! Both chose ${userChoice}.`;
  } else if (winner === 'user') {
    resultDisplay.textContent = `You win! ${userChoice} beats ${compChoice}.`;
  } else {
    resultDisplay.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
  }
}
