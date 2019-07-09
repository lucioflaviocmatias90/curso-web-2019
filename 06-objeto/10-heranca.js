// Objeto Pai
const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Fazendo herança de objetos atráves do "Object.create(objeto)"
const filha1 = Object.create(pai)
filha1.nome = 'Ana'

// Imprimindo o atributo herdado, se o objeto filho não tivesse
// herdado do objeto pai, então ira imprimir como UNDEFINED
console.log(filha1.corCabelo)

// Criando o objeto "filha2" herdando do objeto pai, e definindo
// os atributos como segundo parâmetro do Object.create()
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'

// Como pode ver abaixo, em "filha2.nome" imprimiu "Bia" 
// ao invés de "Carla", isso porque setamos na configuração 
// "writable: false", assim não foi possível sobreescrever 
// o atributo do objeto "filha2"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    if (filha2.hasOwnProperty(key)) {
        console.log(key);        
    } else {
        console.log(`Por herança: ${key}`);
    }
}