console.log(' \n')

// COLEÇÃO DINAMICA DE PARES CHAVE/VALOR

// Criando um objeto dinâmico
const produto = new Object

// Objeto com atributos dinâmico
produto.nome = 'Cadeira'

// Nesse caso utilizamos o "parênteses" caso o nome do atributo tiver espaços ou acentos
// Mas não é recomendável utilizar esse tipo de atributo no objeto
produto['Qualquêr coisa'] = 'palavraSimples'

// inserindo manualmente um atributo com um valor dentro
produto.preco = 200

// Imprimindo o objeto "produto"
console.log(produto)

console.log('\n')

// Excluindo os atributos do objeto
delete produto.preco
delete produto['Qualquêr coisa']

// Imprimindo o objeto "produto"
console.log(produto)

console.log('\n')

// Criando um objeto contendo outros objetos, arrays, etc...
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
    calcularSeguro: function() {
        //
    }
}

console.log(carro)