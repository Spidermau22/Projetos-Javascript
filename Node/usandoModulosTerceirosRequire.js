//Puxando o lodash (para baixar usei o comendao npm i lodash .... i de install)

const _ = require('lodash') //setInterval seta intervalo pra cada resposta

let valRandom = _.random(1,10)

console.log(`Valor do Ny é: ${_.random(1,10)}\n
valor do Ju é: ${_.random(1,10)}`)

setInterval(() => console.log(_.random(1,10)),2000)