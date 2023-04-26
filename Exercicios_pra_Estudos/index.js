const calculoMedia = require('./calculoMedia')
const fs = require('fs')
// const turma = require('./turma.json')
// console.log(turma.ano)


const media = calculoMedia.calcularMedia(10, 9, 9, 5)

// console.log(`A média da sala é: ${media}`)

//lendo arquivo turma.json
fs.readFile('./turma.json', 'utf-8', (error, data) => {
    if(error){
        return console.log(error)
    }

    try{
        const turma = JSON.parse(data)
        console.log(turma.ano)
    } catch(e){
        console.log(e)
    }
})

//criando json para transformar em.json
const data = {
        "turma": "A1",
        "serie": "B",
        "ano": 2023,
        "media": media

}

//Criando .json (JSON.stringify para criar, JSON.parse para ler)
fs.writeFile('./jsonTeste.json', JSON.stringify(data, null, 2 /*dois espaços para linha */),'utf-8', (error, data) => {
    if(error){
        return console.log(error)
    }
})