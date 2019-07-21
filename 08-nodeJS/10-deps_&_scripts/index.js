// existe o comando "npm init" para criar as dependencias
// do projeto, seria a mesma coisa que "composer init",
// com esse comando iremos criar o arquivo "package.json"

// Uma outra maneira de criar o arquivo "package.json" é 
// digitar no terminal o comando "npm init -y", com a
// flag "-y" ela irá ignorar todas as perguntas e criar
// automaticamente o arquivo "package.json".

// Vamos instalar a biblioteca "axios" utilizando o 
// comando "npm install axios --save", com a flag
// "--save" ela irá baixar a dependência e incluir no
// arquivo "package.json".

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const buscarChinesa = pessoa => pessoa.genero == 'F' && pessoa.pais == 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const resultado = funcionarios.filter(buscarChinesa).reduce(menorSalario)
    console.log(resultado)
})