// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
const imgEl = document.querySelector('#slide');
let indexAtual = 0;

function rolarImagens(inc) {
  if (indexAtual === 0 && inc < 0) {
    indexAtual = todasAsImagens.length;
  }
  indexAtual += inc;
  imgEl.src = servidorDasImagens + todasAsImagens[indexAtual % todasAsImagens.length];
}

document.querySelector('#anterior').addEventListener('click', () => rolarImagens(-1));

document.querySelector('#proximo').addEventListener('click', () => rolarImagens(1));
