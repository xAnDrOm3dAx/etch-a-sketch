const blackBtn = document.querySelector("#black-button");
const rainbowBtn = document.querySelector("#rainbow-button");
const eraseBtn = document.querySelector("#erase-button");
const clearGridBtn = document.querySelector("#clear-button");

let defaultColor = "black";

document.addEventListener("DOMContentLoaded", function () {
  createGrid(16);

  const gridSizeBtn = document.querySelector("#size-button");
  gridSizeBtn.addEventListener("click", () => {
    const size = resizeGrid();
    createGrid(size);
  });
});

function createGrid(size) {
  const gridContainer = document.querySelector(".grid-container");

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.innerHTML = ""; // Clear existing grid

  const numberOfDivs = size * size;
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", colorTheDiv);
    gridContainer.appendChild(div); // Use instead of below
    // gridContainer.insertAdjacentElement("beforeend", div);
  }
}

function resizeGrid() {
  const promptMessage = document.querySelector("#prompt-message");
  const userPrompt = prompt("Please enter a number between 1 and 99.");
  const userInput = parseInt(userPrompt);

  // if (userInput < 1 || userInput > 99) {
  //   promptMessage.textContent = "Invalid Entry. Please enter a number between 1 and 99.";
  //   return null;
  // } else if (isNaN(userInput)) {
  //   promptMessage.textContent = "Hey quit playin, and give me those digits!";
  // } else {
  //   promptMessage.textContent = "";
  //   return userInput;
  // }

  switch (true) {
    case isNaN(userInput):
      promptMessage.textContent = "Hey quit playin, and give me those digits!";
      break;
    case userInput < 1 || userInput > 99:
      promptMessage.textContent = "Please enter a number between 1 and 99.";
      break;
    default:
      promptMessage.textContent = "";
      return userInput;
  }
}

function setColor(colorChoice) {
  defaultColor = colorChoice;
}

function colorTheDiv() {
  // if (defaultColor === "rainbow") {
  //   this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  // } else {
  //   this.style.backgroundColor = "black";
  // }
  switch (true) {
    case defaultColor === "rainbow":
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      break;
    default:
      this.style.backgroundColor = "black";
  }
}

blackBtn.addEventListener("click", () => {
  setColor("black");
});
rainbowBtn.addEventListener("click", () => {
  setColor("rainbow");
});
