// Exportando de uma forma mais clássica

// Se caso for exportar um objeto então utilize o 
// "module.exports", senão sua aplicação irá quebrar
// totalmente, vindo como "UNDEFINED"
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}