const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorrendo o array "aprovados" com função anônima
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// diminuindo o código com Arrow Function
aprovados.forEach( nome => console.log(nome) )

// diminuindo o código com função nomeada
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)