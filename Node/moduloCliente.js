//importando o módulo A e módulo B

const moduloA = require('./moduloA') //usando . no endereço pois arquivo se encontra no sistema
const moduloB = require('./moduloB')

console.log(moduloA.randomName())

console.log(moduloA.kmToMetter(5))

console.log(moduloB.soma(5,6))

console.log(moduloA)

console.log(moduloA.ola)

console.log(moduloB.boaNoite)