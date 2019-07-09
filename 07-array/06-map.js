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