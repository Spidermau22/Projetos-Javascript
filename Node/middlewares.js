//Padrão middleware ou chain of responsability
const passo1 = (ctx, next) =>{  //função passo1 que recebe dois parâmetros
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx, next) =>{
    ctx.valor = 'mid2'
    next()
}

const passo3 = (ctx,next) =>{
    ctx.valor = 'mid3'
}

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
} 

const ctx = {}
exec(ctx, passo1, passo3)
console.log(ctx)