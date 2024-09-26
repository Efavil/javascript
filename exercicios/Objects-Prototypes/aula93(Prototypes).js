/*

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);

*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função Construtora
const data = new Date(); // <-- Date = Fução COnstrutora

console.dir(pessoa1);
console.dir(data);