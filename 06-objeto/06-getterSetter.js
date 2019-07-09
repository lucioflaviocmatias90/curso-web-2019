const sequencia = {
    // convenção de atributo privado, é uma variavel com a
    // intenção de ser acessada apenas interiormente pelo objeto.
    _valor: 1,

    // Getter
    get valor() {
        return this._valor++
    },

    // Setter
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)