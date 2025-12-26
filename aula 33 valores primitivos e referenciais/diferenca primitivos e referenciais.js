//Dados primitivos: string, number, boolean, undefined, null(bigint, symbol)
//IMUTÁVEIS

let a = 'A';
let b = a;
console.log(a,b);

//Valor Copiado

//Dados por Referencia: array, function, object
//MUTÁVEIS
let c = [1, 2];
let d = c;
console.log(c, d);

//Valor Referenciado

// A variável d aponta para o mesmo lugar que c.


//Array com mutação:
let e = [1, 2];
let f = e;
e.push(3);
console.log(e,f);
f.pop();
console.log(e, f);

//Objetos com mutação:

const g = {
    nome: 'ana',
    idade: 23
}
const h = g;

console.log(h);
g.nome ='bruna';
console.log(h);