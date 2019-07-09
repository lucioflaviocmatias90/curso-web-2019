// Object preventExtensions

// Com o "Object.preventExtensions()" é possivel
// limitar a quantidade de atributos no objeto, e só
// podendo apenas diminuir e não adicionar mais quantidade
const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99,
    tag: 'promoção'
})


// o método "isExtensible(objeto)" irá retornar um booleano
// se o objeto é extensível ou não
console.log('Extensível:', Object.isExtensible(produto))


produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Com o "Object.seal" não é possível adicionar ou remover
// atributos do objeto, você está selando o objeto, só é
// possível apenas modificar os valores dos atributos que
// já existem
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


// Como pode ver, não foi possível adicionar um novo atributo.
// Também não foi possível excluir o atributo de "pessoa".
// E apenas foi possível alterar o valor de "idade" no objeto.
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze = selado + valores constantes