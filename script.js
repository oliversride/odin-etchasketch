setupGrid(4);
function setupGrid(gridSize) {
  // Make gridSize x gridSize grid
  const gridContainer = document.querySelector('.gridContainer');
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
