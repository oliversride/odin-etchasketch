setupGrid(16);
function setupGrid(gridSize) {
  // Calculate minimum dimension of viewport
  const minDimension = Math.min(window.innerWidth, window.innerHeight);

  // Set width and height of gridContainer to be equal
  const gridContainer = document.querySelector('.gridContainer');
  gridContainer.style.width = `${minDimension/2}px`;
  gridContainer.style.height = `${minDimension/2}px`;
  // Make it a square
  gridContainer.style['aspect-ratio'] = `1 / 1`;

  // Center the gridContainer
  gridContainer.style.position = 'absolute';
  gridContainer.style.top = '50%';
  gridContainer.style.left = '50%';
  gridContainer.style.transform = 'translate(-50%, -50%)';

  // Make gridSize x gridSize grid
  for (let i = 0; i < gridSize; i++) {
    // Make a row
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style['display'] = 'flex';
    for (let j = 0; j < gridSize; j++) {
      // Make a square
      const square = document.createElement('div');
      square.classList.add('square');
      square.style['flex'] = '1 1 auto';
      square.style['background'] = 'red';
      square.style.color = 'aqua';
      square.textContent = 'x';
      square.style['text-align'] = 'center';
      // Add square to row
      rowDiv.appendChild(square);
    }
    // Add row to grid
    gridContainer.appendChild(rowDiv);
  }
}
