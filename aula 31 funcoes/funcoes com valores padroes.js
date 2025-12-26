//Se não houver argumentos, a função toma partido com valores padões passados no parametro.

// Declaração Clássica

function soma (x = 1, y = 2){
    const result = x + y;
    return result;
}

//aqui a saída será 4 pois o valor 2 é inserido como argumento ao parametro x.
const result = soma (2);
console.log(result);

//Declaração anônima

//Aqui a função é declarada dentro de uma varável
const raiz = function (n){
    return n ** 0.5;
}

console.log(raiz(9));
