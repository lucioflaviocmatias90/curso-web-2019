const express = require('express')
const app = express()

app.get('/api/html', (req, res) => {
    res.send('<h1>Estou bem</h1>')
})

app.get('/api/json', (req, res) => {
    res.json({
        "name": "iPad 32GB",
        "price": 18.99,
        "discount": 0.12
    })
})

app.listen(3000, () => {
    console.log('rodando na porta 3000')
})