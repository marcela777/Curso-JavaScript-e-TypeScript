const alunos = ['marcela', 'ana', 'murilo'];
console.log(alunos);
//pra adicionar usando length
alunos[alunos.length] = 'juliano';
console.log(alunos);
// pra adicionar no final do array usando push
alunos.push('andre');
console.log(alunos);
//adiciona no inicio do array movendo todos os indices
alunos.unshift('vanessa');
console.log(alunos);
//pop remove indices do final (dá pra salvar em uma variável)
alunos.pop();
console.log(alunos);
//salvando na variavel
const remove = alunos.pop();
console.log(alunos);
console.log(remove);

//pra remover elemento do inicio
const removido = alunos.shift();
console.log(alunos);
console.log(removido);

//delete apaga qualquer elemento mas deixa um espaço vazio (undefined)
//delete alunos[1];
//console.log(alunos);

//pra fatiar uma lista usa a mesma função slice como com strings
console.log(alunos.slice(0, 3))