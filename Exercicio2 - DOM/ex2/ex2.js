//Pega a div da pagina e o input
const div = document.getElementById('texto_principal');
const inputText = document.getElementById('texto');

//Criar h1 e adiciona o H1 dentro da div
const h1 = document.createElement('h1');
div.appendChild(h1);


inputText.addEventListener('input', (event) => {                 
        h1.innerHTML = inputText.value;
    });
