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
palette.addEventListener('click', function recebeSelecao (event) {
  let seleciona = event.target;
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  seleciona.classList.add('selected');
})

// Requisito 8.
const element = document.querySelector('.selected');
const obj = window.getComputedStyle(element, null);

let bgColor = obj.getPropertyValue('background-color');

const pixels = document.getElementById('pixel-board');

pixels.addEventListener('click', function (event) {
  event.target.style.backgroundColor = bgColor;
})

//Requisito 9.
let button = document.getElementById('clear-board');
button.addEventListener('click', function () {
  let caixa = document.getElementsByClassName('pixel');
  console.log(caixa);
  for(let index = 0; index < caixa.length; index += 1) {
    caixa[index].style.backgroundColor = 'pink';
  }
})

//9
// let caixa = document.getElementsByClassName('pixel');
// function primeiraParte () {
//   for (let index = 0; index < caixa.length; index += 1) {
//     caixa[index].style.backgroundColor = 'pink';
//   }
// }

// function segundaParte () {
//   const limpa = document.getElementById('clear-board');
//   limpa.addEventListener('click', primeiraParte);
// }

//8
// function again () {
//   const selec = document.getElementById('pixel-board');
//   selec.addEventListener('click', function (event) {
//     const alvo = event.target;
//     if (alvo.classList.contains('alvo')) {
//       const targetNow = document.querySelector('.selected');
//       alvo.style.backgroundColor = targetNow.style.backgroundColor;
//     }
//   })
// }

//9
// const pi = document.getElementsByClassName('pixel');
// const button = document.getElementById('clear-board');
// button.addEventListener('click', function () {
//   event.target.style.backgroundColor = 'pink';
// })

//9
// document.getElementById('clear-board').addEventListener('click', function () {
//   document.querySelector('.pixel').setAttribute.('class', 'pink');
// })

//element.style.backgroundColor

//8
  // let pix = document.getElementById('pixel-board');
  // pix.addEventListener('click', function () {
  //   let receive = event.target;
  //   let select = document.querySelector('.selected');
  //     receive.style.backgrounColor = select.style.backgrounColor;
  // })

  //8
// let vazio = document.getElementById('pixel-board');
// vazio.addEventListener('click', function (event) {
//   let recebeCor = event.target;
//   for (let i = 0; i < vazio.length; i += 1) {
//     vazio[i].classList.addAttribute('style', 'backgroundColor')
//   }
// })

// let cores = [preto.style.backgroundColor, vermelho.style.backgroundColor, azul.style.backgroundColor, roxo.style.backgroundColor];


// armazene essa cor e atribua ao pixel clicado(event.target.style.background)

//Requisito 12
function aleatorio () {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `(${red}, ${green}, ${blue})`;
}

const mudanca = document.getElementsByClassName('outra');
for (let indice = 0; indice < mudanca.length; indice += 1) {
  const mudanca = color[indice];
  mudanca.style.backgroundColor = 'rgb' + aleatorio();
}