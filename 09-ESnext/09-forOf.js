// Enquanto o "for in" ele intera sobre índices
// O "for of" ele intera sobre valores

for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcmas = ['Map', 'Set', 'Promise']

for (let i in assuntosEcmas) {
    console.log(i)
}

for (let assunto of assuntosEcmas) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

for (let chave of assuntoMap.values()) {
    console.log(chave)
}

for (let [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}