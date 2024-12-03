const containerDiv = document.querySelector("#container");

function rowSquereDiv() {
  for (let i = 1; i <= 16; i++) {
    const gridSquareDiv = document.createElement("div");
    gridSquareDiv.setAttribute("class", "squareDiv");
    containerDiv.appendChild(gridSquareDiv);
  }
}

for (let i = 1; i <= 16; i++) {
  rowSquereDiv();
}
