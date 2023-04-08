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

const sizer = document.querySelector('.sizer');
sizer.addEventListener('click', () => {
  const answer = prompt('Enter N (max 100):', '16');
  console.log('answer=' + answer);
  let n = Number(answer);
  if (n < 0) n = 1;
  if (n > 100) n = 100;
  if (isNaN(n)) n = 16;
  console.log('n=' + n);
});
