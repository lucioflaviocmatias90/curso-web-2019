const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log("=================================")
console.log(Object.values(pessoa))
console.log("=================================")

// Retornando chave e valor como array
console.log(Object.entries(pessoa))

console.log("=================================")

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log("=================================")

// Trabalhando na forma de DESTRUCTURING
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

