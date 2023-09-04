const blackBtn = document.querySelector("#black-button");
const rainbowBtn = document.querySelector("#rainbow-button");
const whiteBtn = document.querySelector("#white-button");
const clearGridBtn = document.querySelector("#clear-button");

const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector("#size-button");
const promptMessage = document.querySelector("#prompt-message");

let defaultColor = "black";

document.addEventListener("DOMContentLoaded", () => {
  createGrid(32);

  gridSizeBtn.addEventListener("click", () => {
    const size = resizeGrid();
    createGrid(size);
  });

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
    div.addEventListener("mouseover", colorTheDiv);
    gridContainer.appendChild(div); // Use instead of below
    // gridContainer.insertAdjacentElement("beforeend", div);
  }
}

function resizeGrid() {
  const userPrompt = prompt("Please enter a number between 1 and 99.");
  const userInput = parseInt(userPrompt);

  if (isNaN(userInput) || userInput < 1 || userInput > 99) {
    promptMessage.textContent = "Invalid Entry. Please enter a number between 1 and 99.";
    return null;
  } else {
    promptMessage.textContent = "";
    return userInput;
  }
}

function setColor(colorChoice) {
  defaultColor = colorChoice;
}

function colorTheDiv() {
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

function clearGrid() {
  const coloredDivs = document.querySelectorAll(".colored-divs");
  coloredDivs.forEach((div) => (div.style.backgroundColor = ""));
}
