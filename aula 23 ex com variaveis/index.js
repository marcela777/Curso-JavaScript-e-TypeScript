/*
let varA = "A";
let varB = "B";
let varC = "C";

A>>B
B>>C
C>>A

 

*/
let A = "A";
let B = "B";
let C = "C";

let aux = A

A = B;
B = C;
C = aux;

console.log(A, B, C);


/*
Jeito do PROFESSSOR:
let A = "A";
let B = "B";
let C = "C";

[A, B, C] = [B, C, A]
console.log(A, B, C)
*/