//Factory Simples
function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

console.log(criarPessoa('Lúcio Flavio', 'Matias'))
console.log(criarPessoa('Flávia Luisa', 'Primilla'))