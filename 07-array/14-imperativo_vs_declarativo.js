const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i=0; i<alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2  = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// RESUMO:

// Imperativo é uma forma de executar de "COMO" tem
// que ser feito, seguindo passo a passo até o fim do
// algoritmo sem faltar algum passo

// Declarativo é uma forma de "QUEM" vai executar cada
// passo, declarando quem vai fazer cada passo do
// algoritmo, assim temos um reuso de passos do 
// algoritmo
