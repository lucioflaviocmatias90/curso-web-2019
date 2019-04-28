const soma = function(x, y) {
    return x + y
}

const subtracao = (x, y) => x - y

const imprimiResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimiResultado(3, 4)
imprimiResultado(7, 5, soma)
imprimiResultado(7, 5, subtracao)
imprimiResultado(7, 5, (x, y) => x * y)