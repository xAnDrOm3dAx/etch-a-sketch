const blackBtn = document.querySelector("#black-button");
const rainbowBtn = document.querySelector("#rainbow-button");
const whiteBtn = document.querySelector("#white-button");
const clearGridBtn = document.querySelector("#clear-button");
const submitBtn = document.querySelector("#submit-button");
const gridContainer = document.querySelector(".grid-container");
const promptMessage = document.querySelector("#prompt-message");
const mirrorInput = document.querySelector("#mirror-user-input");
const userInput = document.querySelector("#user-input");

let defaultColor = "black";
let isDrawing = false; // Variable to keep track of drawing state

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  createGrid(32);

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const size = gridSize();
    createGrid(size);
    userInput.value = "";
    mirrorInput.textContent = "";
  });

  userInput.addEventListener("input", () => {
    // Update the content of the output element with the input value
    mirrorInput.textContent = "x " + userInput.value;
  });

  // Display the prompt message when the userInput field gains focus
  userInput.addEventListener("focus", () => {
    promptMessage.textContent = "Please enter a number between 1 and 99";
  });

  // Mouseup event listener added to the entire document to stop drawing when the mouse button is released anywhere
  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  // Consolidate event listeners
  blackBtn.addEventListener("click", () => setColor("black"));
  whiteBtn.addEventListener("click", () => setColor("white"));
  rainbowBtn.addEventListener("click", () => setColor("rainbow"));
  clearGridBtn.addEventListener("click", () => clearGrid());
});

function createGrid(size) {
  gridContainer.textContent = ""; // Clear existing grid
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const numberOfDivs = size * size;
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("colored-divs");

    div.addEventListener("mousedown", () => {
      isDrawing = true;
      colorTheDiv.call(div); // Call colorTheDiv immediately when mouse button is pressed
      promptMessage.textContent = "Have fun sketching!";
    });

    div.addEventListener("mouseover", () => {
      if (isDrawing) {
        colorTheDiv.call(div);
      }
    });

    gridContainer.appendChild(div);
  }
}

function gridSize() {
  const userInput = document.querySelector("#user-input").value;

  if (isNaN(userInput) || userInput < 1 || userInput > 99) {
    promptMessage.textContent = "Invalid Entry. Please enter a number between 1 and 99";
    return null;
  } else {
    promptMessage.textContent = "Have fun sketching!";
    return userInput;
  }
}

function setColor(colorChoice) {
  defaultColor = colorChoice;
}

function colorTheDiv() {
  if (isDrawing) {
    // If isDrawing = true
    switch (defaultColor) {
      case "rainbow":
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        break;
      case "white":
        this.style.backgroundColor = "white";
        break;
      default:
        this.style.backgroundColor = "black";
    }
  }
}

function clearGrid() {
  const coloredDivs = document.querySelectorAll(".colored-divs");
  coloredDivs.forEach((div) => (div.style.backgroundColor = ""));
}
