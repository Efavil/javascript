function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Otávio');
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);