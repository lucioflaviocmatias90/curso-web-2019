// Middleware Pattern (Chain of Responsability)
// ctx é um objeto (ctx de contexto)
// next é uma função que vai dispara para o próximo passo.
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// No caso do "Express", vai existir 3 parâmetros:
// 1 - a requisição
// 2 - a resposta
// 3 - e o next()

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        // Vamos fazer uma recursividade
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

// objeto vazio
const ctx = {}

// executando os middlewares
exec(ctx, passo1, passo2, passo3)

// imprimindo o objeto "ctx" modificado pelos middlewares
console.log(ctx)