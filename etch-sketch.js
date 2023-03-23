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
const horizontalContainer = document.getElementById("horizontalContainer");
const verticalContainer = document.getElementById("verticalContainer");
let value = 0;

slider.addEventListener("input", () => {
  value = slider.value;
});

slider.addEventListener("mousedown", () => {
  generateCanvas(value);
});

function generateCanvas(value) {
  for (i = 0; i < value; i++) {
    yDiv = document.createElement("div");
    yDiv.className = "verticalDivs";
    verticalContainer.appendChild(yDiv);
    xDiv = document.createElement("div");
    xDiv.className = "horizontalDivs";
    horizontalContainer.appendChild(xDiv);
    console.log(value);
  }
}

function removeCanvas() {
  yDiv = document.querySelectorAll(".verticalDivs");
  yDiv.forEach(function (yDiv) {
    yDiv.remove();
  });
  xDiv = document.querySelectorAll(".horizontalDivs");
  xDiv.forEach(function (xDiv) {
    xDiv.remove();
  });

  console.log(xDiv);
}
slider.addEventListener("mouseup", () => {
  removeCanvas();
});
