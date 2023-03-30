const colorInput = document.getElementById("colorInput");
const eraseBttn = document.getElementById("erase");
const slider = document.getElementById("myRange");
const newCanBttn = document.getElementById("newCanvas");
const canvasContainer = document.getElementById("canvasContainer");
const verticalContainer = document.getElementById("verticalContainer");
const horizontalContainer = document.getElementById("horizontalContainer");
const colorPicker = document.getElementById("colorInput");
const rainbowBtn = document.getElementById("rainbowBtn");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const menuBtm = document.getElementById("menuBtm");

body.ondragstart = () => {
  return false;
};

body.addEventListener("mouseup", () => {
  yDiv.forEach(function (yDiv) {
    yDiv.style.pointerEvents = "none";
  });
});

let value = 30;

sizeText = document.createElement("a");
sizeText.className = "sizeText";
sizeText.textContent = `${value} X ${value}`;
sizeText.style.fontSize = "large";
sizeText.style.fontWeight = "bold";
menuBtm.insertBefore(sizeText, menuBtm.children[3]);

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
    canvasContainer.style.cursor = "url('./imgs/pencil.png'),auto";
    yDiv.forEach(function (yDiv) {
      yDiv.style.pointerEvents = "";
      yDiv.addEventListener("mouseover", () => {
        yDiv.style.backgroundColor = `${colorValue}`;
      });
    });
  });
}

function rainbowClr() {
  yDiv = document.querySelectorAll(".verticalDivs");
  canvasContainer.addEventListener("mousedown", () => {
    canvasContainer.style.cursor = "url('./imgs/pencil.png'),auto";
    yDiv.forEach(function (yDiv) {
      yDiv.style.pointerEvents = "";
      yDiv.addEventListener("mouseover", () => {
        let rainbowRndm = Math.floor(Math.random() * 16777215).toString(16);
        let colorRainbow = "#" + rainbowRndm;
        yDiv.style.backgroundColor = `${colorRainbow}`;
      });
    });
  });
  eraseBttn.addEventListener("click", () => {
    yDiv = document.querySelectorAll(".verticalDivs");
    canvasContainer.addEventListener("mousedown", () => {
      canvasContainer.style.cursor = "url('./imgs/pencil.png'),auto";
      yDiv.forEach(function (yDiv) {
        yDiv.style.pointerEvents = "";
        yDiv.addEventListener("mouseover", () => {
          let rainbowRndm = "ffffff";
          let colorRainbow = "#" + rainbowRndm;
          yDiv.style.backgroundColor = `${colorRainbow}`;
        });
      });
    });
  });
}

rainbowBtn.addEventListener("click", () => {
  rainbowClr();
});

canvasContainer.addEventListener("mouseup", () => {
  canvasContainer.style.cursor = "default";
  yDiv.forEach(function (yDiv) {
    yDiv.style.pointerEvents = "none";
  });
});

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

eraseBttn.addEventListener("click", (event) => {
  eraseBttn.style.cursor = "url('./imgs/icons8-erase-32.png'),auto";
  body.style.cursor = "url('./imgs/icons8-erase-32.png'),auto";
  event.stopPropagation();
});

body.addEventListener("click", () => {
  eraseBttn.style.cursor = "default";
  body.style.cursor = "default";
});

colorPicker.addEventListener("click", () => {
  drawing(colorValue);
});

newCanBttn.addEventListener("mousedown", () => {
  removeCanvas();
});

newCanBttn.addEventListener("mouseup", (event) => {
  event.stopPropagation();
  generateCanvas(value);
});

newCanBttn.addEventListener("click", () => {
  drawing(colorValue);
});
