// The Great RGB Color Game by Colt Steele (https://www.udemy.com/the-web-developer-bootcamp)

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

let numSquares = 6;
let colors = [];
let pickedColor;

function init() {
  levelButtons();
  placeSquares();
  clearAndResetBoard();
}


function levelButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");

      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

      clearAndResetBoard();
    });
  }
}

function placeSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.background = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.background;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?"
        changeColor(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

resetButton.addEventListener("click", function () {
  clearAndResetBoard();
});

function clearAndResetBoard() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
}

function changeColor(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

  // red green blue
  // #RRGGBB
  // #RGB if R's are same, G's are same, B's are same ex: #cba -> #ccbbaa
  // rgba(139, 142, 6, 0.75); // alpha aka opacity
}

init();
