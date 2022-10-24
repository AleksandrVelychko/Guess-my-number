'use strict';
/*
console.log(document.querySelector('.message').textContent); 

document.querySelector('.score').textContent = '22';
document.querySelector('.guess').value = 23;
document.querySelector('.number').textContent = '13';
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// game logic implementation
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when no input
  if (!guess) {
    // document.querySelector('.message').textContent = '👀 No number!';
    displayMessage('👀 No number!');
  }
  // when number is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong (refactored)
  else if(guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '⛔ Too high!' : '⛔ Too low!';
      displayMessage(guess > secretNumber ? '⛔ Too high!' : '⛔ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '☹ You lost the game!';
      displayMessage('☹ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  // when number is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when number is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});
// reset button implementation
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});