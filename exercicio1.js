// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
const buttonsEl = document.querySelectorAll('.botao-expandir-retrair');
for (const buttonEl of buttonsEl) {
  buttonEl.addEventListener('click', event => {
    const pEl = event.target.parentNode;

    pEl.classList.toggle('expandido');
    event.target.innerHTML = event.target.innerHTML === '+' ? '-' : '+';
  });
}
