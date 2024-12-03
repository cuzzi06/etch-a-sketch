//Selectores de index
const containerDiv = document.querySelector("#container");
const promptButton = document.querySelector("#promptButton");

let numberGridSize;

promptButton.addEventListener("click", () => {
  numberGridSize = +prompt("Ingrese número de cuadrados por lado");

  containerDiv.innerHTML = "";

  if (numberGridSize <= 100) {
    function createGrid() {
      for (let i = 1; i <= numberGridSize * numberGridSize; i++) {
        const gridSquareDiv = document.createElement("div");
        gridSquareDiv.setAttribute("class", "squareDiv");
        containerDiv.appendChild(gridSquareDiv);
      }
    }

    createGrid();
    assignHoverEffect();
  } else {
    alert("Por favor, ingrese un número menor o igual a 100");
  }
});

//Hover
function assignHoverEffect() {
  const squares = document.querySelectorAll(".squareDiv");
  squares.forEach((squareHover) => {
    squareHover.addEventListener("mouseover", () => {
      squareHover.style.backgroundColor = "black";
    });
  });
}
