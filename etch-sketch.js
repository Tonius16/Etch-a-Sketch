/*function generate canvas(size) {
    if (size >= 16 && size <= 100) {
    for (i = 0; i < size; i++) {
        oneDiv = create element
        apendchild to parent
    }
    
    function pick color() {
        get picker element
        change div color to value of picker with .value
    } */

const colorInput = document.getElementById("colorInput");
const eraseBttn = document.getElementById("erase");
const slider = document.getElementById("myRange");
const newCanBttn = document.getElementById("newCanvas");
const canvasContainer = document.getElementById("canvasContainer");
const verticalContainer = document.getElementById("verticalContainer");
const horizontalContainer = document.getElementById("horizontalContainer");
const colorPicker = document.getElementById("colorInput");
const body = document.querySelector("body");

let value = 16;

function generateCanvas(value) {
  let doubleValue = value * value;
  canvasContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  canvasContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  for (let i = 0; i < doubleValue; i++) {
    yDiv = document.createElement("div");
    yDiv.className = "verticalDivs";
    canvasContainer.appendChild(yDiv);
  }
}

let colorValue = colorPicker.value;

function draw(colorValue) {
  colorPicker.addEventListener("input", () => {
    colorValue = colorPicker.value;
  });
  yDiv = document.querySelectorAll(".verticalDivs");
  yDiv.forEach(function (yDiv) {
    yDiv.addEventListener("mousedown", () => {
      yDiv.style.backgroundColor = `${colorValue}`;
    });
  });
}

function removeCanvas() {
  yDiv = document.querySelectorAll(".verticalDivs");
  yDiv.forEach(function (yDiv) {
    yDiv.remove();
  });
}

generateCanvas(value);
draw(colorValue);

slider.addEventListener("mousedown", () => {
  removeCanvas();
});

slider.addEventListener("input", () => {
  value = slider.value;
});

slider.addEventListener("mouseup", () => {
  document.getElementById("colorInput").focus();
  generateCanvas(value);
  colorValue = colorPicker.value;
  draw(colorValue);
});
