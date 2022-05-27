// let preto = document.getElementById('black');
// preto.style.backgroundColor = 'black';

// let vermelho = document.getElementById('red');
// vermelho.style.backgroundColor = 'red';

// let azul = document.getElementById('blue');
// azul.style.backgroundColor = 'blue';

// let roxo = document.getElementById('purple');
// roxo.style.backgroundColor = 'purple';

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

const element = document.querySelector('.selected');
const obj = window.getComputedStyle(element, null);

let bgColor = obj.getPropertyValue('background-color');

const pixels = document.getElementById('pixel-board');

pixels.addEventListener('click', function (event) {
  event.target.style.backgroundColor = bgColor;
})

let button = document.getElementById('clear-board');
button.addEventListener('click', function () {
  // let caixa = document.getElementsByClassName('pixel');
  pixels.style.backgroundColor = 'pink';
})

// const pi = document.getElementsByClassName('pixel');
// const button = document.getElementById('clear-board');
// button.addEventListener('click', function () {
//   event.target.style.backgroundColor = 'pink';
// })

// document.getElementById('clear-board').addEventListener('click', function () {
//   document.querySelector('body').setAttribute.('class', 'white');
// })

//element.style.backgroundColor

// function again () {
//   let selec = document.getElementById('pixel-board');
//   selec.addEventListener('click', function (event) {
//     let alvo = event.target;
//     if (alvo.classList.contains('alvo')) {
//       let targetNow = document.querySelector('.selected');
//       alvo.style.backgroundColor = targetNow.style.backgroundColor;
//     }
//   })
// }

  // document.getElementById('pixel-board');
  // let pix = document.getElementById('pixel-board');
  // pix.addEventListener('click', function () {
  //   console.log('test');
  //   let receive = event.target;
  //   let select = document.querySelector('.selected');
  //     receive.style.backgrounColor = select.style.backgrounColor;
  // })

// let vazio = document.getElementById('pixel-board');
// vazio.addEventListener('click', function (event) {
//   let recebeCor = event.target;
//   for (let i = 0; i < vazio.length; i += 1) {
//     vazio[i].classList.addAttribute('style', 'backgroundColor')
//   }
// })

// let cores = [preto.style.backgroundColor, vermelho.style.backgroundColor, azul.style.backgroundColor, roxo.style.backgroundColor];


// armazene essa cor e atribua ao pixel clicado(event.target.style.background)
