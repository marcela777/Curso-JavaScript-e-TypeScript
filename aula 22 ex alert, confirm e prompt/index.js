alert ("Soma de Dois Números")
const n1 = Number(prompt("Digite um número: "))
const n2 = Number(prompt("Digite o segundo número: "))
const conta = n1+n2
document.write(conta)

/*
Jeito do Porfessor:
let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite um número: ");

 num1 = Number(num1);
 num2 = Number(num2);


alert(`O resultado da sua conta foi: ` ${num1 + num2});
Em códigos usuais, fazer a conta direto com Template Strings deixaria o código mais complexo.
*/