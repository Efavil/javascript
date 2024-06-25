// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao', idade:34}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)