// Importando o modulo "FileSystem" do Core do NodeJS
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Leitura Síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// Leitura Assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Fazendo uma maneira mais simples e fácil
const config = require('./arquivo.json')
console.log(config.db)

// Todos os arquivos que existem dentro da nossa pasta atual.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta ... ')
    console.log(arquivos)
})