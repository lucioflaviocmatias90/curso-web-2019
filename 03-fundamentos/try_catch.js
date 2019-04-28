// TRABALHANDO COM TRY CATCH

function tratarErro(error) {
    throw 10;
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase())
    } catch (error) {
        tratarErro(error)
    } finally {
        return 'terminou a função'
    }
}

const obj = {nome: 'Roberto'}

imprimiNomeGritado(obj)