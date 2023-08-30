document.addEventListener("DOMContentLoaded", function () {
  createGrid(16);

  const gridSizeBtn = document.querySelector("#sizeBtn");
  gridSizeBtn.addEventListener("click", () => {
    const size = resizeGrid();
    createGrid(size);
  });
});

// Function to create the grid

function createGrid(size) {
  const gridContainer = document.querySelector(".grid-container");

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.innerHTML = ""; // Clear existing grid

  let numberOfDivs = size * size;
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div); // Use instead of below
    // gridContainer.insertAdjacentElement("beforeend", div);
  }
}

// Resize the grid with user input

function resizeGrid() {
  const promptMessage = document.querySelector("#prompt-message");
  const userInput = prompt("Please enter a number between 1 and 99.");
  const number = parseInt(userInput);

  if (isNaN(number) || number < 1 || number > 99) {
    promptMessage.textContent = "Invalid Entry. Please enter a number between 1 and 99.";
    return null;
  } else {
    promptMessage.textContent = "";
    return number;
  }
}
