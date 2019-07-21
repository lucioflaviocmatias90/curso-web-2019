// Importando a biblioteca "FileSystem".
const fs = require('fs')

// Criando o objeto "produto" que será convertido
// em um arquivo do tipo JSON.
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Criando o arquivo "arquivoGerado.json" e inserindo o 
// conteúdo do objeto "produto", esse método é muito parecido
// com a função "file_put_contents()" do PHP.
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

// Observação: caso exista um arquivo chamado "arquivoGerado.json",
// excluá-o e execute o arquivo index.js com o comando "node index",
// assim será possível ver a criação do novo arquivo gerado neste
// exemplo.