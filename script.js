let preto = document.getElementById('black');
preto.style.backgroundColor = 'black';

let vermelho = document.getElementById('red');
vermelho.style.backgroundColor = 'red';

let azul = document.getElementById('blue');
azul.style.backgroundColor = 'blue';

let roxo = document.getElementById('purple');
roxo.style.backgroundColor = 'purple';

let palette = document.getElementById('color-palette');
let color = document.getElementsByClassName('color');
palette.addEventListener('click', function recebeSelecao (event) {
  let seleciona = event.target;
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  seleciona.classList.add('selected');
})

function newColor () {
  let pix = document.getElementsByClassName('pixel');
  pix.addEventListener('click', function (event) {
    let receive = event.target;
    let select = document.querySelector('.selected');
      receive.style.backgrounColor = select.style.backgrounColor;
  })
}

// let vazio = document.getElementsByClassName('pixel');
// vazio.addEventListener('click', function (event) {
//   let recebeCor = event.target;
//   for (let i = 0; i < vazio.length; i += 1) {
//     vazio[i].classList.addAttribute('style', 'backgroundColor')
//   }
// })

// let cores = [preto.style.backgroundColor, vermelho.style.backgroundColor, azul.style.backgroundColor, roxo.style.backgroundColor];


// armazene essa cor e atribua ao pixel clicado(event.target.style.background)
