//Criado json no arquivo.json para ler pelo arquivosLeitura.js 
//utilizando módulo nativo do Node, FileSystem (fs)
// o método aceita 3 parâmetros, 1.o é o caminho do arquivo, 2.o é o tipo de codificação, e o 3.o é a função 
// "callback" que o fs.readFile vai executar após ele LER o arquivo.

const fs = require('fs')




//__dirname é uma variável de ambiente que informa o diretório atual
const caminho = __dirname + '/arquivo.json' 


//Sincrono...

//UTF-8 foi o wincode usado para criar o arquivo json. 
//está escrito isso na linha azul embaixo no vsCode
const conteudo = fs.readFileSync(caminho, 'utf-8',console.log(`\nDEU CERTO!!\n`)) //fs.readFileSync oara ler o arquivo
console.log(conteudo) //aqui está lendo o caminho inserido na variavel caminho



const teste = require('./arquivo.json') //***para pegar o json pode dar apenas um require. aí estamos pegando a variavel user
console.log(teste.db.user)