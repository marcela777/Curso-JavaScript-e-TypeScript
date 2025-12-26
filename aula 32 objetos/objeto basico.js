function criarPessoa(nome, sobre, id){
    return{nome, sobre, id
    };
}

const p1 = criarPessoa("Marcela", "Araújo", 24);
console.log(p1.nome, p1.sobre, p1.id);