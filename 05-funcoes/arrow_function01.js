/*
 TRABALHANDO COM ARROW FUNCTION

retornando valor implicitamente 
de forma bem reduzida 
*/
function funcaoQualquer (a) {
    return 2 * a;
}
console.log(funcaoQualquer(3))



var dobro = (a) => 2 * a
console.log(dobro(4))



// valores padrões em paramêtros de função
var soma3 = (a=2, b=3, c=4) => a+b+c
console.log(soma3(6)) // 13 = 6 + 3 + 4
console.log(soma3(12,1)) // 17 = 12 + 1 + 4


// retorna uma função reduzida
var ola = () => 'Olá'
console.log(ola()) // Olá