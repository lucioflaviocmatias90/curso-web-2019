function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto()
const obj2 = new meuObjeto()

// retonará como TRUE, isso porque os dois objetos
// pertecem ao mesma funçao "meuObjeto()"
console.log(obj1.__proto__ === obj2.__proto__)

// retornará como TRUE, isso porque obj1.__proto__ aponta
// para meuObjeto.prototype
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

console.log(meuObjeto.prototype)

// Ler: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain