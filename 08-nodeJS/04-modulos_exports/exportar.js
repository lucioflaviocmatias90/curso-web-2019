// Ao observar o resultado do console.log(), é possível
// ver que o "module.exports" sempre inicia como um 
// objeto vazio.
console.log(module.exports)

// dentro do Node, sabem que o objeto "this" é
// uma referência de "module.exports", executando
// irá retornar como TRUE
console.log(module.exports === this)

// irá retornar como "true"
console.log(module.exports === exports)

this.a = 1
// "b" ficará visivel por fora
exports.b = 2
// isso tbm irá exportar para fora
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }