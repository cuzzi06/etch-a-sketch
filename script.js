// Selectores de index
const containerDiv = document.querySelector("#container");
const promptButton = document.querySelector("#promptButton");

// Constantes para límites
const MAX_GRID_SIZE = 100;
const MIN_GRID_SIZE = 1;

// Ajustar tamaño de las celdas basado en el número de cuadrados
function adjustGridSize(numberGridSize) {
  const squareSize = containerDiv.offsetWidth / numberGridSize;
  const squares = document.querySelectorAll(".squareDiv");
  squares.forEach((squareDiv) => {
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
  });
}

// Crear el grid dinámicamente
function createGrid(numberGridSize) {
  for (let i = 1; i <= numberGridSize * numberGridSize; i++) {
    const gridSquareDiv = document.createElement("div");
    gridSquareDiv.setAttribute("class", "squareDiv");
    gridSquareDiv.setAttribute("data-changed", "false");
    gridSquareDiv.setAttribute("data-opacity", "0");
    containerDiv.appendChild(gridSquareDiv);
  }
  adjustGridSize(numberGridSize);
}

// Inicializar color aleatorio en una celda
function initializeSquareColor(squareHover) {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  squareHover.dataset.color = `${r}, ${g}, ${b}`;
  squareHover.dataset.changed = "true";
  squareHover.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Incrementar la opacidad de una celda
function increaseOpacity(squareHover) {
  let currentOpacity = parseFloat(squareHover.getAttribute("data-opacity"));
  if (currentOpacity < 1) {
    currentOpacity += 0.1;
    squareHover.setAttribute("data-opacity", currentOpacity.toFixed(1));
    squareHover.style.backgroundColor = `rgba(${squareHover.dataset.color}, ${currentOpacity})`;
  }
}

// Asignar efecto de hover
function assignHoverEffect() {
  const squares = document.querySelectorAll(".squareDiv");
  squares.forEach((squareHover) => {
    squareHover.addEventListener("mouseover", () => {
      if (squareHover.dataset.changed === "false") {
        initializeSquareColor(squareHover);
      }
      increaseOpacity(squareHover);
    });
  });
}

// Evento del botón para generar el grid
promptButton.addEventListener("click", () => {
  let userInput = prompt(
    `Ingrese número de cuadrados por lado (${MIN_GRID_SIZE}-${MAX_GRID_SIZE}):`
  );
  const numberGridSize = parseInt(userInput);

  if (
    isNaN(numberGridSize) ||
    numberGridSize < MIN_GRID_SIZE ||
    numberGridSize > MAX_GRID_SIZE
  ) {
    alert(
      `Por favor, ingrese un número válido entre ${MIN_GRID_SIZE} y ${MAX_GRID_SIZE}.`
    );
    return;
  }

  containerDiv.innerHTML = ""; // Limpia el contenedor
  createGrid(numberGridSize);
  assignHoverEffect();
});
