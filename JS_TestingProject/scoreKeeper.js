var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var h1 = document.querySelector("h1");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.querySelector("#reset");
var numberInput = document.querySelector("input");
var winnerScoreDisplay = document.querySelector("#winnerScoreDisplay");
var gameOver = false;
var winnerScore = 7;
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click",function(){
  p1Score = displayFunction(p1Score, p1Display);
  /*
  if(!gameOver) {
    p1Score++;
    p1Display.innerHTML = p1Score;
    if(p1Score == winnerScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
  }*/
});

p2Button.addEventListener("click",function(){
  p2Score = displayFunction(p2Score, p2Display);
  /*if(!gameOver) {
    p2Score++;
    p2Display.innerHTML = p2Score;
    if(p2Score == winnerScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
  }*/
});

resetButton.addEventListener("click",function(){
  reset();
});

numberInput.addEventListener("change", function(){
  reset();
  winnerScore = Number(this.value);
  winnerScoreDisplay.innerHTML = Number(this.value);
});

function displayFunction(score, display) {
  if(!gameOver) {
    this.score = score; 
    score++;
    display.innerHTML = score;
    if(score == winnerScore) {
      display.classList.add("winner");
      gameOver = true;
    }
    return score;
  }
};

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.innerHTML = p1Score;
  p2Display.innerHTML = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
};
