// Set é uma estrutura de conjuntos não indexadas que não 
// aceitam repetição

// No caso, um array é uma estrutura indexada
// Um objeto é uma estrutura indexada, não com número
// mas com texto

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintthians')
times.add('Vasco')

// Ao observar o resultado, Vasco foi inserido duas vezes, mas
// foi armazenado apenas uma vez, isso porque Set não permite
// repetição de items 
console.log(times)

// 5 items foram inseridos, mas retornou 4 porque só tem
// apenas 1 Vasco inserido
console.log(times.size)

// irá retornar "false" porque Vasco está com inicial de 
// letra minuscula, então não existe esse item
console.log(times.has(vasco))

// irá retornar "true" porque Vasco está com inicial com 
// letra maiscula, isso porque o valor está com a sintaxe
// correta
console.log(times.has(Vasco))