// Praticando exercícios com Array.map()

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// retornando apenas o preços de cada produto do carrinho
const resultado = carrinho.map( item => {
    return JSON.parse(item).preco
})

console.log(resultado)