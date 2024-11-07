'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const btnAcknowledge = document.querySelector('.btn--acknowledge');
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

// Acknowledge to start the game
const initRule = function () {
  document.querySelector('.rules__container').classList.remove('hidden');
};
initRule();

btnAcknowledge.addEventListener('click', () => {
  document.querySelector('.rules__container').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

// Check guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No guess
  if (!guess) {
    displayMessage('⛔ No number guessed');
  }

  // Correct guess
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    score > highScore ? (highScore = score) : highScore;
    document.querySelector('.highscore').textContent = highScore;
  }

  // Wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > 20 || guess < 0) {
        displayMessage('❌ Invalid number guessed');
      } else {
        displayMessage(guess > secretNumber ? '📈 Too high !' : '📉 Too low !');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('☠️ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Set current year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
