const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// nenhum item do array será retornado
// retornando apenas um array vazio
console.log(produtos.filter(function(p) {
    return false
}))

// todos os itens do array será retornado
console.log(produtos.filter(function(p) {
    return true
}))

console.log(produtos.filter(function(p) {
    return p.fragil == true && p.preco < 1000
}))