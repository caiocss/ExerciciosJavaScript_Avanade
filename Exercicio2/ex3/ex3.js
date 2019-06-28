
const textoInput = document.getElementById('texto');
const div = document.getElementById('foto_area');
let nomeFruta;

const imgElement = document.createElement('img');
imgElement.setAttribute('src', '');

textoInput.addEventListener('input', (event) => {
    nomeFruta = textoInput.value.toLowerCase()
    switch(nomeFruta) {
        case 'maca':
            imgElement.setAttribute('src', './imagens/' + nomeFruta + '.jpg');
        break;
        case 'morango':
            imgElement.setAttribute('src', './imagens/' + nomeFruta + '.jpg');
        break;
        case 'abacaxi':
            imgElement.setAttribute('src', './imagens/' + nomeFruta + '.jpg');
        break;
        case 'pera':
            imgElement.setAttribute('src', './imagens/' + nomeFruta + '.jpg');
        break;
        case 'uva':
            imgElement.setAttribute('src', './imagens/' + nomeFruta + '.jpg');
        break;
        default:
            imgElement.setAttribute('src', '');
        break;
    }    
    div.appendChild(imgElement);
})