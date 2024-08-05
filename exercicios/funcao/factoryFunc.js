function criarPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        falar(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criarPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
