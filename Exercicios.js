/*
Exercicio numero 1 - Soma tudo e mais um pouco: 
Faça um algoritimo que recebe um array com dois valores e devolva a soma de todos os números
 entre eles (inclusive) 
*/
function sumAll(array) {
    let initNumber = array[0];
    let lastNumber = array[1];
    let result = 0;
    if(initNumber < lastNumber){       
        for (let index = initNumber; index < lastNumber; index++) {
            if (result === 0) {
                result = index;
            }
            result += (index + 1);
        }
    }
    else {
        for (let index = lastNumber; index < initNumber; index++) {
            if (result === 0) {
                result = index;
            }
            result += (index + 1);
        }
    }
    return result;
};

console.log('Resultado do exercicio numero 1:')
console.log(sumAll([4, 1]));
console.log();


/*
Exercicio numero 2 - Peneirinha
Faça um algoritmo que recebe inúmeros parâmetros, sendo que o primeiro necessárioamente
deve ser um array.
Os números que seguem devem ser elimados do array. ps: Necessário usar objeto arguments.
*/
function destroyer(array) {
    const arg = Array.prototype.slice.call(arguments, 1);

    arg.forEach(item => {
        let index = array.indexOf(item);
        if ( index > -1) {
            array.splice(index, 1);          
        }
    });

    return array;
};

console.log('Resultado do exercicio numero 2:');
console.log(destroyer([4, 1, 3, 5, 7, 8], 1, 3, 5));
console.log();


/*
Exercicio numero 3 - Peneirinha Refinada
Crie um algoritmo que recebe dois parãmetros: o primeiro é um array de elementos 
e o segundo é uma função anônima. Este algoritmo deve filtrar esse array de acordo
com o critério passado na função anônima.
*/
function dropElements(array, fun) {
    let newArray = array.filter(item => {
        if(fun(item)) {
            return item;
        }
    });

    return newArray;
}

console.log('Resultado do exercicio numero 3:');
console.log(dropElements([4, 1, 3, 5, 7, 8], function(n){ return n >= 5; }));
console.log();


/*
Exercicio numero 4 - O Clone
Crie um objeto chamado Professor que deriva de Pessoa  e implementa um método 
chamado ensinar() que recebe uma string e imprime na tela: 
"[Nome do Professor] esta ensinando [matéria]."
ps. Cada objeto precisa ter ao menos três atributos.
*/
function Pessoa(nome, idade, sexo) {
    this.Nome = nome;
    this.Idade = idade;
    this.Sexo = sexo;
}

function Professor(nome, idade, sexo, materia) {
    Pessoa.call(this, nome, idade, sexo);
    this.Materia = materia;
}

console.log('Resultado do exercicio numero 4:');
console.log(dropElements([4, 1, 3, 5, 7, 8], function(n){ return n >= 5; }));
console.log();



