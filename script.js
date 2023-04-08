setupGrid(16);
function setupGrid(gridSize) {
  // Calculate minimum dimension of viewport
  const minDimension = Math.min(window.innerWidth, window.innerHeight);
  const size = `${minDimension/1.5}px`;

  // Set width and height of gridContainer to be equal
  const gridContainer = document.querySelector('.gridContainer');
  gridContainer.style.width = size;
  gridContainer.style.height = size;

  // Center the gridContainer
  gridContainer.style.position = 'absolute';
  gridContainer.style.top = '50%';
  gridContainer.style.left = '50%';
  gridContainer.style.transform = 'translate(-50%, -50%)';
  gridContainer.style['background'] = 'green';
  gridContainer.style['display'] = 'flex';
  gridContainer.style['flex-direction'] = 'column';

  // Make gridSize x gridSize grid
  for (let i = 0; i < gridSize; i++) {
    // Make a row
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style['flex'] = '1 1 auto';
    rowDiv.style['display'] = 'flex';
    rowDiv.style['background'] = 'blue';

    for (let j = 0; j < gridSize; j++) {
      // Make a square
      const square = document.createElement('div');
      square.classList.add('square');
      square.style['flex'] = '1 1 auto';
      square.style['background'] = 'red';
      square.style['height'] = '100%';
      // Add square to row
      rowDiv.appendChild(square);
    }
    // Add row to grid
    gridContainer.appendChild(rowDiv);
  }
}
