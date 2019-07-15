// Lembrando que utilize sempre o caminho relativo do
// arquivo, senão o modulo não será executado com sucesso.
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

// imprimindo o objeto inteiro
console.log(moduloA)


// imprimindo os atributos de "moduloB"
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())


// imprimindo o objeto inteiro
console.log(moduloB)
