console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

// adicionando um novo índice no array "aprovados"
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)

// aplicamos uma ordenação de entre os valores do array
aprovados.sort()
console.log(aprovados)

// apagando um indice do array
delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0)
console.log(aprovados)