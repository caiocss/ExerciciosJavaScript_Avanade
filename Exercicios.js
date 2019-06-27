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
    const arg = Array.prototype.slice.call(arguments, 1)

    arg.forEach(num => {
        let index = array.indexOf(num);

        if ( index > -1) {
            array.splice(index, 1);          
        }
    });

    return array;
};

console.log('Resultado do exercicio numero 2:');
console.log(destroyer([4, 1, 3, 5, 7, 8], 1, 3, 5));
console.log();