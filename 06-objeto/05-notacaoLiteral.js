// variaveis constantes
const a = 1
const b = 2
const c = 3


// antigamente no Javascript se a variavel fosse o mesmo nome da 
// chave do atributo não faria diferença.
const obj1 = { a: a, b: b, c: c }
console.log(obj1)


// Hoje não precisa mais fazer essa duplicidade caso o nome da 
// variavel FOR IGUAL o nome da chave do atributo.
const obj2 = { a, b, c }
console.log(obj2)


// Uma outra funcionalidade nova no Javascript é criar um atributo 
// do objeto pelo nome da variavel.
const nomeAtr = 'nota'
const valorAtr = 7.87

const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)


// Seguindo o exemplo acima mas criando o objeto de forma literal
// de uma outra forma.
const obj4 = { [nomeAtr]: valorAtr }


// Antigamente no Javascript, para ter uma função dentro do objeto
// era preciso criar uma função anônima dentro do atributo, como por
// exemplo a "funcao1", agora no ECMAScript 06 é possivel passar a
// funcão inteira sem ter que inserir dentro de um atributo como no
// exemplo da "funcao2"
const obj5 = {
    funcao1: function() {
        //
    },
    funcao2() {
        //
    }
}

console.log(obj5)