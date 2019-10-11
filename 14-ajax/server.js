// MÓDULOS

const bodyParser = require('body-parser')
const express = require('express')
const app = express()


// APLICANDO OS MIDDLEWARES NAS REQUISIÇÕES QUE CHEGAREM NO SERVIDOR

// Todos os arquivos da pasta atual onde se encontra esse 
// arquivo do servidor (server.js), ele irá prover (rodar)
app.use(express.static('.'))
// Se na requisição vier um verbo além de GET, ele irá
// receber e entender que tipo de requisição foi acionada
// dos verbos: POST, PUT, DELETE e outros
app.use(bodyParser.urlencoded({ extended: true }))
// Se vier um código JSON, é ele que irá transformar o
// JSON em objeto
app.use(bodyParser.json())


// ROTAS

app.get('/teste', (req, res) => res.send('Ok'))

// Startar o servidor, digitando: "npm start"
app.listen(8080, () => console.log('Executando...'))