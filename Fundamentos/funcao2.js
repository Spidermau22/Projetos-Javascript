//armazenar funcao em uma variável

let validaNome = function (nome)
{
    nome = nome.toUpperCase()
    let nome_size = nome.length

    if (nome_size > 5)
    {
        console.log(`Seu nome '${nome}' possui mais que 5 caracteres, pois possui ${nome_size} caracteres.`)
    }
    else 
    {
        console.log(`Seu nome '${nome}' possui menos ou contém 5 caracteres, pois possui ${nome_size} caracteres.`)
    }
}

validaNome("Bia")


//Pode usar => para substituir a palavra function
let soma = (a, b) =>
{
    return a + b //return só retorna o valor, sendo necessario console.log()
}

console.log(soma(2,7))



//Pode diminuir ainda mais a função tirando as chaves, porém só pode usar uma sentença (linha) de lógica
let subtracao = (a, b) => a - b

console.log(subtracao(7, 2))