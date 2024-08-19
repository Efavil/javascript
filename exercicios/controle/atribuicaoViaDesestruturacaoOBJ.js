const pessoa = {
    nome: 'João',
    sobrenome: 'Paulo',
    idade: 30,
    endereco: {
       // rua: 'Rua 1',
        numero: 123
    }
};

//Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);