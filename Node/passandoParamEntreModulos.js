//aqui estamos criando a função publica (module.exports). 

module.exports = {
    passaTexto(...passaNome){ // ... nos permite inserir vários textos que ele cria array
        return passaNome.map(nome => `Olá ${nome}, tudo bem?`) //.map gera uma lista
    }
}