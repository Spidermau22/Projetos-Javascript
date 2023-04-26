function chegaNoValor(val1)
{
    return val1
}

let a = 0
let b = 0
let par = []
let impar = []
let c = 0
let d = 0

while (a < 100)
{
    a = chegaNoValor(b)
    
    if (b % 2 == 1)
    {
        impar[d] = a
        d++
    }
    else
    {     
        par[c] = a
        c++
    }

    b++
}

console.log(par)
console.log(impar)



