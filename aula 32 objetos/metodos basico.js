//Se quiser implementar uma função que também pode ser chamada de método, DENTRO DO OBJETO, NÃO USA a palavra FUNCTION.
//Aqui p1 vai usar o método "fala".

const p1 = {
        nome : "Marcela",
        sobre : "Araújo",
        id : 24,
    
        fala(){
            console.log("Oi");
        }
};

p1.fala();