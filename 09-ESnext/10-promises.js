// Promise é uma promessa
// Utiliza-se a Promise quando utilizamos um processamento
// assíncrono, ela tem dois tipos de destino: que é ser
// "resolvida", ela como atendida, a promessa foi cumprida
// ou senão a promessa foi "rejeitada"

// Digamos que queremos acessar um arquivo que está remoto, umas
// das possibilidades de acessar é utilizar uma "callback", por
// exemplo você passa uma URL, uma callback de sucesso e uma 
// callback é de erro

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

// Uma outra dica é que o "resolve()" aceita apenas um único
// parametro