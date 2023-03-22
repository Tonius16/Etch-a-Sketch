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
const slider = document.getElementById("myRange").value;
const newCanBttn = document.getElementById("newCanvas");
const canvasContainer = document.getElementById("canvasContainer");
const horizontalContainer = document.getElementById("horizontalContainer");
const verticalContainer = document.getElementById("verticalContainer");

function generateCanvas() {
  for (i = 0; i < 100; i++) {
    yDiv = document.createElement("div");
    yDiv.className = "verticalDivs";
    verticalContainer.appendChild(yDiv);
    xDiv = document.createElement("div");
    xDiv.className = "horizontalDivs";
    horizontalContainer.appendChild(xDiv);
    console.log(slider);
  }
}

function updateCanvas() {}

function removeOldCanvas() {
  yDiv.remove();
  xDiv.remove();
}

generateCanvas();
