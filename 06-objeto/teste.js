let pessoa = {
    nome: 'João',
    sobrenome: 'Pereira'
}

let endereco = {
    rua: 'Batipsta Santos Dummont',
    bairro: 'Centro'
}

console.log(Object.assign({}, pessoa, endereco))
console.log({...pessoa, ...endereco})