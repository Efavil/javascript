// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite que a função acesse e manipule variáveis externas á função

// mContexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) 