function validaNome(nome)
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


function soma(a, b)
{
    console.log(a + b)
}

soma(5, 6)

validaNome("mauricio")

validaNome("João")

