const nome = ['Luiz', 'Otavio', 'Henriqure'];

for (let valor of nome) {
    console.log(valor)
};

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});