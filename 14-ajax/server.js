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


// interpretador de formulário para reconhecer um upload de arquivo
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

// Criando função para fazer uploads de arquivo via Ajax
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// Startar o servidor, digitando: "npm start"
app.listen(8080, () => console.log('Executando...'))