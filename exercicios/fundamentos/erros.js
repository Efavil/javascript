function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 'mensagem'
    //throw  10
    //throw  true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)