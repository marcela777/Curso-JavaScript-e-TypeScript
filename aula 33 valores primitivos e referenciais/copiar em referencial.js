//Se não quiser ter o comportamento de b por referencia de a, querendo APENAS COPIAR o valor sem fazer ambos apontarem pro mesmo lugar:

const a = {
    nome: 'ana',
    idade: 23
}

const b = {...a};

a.nome = 'luanne'

console.log(a);
console.log(b);