//Aqui estaremos gravando um objeto em Json

const fs = require('fs')

const produto = {
    nome: 'Cano',
    preco: 12.99,
    desconto: 0.25
}
//fs.writeFile para gerar o /arquivoGerado.json
//JSON.stringify para converter objeto produto em json
//err => .... é uma estrategia de função para se err estiver nulo (sem erros), vai retornar 'Criado com sucesso!'
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Criado com sucesso!')
})