//pra converter umm número em string pode usar: (converte temporariamente)
let num = 2;
console.log(num.toString())


//alterar o numero pra uma string pra sempre:
num = num.toString()
console.log(typeof num)

//pra usar a versao binaria:
//console.log(num.toString(2) >>> o 2)

//pra arredondar um número

let n1 = 10;
let n2 = 2.5
console.log(n1.toFixed(2));

//pra saber se o dado é um número inteiro:
console.log(Number.isInteger(n1))

//pra sinalizar quando uma conta esrá inválida
let temp = n1 * "Olá";
console.log(temp)
console.log(Number.isNaN(temp));
//retorna true
//se não fosse string mais número:
let tempo = 5 + n1;
console.log(Number.isNaN(tempo));
//teria que retornar false

//quando o número é impreciso, como 0.777777777 e vamos fazer operações com ele, precisamos converter pra float e depois arredondar 
let num1 = 0.7
let num2 = 0.1

num1 = Number(num1.toFixed(2))
//console.log(Number.isInteger(num1)) //retorna true ou false

