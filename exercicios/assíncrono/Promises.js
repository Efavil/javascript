function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(resposta => {
    console.log('Eu serei o último a ser exibido')
}).catch(e => {
    console.log('ERRO', e);
});
