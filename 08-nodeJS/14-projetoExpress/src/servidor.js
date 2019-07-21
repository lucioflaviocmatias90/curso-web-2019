const express = require('express')
const app = express()
const porta = 3000
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// Passando pelo Middleware e imprimindo no console.log()
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1 ...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
})