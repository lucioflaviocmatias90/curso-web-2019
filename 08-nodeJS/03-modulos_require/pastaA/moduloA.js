// Vamos observar que o objeto "this" é um objeto vazio,
// isso porque nada foi atribuido nele.
console.log(this)

// Em NodeJS, um arquivo representa um módulo, e tudo o
// que for escrito nele, vai fica apenas visivel nele.
// Então para ele ficar vísivel para fora é preciso
// exportá-lo, e existem várias formas de exportar no 
// NodeJS e importar.


// "this" é um objeto 
// "exports" é um objeto
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Até o próximo exemplo'

// E sabemos que um objeto no Javascript é uma coleção
// de chaves e valores dinâmicas, então "ola" e "bemVindo"
// acabou de ser criados dinamicamente.