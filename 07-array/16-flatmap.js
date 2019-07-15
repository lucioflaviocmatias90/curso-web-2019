const escola = [
    { 
        nome: 'Turma M1',
        alunos: [
            { nome: 'Gustavo', nota: 8.1 },
            { nome: 'Ana', nota: 9.3 }
        ]
    },
    { 
        nome: 'Turma M2',
        alunos: [
            { nome: 'Rebeca', nota: 8.9 },
            { nome: 'Roberta', nota: 7.3 }
        ]
    },
]

const getNotadoAluno = aluno => aluno.nota
const getNotasdaTurma = turma => turma.alunos.map(getNotadoAluno)
const notas1 = escola.map(getNotasdaTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasdaTurma)
console.log(notas2)