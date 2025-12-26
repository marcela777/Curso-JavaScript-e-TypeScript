//pode escapar aspas usando contra barra

let String = "um \"texto\"";
console.log(String);

//strings são iteráveis e indexadas
//0123456789 por exemplo

//pra exibir um elemneto de deerminado indice:
let umaString = "um texto";
console.log(umaString.charAt(6))

//pra ocncatenar usando concat
let conca = "textinho"
console.log(conca.concat(" ", "novinho"));
console.log(conca + " novinho");
console.log(`${conca} novinho`)

//pesquisar por um indice
let varia = "palavra";
console.log(varia.lastIndexOf("r"));

//tamanho de uma string
let tamanho = "Marcela Araújo";
console.log(tamanho.length)

//palavra especifica opr exemplo
let rato = "o ratinho";
console.log(rato.slice(2, 5))

//tudo em maniusculo
let maius = "um texto"
console.log(maius.toUpperCase())

//tudo em minusculo
let minu = "UM TEXTINHO"
console.log(minu.toLowerCase())

//pega as palavras da frase
let pala = "Marcela de Oliveira Araújo"
console.log(pala.split(" "))
