const words = ["apple", "banana", "grape", "mango", "orange", "peach", "kiwi"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;

console.log("Secret word (for testing):", secretWord);

const input = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");

function checkGuess() {
  const userGuess = input.value.trim().toLowerCase();
  input.value = "";

  if (userGuess === secretWord) {
    message.textContent = "Congratulations! You guessed the secret word!";
    message.style.color = "green";
    endGame();
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      message.textContent = `Incorrect guess. You have ${attemptsLeft} attempt(s) left. Try again!`;
      message.style.color = "orange";
    } else {
      message.textContent = `Game over! The secret word was '${secretWord}'.`;
      message.style.color = "red";
      endGame();
    }
  }
}

function endGame() {
  submitBtn.disabled = true;
  input.disabled = true;
  restartBtn.style.display = "inline";
}

function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attemptsLeft = 5;
  console.log("Secret word (for testing):", secretWord);
  input.disabled = false;
  input.value = "";
  message.textContent = "";
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
}

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});