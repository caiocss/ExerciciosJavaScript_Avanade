
//Botão de OK
let btnOk = document.getElementById('btnOk');
let texto = document.getElementById('texto');
let div = document.getElementById('texto_principal');
let h1 = document.createElement('h1'); 
var h1Texto;

btnOk.addEventListener('click', (event) => {
    var validador = div.querySelector('h1');
    
    if(validador !== null) {
        h1.removeChild(h1Texto);
        h1Texto = document.createTextNode(texto.value);        
        h1.appendChild(h1Texto);        
    }
    else {
        h1Texto = document.createTextNode(texto.value);        
        h1.appendChild(h1Texto);
        div.appendChild(h1);
    }    
    texto.value = '';
});


