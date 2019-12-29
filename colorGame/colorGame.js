//alert("Connected.");
/*
var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
];*/

var numberOfSquares = 6;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var colors = [];
var pickedColor = pickColor();
displayColor.textContent = pickedColor;

init();

resetButton.addEventListener("click", function() {
  reset();
});

function init() {
  setUpMode();
  setUpSquare();
  reset();
};

function setUpMode() {
  for(var i = 0;i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  };
};

function setUpSquare() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //add eventlistenr to each square
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        h1.style.background = pickedColor;
        changeColor(pickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
};

function changeColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var random = Math.floor((Math.random() * colors.length));
  return colors[random];
};

function generateRandomColor(num) {
  var colorArray = [];
  for(var i = 0; i < num; i++) {
    var color = "rgb(" + Math.floor((Math.random() * 256)) + ", ";
    color = color + Math.floor((Math.random() * 256)) + ", ";
    color = color + Math.floor((Math.random() * 256)) + ")";
    colorArray.push(color);
  }
  return colorArray;
};



function reset() {
  colors = generateRandomColor(numberOfSquares);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
};

/*
easyButton.addEventListener("click", function() {
  numberOfSquares = 3;
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColor(3);
  pickedColor = pickColor();
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  displayColor.textContent = pickedColor;
});
hardButton.addEventListener("click", function() {
  numberOfSquares = 6;
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  colors = generateRandomColor(6);
  pickedColor = pickColor();
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
  }
  displayColor.textContent = pickedColor;
});
*/