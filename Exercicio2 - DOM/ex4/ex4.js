const btnSortear = document.getElementById('btnSortear');
const divImagemArea = document.getElementById('foto_area');
const imgElement = document.createElement('img');
const arrayImagens = ['maca', 'morango', 'abacaxi', 'pera', 'uva', 'laranja', 'limao', 'mexirica', 'banana', 'abacate'];
let numeroAleatorio;

btnSortear.addEventListener('click', (event) => {
    numeroAleatorio = sorteio(10);
    let nomeFruta = arrayImagens[numeroAleatorio];
    imgElement.setAttribute('src', './imagens/' + nomeFruta + '.jpg');
    divImagemArea.appendChild(imgElement);
})

function sorteio(qtdDeNumeros) {
    let number;
    number = Math.floor(Math.random() * qtdDeNumeros);
    return number;
}