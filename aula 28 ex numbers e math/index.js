

/*
JEITO QUE EU FIZ

document.write("Seu número é: "+ num+"<br>")

raiz = Math.sqrt(num)
document.write("Raiz Quadrada é: " +raiz+"<br>")

document.write("É um NaN? ")
document.write(Number.isNaN(num)+"<br>")

document.write("Arredondando pra baixo: ")
document.write(Math.floor(num)+"<br>")

document.write("Arredondando pra cima: ")
document.write(Math.ceil(num)+"<br>")

document.write("Com duas casas decimais: ")
document.write(Math.round(num(2)))*/

//JEITO QUE PROFESSOR FEZ

const num = Number(prompt("Digite um número: "));
const numTitulo = document.getElementById("num-titulo");
const texto = document.getElementById("Texto ");

numTitulo.innerHTML = num;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz Quadrada: ${num**0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>Arredonda pra baixo: ${Math.floor(num)},</p>`
texto.innerHTML += `<p>Arredonda pra cima: ${Math.ceil(num)},</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)},</p>`

 
