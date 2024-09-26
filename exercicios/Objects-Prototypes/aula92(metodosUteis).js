/*

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (Retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)

*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}


/*
const produto = { nome: 'Produto', preco: 1.8};
console.log(Object.values(produto));
console.log(Object.entries(produto));


const produto = { nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto)

    const caneca = { 
    ...produto,
    material: 'porcelana'
}; 


const caneca = { nome: produto.nome, preco: produto.preco};

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

*/