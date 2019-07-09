const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos)

// metodo "pop()" exclui o último elemento do array
pilotos.pop();
console.log(pilotos)

// adiciona um elemento como último elemento no array
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// adiciona um elemento na primeira posição do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar ou remover elementos

// Em splice(): 
//   no primeiro parametro é o número do indice do array para ser
//   executado, no segundo parametro é a quantidade de elementos 
//   para remover, se digitar 4, será 4 elementos excluídos a
//   partir da posição setada no primeiro parametro, se digitar 0,
//   então nada será removido, pois removerá 0 elementos.
//   E do terceiro parametro em diante é onde colocamos valores
//   para serem inseridos no array

// Adicionar no Array
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover no Array
pilotos.splice(3, 1)
console.log(pilotos)

// Pode ver que irá retornar um novo array de elementos
// a partir do indice setado no parametro de "slice(posicao)"
// todo elemento que tiver da posição setada em diante será 
// armazenado nesse novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)