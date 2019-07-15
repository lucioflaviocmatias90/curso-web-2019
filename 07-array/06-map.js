const nums = [1, 2, 3, 4, 5];

let resultado = nums.map(function(e) {
    return e * 2
})

// o array.map() ele gera um novo array com seus
// valores modificados, e não alterando o array 
// original, nota-se no console.log() abaixo
console.log(resultado, nums)

const soma10 = num => num + 10
console.log(soma10(3))

const triplo = e => e * 3
console.log(triplo(2))

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log('resultado2', resultado2)