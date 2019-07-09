const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', { 
    // executará uma função anônima em "toString"   
    value: function() {
        // o retorno é um array dos values de cada atributo
        // do objeto "quaseArray"
        return Object.values(this)
    },
    // ocultara as keys do objeto "quaseArray"
    enumerable: false,
})

console.log(quaseArray[2])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(),meuArray)