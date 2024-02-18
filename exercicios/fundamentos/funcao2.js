// armazenando uma funçao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
};

imprimirSoma(2, 3);

// armazenando uma funçao arrow em uma variavel
const soma = (a, b) => {
    return a + b
};

console.log(soma(2, 3))
console.log(soma)

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 10))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')