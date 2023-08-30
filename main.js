// const gridContainer = document.querySelector("#gridContainer");
// const resetBtn = document.querySelector("#resetBtn");

// function createGrid(size) {
//   gridContainer.innerHTML = "";
//   gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//   gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//   for (let i = 0; i < size * size; i++) {
//     const gridItem = document.createElement("div");
//     gridItem.classList.add("grid-item");
//     gridContainer.appendChild(gridItem);
//   }
// }

createGrid(16);

function createGrid(size) {
  const sketchGrid = document.querySelector(".grid-container");

  sketchGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numberOfDivs = size * size;

  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "yellow";
    sketchGrid.insertAdjacentElement("beforeend", div);
  }
}
