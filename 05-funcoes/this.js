/*
 TRABALHANDO COM THIS

Aula 01 

// this é igual a window e global
console.log(this)

// execute apenas no browser
console.log(window)

// execute apenas no node
console.log(global)
*/

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia

/* 

const falar = pessoa.falar();

falar();  // conflito entre paradigmas: funcional e O.O
*/

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()

/*
 TRABALHANDO COM THIS

Aula 02
*/

function Pessoa() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa