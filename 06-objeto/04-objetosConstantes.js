// Como pode ver, foi criado uma variavel constante contendo
// um objeto que possui o atributo "nome" com o valor "João".
const pessoa = { nome: 'João'}


// Logo que trocamos o nome do atributo "nome" para "Pedro",
// percebesse que não houve nenhum erro, isso porque o atributo
// não é uma constante, e sim somente o objeto.
pessoa.nome = 'Pedro'
console.log(pessoa)


// Object.freeze(objeto) ela congela totalmente o objeto, impossibilitando
// de fazer nenhuma alteração no objeto, pode ser dizer que o objeto fica 
// travado, e nenhuma função do Javascript pode destravar esse objeto.
Object.freeze(pessoa)


//
pessoa.nome = 'Ana'
console.log(pessoa)


// Uma outra observação é que quando estamos criando um objeto novo
// com o mesmo nome de variavel ex: "pessoa", então um erro irá ocorrer, 
// isso porque já existe uma variavel que se chama "pessoa" e é uma constante.






// Fala Ângelo! Beleza?

// Não são ponteiros.

// Toda vez que criamos variáveis as mesmas passam a ocupar um espaço na memória. Então podemos dizer que aquela variável faz referência a um espaço de memória onde dentro do mesmo encontra-se um valor/objeto.

// Quando fazemos um:

//     var a = 5
//     var b = a;
//     console.log(b) // Saída: 5
//     a = 6;
//     console.log(b) // Saída: 5

// Estamos fazendo B receber o conteúdo para qual A faz referência naquele dado instante, e não fazendo B apontar para A.

// Caso fosse ponteiro, assim que eu modifica-se A para 6, B deveria também modificar seu valor para 6.

// Agora no caso da constante é padrão da linguagem que ela não possa modificar sua referência.

// No exemplo:

//     const pessoa = { nome: 'Aluno' }
//     console.log(pessoa) // Saída: Aluno
//     pessoa = { nome: 'Ana' } // Comente essa linha depois da explicação
//     console.log(pessoa) /* Retorna erro pois estou tentando modificar
//                          a referencia do objeto pessoa para outro objeto
//                          O que eu posso fazer é modificar o objeto já criado*/
//     pessoa.nome = 'Aluno 2'
//     console.log(pessoa) // Saída: Aluno 2

//     var - tem escopo de nível de função e pode alterar a referência de valor
     
//     let - tem escopo de nível de bloco e pode alterar a referência de valor
     
//     const - tem escopo de nível de bloco, mas não pode alterar a referência de valor