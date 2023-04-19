//fetching the necessary html elements
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

//if we drag the mouse on the body element noting happens (to help with changing the mouse cursor)
body.ondragstart = () => {
  return false;
};

//if mouse click is released, pointer events for each div stop (to help with drawing)
body.addEventListener("mouseup", () => {
  yDiv.forEach(function (yDiv) {
    yDiv.style.pointerEvents = "none";
  });
});

//setting a deafult value for the canvas size (30x30)
let value = 30;

//creating and inserting the current value (30x30) text on page
sizeText = document.createElement("a");
sizeText.className = "sizeText";
sizeText.textContent = `${value} X ${value}`;
sizeText.style.fontSize = "large";
sizeText.style.fontWeight = "bold";
menuBtm.insertBefore(sizeText, menuBtm.children[3]);

/*creating a function that generates the required number of divs,
 (pixels) on the canvas by multiplying the current value by itself,
 and using that result the for loop iterates that many times creating,
 the divs. Then gives the canvas two css grid properties which take the,
 current value, one for the grid columns and the other for rows*/
function generateCanvas(value) {
  let doubleValue = value * value;
  for (let i = 0; i < doubleValue; i++) {
    yDiv = document.createElement("div");
    yDiv.className = "verticalDivs";
    canvasContainer.appendChild(yDiv);
  }
  canvasContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  canvasContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
}

//setting the default color value (black)
let colorValue = colorPicker.value;

function drawing(colorValue) {
  colorPicker.addEventListener("input", () => {
    colorValue = colorPicker.value; //on input the colorValue variable becomes the value of the color picker
  });

  yDiv = document.querySelectorAll(".verticalDivs"); //fetching all generated divs (pixels)

  canvasContainer.addEventListener("mousedown", () => {
    canvasContainer.style.cursor = "url('./imgs/pencil.png'),auto"; //while mousedown on canvas change the cursor
    yDiv.forEach(function (yDiv) {
      //go through each div setting pointer events to deafult and,
      yDiv.style.pointerEvents = ""; //give all divs a mouseover listener that changes the backgound color
      yDiv.addEventListener("mouseover", () => {
        yDiv.style.backgroundColor = `${colorValue}`;
      });
    });
  });
  eraseBttn.addEventListener("click", () => {
    canvasContainer.style.cursor = "url('./imgs/icons8-erase-32.png'),auto";
    document.getElementById("colorInput").focus();
    colorValue = "#ffffff"; //clicking on the erase button makes the color value equal hex white
  });
}

function rainbowClr() {
  yDiv = document.querySelectorAll(".verticalDivs");

  canvasContainer.addEventListener("mousedown", () => {
    canvasContainer.style.cursor = "url('./imgs/pencil.png'),auto";
    yDiv.forEach(function (yDiv) {
      yDiv.style.pointerEvents = "";
      yDiv.addEventListener("mouseover", () => {
        //similar to the drawing function the same things happen,
        let rainbowRndm = Math.floor(Math.random() * 16777215).toString(16); //only the color value for each div is a new randomly generated value
        let colorRainbow = "#" + rainbowRndm;
        yDiv.style.backgroundColor = `${colorRainbow}`;
      });
    });
  });

  eraseBttn.addEventListener("click", () => {
    yDiv = document.querySelectorAll(".verticalDivs");
    canvasContainer.addEventListener("mousedown", () => {
      canvasContainer.style.cursor = "url('./imgs/icons8-erase-32.png'),auto";
      yDiv.forEach(function (yDiv) {
        yDiv.style.pointerEvents = ""; //same thing as before but this time saving color white hex in a different variable
        yDiv.addEventListener("mouseover", () => {
          let rainbowRndm = "ffffff";
          let colorRainbow = "#" + rainbowRndm;
          yDiv.style.backgroundColor = `${colorRainbow}`;
        });
      });
    });
  });
}

//click on rainbow button calls the rainbowClr function
rainbowBtn.addEventListener("click", () => {
  rainbowClr();
});

/*when the click is released over the canvas return defalut cursor
and for each div set pointer events to none*/
canvasContainer.addEventListener("mouseup", () => {
  canvasContainer.style.cursor = "default";
  yDiv.forEach(function (yDiv) {
    yDiv.style.pointerEvents = "none";
  });
});

//function that fetches and removes all divs(pixles)
function removeCanvas() {
  yDiv = document.querySelectorAll(".verticalDivs");
  yDiv.forEach(function (yDiv) {
    yDiv.remove();
  });
}

//calling the generate canvas and drawing functions
generateCanvas(value);
drawing(colorValue);

//calling the remove canvas function whenever the mouse click is down on the slider
slider.addEventListener("mousedown", () => {
  removeCanvas();
});

/*on slider input change value variables value to the slider value,
and change the text content of the sizeText element accordingly*/
slider.addEventListener("input", () => {
  value = slider.value;
  sizeText = document.querySelector(".sizeText");
  sizeText.textContent = `${value} X ${value}`;
});

/*when click is released on the slider, call generate canvas,
and drawing functions*/
slider.addEventListener("mouseup", () => {
  document.getElementById("colorInput").focus();
  generateCanvas(value);
  drawing(colorValue);
  colorValue = colorPicker.value;
});

//setting cursors
eraseBttn.addEventListener("click", (event) => {
  eraseBttn.style.cursor = "url('./imgs/icons8-erase-32.png'),auto";
  body.style.cursor = "url('./imgs/icons8-erase-32.png'),auto";
  event.stopPropagation();
});

//setting cursor behaviour on click of body
body.addEventListener("click", () => {
  eraseBttn.style.cursor = "default";
  body.style.cursor = "default";
});

//calling functions based on mouse actions
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
