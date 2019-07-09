// CADEIA DE PROTÓTIPOS (prototype chain)

Object.prototype.attr0 = 'Z' // isso não é recomendável
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'P' }
const filho = { __proto__: pai, attr3: 'C' }

// Como podem ver, ira imprimir: Z, A, B, C.
// Isso porque filho herdou os atributos de pai e avo.
// E em "filho.attr3", podem ver que ele imprimiu "C"
// ao invés de "P", isso porque ja existia um atributo
// com o mesmo nome em seu nível, então ele imprimiu a
// variavel do seu nível invés de buscar um acima dele.
// Isso se chama "sombreamento de variaveis".
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        // super.status() vai chamar ou herdar o método status() 
        // do objeto pai, seria o mesmo que parent::metodo() do PHP
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelece uma relação de protótipos em ferrari e carro
Object.setPrototypeOf(ferrari, carro)
// Estabelece uma relação de protótipos em volvo e carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
 
volvo.acelerarMais(100)
console.log(volvo.status())
 
ferrari.acelerarMais(300)
console.log(ferrari.status())