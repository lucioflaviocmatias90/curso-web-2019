// Objeto "pessoa"
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Retonando as chaves do objeto
console.log(Object.keys(pessoa))

// Retonando os valores do objeto
console.log(Object.values(pessoa))

// Retornando chave e valor como array
console.log(Object.entries(pessoa))

console.log("=================================")

// Imprimindo "chave": "valor"
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log("=================================")

// Trabalhando na forma de DESTRUCTURING
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log("=================================")

// Aqui podemos definir em cada atributo do objeto se ela
// pode ser vista 
Object.defineProperty(pessoa, 'dataNascimento', {
    // define se ela vai ser listada
    enumerable: false,
    // define se ela vai ser alterada
    writable: false,
    // define o valor do atributo,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign() ECMAScript 2015

// o "Object.assign" vai mesclar (concatenar) o "obj1" e o
// "obj2" dentro de "dest", como o objeto "dest" e "obj1" 
// possui o mesmo nome de atributo "a", então um irá 
// substituir o outro
const dest = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }

Object.assign(dest, obj1, obj2)
console.log(dest)