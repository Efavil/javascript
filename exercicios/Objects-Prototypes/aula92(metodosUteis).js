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

const produto = { nome: 'Produto', preco: 1.8};
console.log(Object.getOwnPropertyDescripytor);

/*
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