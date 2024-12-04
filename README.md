# Etch-a-Sketch

Un sencillo simulador de Etch-a-Sketch desarrollado con **HTML**, **CSS** y **JavaScript**. Los usuarios pueden crear un grid personalizado y pintar los cuadrados con colores aleatorios y efectos de opacidad.

## Características

- **Grid personalizable**: Puedes definir el número de cuadrados por lado, con un límite de hasta 100.
- **Interacción dinámica**:
  - Cada celda cambia de color al pasar el mouse por encima, generando colores RGB aleatorios.
  - Las celdas se oscurecen progresivamente hasta alcanzar el negro en 10 pasadas.
- **Responsive**: El tamaño de las celdas se ajusta dinámicamente al tamaño del contenedor.

## Tecnologías utilizadas

- **HTML**: Para la estructura básica del proyecto.
- **CSS**: Para el diseño del contenedor y los cuadrados.
- **JavaScript**: Para la lógica del grid, efectos de hover y validaciones.

## Cómo usar el proyecto

1. **Clona el repositorio:**

   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>

   ```

2. **Abre el archivo `index.html` en tu navegador.**

3. **Genera un nuevo grid:**

   - Haz clic en el botón.
   - Ingresa un número entre 1 y 100 para definir la cantidad de cuadrados por lado.
   - El grid se generará automáticamente dentro del contenedor.

4. **Interactúa con el grid:**
   - Pasa el mouse por los cuadrados para cambiar su color.
   - Observa cómo se oscurecen progresivamente con cada interacción.

## Estructura del Código

### Funciones principales

- **`adjustGridSize(numberGridSize)`**:  
  Ajusta el tamaño de las celdas para que el grid ocupe todo el contenedor.
- **`createGrid(numberGridSize)`**:  
  Genera el grid dinámicamente según el tamaño ingresado por el usuario.
- **`initializeSquareColor(squareHover)`**:  
  Asigna un color inicial aleatorio a la celda y lo almacena como dato.
- **`increaseOpacity(squareHover)`**:  
  Incrementa progresivamente la opacidad de una celda hasta llegar a negro.
- **`assignHoverEffect()`**:  
  Agrega los efectos de hover a las celdas para cambiar su color y opacidad.

## Flujo del Proyecto

1. **Inicio**:  
   El contenedor se inicializa vacío y se espera la interacción del usuario.

2. **Creación del grid**:

   - El usuario ingresa el tamaño deseado.
   - Se valida la entrada y se genera un nuevo grid.

3. **Interacción dinámica**:
   - Cada celda cambia de color al primer hover.
   - Cada interacción subsecuente oscurece la celda progresivamente.

## Mejoras futuras

- Añadir la opción de borrar el grid sin recargar la página.
- Incorporar un selector de colores para personalizar el comportamiento del hover.
- Permitir guardar el diseño creado en formato de imagen.

## Autor

Desarrollado por **Gianfranco Palacios Cuzzi** como parte del aprendizaje de desarrollo web con JavaScript.
