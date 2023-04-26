

function monta_frase(nome){
    return (`Olá, ${nome}!`)
}

console.log(monta_frase('João'))

function idade_em_dias(idade){
    return ('A idade em dias é: ' + idade * 365 + '.')
}

console.log(idade_em_dias(25))

function calcula_salario(horas, valorHora){
    return (`Funcionário recebe ${horas * valorHora} por mês.`)
}

console.log(calcula_salario(150, 40.5))

function converte_mes(num){
    mes = ['Janeiro','fevereiro','Março','Abriu']
    return mes[num - 1]
}

console.log(converte_mes(2))

function compara(a, b){
    return a >= b
}

console.log(compara(1, 1))

