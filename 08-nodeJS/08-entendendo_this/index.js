// Isso irá retornar como FALSE isso porque sabemos
// que "this" é apontado para "module.exports" e 
// não para "global".
console.log(this === global)

// Isso tbm irá retornar como FALSE porque também é
// apontado para "module.exports" e não para "module".
console.log(this === module)

// Isso é verdadeiro pelas respostas acima.
console.log(this === module.exports)

// Irá retornar TRUE porque é exports é um objeto
// referenciado à "this".
console.log(this === exports)


function logThis() {
    console.log('Dentro de uma função ...')
    console.log(this === exports)
}

// Percebe-se que ao executar a função "logThis()", o irá
// retornar a frase e o "this" como FALSE, isso pq o "this"
// dentro da função não é um "this" global, é um "this" somente
// daquela função. 
logThis()