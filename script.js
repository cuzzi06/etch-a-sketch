//Selector de container en index
const containerDiv = document.querySelector("#container");

//Funcion para hacer filas de 16 cuadrados
function rowSquereDiv() {
  for (let i = 1; i <= 16; i++) {
    const gridSquareDiv = document.createElement("div");
    gridSquareDiv.setAttribute("class", "squareDiv");
    containerDiv.appendChild(gridSquareDiv);
  }
}

//Función para hacer 16 filas
for (let i = 1; i <= 16; i++) {
  rowSquereDiv();
}

//Hover
const squares = document.querySelectorAll(".squareDiv");
squares.forEach((squareHover) => {
  squareHover.addEventListener("mouseover", () => {
    squareHover.style.backgroundColor = "black";
  });
});
