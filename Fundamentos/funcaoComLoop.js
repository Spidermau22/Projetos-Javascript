
function chegarEmCem(valor)
{
    if (valor > 100)
    {
        console.log(`Valor ${valor} é maior que 100.`)
    }
    else
    {
        for(i = valor ; i <= 100 ; i++)
        {
            console.log(`Falta ${100 - i} para chegar em 100`)
            
            if (i == 100)
            {
                console.log("Parabens, chegou em 100.")
            }
        }
    }

}

chegarEmCem(0)