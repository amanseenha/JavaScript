let range = parseInt(prompt("Enter upper bound:"));

while (!parseInt(range)) {
  range = prompt("Enter a valid number:");
}
const targetNumber = Math.floor(Math.random() * range) + 1;
console.log(targetNumber);
let guess = prompt("Enter your first guess:");
let numberOfGuesses = 1;
while (parseInt(guess) !== targetNumber) {
  numberOfGuesses++;
  if (guess === 'q') break;
  if (guess > targetNumber) {
    guess = prompt("Try smaller:");
  } else {
    guess = prompt("Try higher:");
  }
}
if (guess === 'q'){
    console.log("You Quit");
}
else
console.log(`Winner! Winner! Chicken Dinner, You took ${numberOfGuesses} guess(es).`)