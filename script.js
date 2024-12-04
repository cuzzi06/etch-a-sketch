//Selectores de index
const containerDiv = document.querySelector("#container");
const promptButton = document.querySelector("#promptButton");

let numberGridSize;

function adjustGridSize(numberGridSize) {
  const squares = document.querySelectorAll(".squareDiv");
  let getSquareSize = containerDiv.offsetWidth / numberGridSize;
  squares.forEach((squareDiv) => {
    squareDiv.style.width = `${getSquareSize}px`;
    squareDiv.style.height = `${getSquareSize}px`;
  });
}

promptButton.addEventListener("click", () => {
  numberGridSize = +prompt("Ingrese número de cuadrados por lado");

  containerDiv.innerHTML = "";

  if (numberGridSize <= 100) {
    function createGrid() {
      for (let i = 1; i <= numberGridSize * numberGridSize; i++) {
        const gridSquareDiv = document.createElement("div");
        gridSquareDiv.setAttribute("class", "squareDiv");
        gridSquareDiv.setAttribute("data-changed", "false");
        gridSquareDiv.setAttribute("data-opacity", "0");
        containerDiv.appendChild(gridSquareDiv);
      }
      adjustGridSize(numberGridSize);
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
      let currentOpacity = parseFloat(squareHover.getAttribute("data-opacity"));

      if (squareHover.dataset.changed === "false") {
        let r = Math.floor(Math.random() * 255 + 1);
        let g = Math.floor(Math.random() * 255 + 1);
        let b = Math.floor(Math.random() * 255 + 1);
        squareHover.dataset.color = `${r}, ${g}, ${b}`;
        squareHover.dataset.changed = "true";
        squareHover.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }

      const getBaseColor = squareHover.dataset.color;

      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        squareHover.setAttribute("data-opacity", currentOpacity.toFixed(1));
        squareHover.style.backgroundColor = `rgba(${getBaseColor}, ${currentOpacity})`;
      }
    });
  });
}
