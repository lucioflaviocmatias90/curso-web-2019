const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// O protótipo de Ferrari é um objeto vazio
console.log(ferrari.__proto__)
// irá retornar como TRUE
console.log(ferrari.__proto__ === Object.prototype)
// irá retornar como TRUE
console.log(volvo.__proto__ === Object.prototype)
// irá retonar como NULL, isso porque o Object.prototype
// é o pai do último nível
console.log(Object.prototype.__proto__)

console.log('========================================')

function meuObjeto() {
    //
}
console.log(typeof meuObjeto, typeof Object)
console.log(Object.prototype, meuObjeto.prototype)