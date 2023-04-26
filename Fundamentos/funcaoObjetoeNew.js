function funcionario (nome, idade, cargo)
{
    this.nome = nome
    this.idade = idade
    this.cargo = cargo
}

let funcionario1 = new funcionario("João",15 , "Aprendiz")
let funcionario2 = new funcionario("Vanessa",18 , "Almoxarifado")
let funcionario3 = new funcionario("Mauro",21 , "Analista de TI Pleno")

console.log(funcionario1)
console.log(funcionario2)
console.log(funcionario3)
