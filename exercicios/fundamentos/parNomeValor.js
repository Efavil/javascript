const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto lexico 2
    return saudacao
}

const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)