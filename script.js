// Default grid is 16x16
setupGrid(16);
function setupGrid(gridSize) {
  // Calculate minimum dimension of viewport
  const minDimension = Math.min(window.innerWidth, window.innerHeight);
  const size = `${minDimension / 1.5}px`;

  // Set width and height of gridContainer to be equal
  const gridContainer = document.querySelector('.gridContainer');
  gridContainer.style.width = size;
  gridContainer.style.height = size;

  // Center the gridContainer
  gridContainer.style.position = 'absolute';
  gridContainer.style.top = '50%';
  gridContainer.style.left = '50%';
  gridContainer.style.transform = 'translate(-50%, -50%)';
  gridContainer.style['display'] = 'flex';
  gridContainer.style['flex-direction'] = 'column';

  // Make the button look good
  const sizer = document.querySelector('.sizer');
  sizer.style['width'] = size;
  sizer.style['display'] = 'block';
  sizer.style['margin'] = '0px auto 10px';
  sizer.style['padding'] = '10px';
  sizer.style['font-size'] = '32px';
  sizer.style['font-weight'] = '800';

  // Make gridSize x gridSize grid
  for (let i = 0; i < gridSize; i++) {
    // Make a row
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style['flex'] = '1 1 auto';
    rowDiv.style['display'] = 'flex';
    rowDiv.style['background'] = '#333333';  // Nice grey

    for (let j = 0; j < gridSize; j++) {
      // Make a square
      const square = document.createElement('div');
      square.classList.add('square');
      square.style['flex'] = '1 1 auto';
      square.style['background'] = 'rgba(255, 255, 255, 0.1)';  // White 10%
      square.style['height'] = '100%';
      // Add square to row
      rowDiv.appendChild(square);
    }
    // Add row to grid
    gridContainer.appendChild(rowDiv);
  }

  // Listener for mouseover in each square
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      // Boost opacity (make whiter)
      const c = square.style['background'];
      square.style['background'] = increaseAlpha(c, 100);
    });
  });
}

// Clear the grid (get rid of rows but leave button)
function clearGrid() {
  const rows = document.getElementsByClassName('row');
  for (let i = rows.length - 1; i >= 0; i--) {
    let row = rows.item(i);
    row.remove();
  }
}

// So the user can change the grid size
const sizer = document.querySelector('.sizer');
sizer.addEventListener('click', () => {
  // Get grid size from user
  const answer = prompt('Enter N (max 100):', '16');
  let n = Number(answer);
  if (n < 0) n = 1;
  if (n > 100) n = 100;
  if (isNaN(n)) n = 16;
  // First clear then setup the grid
  clearGrid();
  setupGrid(n);
});

// Some ChatGPT help...
function increaseAlpha(rgbaColor, percent) {
  // Extract the red, green, blue, and alpha components
  var rgbaValues = rgbaColor.substring(5, rgbaColor.length - 1).split(',');
  var red = parseInt(rgbaValues[0].trim());
  var green = parseInt(rgbaValues[1].trim());
  var blue = parseInt(rgbaValues[2].trim());
  var alpha = parseFloat(rgbaValues[3].trim());

  // Calculate the new alpha value
  alpha = Math.min(alpha * (1 + percent / 100), 0.99); // set maximum alpha to 99%

  // Construct and return the new color string
  return (
    'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha.toFixed(2) + ')'
  );
}
