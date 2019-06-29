var alunos = [
    {nome: 'Felipe M.', sexo: 'M', idade: 13},
    {nome: 'Luíza A.', sexo: 'F', idade: 14},
    {nome: 'Marcos T.', sexo: 'M', idade: 14},
    {nome: 'Bianca B.', sexo: 'F', idade: 13},
    {nome: 'Rogério R.', sexo: 'M', idade: 15},
   ];


// listar na tela todos os nomes
alunos.forEach(aluno => {
    console.log(aluno.nome);
});
console.log();

// dobrem a  idade
const alunosIdadeDobrada = alunos.map(aluno => {    
    return aluno.idade * 2;
});
console.log('Idade dobrada dos alunos:')
alunosIdadeDobrada.forEach(idade => {
    console.log(idade)
});
console.log();

// filtrar somente para o sexo F
console.log('Alunos apenas do sexo feminino:')
const alunas = alunos.filter(aluno => {
    if (aluno.sexo === 'F'){
        return aluno;
    }
});
console.log(alunas);
console.log();

// encontrar um registro (Bianca B.)
console.log('Encontrar Bianca B.')
const bianca = alunos.find(aluno => {
    if(aluno.nome === 'Bianca B.'){
        return aluno;
    }
})
console.log(bianca);
console.log();

// verificar se TODOS atendem critério (idade > 14)
console.log('Todos tem idade maior que 14?')
var todosTemIdadeMaiorQueQuartoze = alunos.every(aluno => {
    return aluno.idade > 14;
})
console.log(todosTemIdadeMaiorQueQuartoze);
console.log();

// verificar se alguma atende critério de ter maior de 18 anos ( idade > 18)
console.log('Algum aluno tem mais de 18 anos?')
var temMaiorDeDezoito = alunos.some(aluno => {
    return aluno.idade > 18;
});
console.log(temMaiorDeDezoito);
console.log();