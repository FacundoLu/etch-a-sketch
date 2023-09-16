const container = document.getElementById('container');

// Creamos los div para la cuadricula de 16x16
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black';
    })
    container.appendChild(div);
  }
} 

function removeAllChildNodes(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//Creamos un evento para cambiar el tamaño de la cuadricula
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
sizeSlider.addEventListener("input", () => {
  let value = sizeSlider.value;
  sizeValue.textContent = value + ' x ' + value;
  removeAllChildNodes(container);
  container.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`)
  for (let i = 0; i < value * value; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black';
    })
    container.appendChild(div);
  }
});


const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
  let value = sizeSlider.value;
  let square = container.children;
  for (let i = 0; i < value * value; i++) {
    square[i].style.backgroundColor = "white";
  }
})

function getRandomColor() {
  let symbols = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', () => {
  let value = sizeSlider.value;
  let square = container.children;

  for (let i = 0; i < value * value; i++) {
    square[i].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = getRandomColor();
    })
  }
})

const chooseColor = document.getElementById('color');
chooseColor.addEventListener('input', () => {
  let value = sizeSlider.value;
  let newColor = chooseColor.value;
  let square = container.children;

  for (let i = 0; i < value * value; i++) {
    square[i].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = newColor;
    })
  }
})


createGrid()