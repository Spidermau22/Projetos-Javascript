//Vamos supor que você quer tirar informação do objeto pessoa

let pessoa = {//objeto
    nome: "Mauricio",
    idade: 21,
    endereco:  "Barcelona" 
}

//Para retirar normalmente, você criaria a variável e puxaria a informação. Por exemplo, para puxar o nome:

let nome = pessoa.nome
let idade = pessoa.idade

console.log(nome, idade)

//Existe uma forma mais simples em que já pode definir um nome para a variavel que será atribuída

let {nome:nomea, idade:idadea} = pessoa //pessoa.nome foi atribuida no nomea e pessoa.idade no idadea

console.log(nomea,idadea)

