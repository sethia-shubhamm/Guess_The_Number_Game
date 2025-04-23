let min = Number(0),
  max = Number(100),
  random = Math.floor(Math.random() * (max - min + 1)) + min;
let bestGuess = Number.MAX_VALUE;
document.querySelector(
  ".printedRange"
).innerHTML = `Enter a number between ${min} and ${max}`;
let countGuesses = 0;
function addRange() {
  let val1 = document.querySelector("#val1");
  let val2 = document.querySelector("#val2");
  min = Number(val1.value);
  max = Number(val2.value);
  if (min == 0 && max == 0) {
    min = 0;
    max = 100;
  }
  console.log(min);
  console.log(max);
  random = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random);
  document.querySelector(
    ".printedRange"
  ).innerHTML = `Enter a number between ${min} and ${max}`;
}

console.log(random);

function checkGuess() {
  let guess = Number(document.querySelector(".input").value);
  if (guess == random) {
    countGuesses++;
    document.querySelector(".ptext").innerHTML = "You Guessed It!!!";
    document.querySelector(".box").innerHTML = `${countGuesses}`;
    if (countGuesses < bestGuess) {
      bestGuess = countGuesses;
      document.querySelector(".bestScore").innerHTML = `${countGuesses}`;
    }
  } else if(guess > random) {
    document.querySelector(".ptext").innerHTML = "Too High...";
    countGuesses++;
    document.querySelector(".box").innerHTML = `${countGuesses}`;
  }
  else if(guess < random) {
    document.querySelector(".ptext").innerHTML = "Too Low...";
    countGuesses++;
    document.querySelector(".box").innerHTML = `${countGuesses}`;
  }
  if (guess < min || guess > max) {
    document.querySelector(".ptext").innerHTML = "Out of Range...";
    countGuesses++;
    document.querySelector(".box").innerHTML = `${countGuesses}`;
  }

}

function giveUp() {
  countGuesses = 0;
  document.querySelector(".box").innerHTML = `${countGuesses}`;
  addRange();
}

function playAgain() {
  countGuesses = 0;
  document.querySelector(".box").innerHTML = `${countGuesses}`;
  addRange();
}
