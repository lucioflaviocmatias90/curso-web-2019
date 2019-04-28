console.log(soma(4, 3))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(4, 3))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

/* 

Há diferença entre as duas funções: function declaration e function expression

A function declaration é possível executar o "console.log(soma(4,3))" antes
da função "soma()", isso porque ela é uma função declarativa, ela carrega
a função, depois busca a função e executa

Já a function expression não é possível fazer isso, porque o javascript não
consegue carregá-la pois ela não é declarativa e sim uma funcão expressionada 

*/