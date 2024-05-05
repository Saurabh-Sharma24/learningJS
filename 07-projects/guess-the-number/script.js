let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');

const pastGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');

const showMessage = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Pleaase enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Guess must be between 1 and 100');
  } else {
    prevGuesses.push(guess);
    if (guess > 10) {
      resetGuess(guess);
      displayMessage(`Game Over: Number was ${randomNumber}`);
      endGame();
    } else {
      resetGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You got it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Guess is too low');
  } else if (guess > randomNumber) {
    displayMessage('Guess is too high');
  }
}

function displayMessage(message) {
  showMessage.innerHTML = `<h3>${message}</h3>`;
}

function resetGuess(guess) {
  userInput.value = '';
  pastGuesses.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', (e)=> {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuesses = []
    numGuess = 1
    pastGuesses.innerHTML = ''
    remainingGuesses.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeAttribute('p')
    playGame = true;
  })
}
