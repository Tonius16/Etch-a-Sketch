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
const midScreen = document.getElementById("midScreen");
const menu = document.getElementById("menu");

body.ondragstart = () => {
  return false;
};

body.addEventListener("mouseup", () => {
  yDiv.forEach(function (yDiv) {
    yDiv.style.pointerEvents = "none";
  });
});

let value = 70;

sizeText = document.createElement("a");
sizeText.className = "sizeText";
sizeText.textContent = `${value} X ${value}`;
sizeText.style.fontSize = "large";
sizeText.style.fontWeight = "bold";
menu.insertBefore(sizeText, menu.children[4]);

tutorialText = document.createElement("a");
tutorialText.className = "tutorialText";
tutorialText.style.fontSize = "large";
tutorialText.style.fontWeight = "bold";
tutorialText.style.whiteSpace = "pre";
tutorialText.textContent =
  "Press and hold the LM\r\nbutton on the cavas\r\nto begin drawing!";
midScreen.insertBefore(tutorialText, midScreen.firstChild);

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

function drawing(colorValue) {
  colorPicker.addEventListener("input", () => {
    colorValue = colorPicker.value;
  });
  eraseBttn.addEventListener("click", () => {
    document.getElementById("colorInput").focus();
    colorValue = "#ffffff";
  });

  yDiv = document.querySelectorAll(".verticalDivs");
  canvasContainer.addEventListener("mousedown", () => {
    yDiv.forEach(function (yDiv) {
      yDiv.style.pointerEvents = "";
      yDiv.addEventListener("mouseover", () => {
        yDiv.style.backgroundColor = `${colorValue}`;
      });
    });
  });
}

canvasContainer.addEventListener(
  "mousedown",
  () => {
    tutorialText.textContent = "Release the click\r\nwhen you want to stop";
  },
  { once: true }
);

canvasContainer.addEventListener("mouseup", () => {
  yDiv.forEach(function (yDiv) {
    yDiv.style.pointerEvents = "none";
  });
});

canvasContainer.addEventListener(
  "mouseup",
  () => {
    tutorialText.className = "tutorialText";
    tutorialText.style.fontSize = "large";
    tutorialText.style.fontWeight = "bold";
    tutorialText.style.marginTop = "-570px";
    tutorialText.style.marginLeft = "-200px";
    tutorialText.textContent =
      "<<==== Click on the color\r\n  picker to change color!";
  },
  { once: true }
);

function removeCanvas() {
  yDiv = document.querySelectorAll(".verticalDivs");
  yDiv.forEach(function (yDiv) {
    yDiv.remove();
  });
}

generateCanvas(value);
drawing(colorValue);

slider.addEventListener("mousedown", () => {
  removeCanvas();
});

slider.addEventListener("input", () => {
  value = slider.value;
  sizeText = document.querySelector(".sizeText");
  sizeText.textContent = `${value} X ${value}`;
});

slider.addEventListener("mouseup", () => {
  document.getElementById("colorInput").focus();
  generateCanvas(value);
  drawing(colorValue);
  colorValue = colorPicker.value;
});

slider.addEventListener(
  "input",
  () => {
    tutorialText.className = "tutorialText";
    tutorialText.style.fontSize = "large";
    tutorialText.style.fontWeight = "bold";
    tutorialText.style.marginBottom = "-980px";
    tutorialText.style.marginLeft = "-200px";
    tutorialText.textContent =
      "<<====\r\nClick on the eraser to\r\nerase mistakes!";
  },
  { once: true }
);

colorPicker.addEventListener("input", () => {
  colorValue = colorPicker.value;
});

colorPicker.addEventListener(
  "input",
  () => {
    tutorialText.className = "tutorialText";
    tutorialText.style.fontSize = "large";
    tutorialText.style.fontWeight = "bold";
    tutorialText.style.marginBottom = "-570px";
    tutorialText.style.marginLeft = "-200px";
    tutorialText.textContent =
      "<<====\r\nMove the slider to change\r\ncanvas size!";
  },
  { once: true }
);

eraseBttn.addEventListener("click", () => {
  tutorialText.className = "tutorialText";
  tutorialText.style.fontSize = "large";
  tutorialText.style.fontWeight = "bold";
  tutorialText.style.marginBottom = "-800px";
  tutorialText.style.marginLeft = "-200px";
  tutorialText.textContent =
    "<<====\r\nClick on the New Canvas Button to\r\n refresh the canvas!";
});

newCanBttn.addEventListener("mousedown", () => {
  removeCanvas();
});

newCanBttn.addEventListener("mouseup", () => {
  generateCanvas(value);
});

newCanBttn.addEventListener("click", () => {
  drawing(colorValue);
});
