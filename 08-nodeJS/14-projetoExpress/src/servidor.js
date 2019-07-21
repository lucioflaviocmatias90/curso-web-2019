const express = require('express')
const app = express()
const porta = 3000

// Passando pelo Middleware e imprimindo no console.log()
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1 ...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
})