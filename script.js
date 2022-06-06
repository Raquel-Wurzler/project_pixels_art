let preto = document.getElementById('black');
preto.style.backgroundColor = 'black';

let vermelho = document.getElementById('red');
vermelho.style.backgroundColor = 'red';

let azul = document.getElementById('blue');
azul.style.backgroundColor = 'blue';

let roxo = document.getElementById('purple');
roxo.style.backgroundColor = 'purple';

//Requisito 7.
let palette = document.getElementById('color-palette');
let color = document.getElementsByClassName('color');
palette.addEventListener('click', function recebeSelecao(event) {
  let seleciona = event.target;
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  seleciona.classList.add('selected');
})

// Requisito 8.
const pixels = document.getElementById('pixel-board');
pixels.addEventListener('click', function (event) {
  const element = document.querySelector('.selected').style.backgroundColor;
  let myTarget = event.target.style.backgroundColor;
  if (element === myTarget) {
    event.target.style.backgroundColor = 'white';
  } else {
    event.target.style.backgroundColor = element;
  }
});

//Requisito 9.
let caixa = document.getElementsByClassName('pixel');
let button = document.getElementById('clear-board');
button.addEventListener('click', function () {
  // console.log(caixa);
  for (let index = 0; index < caixa.length; index += 1) {
    caixa[index].style.backgroundColor = 'white';
  }
});

//Requisito 10.
function clearBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
};

const bot = document.getElementById('generate-board');
bot.addEventListener('click', function () {
  let inp = document.getElementById('board-size').value;
  if (inp === '') {
    alert('Board inválido!');
  } else if (inp < 5) {
    gerarDivs(5);
  } else if (inp > 50) {
    gerarDivs(50);
  } else {
    console.log(inp);
    clearBoard();
    gerarDivs();
  }
}); 

function gerarDivs() {
  let valorRecebido = document.getElementById('board-size').value;
  for (let linha = 0; linha < valorRecebido; linha += 1) {
    const divLinha = document.createElement('div');
    for (let coluna = 0; coluna < valorRecebido; coluna += 1) {
      const divColuna = document.createElement('div');
      divColuna.className = 'pixel';
      divColuna.style.backgroundColor = 'white';
      divLinha.appendChild(divColuna);
    }
    pixels.appendChild(divLinha);
  }
}

//Requisito 11



//Requisito 12
function aleatorio() {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `(${red}, ${green}, ${blue})`;
}

const mudanca = document.getElementsByClassName('outra');
for (let indice = 0; indice < mudanca.length; indice += 1) {
  const rainbow = mudanca[indice];
  rainbow.style.backgroundColor = 'rgb' + aleatorio();
};