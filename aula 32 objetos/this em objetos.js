//This referencia o objeto e seus atributos dentro do método

const p1 = {
    nome: 'Ana',
    sobre : 'Silva',
    idade : 25,

    fala(){
        console.log(`${this.nome} ${this.sobre}`);
    }    
};

p1.fala();

// Dois métodos dentro do objeto usando THIS.

const p2 = {
    nome : 'Carolina',
    sobre : 'Amanda',
    idade : 30,

    fala(){
        console.log(`Minha idade atual é: ${this.idade}`);
    },

    incrementarIdade(){
        ++this.idade;
    }

}

p2.fala();
p2.incrementarIdade();
p2.fala();