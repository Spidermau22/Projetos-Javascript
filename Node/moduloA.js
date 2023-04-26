//Algumas formas de criar um módulo para exportar no arquivo abaixo na mesma pasta

const _ = require('lodash')

this.ola = 'Olá, sou batman'
exports.bemVindo = 'Bem vindo'


module.exports = {
    kmToMetter(valKm){

        let valMetro = 1000;

        return (valKm * valMetro + ' Metros.')
    },

    randomName(){

        nomeAle = ["João", "Mauricio", "Smaishell", "Jamilie", "André", "Gabriel"]
        return nomeAle[_.random(0,nomeAle.length - 1)]

       // return nomeAle[_.random]
        
    }
    

}