function getPokemon(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {            
            callback(JSON.parse(xhttp.responseText))            
        }
        console.log(this.readyState + ' ' + this.status)
    }
    xhttp.open('GET', url);
    xhttp.send();
}

const btnBuscar = document.getElementById('btnBuscar');  

btnBuscar.addEventListener('click', function() {

    let nomePokemon = document.getElementById('nomePokemon').value;

    getPokemon('https://pokeapi.co/api/v2/pokemon/' + nomePokemon, function(res) {
        let divDadosPokemon = document.getElementById('dadosPokemon');
        divDadosPokemon.innerText = res.name + ' ' + res.order;
    });
});