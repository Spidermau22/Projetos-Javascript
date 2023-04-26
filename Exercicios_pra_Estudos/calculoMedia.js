//Objetivo: Calculo de uma média recebendo os valores inserindo quantos valores quiser

module.exports = {

    calcularMedia(...valores){
        let espacos = valores.length
        let valor = 0

        for(i = 0; i < espacos; i++){
            valor+=valores[i]
        }

        return (valor / espacos)
    }

}

