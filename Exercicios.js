//Exercicio numero 1:
/*
Soma tudo e mais um pouco: 
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
}

console.log(sumAll([4, 1]));

