setupGrid(16);
function setupGrid(gridSize) {
  const gridContainer = document.querySelector('.gridContainer');
  
  for(let i = 0; i < gridSize; i++){

    const div = document.createElement('div');
    console.log('gridContainer=' + gridContainer);
    console.log(div);
    div.style.color = 'blue';                                      
    // adds the indicated style rule
    
    div.style.cssText = 'color: blue; background: white;';          
    // adds several style rules
    
    div.setAttribute('style', 'color: blue; background: white;');  
    
    div.textContent = 'Hello World!';
    // adds several style rules
    gridContainer.appendChild(div);
    
  }

//   const div = document.createElement('div');
//   console.log('gridContainer=' + gridContainer);
//   console.log(div);
//   div.style.color = 'blue';                                      
//   // adds the indicated style rule
  
//   div.style.cssText = 'color: blue; background: white;';          
//   // adds several style rules
  
//   div.setAttribute('style', 'color: blue; background: white;');  
  
//   div.textContent = 'Hello World!';
//   // adds several style rules
//   gridContainer.appendChild(div);
}
