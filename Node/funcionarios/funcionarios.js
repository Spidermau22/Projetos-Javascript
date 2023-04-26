//OBJETIVO: pegar do json mulher chinesa com menor salario
//Foi criado o package através do npm init -y no console
//package-lock (módulo Axios) foi criado a partir do npm i --save axios no console
//Dentro da URL existe esse arquivo json. Estamos usando o modulo Axios para pegar as informações do json e trazer no programa
// " => " cria uma função

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//criando funções. Função chineses recebe f. dentro foi criado f.pais === 'China' (=== significa estritamente igual)

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)


const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

console.log(func)
})

