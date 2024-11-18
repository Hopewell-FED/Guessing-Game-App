'use strict';

//Generating a random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //when input is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber && guess > secretNumber && score > 1) {
    displayMessage('📈 Number too high, try again!');
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess !== secretNumber && guess < secretNumber && score > 1) {
    displayMessage('📉 Number too low, try again!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('🎆 You lost!');
    document.querySelector('.score').textContent = 0;
  }
});

//Implementing the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
