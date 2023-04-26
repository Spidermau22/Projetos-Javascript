//servidor

const porta = 3003 //porta: serve para determinar qual processo será usado para interpretar. Igual os slaves do Protheus que cada um tem uma porta

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))


app.get('/produtos', (req, res, next) => {
    res.send (bancoDeDados.getProdutos())
})

// app.get('/produtos', (req, res, next) => {
//     res.send ({nome: 'Notebook', preco: 123.45}) // send vai Converter para JSON
// })

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) //vai converter em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
