const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])
console.log(chavesVariadas)

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

// "has(valor)" verifica se existe esse o valor no Map
console.log(chavesVariadas.has(123))
// apagando o valor "123"
chavesVariadas.delete(123)
// irá retornar "false", isso porque excluímos na função acima
console.log(chavesVariadas.has(123))
// retornando a quantidade de items dentro do Map
console.log(chavesVariadas.size)

// Setando um valor na variavel "a"
chavesVariadas.set(123, 'a')
// Setando um valor na variavel "b"
chavesVariadas.set(123, 'b')
// Ao observar a resposta do console.log(), a variavel "a" não
// existirá, isso porque setamos o mesmo valor de "a" em "b",
// então ouve uma substituição de variavel por termos os mesmos
// valores
console.log(chavesVariadas)